import type { Project } from "../types";

export const easygames: Project = {
  slug: "easygames",
  title: "EasyGames",
  tagline: "A multi-role retail platform where the schema does the heavy lifting.",
  featured: false,
  order: 5,
  role: "Developer — full stack",
  timeframe: "2026",
  techStack: ["ASP.NET Core 8 MVC", "Entity Framework Core", "C#"],
  problem:
    "A small retailer's inventory, checkout and order tracking usually live in three disconnected tools — the goal was one platform that handled all three without blurring the different things a cashier, a stock manager and an admin each need to see.",
  approach: [
    "Designed a relational schema covering inventory, orders and three distinct user roles",
    "Managed schema evolution through EF Core migrations rather than manual database edits",
    "Built POS checkout with live margin calculation and low-stock warnings",
    "Implemented tiered order tracking so status means something different — and shows something different — for each role",
  ],
  impact: [
    {
      value: "3",
      label: "Distinct user roles across inventory, POS and order tracking",
    },
  ],
  links: [],
  visual: {
    kind: "generative",
    motif: "network-nodes",
    accentColor: "magenta",
  },
};
