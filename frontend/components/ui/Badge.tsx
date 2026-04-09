

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
        backgroundColor: "var(--success-soft)",
        color: "var(--success)",
      };
    case "warning":
      return {
        backgroundColor: "var(--warning-soft)",
        color: "var(--warning)",
      };
    case "danger":
      return {
        backgroundColor: "var(--danger-soft)",
        color: "var(--danger)",
      };
    case "brand":
      return {
        backgroundColor: "color-mix(in srgb, var(--brand) 12%, transparent)",
        color: "var(--brand)",
      };
    case "default":
    default:
      return {
        backgroundColor: "var(--card-muted)",
        color: "var(--foreground)",
      };
  }
}

export default function Badge({ children, variant = "default", className = "" }: Props) {
  const styles = getBadgeStyles(variant);

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`}
      style={styles}
    >
      {children}
    </span>
  );
}