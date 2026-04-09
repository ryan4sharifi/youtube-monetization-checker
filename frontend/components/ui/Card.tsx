

"use client";

import type { ReactNode, HTMLAttributes } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  padded?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({
  children,
  className = "",
  elevated = true,
  padded = true,
  ...props
}: Props) {
  return (
    <div
      className={`w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] $${padded ? "p-4 md:p-5" : ""} ${elevated ? "shadow-[var(--shadow-soft)]" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}