

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
  return (
    <section className={`py-10 md:py-14 ${className}`} {...props}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}