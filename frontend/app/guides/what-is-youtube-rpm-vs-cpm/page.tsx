import type { Metadata } from "next";
import Link from "next/link";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { BarChart3 } from "lucide-react";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/guides/what-is-youtube-rpm-vs-cpm`;

export const metadata: Metadata = {
  title: `RPM vs CPM on YouTube | ${siteConfig.name}`,
  description:
    "Understand the difference between RPM and CPM on YouTube, why RPM matters more for creator earnings, and how RPM affects channel revenue estimates.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `RPM vs CPM on YouTube | ${siteConfig.name}`,
    description:
      "A practical explanation of YouTube RPM, CPM, creator earnings, and why public estimates should use ranges.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `RPM vs CPM on YouTube | ${siteConfig.name}`,
    description:
      "Learn how RPM and CPM differ and why RPM is the better metric for estimating YouTube creator earnings.",
    images: [siteConfig.ogImage],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
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

          <GuideSection title="Simple example">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Suppose a video gets 100,000 views and advertisers pay a $12 CPM.
              Not every view creates an ad impression, YouTube keeps a revenue
              share, and some views may not be monetized. The creator might end
              up with a $3 to $5 RPM, which means roughly $300 to $500 from
              those 100,000 views.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="min-w-full divide-y divide-[var(--border)] text-sm">
                <thead className="bg-[var(--background-elevated)] text-left text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Metric</th>
                    <th className="px-4 py-3 font-medium">Example</th>
                    <th className="px-4 py-3 font-medium">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                  {[
                    ["Views", "100,000", "Total public video views"],
                    ["CPM", "$12", "Advertiser spend per 1,000 ad impressions"],
                    ["RPM", "$3-$5", "Estimated creator revenue per 1,000 views"],
                    ["Estimated revenue", "$300-$500", "Views divided by 1,000, multiplied by RPM"],
                  ].map(([metric, example, meaning]) => (
                    <tr key={metric}>
                      <td className="px-4 py-3 font-medium text-[var(--foreground)]">{metric}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{example}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Which one should you focus on?">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM is the number that actually matters for creators. It tells you how much you earn from your content. CPM is useful for understanding your niche and advertiser demand, but it doesn’t reflect your real income.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              That is why IsMonetized uses RPM-style assumptions for earnings
              ranges instead of CPM. The goal is to estimate possible creator
              revenue, not advertiser spend. Read the{" "}
              <Link
                href="/methodology"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                methodology
              </Link>{" "}
              for the current public-data assumptions.
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
      </div>
    </main>
  );
}
