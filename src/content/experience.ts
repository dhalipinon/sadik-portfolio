import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "ict-placement-cdu",
    organisation: "Charles Darwin University — Digital & Technology Services",
    role: "ICT Placement (AWEsome Program)",
    location: "Darwin, NT",
    startDate: "2026-06",
    endDate: "2026-07",
    summary:
      "Competitively selected 50-hour placement rotating across four DTS functions: IT Kiosk, Client Services, Cyber Security, and Data & Development.",
    highlights: [
      "Resolved walk-up staff and student issues at first point of contact — account access, identity verification and ICT equipment provision — and observed Tier 1 and Tier 2 incident resolution within the HALO ticketing system",
      "Supported ICT asset operations including builds and sanitisation using Intune and CDU toolsets, on-site remediation, and audio-visual support for teaching spaces",
      "Shadowed the Data & Development team on the Callista student-system project and Cyber Security analysts triaging daily alerts across the Microsoft Defender suite",
    ],
    tags: ["Service Desk", "Cyber Security", "Data & Development"],
  },
  {
    id: "backend-dev-intern-digitechlab",
    organisation: "Digi Tech Lab",
    role: "Backend Developer Intern",
    location: "Remote",
    startDate: "2026-06",
    endDate: "present",
    summary:
      "Delivering server-side features for an e-learning platform in Node.js — RESTful APIs and data models supporting interactive learning functions.",
    highlights: [
      "Works through Git branching, code review and iterative delivery against changing requirements in a distributed team",
    ],
    tags: ["Node.js", "REST APIs", "Backend"],
  },
  {
    id: "woolworths-supervisor",
    organisation: "Woolworths",
    role: "Fresh Convenience Supervisor",
    location: "Darwin City, NT",
    startDate: "2023",
    endDate: "present",
    summary:
      "Supervises daily operations of a fresh department in one of Darwin's highest-traffic stores, coordinating staff and making rapid stock, safety and service decisions through peak trading periods.",
    highlights: [
      "Built cross-functional adaptability across four-plus departments — grocery, fresh, produce and front-end — while completing a Computer Science degree full-time",
      "Communicates constantly across customers, team members and management — a stakeholder-communication skill set that carries directly into analyst work",
    ],
    tags: ["Leadership", "Stakeholder Communication"],
  },
];
