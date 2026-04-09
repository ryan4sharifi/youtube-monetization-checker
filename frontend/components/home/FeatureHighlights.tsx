

"use client";

const items = [
  {
    title: "Fast public-signal analysis",
    description:
      "Estimate channel monetization likelihood in seconds using visible signals like subscribers, views, and upload activity.",
    icon: "⚡",
  },
  {
    title: "Handles and full URLs supported",
    description:
      "Paste a channel handle, username, or full YouTube channel URL and let the tool normalize it automatically.",
    icon: "🔗",
  },
  {
    title: "Clean shareable result pages",
    description:
      "Every check can become a dedicated, SEO-friendly result page that is easy to revisit, share, and index.",
    icon: "📈",
  },
  {
    title: "Built for creators and researchers",
    description:
      "Use it for channel research, creator analysis, niche validation, competitor scanning, or quick monetization estimates.",
    icon: "🧠",
  },
] as const;

export default function FeatureHighlights() {
  return (
    <section className="w-full">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] md:p-6"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100">
              <div className="absolute right-[-8%] top-[-10%] h-24 w-24 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_10%,transparent)] blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] text-xl shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <span aria-hidden="true">{item.icon}</span>
              </div>

              <h3
                className="text-lg font-bold tracking-[-0.02em] text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)] md:text-[15px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}