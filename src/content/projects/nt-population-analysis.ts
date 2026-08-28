import type { Project } from "../types";

export const ntPopulationAnalysis: Project = {
  slug: "nt-population-analysis",
  title: "NT Population Analysis",
  tagline:
    "Greater Darwin is absorbing 80% of the Territory's growth — and ageing fastest while it does.",
  featured: true,
  order: 1,
  role: "Solo analyst — data modelling, DAX, report design",
  timeframe: "2026",
  techStack: ["Power BI", "DAX", "Power Query (M)", "Data Modelling"],
  problem:
    "The Northern Territory's population data is public, but nobody had turned 40 years of it into a single answer to the question service planners actually need: which regions are growing, which are ageing, and are those the same places?",
  approach: [
    "Modelled 17,280 records across six NT service regions spanning 1986–2025, sourced from the NT Government Open Data Portal",
    "Built 12 DAX measures in a dedicated measures table and derived custom sort and life-stage columns in Power Query",
    "Designed a single-page report for decision makers — every chart titled with a finding, not a field — using deliberate visual choices to foreground Greater Darwin against the other five regions",
    "Validated record counts and totals against published figures, flagged preliminary vs. revised data vintages, and confirmed the trends held across both reported population cohorts before publishing",
  ],
  impact: [
    {
      value: "80%",
      label: "Share of the Territory's working-age growth since 2011 absorbed by Greater Darwin",
    },
    {
      value: "17,280",
      label: "Records analysed across six NT service regions, 1986–2025",
    },
    {
      value: "12",
      label: "DAX measures built in a dedicated measures table",
    },
  ],
  links: [
    {
      label: "View on GitHub",
      href: "https://github.com/dhalipinon/nt-population-analysis",
      external: true,
    },
    {
      label: "Download full report (PDF)",
      href: "/documents/nt-population-analysis-report.pdf",
      download: true,
    },
  ],
  visual: {
    kind: "real-image",
    src: "/images/projects/nt-population-analysis/dashboard.png",
    alt: "Power BI report titled 'Greater Darwin is carrying the Territory's growth and ageing fastest while doing it', showing NT population by service region from 1986 to 2025 with Greater Darwin highlighted against five comparison regions across four KPI tiles and three charts.",
    width: 1788,
    height: 1032,
    accentColor: "blue",
  },
};
