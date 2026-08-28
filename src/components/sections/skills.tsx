import { CheckCircle2, Clock } from "lucide-react";
import { skillGroups } from "@/content/skills";
import { professionalDevelopment } from "@/content/professional-development";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagPill } from "@/components/ui/tag-pill";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <SectionHeading eyebrow="Skills" title="The toolkit, grouped the way I actually use it." />

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.06}>
            <div className="border-border bg-surface/40 rounded-xl border p-6">
              <h3 className="font-display text-foreground text-base font-semibold">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TagPill key={skill}>{skill}</TagPill>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="border-border mt-12 border-t pt-10">
          <h3 className="font-display text-foreground text-base font-semibold">
            Professional development
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {professionalDevelopment.map((item) => (
              <div key={item.id} className="flex gap-3">
                {item.status === "completed" ? (
                  <CheckCircle2 className="text-accent-aqua mt-0.5 size-4 shrink-0" aria-hidden="true" />
                ) : (
                  <Clock className="text-accent-yellow mt-0.5 size-4 shrink-0" aria-hidden="true" />
                )}
                <div>
                  <p className="text-foreground text-sm font-medium">{item.title}</p>
                  <p className="text-foreground-muted text-xs">
                    {item.provider} · {item.year}
                  </p>
                  <p className="text-foreground-secondary mt-2 text-sm leading-relaxed">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
