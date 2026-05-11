

import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { Clock } from "lucide-react";

const pageUrl = `${siteConfig.url}/guides/how-long-does-it-take-to-get-monetized-on-youtube`;

export const metadata: Metadata = {
  title: "How Long Does It Take to Get Monetized on YouTube? (Real Timeline)",
  description:
    "Learn how long it actually takes to get monetized on YouTube and what factors speed up or slow down the process.",
  alternates: { canonical: pageUrl },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Growth Guide"
            icon={<Clock className="h-4 w-4" />}
            title="How long does it take to get monetized on YouTube?"
            description="There’s no fixed timeline for YouTube monetization. Some channels qualify in a few months, while others take years — or never get there at all. The difference usually comes down to consistency, content quality, and picking the right niche early on."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Most channels take anywhere from 3 months to 18+ months to qualify for monetization. Hitting the official requirements is one part — but getting approved and building consistent growth is what really determines the timeline.
            </p>
          </GuideSection>

          <GuideSection title="What you need before monetization">
            <GuideList
              items={[
                "At least 1,000 subscribers",
                "4,000 watch hours in the past 12 months (or Shorts view alternative)",
                "A clean channel with no major policy violations",
                "Content that follows advertiser-friendly guidelines",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why some channels grow faster">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Channels that reach monetization quickly usually have one thing in common: they create content people are actively searching for or want to watch repeatedly.
            </p>

            <GuideList
              items={[
                "Clear niche with strong demand",
                "Consistent upload schedule",
                "Videos that hold attention and increase watch time",
                "Topics that solve problems or provide value",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why many channels take longer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The biggest delays usually come from inconsistency or weak content direction. Many creators post randomly without a clear focus, which makes it hard for YouTube to understand and recommend their content.
            </p>

            <GuideList
              items={[
                "Inconsistent uploads",
                "No clear niche or topic focus",
                "Low watch time per video",
                "Content that doesn’t stand out",
              ]}
            />
          </GuideSection>

          <GuideSection title="Realistic expectations">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A channel posting regularly with decent content can often reach monetization within 6–12 months. Faster growth is possible, but it usually requires strong execution and a bit of momentum from early videos.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              On the other hand, channels that upload inconsistently or experiment without direction can take years — even if they eventually improve.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Can you get monetized in 1 month?</strong><br />
              It’s possible, but extremely rare. It usually requires viral content or an existing audience.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">What is the fastest way to get monetized?</strong><br />
              Focus on a clear niche, post consistently, and prioritize watch time over views. Content that keeps people watching performs best.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Do Shorts help you get monetized faster?</strong><br />
              They can help with visibility, but long-form watch time is still one of the most reliable ways to reach monetization requirements.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}
