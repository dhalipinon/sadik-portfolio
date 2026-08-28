import type { Project } from "../types";

export const screenTimeImpact: Project = {
  slug: "screen-time-impact",
  title: "Screen Time Impact on Adolescent Wellbeing",
  tagline: "Quantifying how screen time actually relates to adolescent mental health, past the headlines.",
  featured: true,
  order: 2,
  role: "Solo analyst — EDA, regression modelling",
  timeframe: "2026",
  techStack: ["Python", "Pandas", "Seaborn", "Matplotlib", "Linear Regression"],
  problem:
    "Screen time and adolescent wellbeing is a topic full of strong opinions and thin evidence — the question was whether a real relationship shows up once the data is actually modelled, not just eyeballed.",
  approach: [
    "Cleaned and pre-processed a dataset of 98,000+ adolescent records",
    "Ran exploratory data analysis and visualisation in Seaborn and Matplotlib to surface patterns before modelling",
    "Fit a linear regression model relating screen time to mental-health indicators, evaluated with R² and MSE",
    "Translated the statistical output into plain-language findings a non-technical reader could act on",
  ],
  impact: [
    {
      value: "98,000+",
      label: "Adolescent records cleaned and analysed",
    },
    {
      value: "R² / MSE",
      label: "Regression model evaluated on both fit and error",
    },
  ],
  links: [],
  visual: {
    kind: "generative",
    motif: "flow-lines",
    accentColor: "orange",
  },
};
