"use client";

const steps = [
  {
    step: "01",
    title: "Paste a channel",
    description:
      "Enter a YouTube handle, username, or full channel URL. The tool automatically normalizes your input.",
  },
  {
    step: "02",
    title: "We analyze public signals",
    description:
      "We evaluate subscribers, total views, upload history, and channel activity to estimate monetization likelihood.",
  },
  {
    step: "03",
    title: "Get a clear result",
    description:
      "Receive a clean, shareable page with a monetization estimate, confidence score, and supporting signals.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="w-full py-8 md:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
            How it works
          </p>

          <h2
            className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Simple, fast, and data-driven
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-sm leading-6 text-[var(--foreground-muted)]">
            Get a monetization estimate in seconds using structured public data — no login, no friction.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm transition-colors hover:border-[var(--border-strong)]"
            >
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--foreground-muted)]">
                  {item.step}
                </div>

                <h3
                  className="text-base font-semibold text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}