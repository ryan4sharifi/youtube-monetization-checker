

import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { DollarSign } from "lucide-react";

const pageUrl = `${siteConfig.url}/guides/how-much-does-1-million-views-pay-on-youtube`;

export const metadata: Metadata = {
  title: "How Much Does 1 Million Views Pay on YouTube? (Real Earnings)",
  description:
    "See how much 1 million YouTube views actually pay and what factors can increase or decrease earnings.",
  alternates: { canonical: pageUrl },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Earnings Guide"
            icon={<DollarSign className="h-4 w-4" />}
            title="How much does 1 million views pay on YouTube?"
            description="Hitting 1 million views sounds like a huge milestone — and it is. But the actual money behind those views varies a lot more than most people expect. Some channels make a few thousand dollars, while others earn significantly more from the same number of views."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              On average, 1 million YouTube views can generate anywhere from $1,000 to $5,000 in ad revenue. In higher-paying niches, it can go well beyond that, while in lower-paying niches it may fall below this range.
            </p>
          </GuideSection>

          <GuideSection title="Why the range is so wide">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              You’re not paid per view — you’re paid based on ads shown and how valuable those viewers are to advertisers. That’s why two channels with the same number of views can earn completely different amounts.
            </p>
          </GuideSection>

          <GuideSection title="What affects earnings the most">
            <GuideList
              items={[
                "Niche (finance and business earn more than entertainment)",
                "Audience location (US and UK viewers generate higher ad rates)",
                "Watch time (longer videos allow more ads)",
                "Engagement (strong engagement improves ad performance)",
                "Ad availability (not every view shows an ad)",
              ]}
            />
          </GuideSection>

          <GuideSection title="Example scenarios">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A finance channel targeting US viewers might earn $8,000 or more from 1 million views, while a viral entertainment video with global traffic might earn closer to $1,000–$2,000.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The difference isn’t the views — it’s the value of the audience watching those videos.
            </p>
          </GuideSection>

          <GuideSection title="Why RPM matters more than views">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM (revenue per thousand views) determines how much you actually earn. Increasing RPM can have a bigger impact on revenue than simply getting more views.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Can you make a full-time income from 1 million views?</strong><br />
              It depends on your niche and consistency. One viral video isn’t enough — consistent performance matters more.
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
