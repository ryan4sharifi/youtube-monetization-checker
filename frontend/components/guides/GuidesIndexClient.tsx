"use client";

import { useState } from "react";
import GuidesHero from "@/components/guides/GuidesHero";
import GuideCard from "@/components/guides/GuideCard";
import GuideCTA from "@/components/guides/GuideCTA";
import { guides as allGuides } from "@/lib/guides";

export default function GuidesIndexClient() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full px-6 md:px-10 pt-6 md:pt-10">
      <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
        <GuidesHero
          title="YouTube Monetization Guides"
          description="Explore how YouTube monetization works, how to interpret public channel signals, and why earnings estimates should be read as ranges rather than guarantees."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allGuides.slice(0, showAll ? allGuides.length : 6).map((guide) => (
            <GuideCard
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              title={guide.title}
              description={guide.description}
            />
          ))}
        </div>

        {allGuides.length > 6 && (
          <div className="flex justify-center pt-2 md:pt-4">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)]"
            >
              {showAll ? "Show less" : "See more"}
            </button>
          </div>
        )}

        <GuideCTA />
      </div>
    </div>
  );
}
