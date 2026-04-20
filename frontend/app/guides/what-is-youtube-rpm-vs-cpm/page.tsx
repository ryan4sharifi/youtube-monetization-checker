

import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "RPM vs CPM on YouTube (What Actually Matters?)",
  description:
    "Understand the difference between RPM and CPM on YouTube and which one actually reflects your earnings.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Earnings Guide"
            icon={<BarChart3 className="h-4 w-4" />}
            title="RPM vs CPM: what actually matters?"
            description="If you’ve looked at YouTube analytics, you’ve probably seen both RPM and CPM. They sound similar, but they mean very different things. One shows what advertisers pay. The other shows what you actually earn."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              CPM is what advertisers pay per 1,000 ad impressions. RPM is what you, the creator, earn per 1,000 views after YouTube’s cut and other factors.
            </p>
          </GuideSection>

          <GuideSection title="What CPM means">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              CPM (cost per mille) represents how much advertisers are willing to pay to show ads. This number is usually higher because it reflects the advertiser’s spend, not your take-home earnings.
            </p>

            <GuideList
              items={[
                "Based on ad impressions, not total views",
                "Higher in competitive niches like finance or software",
                "Can vary widely by country and season",
              ]}
            />
          </GuideSection>

          <GuideSection title="What RPM means">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM (revenue per mille) shows your actual earnings per 1,000 views. It includes YouTube’s revenue share and accounts for views that don’t show ads.
            </p>

            <GuideList
              items={[
                "Includes all views (even non-monetized ones)",
                "Already reflects YouTube’s cut",
                "Gives a realistic picture of your revenue",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why CPM and RPM are different">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Not every view shows an ad, and YouTube keeps a portion of the ad revenue. That’s why RPM is always lower than CPM.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              For example, a video with a $12 CPM might only result in a $4–$6 RPM depending on audience and engagement.
            </p>
          </GuideSection>

          <GuideSection title="Which one should you focus on?">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM is the number that actually matters for creators. It tells you how much you earn from your content. CPM is useful for understanding your niche and advertiser demand, but it doesn’t reflect your real income.
            </p>
          </GuideSection>

          <GuideSection title="How to improve both">
            <GuideList
              items={[
                "Create content in higher-value niches",
                "Target audiences in higher-paying regions",
                "Increase watch time and retention",
                "Structure videos to allow more ads naturally",
              ]}
            />
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Why is my CPM high but RPM low?</strong><br />
              Because not all views show ads, and YouTube takes a share of revenue.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Can RPM be higher than CPM?</strong><br />
              No. RPM is always lower because it reflects your actual earnings after deductions.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </Section>
    </main>
  );
}