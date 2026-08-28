import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { ProjectVisual } from "./project-visual";
import { TagPill } from "@/components/ui/tag-pill";
import { ACCENT_HOVER_BORDER_CLASS } from "@/lib/accent";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group border-border bg-surface/40 hover:bg-surface flex flex-col overflow-hidden rounded-2xl border p-4 transition-colors",
        ACCENT_HOVER_BORDER_CLASS[project.visual.accentColor],
      )}
    >
      <ProjectVisual visual={project.visual} priority={priority} />

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-foreground text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            className="text-foreground-muted group-hover:text-foreground mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>

        <p className="text-foreground-secondary mt-2 text-sm leading-relaxed">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <TagPill key={tech}>{tech}</TagPill>
          ))}
        </div>
      </div>
    </Link>
  );
}
