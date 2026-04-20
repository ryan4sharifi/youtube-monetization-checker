

import { ReactNode } from "react";

interface GuideSectionProps {
  title?: string;
  children: ReactNode;
}

export default function GuideSection({ title, children }: GuideSectionProps) {
  return (
    <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
      {title && (
        <h2
          className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {title}
        </h2>
      )}

      <div className={title ? "mt-3 space-y-3" : "space-y-3"}>
        {children}
      </div>
    </div>
  );
}