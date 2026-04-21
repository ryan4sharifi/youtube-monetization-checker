import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, CircleHelp } from "lucide-react";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";

const pageUrl = `${siteConfig.url}/can-you-see-if-a-youtube-channel-is-monetized`;

export const metadata: Metadata = {
  title: `Can You See If a YouTube Channel Is Monetized? | ${siteConfig.name}`,
  description:
    "Learn whether you can tell if a YouTube channel is monetized, what signals to look for, and how to estimate monetization status.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Can You See If a YouTube Channel Is Monetized?`,
    description:
      "Understand how to estimate if a YouTube channel is monetized using public signals.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Monetization Guide"
            icon={<Eye />}
            title="Can you see if a YouTube channel is monetized?"
            description="You can’t directly see if a YouTube channel is monetized — but with the right signals, you can get surprisingly close. Here’s how to tell the difference between a monetized channel and one that just looks like it."
          />

          <GuideSection title="Why you can’t see monetization">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              YouTube does not publicly display whether a channel is part of the YouTube Partner Program (YPP). There’s no badge, label, or visible indicator that confirms monetization status.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              This is intentional. Monetization depends on internal factors like policy compliance, advertiser friendliness, and account standing — all of which YouTube keeps private.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              As a result, even large channels with millions of subscribers may not be monetized, while smaller channels can be earning consistently.
            </p>
          </GuideSection>

          <GuideSection title="How to estimate if a channel is monetized">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              While there’s no official indicator, you can estimate monetization with a high level of confidence by looking at a combination of signals — not just one.
            </p>

            <GuideList
              items={[
                "Subscriber threshold: Channels with 1,000+ subscribers are eligible for monetization, but this alone is not enough.",
                "Consistent uploads: Monetized channels typically post regularly. Inactive channels are less likely to generate revenue.",
                "View volume: High total views and strong average views per video indicate real audience demand.",
                "Ads on videos: Seeing ads can be a signal, but it’s not definitive — YouTube can show ads on non-monetized channels as well.",
                "Content quality and niche: Channels in high-value niches (finance, business, tech) are more likely to be monetized successfully.",
              ]}
            />
          </GuideSection>

          <GuideSection title="The biggest mistake people make">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Most people look at just one metric — usually subscriber count — and assume a channel is monetized. That’s not how it works.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Monetization depends on a combination of watch time, content consistency, audience engagement, and YouTube’s internal review process. A channel can meet the public thresholds and still not be monetized.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              The real signal is consistency across multiple metrics — not a single number.
            </p>
          </GuideSection>

          <GuideSection title="Better way: use a checker">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Instead of trying to manually analyze all these signals, you can use {siteConfig.name} to instantly evaluate a channel’s likelihood of being monetized. It combines multiple data points into a single, easy-to-understand estimate.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}