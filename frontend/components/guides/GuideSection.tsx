import { ReactNode } from "react";

interface GuideSectionProps {
  title?: string;
  children: ReactNode;
}

export default function GuideSection({ title, children }: GuideSectionProps) {
  return (
    <div className="group rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 md:p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[color:color-mix(in_srgb,var(--card)_96%,white)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
      {title && (
        <h2
          className="text-[20px] md:text-[22px] font-semibold tracking-[-0.035em] text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {title}
        </h2>
      )}

      <div className={title ? "mt-4 space-y-3.5 md:space-y-4" : "space-y-3.5 md:space-y-4"}>
        {children}
      </div>
    </div>
  );
}