import { ReactNode } from "react";

interface GuideHeroProps {
  eyebrow?: string; // small label (e.g., "YouTube Earnings Guide")
  icon?: ReactNode; // optional lucide icon
  title: string;
  description: string;
}

export default function GuideHero({
  eyebrow,
  icon,
  title,
  description,
}: GuideHeroProps) {
  return (
    <div className="space-y-4 md:space-y-5">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_88%,transparent)] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--foreground-muted)] backdrop-blur">
          {icon ? (
            <span className="flex h-4 w-4 items-center justify-center text-[var(--foreground-muted)]">
              {icon}
            </span>
          ) : null}
          <span className="leading-none">{eyebrow}</span>
        </div>
      )}

      <h1
        className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl md:text-5xl xl:text-6xl"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h1>

      <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[16px] md:leading-8">
        {description}
      </p>
    </div>
  );
}