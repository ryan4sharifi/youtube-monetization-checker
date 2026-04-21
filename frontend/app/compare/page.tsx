"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import GuideHero from "@/components/guides/GuideHero";
import { ArrowRight } from "lucide-react";
import { normalizeHandle } from "@/lib/youtube";


export default function ComparePage() {
  const router = useRouter();

  const [channel1, setChannel1] = useState("");
  const [channel2, setChannel2] = useState("");


  function handleCompare() {
    if (!channel1 || !channel2) return;

    const c1 = normalizeHandle(channel1);
    const c2 = normalizeHandle(channel2);

    // prevent duplicate ordering
    const [a, b] = [c1, c2].sort();

    router.push(`/compare/${a}-vs-${b}`);
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="lg">
        <div className="space-y-10 md:space-y-12">

          <GuideHero
            eyebrow="YouTube Comparison"
            title="Compare two YouTube channels"
            description="Enter two YouTube handles to compare subscribers, views, and estimated earnings side by side."
          />

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <input
                value={channel1}
                onChange={(e) => setChannel1(e.target.value)}
                placeholder="@mrbeast or youtube.com/@mrbeast"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-3 text-sm outline-none transition-all focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
              />

              <input
                value={channel2}
                onChange={(e) => setChannel2(e.target.value)}
                placeholder="@pewdiepie or youtube.com/@pewdiepie"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-3 text-sm outline-none transition-all focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/10"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCompare}
                disabled={!channel1 || !channel2}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Compare
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}