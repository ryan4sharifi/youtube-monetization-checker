import { ReactNode } from "react";
import ChannelCarousel from "@/components/home/ChannelCarousel";

interface GuideHeroProps {
  eyebrow?: string;
  icon?: ReactNode;
  title: string;
  description: string;
  channels?: {
    title: string;
    handle: string;
    thumbnail?: string | null;
    thumbnail_url?: string | null;
  }[];
}

export default function GuideHero({
  eyebrow,
  icon,
  title,
  description,
  channels,
}: GuideHeroProps) {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-5 md:space-y-6">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_88%,transparent)] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--foreground-muted)] backdrop-blur">
          {icon ? (
            <span className="flex h-4 w-4 items-center justify-center text-[var(--foreground-muted)]">
              {icon}
            </span>
          ) : null}
          <span className="leading-none">{eyebrow}</span>
        </div>
      )}

      <h1
        className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h1>

      <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[16px] md:leading-8">
        {description}
      </p>

      {channels && channels.length > 0 && (
        <div className="pt-8 md:pt-10">
          <div className="border-t border-[var(--border)] pt-6 overflow-hidden">
            <div className="relative">
              <ChannelCarousel channels={channels || []} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}