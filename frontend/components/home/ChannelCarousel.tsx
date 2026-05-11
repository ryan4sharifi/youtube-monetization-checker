"use client";

import Image from "next/image";
import { useMemo } from "react";

interface Channel {
  title: string;
  handle: string;
  thumbnail_url?: string | null;
}

interface Props {
  channels: Channel[];
}

export default function ChannelCarousel({ channels }: Props) {
  // duplicate for smooth infinite scroll
  const items = useMemo(() => [...channels, ...channels], [channels]);

  if (channels.length === 0) return null;

  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max items-center gap-3 animate-carousel">
        {items.map((channel, i) => (
          <div
            key={`${channel.handle || channel.title}-${i}`}
            className="flex min-w-max items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 transition-colors"
          >
            {/* thumbnail */}
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

            {/* text */}
            <div className="pr-1">
              <p className="text-sm font-medium leading-none text-[var(--foreground)]">
                {channel.title}
              </p>
              <p className="mt-0.5 text-xs leading-none text-[var(--foreground-muted)]">
                @{(channel.handle || "").replace(/^@/, "")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <style jsx>{`
        .animate-carousel {
          animation: scroll 28s linear infinite;
          will-change: transform;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-carousel {
            animation: none;
            transform: none;
          }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
