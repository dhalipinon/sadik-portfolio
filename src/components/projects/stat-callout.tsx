"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, useInView, useReducedMotion } from "motion/react";
import type { AccentColor } from "@/content/types";
import { ACCENT_BG_CLASS } from "@/lib/accent";
import { cn } from "@/lib/utils";

interface StatCalloutProps {
  value: string;
  label: string;
  accentColor: AccentColor;
  href?: string;
}

interface ParsedValue {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
}

function parseValue(raw: string): ParsedValue | null {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const number = Number.parseFloat(numStr.replace(/,/g, ""));
  if (Number.isNaN(number)) return null;

  return { prefix, number, suffix, decimals };
}

export function StatCallout({ value, label, accentColor, href }: StatCalloutProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const parsed = parseValue(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (shouldReduceMotion || !parsed || !isInView) {
      node.textContent = value;
      return;
    }

    const controls = animate(0, parsed.number, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        // tabular-nums below keeps digit width fixed while this counts up —
        // without it the layout jitters as the digit count changes mid-animation.
        const formatted =
          parsed.decimals > 0 ? latest.toFixed(parsed.decimals) : Math.round(latest).toLocaleString("en-AU");
        node.textContent = `${parsed.prefix}${formatted}${parsed.suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, parsed, value]);

  const content = (
    <>
      <span
        ref={ref}
        className="font-mono text-4xl font-semibold tabular-nums text-foreground sm:text-5xl"
      >
        {value}
      </span>
      <span
        className={cn(
          "mt-3 block h-1 w-8 rounded-full transition-all duration-300 group-hover:w-12",
          ACCENT_BG_CLASS[accentColor],
        )}
        aria-hidden="true"
      />
      <span className="text-foreground-secondary mt-3 block max-w-64 text-sm leading-snug">{label}</span>
    </>
  );

  if (!href) {
    return <div className="group block">{content}</div>;
  }

  return (
    <Link href={href} className="group block">
      {content}
    </Link>
  );
}
