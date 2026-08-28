export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Formats content-layer date strings for display. Accepts "present",
 * "YYYY", or "YYYY-MM" — the three shapes used across src/content/*.
 */
export function formatMonthYear(value: string): string {
  if (value === "present") return "Present";

  const [year, month] = value.split("-");
  if (!month) return year;

  const monthIndex = Number.parseInt(month, 10) - 1;
  const label = MONTH_LABELS[monthIndex];
  return label ? `${label} ${year}` : year;
}
