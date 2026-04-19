"use client";

import type { HTMLAttributes, ReactNode } from "react";
import Container from "@/components/ui/Container";

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
} & HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className = "",
  containerClassName = "",
  size = "lg",
  ...props
}: Props) {
  const spacingMap = {
    sm: "py-4 md:py-6",
    md: "py-6 md:py-8",
    lg: "py-6 md:py-8",
    xl: "py-8 md:py-10",
  } as const;

  return (
    <section className={`${spacingMap[size]} ${className}`} {...props}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}