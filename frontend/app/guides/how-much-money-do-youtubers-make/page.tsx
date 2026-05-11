import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign } from "lucide-react";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";

const pageUrl = `${siteConfig.url}/guides/how-much-money-do-youtubers-make`;

export const metadata: Metadata = {
  title: `How Much Money Do YouTubers Make? | ${siteConfig.name}`,
  description:
    "Learn how much money YouTubers make, how YouTube monetization works, and what affects earnings.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `How Much Money Do YouTubers Make? | ${siteConfig.name}`,
    description:
      "Understand YouTube earnings, CPM, RPM, and how creators make money.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `How Much Money Do YouTubers Make? | ${siteConfig.name}`,
    description:
      "Understand realistic YouTube earnings, RPM ranges, and why two channels with the same views can earn very different amounts.",
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
            icon={<DollarSign />}
            title="How much money do YouTubers make?"
            description="YouTube earnings vary widely — and most people underestimate how big the differences can be. While many creators earn around $1 to $5 per 1,000 views from ads, actual income depends heavily on niche, audience quality, and how a channel is monetized."
          />

          <GuideSection title="Average YouTube earnings">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              These numbers are rough industry averages. Real earnings can be significantly higher or lower depending on content type and audience.
            </p>

            <GuideList
              items={[
                "$1 – $5 per 1,000 views (typical ad revenue range)",
                "$10 – $30 CPM before YouTube’s cut (advertiser spend)",
                "Finance, business, and tech channels often earn significantly more",
                "Entertainment and viral content usually earn less per view",
              ]}
            />
          </GuideSection>

          <GuideSection title="Example RPM ranges by content type">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Public earnings estimates usually start with RPM, or revenue per
              1,000 views. These examples are not guarantees, but they show why
              a channel&apos;s topic and audience can matter as much as its view
              count.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="min-w-full divide-y divide-[var(--border)] text-sm">
                <thead className="bg-[var(--background-elevated)] text-left text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Content type</th>
                    <th className="px-4 py-3 font-medium">Lower RPM</th>
                    <th className="px-4 py-3 font-medium">Typical RPM</th>
                    <th className="px-4 py-3 font-medium">Higher RPM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                  {[
                    ["Entertainment", "$0.50", "$2.00", "$4.00"],
                    ["Gaming", "$0.75", "$2.50", "$5.00"],
                    ["Education", "$1.50", "$4.00", "$8.00"],
                    ["Technology", "$2.00", "$5.00", "$10.00"],
                    ["Finance", "$4.00", "$8.00", "$15.00+"],
                  ].map(([type, low, typical, high]) => (
                    <tr key={type}>
                      <td className="px-4 py-3 font-medium text-[var(--foreground)]">{type}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{low}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{typical}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="The reality behind YouTube earnings">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Not all views are equal. Two channels with the same number of views can earn completely different amounts depending on who is watching and what the content is about.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              For example, a finance video targeting US viewers can earn several times more than a viral entertainment clip with global traffic.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              This is why focusing only on view count is misleading — the quality of views matters more than the quantity.
            </p>
          </GuideSection>

          <GuideSection title="What affects earnings">
            <GuideList
              items={[
                "Niche matters: finance, software, and business channels often earn more due to higher advertiser demand",
                "Audience location: US, UK, and Canada typically generate higher ad revenue",
                "Engagement & watch time: stronger engagement improves ad performance",
                "Revenue streams: sponsorships and affiliates often outperform ads",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why estimates should be ranges">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              A single earnings number looks precise, but it is usually less
              honest than a range. Public data does not reveal the creator&apos;s
              actual RPM, audience geography, ad fill, limited-ads status,
              memberships, sponsorships, or affiliate revenue.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              IsMonetized estimates a range by combining likely monthly views
              with RPM assumptions. You can see the public-data model on the{" "}
              <Link
                href="/methodology"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                methodology page
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">Do YouTubers get paid per view?</strong><br />
              Not exactly. You’re not paid per view itself — you’re paid when ads are shown and interacted with, which is why RPM varies.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              <strong className="text-[var(--foreground)]">How much does 1 million views make?</strong><br />
              Typically between $1,000 and $5,000 from ads, but it can be much higher in high-paying niches or much lower for viral content.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}
