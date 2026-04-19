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
      return "bg-[var(--brand)] text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] hover:bg-[var(--brand-hover)]";
    case "secondary":
      return "bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] text-[var(--foreground)] border border-[var(--border)] shadow-[0_6px_18px_rgba(15,23,42,0.05)] hover:border-[var(--border-strong)]";
    case "ghost":
      return "bg-transparent text-[var(--foreground)] hover:bg-[color:color-mix(in_srgb,var(--background-elevated)_90%,transparent)]";
    case "danger":
      return "bg-[var(--danger)] text-white shadow-[0_10px_24px_rgba(220,38,38,0.25)] hover:opacity-90";
    default:
      return "";
  }
}

function getSizeStyles(size: Size) {
  switch (size) {
    case "sm":
      return "px-4 py-2 text-xs rounded-xl";
    case "lg":
      return "px-6 py-4 text-base rounded-2xl";
    case "md":
    default:
      return "px-5 py-3 text-sm rounded-2xl";
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
      className={`inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-[-0.01em] transition-all duration-200
        active:scale-[0.97]
        hover:-translate-y-0.5
        disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0
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