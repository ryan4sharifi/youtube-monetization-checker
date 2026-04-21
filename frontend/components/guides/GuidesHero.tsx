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
    <div className="space-y-5 md:space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--foreground-muted)] backdrop-blur">
        {icon ? <span className="h-3.5 w-3.5">{icon}</span> : null}
        {eyebrow}
      </div>

      <h1
        className="max-w-4xl text-[32px] md:text-[40px] xl:text-[48px] font-semibold tracking-[-0.04em] text-[var(--foreground)]"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h1>

      <p className="max-w-2xl text-[15px] leading-[1.65] text-[var(--foreground-muted)] md:text-[16px]">
        {description}
      </p>
    </div>
  );
}