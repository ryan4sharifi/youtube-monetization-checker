

import type { Metadata } from "next";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does 100K Views Pay on YouTube? (Real Earnings Breakdown)",
  description:
    "Find out how much 100,000 YouTube views pay and what factors affect your actual earnings.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Earnings Guide"
            icon={<DollarSign className="h-4 w-4" />}
            title="How much does 100K views pay on YouTube?"
            description="100,000 views might not sound massive compared to viral numbers, but for many creators it’s where monetization starts to feel real. The actual earnings, though, can vary a lot depending on the type of content and who is watching."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              On average, 100,000 YouTube views can generate anywhere from $100 to $500 in ad revenue. In higher-paying niches, it can be closer to $800 or more, while lower-paying content may fall below $100.
            </p>
          </GuideSection>

          <GuideSection title="Why the number isn’t fixed">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              YouTube doesn’t pay a flat rate per view. Earnings depend on ads — how many are shown, who sees them, and how valuable those viewers are to advertisers.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              That’s why two videos with the same number of views can end up with completely different revenue.
            </p>
          </GuideSection>

          <GuideSection title="What affects how much you earn">
            <GuideList
              items={[
                "Niche (finance and business content earns more than entertainment)",
                "Audience location (US viewers are typically more valuable)",
                "Video length (longer videos allow more ad placements)",
                "Watch time and retention",
                "Seasonality (ad rates often increase toward the end of the year)",
              ]}
            />
          </GuideSection>

          <GuideSection title="Realistic examples">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A simple entertainment video with global traffic might earn around $120–$200 for 100K views. A finance or software-focused video targeting US viewers could earn $600–$1,000 or more for the same number of views.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The difference comes down to how much advertisers are willing to pay for that audience.
            </p>
          </GuideSection>

          <GuideSection title="Does every view make money?">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Not every view is monetized. Some users skip ads, use ad blockers, or watch from regions where ads pay less. That’s why total views don’t translate directly into revenue.
            </p>
          </GuideSection>

          <GuideSection title="Why RPM matters">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM (revenue per thousand views) is the metric that actually determines your earnings. Increasing your RPM often has a bigger impact than simply getting more views.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Is 100K views enough to make money?</strong><br />
              Yes. For monetized channels, 100K views can generate meaningful revenue, especially in higher-paying niches.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Why do earnings vary so much?</strong><br />
              Because ad rates depend on niche, audience, and advertiser demand — not just views.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}