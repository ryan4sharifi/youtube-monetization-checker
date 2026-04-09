"use client";

import SearchBox from "@/components/home/SearchBox";

type HeroSectionProps = {
  onSearch: (query: string) => Promise<void> | void;
  loading?: boolean;
};

const featuredChannels = [
  { name: "MrBeast", handle: "@mrbeast", initials: "MB" },
  { name: "Dude Perfect", handle: "@dudeperfect", initials: "DP" },
  { name: "Mark Rober", handle: "@markrober", initials: "MR" },
  { name: "MKBHD", handle: "@mkbhd", initials: "MK" },
  { name: "Kurzgesagt", handle: "@kurzgesagt", initials: "KG" },
  { name: "Airrack", handle: "@airrack", initials: "AR" },
  { name: "Yes Theory", handle: "@YesTheory", initials: "YT" },
  { name: "Ryan Trahan", handle: "@ryantrahan", initials: "RT" },
  { name: "Nick DiGiovanni", handle: "@nickdigiovanni", initials: "ND" },
  { name: "Observe", handle: "@Observe", initials: "OB" },
] as const;

const scrollingChannels = [...featuredChannels, ...featuredChannels];

export default function HeroSection({
  onSearch,
  loading = false,
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--card)] px-6 py-10 shadow-[var(--shadow-soft)] md:px-10 md:py-14 xl:px-14 xl:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-22%] h-56 w-56 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_14%,transparent)] blur-3xl md:h-72 md:w-72" />
        <div className="absolute bottom-[-24%] right-[-10%] h-64 w-64 rounded-full bg-[color:color-mix(in_srgb,var(--brand)_10%,transparent)] blur-3xl md:h-80 md:w-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,color-mix(in_srgb,var(--background-elevated)_82%,transparent),transparent_42%,color-mix(in_srgb,var(--brand)_4%,transparent))]" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <div className="mb-4 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)] md:text-xs">
          YouTube Monetization Checker
        </div>

        <h1
          className="max-w-4xl text-4xl font-extrabold tracking-[-0.06em] text-[var(--foreground)] md:text-6xl md:leading-[1.01] xl:text-7xl"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Instantly estimate YouTube monetization
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--foreground-muted)] md:text-lg md:leading-8">
          Analyze channels using real public signals like subscribers, views, and activity — in seconds.
        </p>

        <div className="mt-8 rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_90%,transparent)] p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:p-5">
          <SearchBox onSearch={onSearch} loading={loading} />
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
            Trending channels
          </p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--card)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--card)] to-transparent" />

            <div className="hero-marquee flex w-max items-center gap-3">
              {scrollingChannels.map((channel, index) => (
                <div
                  key={`${channel.handle}-${index}`}
                  className="flex min-w-max items-center gap-3 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_88%,transparent)] px-3 py-2 shadow-[0_6px_18px_rgba(15,23,42,0.06)] backdrop-blur transition hover:scale-[1.02]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--card-muted)] text-xs font-semibold text-[var(--foreground)]">
                    {channel.initials}
                  </div>

                  <div className="pr-1">
                    <p className="text-sm font-semibold leading-none text-[var(--foreground)]">
                      {channel.name}
                    </p>
                    <p className="mt-1 text-xs leading-none text-[var(--foreground-muted)]">
                      {channel.handle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-marquee {
          animation: hero-marquee 28s linear infinite;
        }

        .hero-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes hero-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}