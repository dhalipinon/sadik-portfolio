import { cn } from "@/lib/utils";

export function TagPill({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "border-border text-foreground-secondary rounded-full border px-3 py-1 font-mono text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}
