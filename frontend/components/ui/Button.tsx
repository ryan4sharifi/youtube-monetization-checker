"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-[var(--brand)] text-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:bg-[var(--brand-hover)]";
    case "secondary":
      return "bg-[var(--card-muted)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--border-strong)]";
    case "ghost":
      return "bg-transparent text-[var(--foreground)] hover:bg-[var(--card-muted)]";
    case "danger":
      return "bg-[var(--danger)] text-white hover:opacity-90";
    default:
      return "";
  }
}

function getSizeStyles(size: Size) {
  switch (size) {
    case "sm":
      return "px-4 py-2 text-xs";
    case "lg":
      return "px-6 py-4 text-base";
    case "md":
    default:
      return "px-5 py-3 text-sm";
  }
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  disabled,
  ...props
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-150
        active:scale-[0.98]
        hover:scale-[1.02]
        disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
        ${getVariantStyles(variant)}
        ${getSizeStyles(size)}
        ${className}`}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  );
}