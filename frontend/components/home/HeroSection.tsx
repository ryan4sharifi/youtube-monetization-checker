"use client";

import Image from "next/image";
import SearchBox from "@/components/home/SearchBox";


type FeaturedChannel = {
  title: string;
  handle: string | null;
  thumbnail_url: string | null;
  subscriber_count?: number | null;
};

type HeroSectionProps = {
  onSearch: (query: string) => Promise<void> | void;
  loading?: boolean;
  featuredChannels?: FeaturedChannel[];
};


export default function HeroSection({
  onSearch,
  loading = false,
  featuredChannels = [],
}: HeroSectionProps) {
  const marqueeChannels = featuredChannels.length > 0 ? featuredChannels : [];
  const scrollingChannels = [...marqueeChannels, ...marqueeChannels];
  return (
    <section className="relative w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-8 shadow-sm md:px-8 md:py-10">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
          YouTube Monetization Checker
        </div>

        <h1
          className="mx-auto max-w-3xl text-2xl font-semibold tracking-[-0.03em] md:text-3xl"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Instantly estimate YouTube monetization
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--foreground-muted)]">
          Analyze channels using real public signals like subscribers, views, and activity — in seconds.
        </p>

        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4 shadow-sm">
          <SearchBox onSearch={onSearch} loading={loading} />
        </div>

        {scrollingChannels.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              Trending channels
            </p>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:color-mix(in_srgb,var(--card)_96%,transparent)] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:color-mix(in_srgb,var(--card)_96%,transparent)] to-transparent" />

              <div className="hero-marquee flex w-max items-center gap-3">
                {scrollingChannels.map((channel, index) => (
                  <div
                    key={`${channel.handle || channel.title}-${index}`}
                    className="flex min-w-max items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 transition-colors hover:border-[var(--border-strong)]"
                  >
                    <div className="overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card-muted)]">
                      <Image
                        src={channel.thumbnail_url || "/placeholder-avatar.png"}
                        alt={channel.title}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    </div>

                    <div className="pr-1">
                      <p className="text-sm font-medium leading-none text-[var(--foreground)]">
                        {channel.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-none text-[var(--foreground-muted)]">
                        {channel.handle || ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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