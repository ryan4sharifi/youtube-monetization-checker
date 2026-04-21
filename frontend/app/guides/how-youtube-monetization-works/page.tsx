

import type { Metadata } from "next";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { CircleDollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "How YouTube Monetization Actually Works (Simple Breakdown)",
  description:
    "A clear, realistic explanation of how YouTube monetization works and how creators actually make money.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Monetization Guide"
            icon={<CircleDollarSign className="h-4 w-4" />}
            title="How YouTube monetization actually works"
            description="Most people think YouTube pays creators per view. It doesn’t. Monetization is based on ads — who sees them, how often they show, and how valuable those viewers are to advertisers. Once you understand that, everything else starts to make more sense."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              YouTube makes money by showing ads on videos, then shares a portion of that revenue with creators. If your channel is monetized, you earn when ads are displayed and viewed — not just when someone clicks your video.
            </p>
          </GuideSection>

          <GuideSection title="What you need to get monetized">
            <GuideList
              items={[
                "At least 1,000 subscribers",
                "4,000 watch hours in the past 12 months (or Shorts alternative)",
                "A channel that follows YouTube’s policies",
                "Content that is advertiser-friendly",
              ]}
            />
          </GuideSection>

          <GuideSection title="Where the money actually comes from">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Advertisers pay YouTube to show ads before, during, or after videos. YouTube keeps a portion of that revenue and gives the rest to the creator.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The key point is this: advertisers are not paying for views — they’re paying to reach specific audiences. That’s why some videos earn significantly more than others.
            </p>
          </GuideSection>

          <GuideSection title="Why some creators earn more than others">
            <GuideList
              items={[
                "Niche (finance and business tend to pay more)",
                "Audience location (US viewers are more valuable)",
                "Watch time (more time = more ad opportunities)",
                "Engagement (better engagement can improve ad performance)",
              ]}
            />
          </GuideSection>

          <GuideSection title="What most people misunderstand">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A video with 1 million views doesn’t automatically mean high earnings. If those views come from regions with lower ad rates or from viewers who skip ads, the revenue can be much lower than expected.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              On the other hand, a smaller channel in a high-paying niche can earn more with fewer views.
            </p>
          </GuideSection>

          <GuideSection title="Beyond ads">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Ads are only one part of monetization. Many creators make a large portion of their income from sponsorships, affiliate links, and selling their own products.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              In many cases, these sources can earn more than ads, especially once a channel grows.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Do you get paid per view?</strong><br />
              No. You’re paid based on ads, not just views.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Do all views make money?</strong><br />
              No. Only monetized views (where ads are shown) generate revenue.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}