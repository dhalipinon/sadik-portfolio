import { BadgeCheck } from "lucide-react";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

function initials(name: string): string {
  return name
    .split(" ")
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <SectionHeading eyebrow="About" title="Data-minded, ICT-broad, Darwin-committed." />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <Reveal>
          <p className="text-foreground-secondary text-base leading-relaxed sm:text-lg">{site.bio}</p>

          <div className="border-border bg-surface/40 mt-8 flex items-start gap-3 rounded-xl border p-4">
            <BadgeCheck className="text-accent-aqua mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p className="text-foreground-secondary text-sm leading-relaxed">{site.workRights}</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="border-border bg-surface flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border lg:w-80">
            <span className="font-display text-accent text-6xl font-semibold" aria-hidden="true">
              {initials(site.name)}
            </span>
            <span className="sr-only">{site.name}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
