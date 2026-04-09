

"use client";

import type { InputHTMLAttributes } from "react";

type Props = {
  className?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", error = false, ...props }: Props) {
  return (
    <input
      className={`w-full rounded-xl border px-4 py-3 text-sm bg-[var(--background-elevated)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none transition 
        ${error ? "border-[var(--danger)]" : "border-[var(--border)] focus:border-[var(--brand)]"}
        ${className}`}
      {...props}
    />
  );
}