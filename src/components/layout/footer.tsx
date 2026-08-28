import Link from "next/link";
import { Mail, Link2, Phone } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-foreground text-base font-semibold">{site.name}</p>
            <p className="text-foreground-muted mt-1 text-sm">{site.location}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="text-foreground-secondary hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="text-foreground-secondary hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <Link2 className="size-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-border mt-8 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-foreground-muted text-xs">
            © {new Date().getFullYear()} {site.name}. References available on request.
          </p>
          <Link
            href="/#main-content"
            className="text-foreground-muted hover:text-foreground text-xs transition-colors"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
