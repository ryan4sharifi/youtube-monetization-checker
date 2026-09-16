import type { Metadata } from "next";
import { Users } from "lucide-react";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";

const pageUrl = `${siteConfig.url}/guides/how-many-subscribers-to-get-monetized-on-youtube`;

export const metadata: Metadata = {
  title: `How Many Subscribers to Get Monetized on YouTube? | ${siteConfig.name}`,
  description:
    "You need 1,000 subscribers for YouTube ad revenue, while expanded YPP access may begin at 500. See the current watch-hour and Shorts requirements.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `How Many Subscribers to Get Monetized on YouTube?`,
    description:
      "Understand YouTube monetization requirements including subscribers, watch hours, and Shorts views.",
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
            icon={<Users />}
            title="How many subscribers do you need to get monetized on YouTube?"
            description="You generally need 1,000 subscribers for ad and YouTube Premium revenue. In eligible regions, some fan-funding features may become available at 500 subscribers when the additional activity threshold is met."
          />

          <GuideSection title="YouTube monetization requirements">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              To qualify for the YouTube Partner Program (YPP), your channel must meet one of the following sets of requirements:
            </p>

            <GuideList
              items={[
                "For ad revenue: 1,000 subscribers and 4,000 qualified watch hours in the last 12 months",
                "OR, for the Shorts path: 1,000 subscribers and 10 million qualified Shorts views in 90 days",
                "For expanded YPP in eligible regions: 500 subscribers and 3 public uploads in 90 days",
                "Expanded YPP also requires 3,000 qualified watch hours or 3 million qualified Shorts views",
                "Follow YouTube’s monetization and advertiser-friendly policies",
                "No active community guideline strikes",
              ]}
            />
          </GuideSection>

          <GuideSection title="What actually matters">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Subscriber count alone is not enough. Monetization depends on how engaged your audience is and how consistently your content performs.
            </p>

            <GuideList
              items={[
                "Subscribers alone are not enough — you also need watch time or Shorts views",
                "Shorts can qualify you with 10 million views in 90 days instead of watch hours",
                "Consistent uploads improve your chances of meeting requirements faster",
                "Audience engagement plays a major role in long-term earnings",
              ]}
            />
          </GuideSection>

          <GuideSection title="The biggest misconception">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Many creators believe hitting 1,000 subscribers automatically means they will start earning money. In reality, subscriber count alone doesn’t generate revenue.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Watch time, consistency, and audience engagement are what actually determine whether a channel can generate meaningful income. A channel with 5,000 subscribers and strong engagement can earn more than one with 100,000 inactive subscribers.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Can you get monetized with less than 1,000 subscribers?</strong><br />
              Some fan-funding and shopping features can become available through expanded YPP at 500 subscribers in eligible regions. Full ad and YouTube Premium revenue generally requires 1,000 subscribers plus the watch-hour or Shorts threshold.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Where should I verify the current requirements?</strong><br />
              Check the{" "}
              <a href="https://support.google.com/youtube/answer/94522" className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]">
                official YouTube monetization guide
              </a>{" "}
              because thresholds and regional availability can change.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">How long does it take to get monetized?</strong><br />
              It depends on your content strategy and consistency. Some creators reach monetization in a few months, while others take a year or longer depending on niche and upload frequency.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}
