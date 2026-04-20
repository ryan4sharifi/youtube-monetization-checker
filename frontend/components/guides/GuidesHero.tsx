

import { ReactNode } from "react";

interface GuidesHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: ReactNode;
}

export default function GuidesHero({
  title,
  description,
  eyebrow = "Guides",
  icon,
}: GuidesHeroProps) {
  return (
    <div className="space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--foreground-muted)] backdrop-blur">
        {icon ? <span className="h-3.5 w-3.5">{icon}</span> : null}
        {eyebrow}
      </div>

      <h1
        className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl xl:text-5xl"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h1>

      <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-base">
        {description}
      </p>
    </div>
  );
}