"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Mail, Link2, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { contactSchema } from "@/lib/contact-schema";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [renderedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
      renderedAt,
    };

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string") errors[key] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setFormError(data.error ?? "Something went wrong — please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setFormError("Something went wrong — please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about a role."
        description="Whether it's the NTG Graduate Program or another ICT or data role — I'd rather hear from you directly than through a form that goes nowhere."
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <Reveal>
          {status === "success" ? (
            <div className="border-border bg-surface/40 flex items-start gap-3 rounded-xl border p-6">
              <CheckCircle2 className="text-accent-aqua mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-foreground font-medium">Message sent.</p>
                <p className="text-foreground-secondary mt-1 text-sm">
                  Thanks for reaching out — I&apos;ll reply from {site.email}.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="text-foreground-secondary text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="border-border bg-surface text-foreground focus-visible:outline-accent mt-2 w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name ? (
                  <p id="name-error" className="text-accent-orange mt-1.5 text-xs">
                    {fieldErrors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="text-foreground-secondary text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="border-border bg-surface text-foreground focus-visible:outline-accent mt-2 w-full rounded-lg border px-4 py-2.5 text-sm outline-none"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email ? (
                  <p id="email-error" className="text-accent-orange mt-1.5 text-xs">
                    {fieldErrors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="text-foreground-secondary text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="border-border bg-surface text-foreground focus-visible:outline-accent mt-2 w-full resize-y rounded-lg border px-4 py-2.5 text-sm outline-none"
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                />
                {fieldErrors.message ? (
                  <p id="message-error" className="text-accent-orange mt-1.5 text-xs">
                    {fieldErrors.message}
                  </p>
                ) : null}
              </div>

              {/*
                Honeypot — hidden from sighted and screen-reader users alike,
                never display:none. Clipped to 1x1px with overflow hidden
                (rather than a -9999px offset) so it can't introduce page-level
                horizontal scroll from an unclipped absolute-position ancestor.
              */}
              <div className="absolute h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {formError ? (
                <div className="text-accent-orange flex items-start gap-2 text-sm">
                  <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {formError}
                </div>
              ) : null}

              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.12}>
          <div className="border-border bg-surface/40 flex flex-col gap-4 rounded-xl border p-6">
            <p className="text-foreground-secondary text-sm">Prefer to reach out directly?</p>
            <a
              href={`mailto:${site.email}`}
              className="text-foreground hover:text-accent flex items-center gap-2 text-sm transition-colors"
            >
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="text-foreground hover:text-accent flex items-center gap-2 text-sm transition-colors"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent flex items-center gap-2 text-sm transition-colors"
            >
              <Link2 className="size-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
