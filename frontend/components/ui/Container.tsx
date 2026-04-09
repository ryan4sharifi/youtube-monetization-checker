

"use client";

import type { ReactNode, HTMLAttributes } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
} & HTMLAttributes<HTMLDivElement>;

function getMaxWidth(size: Props["size"]) {
  switch (size) {
    case "sm":
      return "max-w-2xl";
    case "md":
      return "max-w-3xl";
    case "lg":
      return "max-w-5xl";
    case "xl":
      return "max-w-7xl";
    default:
      return "max-w-5xl";
  }
}

export default function Container({
  children,
  className = "",
  size = "lg",
  ...props
}: Props) {
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${getMaxWidth(size)} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}