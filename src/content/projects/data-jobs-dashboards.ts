import type { Project } from "../types";

export const dataJobsDashboards: Project = {
  slug: "data-jobs-dashboards",
  title: "Data Jobs Dashboards",
  tagline: "Turning a year of data-science job postings into a market read, not a spreadsheet.",
  featured: false,
  order: 4,
  role: "Solo analyst — data modelling, DAX",
  timeframe: "2026",
  techStack: ["Power BI", "Power Query (M)", "DAX", "Star Schema"],
  problem:
    "A year of monthly data-science job-postings exports is only useful once it's stitched into one queryable market view — otherwise every question about hiring trends means reopening a dozen separate files.",
  approach: [
    "Appended and cleaned monthly 2024 source files into a single fact table in Power Query",
    "Modelled the dataset as a star schema for fast, flexible slicing across role, location and skill dimensions",
    "Wrote DAX measures with what-if parameters so viewers can flex assumptions directly in the report",
    "Built two interactive dashboards, including a drill-through market overview, for exploring the results",
  ],
  impact: [
    {
      value: "2024",
      label: "Full year of data-science job-postings data unified from monthly exports",
    },
    {
      value: "2",
      label: "Interactive dashboards, including a drill-through market overview",
    },
  ],
  links: [],
  visual: {
    kind: "generative",
    motif: "bar-abstract",
    accentColor: "yellow",
  },
};
