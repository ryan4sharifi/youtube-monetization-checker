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
      className={`w-full rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] backdrop-blur transition duration-200 ${padded ? "p-4 md:p-5" : ""} ${elevated ? "shadow-[0_18px_50px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:border-[var(--border-strong)]" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}