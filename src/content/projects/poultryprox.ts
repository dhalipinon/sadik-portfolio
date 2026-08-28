import type { Project } from "../types";

export const poultryprox: Project = {
  slug: "poultryprox",
  title: "PoultryProX",
  tagline: "A live production storefront, hardened without a single minute of downtime for real customers.",
  featured: true,
  order: 3,
  role: "Developer — security remediation",
  timeframe: "2026",
  techStack: ["React 18", "TypeScript", "Supabase", "Vercel"],
  problem:
    "PoultryProX was already live with real customers when a security review turned up gaps — the constraint wasn't just fixing them, it was fixing them without breaking or interrupting a store people were actively using.",
  approach: [
    "Ran a vulnerability assessment across the live production application",
    "Configured Supabase Row-Level Security policies to enforce data access at the database layer, not just the UI",
    "Hardened edge functions against the issues the assessment surfaced",
    "Shipped every fix straight to production with zero disruption to real users",
  ],
  impact: [
    {
      value: "0",
      label: "Minutes of downtime for real customers during remediation",
    },
    {
      value: "Live",
      label: "Production e-commerce platform, not a demo",
    },
  ],
  links: [],
  visual: {
    kind: "generative",
    motif: "terminal-glow",
    accentColor: "aqua",
  },
};
