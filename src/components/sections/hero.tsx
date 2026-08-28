import { ArrowRight, Download } from "lucide-react";
import { site } from "@/content/site";
import { ntPopulationAnalysis } from "@/content/projects/nt-population-analysis";
import { screenTimeImpact } from "@/content/projects/screen-time-impact";
import { StatCallout } from "@/components/projects/stat-callout";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const heroStats = [
  {
    ...ntPopulationAnalysis.impact[0],
    accentColor: ntPopulationAnalysis.visual.accentColor,
    href: `/projects/${ntPopulationAnalysis.slug}`,
  },
  {
    ...ntPopulationAnalysis.impact[1],
    accentColor: ntPopulationAnalysis.visual.accentColor,
    href: `/projects/${ntPopulationAnalysis.slug}`,
  },
  {
    ...screenTimeImpact.impact[0],
    accentColor: screenTimeImpact.visual.accentColor,
    href: `/projects/${screenTimeImpact.slug}`,
  },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Reveal>
        <p className="text-foreground-secondary font-mono text-sm">
          Hi, I&apos;m {site.name} — {site.location}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 className="font-display text-foreground mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          I turn messy public data into decisions people actually act on.
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="text-foreground-secondary mt-6 max-w-2xl text-lg leading-relaxed">
          Computer Science graduate with hands-on ICT experience across service desk, cyber
          security and development. Building a career in the Northern Territory public sector.
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/projects">
            View my projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button href={site.resumeUrl} variant="secondary" download>
            <Download className="size-4" aria-hidden="true" />
            Download résumé
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.32}>
        <div className="border-border mt-16 grid grid-cols-1 gap-8 border-t pt-10 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <StatCallout
              key={stat.href + stat.value}
              value={stat.value}
              label={stat.label}
              accentColor={stat.accentColor}
              href={stat.href}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
