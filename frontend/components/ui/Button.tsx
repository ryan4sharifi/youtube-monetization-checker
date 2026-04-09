

"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function getStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)]";
    case "secondary":
      return "bg-[var(--card-muted)] text-[var(--foreground)] hover:border-[var(--border-strong)] border border-[var(--border)]";
    case "ghost":
      return "bg-transparent text-[var(--foreground)] hover:bg-[var(--card-muted)]";
    case "danger":
      return "bg-[var(--danger)] text-white hover:opacity-90";
    default:
      return "";
  }
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed ${getStyles(
        variant
      )} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}