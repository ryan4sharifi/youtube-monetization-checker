"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import SearchBox from "@/components/home/SearchBox";
import { supabase } from "@/services/supabaseClient";
import SearchLimitModal from "@/components/ui/SearchLimitModal";


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
  const { user } = useAuth();
  const [showLimit, setShowLimit] = useState(false);
  const scrollingChannels = useMemo(() => {
    const base = featuredChannels?.length ? featuredChannels : [];
    return base.length ? [...base, ...base] : [];
  }, [featuredChannels]);

  const handleSearch = async (query: string) => {
    const count = Number(localStorage.getItem("search_count") || 0);

    if (!user && count >= 3) {
      setShowLimit(true);
      return;
    }

    if (!user) {
      localStorage.setItem("search_count", String(count + 1));
    }

    await onSearch(query);
  };

  return (
    <div className="w-full px-6 md:px-10">
      <section className="relative mx-auto w-full max-w-6xl rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] px-6 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:px-10 md:py-9">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
          YouTube Monetization Checker
        </div>

        <h1
          className="mx-auto max-w-3xl text-[26px] md:text-[32px] font-semibold tracking-[-0.035em]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Instantly estimate YouTube monetization
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.65] text-[var(--foreground-muted)]">
          Analyze channels using real public signals like subscribers, views, and activity — in seconds.
        </p>

        <div className="mx-auto mt-6 w-full max-w-3xl md:max-w-4xl">
          <SearchBox onSearch={handleSearch} loading={loading} />
        </div>

        {scrollingChannels.length > 0 && (
          <div className="mt-5">
            <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              Trending channels
            </p>

            <div className="relative overflow-hidden">

              <div className="hero-marquee flex w-max items-center gap-3">
                {scrollingChannels.map((channel, index) => (
                  <div
                    key={`${channel.handle || channel.title}-${index}`}
                    className="flex min-w-max items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 transition-colors"
                  >
                    <div className="overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card-muted)]">
                      <Image
                        src={channel.thumbnail_url || "/placeholder-avatar.png"}
                        alt={channel.title}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                        loading="lazy"
                        sizes="36px"
                        decoding="async"
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

      <SearchLimitModal open={showLimit} onClose={() => setShowLimit(false)} />

      <style jsx>{`
        .hero-marquee {
          animation: hero-marquee 28s linear infinite;
          will-change: transform;
        }

        .hero-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-marquee {
            animation: none;
            transform: none;
          }
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
    </div>
  );
}