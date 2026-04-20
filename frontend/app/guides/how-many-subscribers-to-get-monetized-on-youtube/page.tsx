import type { Metadata } from "next";
import { Users } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";

const pageUrl = `${siteConfig.url}/guides/how-many-subscribers-to-get-monetized-on-youtube`;

export const metadata: Metadata = {
  title: `How Many Subscribers to Get Monetized on YouTube? | ${siteConfig.name}`,
  description:
    "Learn how many subscribers and watch hours you need to get monetized on YouTube and join the YouTube Partner Program.",
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
      <Section size="md">
        <div className="space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Monetization Guide"
            icon={<Users />}
            title="How many subscribers do you need to get monetized on YouTube?"
            description="Most people think you just need 1,000 subscribers to get monetized on YouTube — but that’s only part of the picture. In reality, monetization depends on a combination of subscribers, watch time, and consistent content performance."
          />

          <GuideSection title="YouTube monetization requirements">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              To qualify for the YouTube Partner Program (YPP), your channel must meet one of the following sets of requirements:
            </p>

            <GuideList
              items={[
                "At least 1,000 subscribers (required for all monetization paths)",
                "4,000 public watch hours in the last 12 months (long-form content)",
                "OR 10 million Shorts views in the last 90 days (Shorts path)",
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
              No. YouTube requires at least 1,000 subscribers before you can apply for full monetization, and you still need to meet watch time or Shorts view requirements.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">How long does it take to get monetized?</strong><br />
              It depends on your content strategy and consistency. Some creators reach monetization in a few months, while others take a year or longer depending on niche and upload frequency.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </Section>
    </main>
  );
}