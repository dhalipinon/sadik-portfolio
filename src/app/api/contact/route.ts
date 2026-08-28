import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";
import { getResendClient } from "@/lib/resend";

const MIN_FILL_TIME_MS = 3000;

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const { name, email, message, company, renderedAt } = parsed.data;

  // Honeypot / fill-speed checks: a bot gets a fake success so it never
  // learns it was caught. Never send an email for these.
  const isHoneypotFilled = Boolean(company);
  const submittedTooFast = Date.now() - renderedAt < MIN_FILL_TIME_MS;
  if (isHoneypotFilled || submittedTooFast) {
    return NextResponse.json({ ok: true });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages sent recently — please try again shortly." },
      { status: 429 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!toEmail || !fromEmail) {
    console.error("Contact form: CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set");
    return NextResponse.json(
      { ok: false, error: "The contact form isn't configured yet — please email directly instead." },
      { status: 500 },
    );
  }

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact form: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Couldn't send that — please try emailing directly instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Couldn't send that — please try emailing directly instead." },
      { status: 500 },
    );
  }
}
