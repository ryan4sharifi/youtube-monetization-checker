import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { CircleDashed } from "lucide-react";

export const metadata: Metadata = {
  title: "Methodology | How IsMonetized Estimates YouTube Earnings",
  description:
    "Learn how IsMonetized analyzes YouTube channels, estimates monetization status, and calculates earnings ranges.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="lg">
        <div className="space-y-7 md:space-y-8">

          <GuideHero
            eyebrow="Methodology"
            icon={<CircleDashed className="h-4 w-4" />}
            title="How our monetization estimates work"
            description="IsMonetized analyzes publicly available YouTube data to estimate whether a channel is monetized and how much it could be earning. The goal is not exact numbers — it’s realistic, data-driven ranges based on how YouTube actually works."
          />

          <GuideSection title="What data we use">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              All estimates are based on publicly available channel data. We do not have access to private YouTube analytics or creator earnings.
            </p>

            <GuideList
              items={[
                "Subscriber count",
                "Total and recent views",
                "Upload frequency and activity",
                "Video performance patterns",
              ]}
            />
          </GuideSection>

          <GuideSection title="How monetization is estimated">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              We evaluate whether a channel is likely monetized by comparing its metrics against YouTube Partner Program requirements and typical channel behavior.
            </p>

            <GuideList
              items={[
                "Subscriber threshold (1,000+)",
                "Estimated watch time and engagement",
                "Content consistency",
                "Channel activity over time",
              ]}
            />

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              This produces a probability-based result rather than a definitive yes or no.
            </p>
          </GuideSection>

          <GuideSection title="How earnings are estimated">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Earnings are estimated by combining multiple signals — not just views. The model looks at how active a channel is, how its videos perform, and how consistent its audience appears to be over time.
            </p>

            <GuideList
              items={[
                "Estimated monthly views based on channel activity",
                "Upload frequency and content consistency",
                "Average performance per video",
                "Typical RPM ranges based on channel size and audience",
                "Content patterns such as long-form videos or livestreams",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why estimates can vary">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Two channels with similar views can earn very different amounts. This is because ad rates depend on factors we cannot fully observe.
            </p>

            <GuideList
              items={[
                "Viewer location",
                "Content niche",
                "Ad demand and seasonality",
                "Audience behavior (watch time, engagement)",
                "Channels with frequent uploads or long-form content (e.g. livestreams) may generate more revenue than average view-based estimates suggest",
              ]}
            />
          </GuideSection>

          <GuideSection title="Limitations (important)">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              These estimates are directional, not exact. We aim to give a realistic sense of a channel’s potential, but actual earnings can be higher or lower.
            </p>

            <GuideList
              items={[
                "No access to private YouTube analytics",
                "No insight into sponsorships or external income",
                "Ad revenue varies daily",
                "Different videos on the same channel can earn very different amounts",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why this approach works">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              While exact numbers aren’t possible without access to creator dashboards, combining public data with activity, performance, and consistency signals produces estimates that are directionally accurate and more reflective of real-world channel behavior.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The goal is clarity — helping you understand whether a channel is likely monetized and how strong its earning potential is.
            </p>
          </GuideSection>

          <GuideCTA />

        </div>
      </Section>
    </main>
  );
}