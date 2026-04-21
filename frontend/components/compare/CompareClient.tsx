

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GuideHero from "@/components/guides/GuideHero";
import { ArrowRight } from "lucide-react";
import { normalizeHandle } from "@/lib/youtube";
import { useSearchLimit } from "@/hooks/useSearchLimit";
import SearchLimitModal from "@/components/ui/SearchLimitModal";

interface Channel {
  title: string;
  handle: string;
  thumbnail_url?: string | null;
}

interface Props {
  trendingChannels: Channel[];
}

export default function CompareClient({ trendingChannels }: Props) {
  const router = useRouter();

  const [channel1, setChannel1] = useState("");
  const [channel2, setChannel2] = useState("");

  const { canSearch, showLimit, setShowLimit } = useSearchLimit();

  function handleCompare() {
    if (!channel1 || !channel2) return;

    if (!canSearch()) {
      return;
    }

    const c1 = normalizeHandle(channel1);
    const c2 = normalizeHandle(channel2);

    // ensure deterministic ordering
    const [a, b] = [c1, c2].sort();

    router.push(`/compare/${a}-vs-${b}`);
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-6 md:pt-10">
        <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">

          <GuideHero
            eyebrow="YouTube Comparison"
            title="Compare two YouTube channels"
            description="Enter two YouTube handles to compare subscribers, views, and estimated earnings side by side."
            channels={trendingChannels}
          />

          <div className="group rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 md:p-8 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
            <div className="mb-5 text-sm font-medium text-[var(--foreground-muted)]">
              Enter channel handles
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <input
                value={channel1}
                onChange={(e) => setChannel1(e.target.value)}
                placeholder="@mrbeast or youtube.com/@mrbeast"
                className="w-full rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] px-4 py-3.5 text-[15px] outline-none transition-all duration-200 placeholder:text-[var(--foreground-muted)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
              />

              <input
                value={channel2}
                onChange={(e) => setChannel2(e.target.value)}
                placeholder="@pewdiepie or youtube.com/@pewdiepie"
                className="w-full rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] px-4 py-3.5 text-[15px] outline-none transition-all duration-200 placeholder:text-[var(--foreground-muted)] focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
              />
            </div>

            <div className="mt-7 flex justify-end">
              <button
                onClick={handleCompare}
                disabled={!channel1 || !channel2}
                className="group inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-hover)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.18)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Compare
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <SearchLimitModal open={showLimit} onClose={() => setShowLimit(false)} />
    </main>
  );
}