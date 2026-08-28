export type ProjectSlug =
  | "nt-population-analysis"
  | "data-jobs-dashboards"
  | "screen-time-impact"
  | "poultryprox"
  | "easygames";

// Fixed-order categorical palette slots (validated for CVD-safe adjacent
// pairing against the site's dark surface — see the `dataviz` skill).
// Assign in this order across projects; never reassign per aesthetic whim.
export type AccentColor = "blue" | "orange" | "aqua" | "yellow" | "magenta";

export interface ProjectStat {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export type ProjectMotif =
  | "data-grid"
  | "flow-lines"
  | "bar-abstract"
  | "network-nodes"
  | "terminal-glow";

export interface ProjectVisual {
  kind: "real-image" | "generative";
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  motif?: ProjectMotif;
  accentColor: AccentColor;
}

export interface Project {
  slug: ProjectSlug;
  title: string;
  tagline: string;
  featured: boolean;
  order: number;
  role: string;
  timeframe: string;
  techStack: string[];
  problem: string;
  approach: string[];
  impact: ProjectStat[];
  links: ProjectLink[];
  visual: ProjectVisual;
}

export interface ExperienceEntry {
  id: string;
  organisation: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "present";
  summary: string;
  highlights: string[];
  tags?: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface ProfessionalDevelopmentEntry {
  id: string;
  title: string;
  provider: string;
  status: "completed" | "in-progress";
  year: string;
  summary: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  resumeUrl: string;
  bio: string;
  workRights: string;
  profileImage?: { src: string; alt: string };
}
