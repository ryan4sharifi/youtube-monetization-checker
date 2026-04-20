"use client";
import { useState } from "react";
import Section from "@/components/ui/Section";
import GuidesHero from "@/components/guides/GuidesHero";
import GuideCard from "@/components/guides/GuideCard";
import GuideCTA from "@/components/guides/GuideCTA";
import { DollarSign, Eye, ShieldCheck, Users, Zap } from "lucide-react";
import { guides as allGuides } from "@/lib/guides";

export default function GuidesPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <Section size="lg" className="pt-6 md:pt-10">
      <div className="space-y-7 md:space-y-8">
        <GuidesHero
          title="YouTube Monetization Guides"
          description="Explore how YouTube monetization works — from requirements and earnings to analyzing whether a channel is actually monetized."
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
    </Section>
  );
}