

"use client";

import SearchBox from "@/components/home/SearchBox";

type HeroSectionProps = {
  onSearch: (query: string) => Promise<void> | void;
  loading?: boolean;
  modeLabel: string;
  onToggleTheme: () => void;
};

export default function HeroSection({
  onSearch,
  loading = false,
  modeLabel,
  onToggleTheme,
}: HeroSectionProps) {
  return (
    <section className="w-full max-w-3xl rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 shadow-[var(--shadow-soft)] backdrop-blur md:p-10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)] md:text-sm">
            Premium YouTube Tool
          </p>
          <h1
            className="text-3xl font-extrabold tracking-[-0.04em] md:text-5xl"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            YouTube Monetization Checker
          </h1>
          <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
            Estimate whether a YouTube channel is monetized using public signals
            like subscribers, total views, and upload history.
          </p>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--border-strong)]"
        >
          {modeLabel}
        </button>
      </div>

      <SearchBox onSearch={onSearch} loading={loading} />

      <p className="mt-4 text-xs text-[var(--foreground-muted)] md:text-sm">
        Paste a YouTube handle like <span className="font-medium">@mrbeast</span>
        {" "}or a full channel URL.
      </p>
    </section>
  );
}