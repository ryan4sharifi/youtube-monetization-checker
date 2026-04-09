"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

 type Props = {
  className?: string;
  error?: boolean;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  error = false,
  icon,
  ...props
}: Props) {
  return (
    <div className="relative w-full">
      <input
        className={`w-full rounded-2xl border px-5 py-4 text-sm md:text-base
        bg-[var(--background-elevated)] text-[var(--foreground)]
        placeholder:text-[var(--foreground-muted)]
        shadow-[0_2px_8px_rgba(15,23,42,0.04)]
        transition focus:outline-none
        ${
          error
            ? "border-[var(--danger)] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
            : "border-[var(--border)] focus:border-[var(--brand)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--brand)_12%,transparent)]"
        }
        ${icon ? "pr-12" : ""}
        ${className}`}
        {...props}
      />

      {icon && (
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]">
          {icon}
        </div>
      )}
    </div>
  );
}