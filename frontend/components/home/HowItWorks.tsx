

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
    <section className="w-full">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            How it works
          </p>

          <h2
            className="mt-3 text-3xl font-bold tracking-[-0.04em] md:text-4xl"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Simple, fast, and data-driven
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
            Get a monetization estimate in seconds using structured public data — no login, no friction.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100">
                <div className="absolute left-[-10%] top-[-10%] h-28 w-28 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_10%,transparent)] blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--brand)]">
                  {item.step}
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
      </div>
    </section>
  );
}