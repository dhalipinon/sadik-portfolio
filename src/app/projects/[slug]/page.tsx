import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink, FileDown } from "lucide-react";
import { getProjectBySlug, projectSlugs, projects } from "@/content/projects";
import { ProjectVisual } from "@/components/projects/project-visual";
import { StatCallout } from "@/components/projects/stat-callout";
import { TagPill } from "@/components/ui/tag-pill";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
    },
  };
}

const LINK_ICONS: Record<string, typeof Code2> = {
  "View on GitHub": Code2,
  "Download full report (PDF)": FileDown,
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextProject = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="text-foreground-secondary hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-6">
        <p className="text-foreground-muted font-mono text-xs">
          {project.role} · {project.timeframe}
        </p>
        <h1 className="font-display text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-foreground-secondary mt-4 max-w-2xl text-lg leading-relaxed">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TagPill key={tech}>{tech}</TagPill>
          ))}
        </div>

        {project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const Icon = LINK_ICONS[link.label] ?? ExternalLink;
              return (
                <Button
                  key={link.href}
                  href={link.href}
                  variant="secondary"
                  external={link.external}
                  download={link.download}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {link.label}
                </Button>
              );
            })}
          </div>
        ) : null}
      </header>

      <div className="mt-10">
        <ProjectVisual visual={project.visual} priority />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-display text-foreground text-xl font-semibold">The problem</h2>
          <p className="text-foreground-secondary mt-4 text-base leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <h2 className="font-display text-foreground text-xl font-semibold">The approach</h2>
          <ul className="mt-4 space-y-3">
            {project.approach.map((step) => (
              <li key={step} className="text-foreground-secondary flex gap-3 text-base leading-relaxed">
                <span className="text-accent mt-1 shrink-0" aria-hidden="true">
                  →
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border mt-14 border-t pt-10">
        <h2 className="font-display text-foreground text-xl font-semibold">The impact</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {project.impact.map((stat) => (
            <StatCallout
              key={stat.label}
              value={stat.value}
              label={stat.label}
              accentColor={project.visual.accentColor}
            />
          ))}
        </div>
      </div>

      <div className="border-border mt-16 flex items-center justify-between border-t pt-8">
        <span className="text-foreground-muted text-sm">Next up</span>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="text-foreground hover:text-accent font-display text-base font-semibold transition-colors"
        >
          {nextProject.title} →
        </Link>
      </div>
    </div>
  );
}
