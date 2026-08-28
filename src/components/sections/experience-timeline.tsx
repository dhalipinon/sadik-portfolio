import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagPill } from "@/components/ui/tag-pill";
import { Reveal } from "@/components/ui/reveal";
import { formatMonthYear } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <SectionHeading eyebrow="Experience" title="Where the work has actually happened." />

      {/*
        <li> must be a direct child of <ol> for correct list semantics —
        Reveal (a motion.div) wraps the inner content instead of the <li>
        itself, so it can't land between them in the DOM.
      */}
      <ol className="mt-12 space-y-10">
        {experience.map((entry, i) => (
          <li key={entry.id} className="border-border relative border-l pl-8">
            <span className="bg-surface border-accent absolute top-1 -left-[9px] flex size-4 items-center justify-center rounded-full border-2">
              <Briefcase className="text-accent size-2.5" aria-hidden="true" />
            </span>

            <Reveal delay={i * 0.06}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-foreground text-lg font-semibold">{entry.role}</h3>
                <p className="text-foreground-muted font-mono text-xs">
                  {formatMonthYear(entry.startDate)} — {formatMonthYear(entry.endDate)}
                </p>
              </div>
              <p className="text-foreground-secondary mt-1 text-sm font-medium">
                {entry.organisation} · {entry.location}
              </p>
              <p className="text-foreground-secondary mt-3 text-sm leading-relaxed">{entry.summary}</p>

              <ul className="mt-3 space-y-2">
                {entry.highlights.map((h) => (
                  <li key={h} className="text-foreground-secondary flex gap-2 text-sm leading-relaxed">
                    <span className="text-foreground-muted" aria-hidden="true">
                      —
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {entry.tags ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              ) : null}
            </Reveal>
          </li>
        ))}

        {education.map((entry) => (
          <li key={entry.id} className="border-border relative border-l pl-8">
            <span className="bg-surface border-accent absolute top-1 -left-[9px] flex size-4 items-center justify-center rounded-full border-2">
              <GraduationCap className="text-accent size-2.5" aria-hidden="true" />
            </span>

            <Reveal>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-foreground text-lg font-semibold">{entry.credential}</h3>
                <p className="text-foreground-muted font-mono text-xs">
                  {formatMonthYear(entry.startDate)} — {formatMonthYear(entry.endDate)}
                </p>
              </div>
              <p className="text-foreground-secondary mt-1 text-sm font-medium">
                {entry.institution}
                {entry.gpa ? ` · GPA ${entry.gpa}` : ""}
              </p>

              {entry.honors ? (
                <ul className="mt-3 space-y-2">
                  {entry.honors.map((h) => (
                    <li key={h} className="text-foreground-secondary flex gap-2 text-sm leading-relaxed">
                      <span className="text-foreground-muted" aria-hidden="true">
                        —
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}

              {entry.coursework ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.coursework.map((c) => (
                    <TagPill key={c}>{c}</TagPill>
                  ))}
                </div>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
