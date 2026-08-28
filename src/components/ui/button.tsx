import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors px-5 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const VARIANTS = {
  primary: "bg-accent text-background hover:opacity-90",
  secondary: "bg-surface text-foreground border border-border hover:border-foreground-muted",
  ghost: "text-foreground-secondary hover:text-foreground",
};

type Variant = keyof typeof VARIANTS;

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", children, className, ...rest } = props;
  const classes = cn(BASE, VARIANTS[variant], className);

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorProps } = rest as LinkButtonProps;
    const isInternalAnchor = href.startsWith("/") || href.startsWith("#");

    if (isInternalAnchor && !external) {
      return (
        <Link href={href} className={classes} {...(anchorProps as Record<string, unknown>)}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
