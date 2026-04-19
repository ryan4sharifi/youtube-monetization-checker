"use client";

import type { ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "brand";

type Props = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

function getBadgeStyles(variant: BadgeVariant) {
  switch (variant) {
    case "success":
      return {
        backgroundColor: "color-mix(in srgb, var(--success) 14%, transparent)",
        color: "var(--success)",
      };
    case "warning":
      return {
        backgroundColor: "color-mix(in srgb, var(--warning) 14%, transparent)",
        color: "var(--warning)",
      };
    case "danger":
      return {
        backgroundColor: "color-mix(in srgb, var(--danger) 14%, transparent)",
        color: "var(--danger)",
      };
    case "brand":
      return {
        backgroundColor: "color-mix(in srgb, var(--brand) 14%, transparent)",
        color: "var(--brand)",
      };
    case "default":
    default:
      return {
        backgroundColor: "color-mix(in srgb, var(--background-elevated) 92%, transparent)",
        color: "var(--foreground)",
      };
  }
}

export default function Badge({ children, variant = "default", className = "" }: Props) {
  const styles = getBadgeStyles(variant);

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase border border-[var(--border)] shadow-[0_4px_12px_rgba(15,23,42,0.05)] backdrop-blur ${className}`}
      style={styles}
    >
      {children}
    </span>
  );
}