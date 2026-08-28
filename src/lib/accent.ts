import type { AccentColor } from "@/content/types";

// Tailwind's scanner needs literal class strings in source — these lookup
// tables exist so dynamic accentColor values still resolve to real utility
// classes (a templated `bg-accent-${accent}` would silently produce nothing).
export const ACCENT_BG_CLASS: Record<AccentColor, string> = {
  blue: "bg-accent-blue",
  orange: "bg-accent-orange",
  aqua: "bg-accent-aqua",
  yellow: "bg-accent-yellow",
  magenta: "bg-accent-magenta",
};

export const ACCENT_TEXT_CLASS: Record<AccentColor, string> = {
  blue: "text-accent-blue",
  orange: "text-accent-orange",
  aqua: "text-accent-aqua",
  yellow: "text-accent-yellow",
  magenta: "text-accent-magenta",
};

export const ACCENT_BORDER_CLASS: Record<AccentColor, string> = {
  blue: "border-accent-blue",
  orange: "border-accent-orange",
  aqua: "border-accent-aqua",
  yellow: "border-accent-yellow",
  magenta: "border-accent-magenta",
};

// Pre-composed with the hover: variant modifier — a template literal like
// `hover:${ACCENT_BORDER_CLASS[x]}` would not be visible to Tailwind's static
// scanner, so the full class string has to appear literally somewhere.
export const ACCENT_HOVER_BORDER_CLASS: Record<AccentColor, string> = {
  blue: "hover:border-accent-blue",
  orange: "hover:border-accent-orange",
  aqua: "hover:border-accent-aqua",
  yellow: "hover:border-accent-yellow",
  magenta: "hover:border-accent-magenta",
};

// For SVG attributes (fill/stroke/stop-color) and inline styles, which take
// raw CSS values rather than class names.
export const ACCENT_VAR: Record<AccentColor, string> = {
  blue: "var(--accent-blue)",
  orange: "var(--accent-orange)",
  aqua: "var(--accent-aqua)",
  yellow: "var(--accent-yellow)",
  magenta: "var(--accent-magenta)",
};
