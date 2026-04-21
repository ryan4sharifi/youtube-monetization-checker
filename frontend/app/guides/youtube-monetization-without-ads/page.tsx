

import type { Metadata } from "next";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { HandCoins } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Make Money on YouTube Without Ads (Real Methods)",
  description:
    "Learn practical ways creators make money on YouTube without relying on ad revenue.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Earnings Guide"
            icon={<HandCoins className="h-4 w-4" />}
            title="How to make money on YouTube without ads"
            description="A lot of creators assume ads are the main way to earn on YouTube. In reality, many channels make more from other sources. If your channel isn’t monetized yet — or you want to go beyond ads — there are several ways to generate real income."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              You don’t need AdSense to make money on YouTube. Creators earn through sponsorships, affiliate links, products, and services — often at much higher rates than ads.
            </p>
          </GuideSection>

          <GuideSection title="Sponsorships (the biggest opportunity)">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Brands pay creators to promote their products or services. Even smaller channels can land deals if their audience is focused and engaged.
            </p>

            <GuideList
              items={[
                "Direct brand deals",
                "Product placements inside videos",
                "Dedicated sponsored videos",
              ]}
            />
          </GuideSection>

          <GuideSection title="Affiliate marketing">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              You can earn commissions by linking to products or services. When someone buys through your link, you get a percentage.
            </p>

            <GuideList
              items={[
                "Amazon affiliate links",
                "Software/tools you already use",
                "Courses or digital products",
              ]}
            />
          </GuideSection>

          <GuideSection title="Selling your own products">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Many creators eventually create their own products. This can be anything from digital downloads to full online businesses.
            </p>

            <GuideList
              items={[
                "Courses or guides",
                "Templates or resources",
                "Physical products or merch",
              ]}
            />
          </GuideSection>

          <GuideSection title="Services and consulting">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              If your content shows expertise, viewers may be willing to pay for your help directly.
            </p>

            <GuideList
              items={[
                "Coaching or consulting",
                "Freelance services",
                "Done-for-you work",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why many creators prefer this">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Ad revenue depends on views and can fluctuate. Other income sources are more stable and often scale better with a smaller but loyal audience.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              For example, a single sponsorship can earn more than thousands of views from ads.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Can you make money without being monetized?</strong><br />
              Yes. You don’t need to be in the YouTube Partner Program to earn through sponsorships or affiliates.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">How many subscribers do you need?</strong><br />
              There’s no fixed number. Even smaller channels can earn if they target the right audience.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}