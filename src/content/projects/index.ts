import type { Project, ProjectSlug } from "../types";
import { ntPopulationAnalysis } from "./nt-population-analysis";
import { dataJobsDashboards } from "./data-jobs-dashboards";
import { screenTimeImpact } from "./screen-time-impact";
import { poultryprox } from "./poultryprox";
import { easygames } from "./easygames";

export const projects: Project[] = [
  ntPopulationAnalysis,
  screenTimeImpact,
  poultryprox,
  dataJobsDashboards,
  easygames,
].sort((a, b) => a.order - b.order);

export const featuredProjects: Project[] = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs: ProjectSlug[] = projects.map((p) => p.slug);
