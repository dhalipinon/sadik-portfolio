import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Data and software projects — Power BI, Python and full-stack case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-accent font-mono text-xs font-semibold tracking-[0.2em] uppercase">Projects</p>
      <h1 className="font-display text-foreground mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Data and software, built end to end.
      </h1>
      <p className="text-foreground-secondary mt-4 max-w-2xl text-base leading-relaxed">
        Five projects spanning Power BI analysis, Python modelling, and full-stack development —
        each one a case study in the problem, the approach, and what actually came out of it.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
