import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";
import { siteConfig } from "@/constants/site";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";

const pageUrl = `${siteConfig.url}/guides/why-subscriber-count-alone-does-not-prove-monetization`;

export const metadata: Metadata = {
  title: `Why Subscriber Count Does Not Prove Monetization | ${siteConfig.name}`,
  description:
    "Learn why YouTube subscriber count alone cannot prove monetization and which public signals matter more for estimating channel revenue potential.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Why Subscriber Count Does Not Prove Monetization | ${siteConfig.name}`,
    description:
      "Subscribers are useful, but they do not confirm YouTube Partner Program approval, revenue, RPM, or current channel activity.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Why Subscriber Count Does Not Prove Monetization | ${siteConfig.name}`,
    description:
      "A practical guide to reading subscriber count alongside views, uploads, activity, and public-data limitations.",
    images: [siteConfig.ogImage],
  },
};

export default function SubscriberCountGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Monetization Guide"
            icon={<Users />}
            title="Why subscriber count alone does not prove monetization"
            description="Subscriber count is one of the easiest YouTube metrics to see, so people often overvalue it. It helps with eligibility context, but it cannot confirm approval, revenue, RPM, policy standing, or whether the channel is currently earning."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              A channel with many subscribers is more likely to have enough
              public scale for monetization, but subscribers do not show whether
              YouTube approved the channel, whether ads are limited, or whether
              the creator has completed private account setup.
            </p>
          </GuideSection>

          <GuideSection title="What subscribers can tell you">
            <GuideList
              items={[
                "Whether the channel has crossed a key public eligibility threshold",
                "How much audience scale the channel has accumulated over time",
                "Whether the channel has enough brand recognition to attract recurring viewers",
                "Whether a channel is worth analyzing more deeply with views and activity data",
              ]}
            />
          </GuideSection>

          <GuideSection title="What subscribers cannot tell you">
            <GuideList
              items={[
                "Official YouTube Partner Program approval status",
                "Private watch hours or Shorts eligibility progress",
                "Actual AdSense revenue, RPM, CPM, or payment status",
                "Whether videos are advertiser friendly or limited by policy",
                "Whether subscribers are still active or mostly from old growth",
              ]}
            />
          </GuideSection>

          <GuideSection title="Two channels with the same subscribers can be very different">
            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="min-w-full divide-y divide-[var(--border)] text-sm">
                <thead className="bg-[var(--background-elevated)] text-left text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Channel profile</th>
                    <th className="px-4 py-3 font-medium">Public signals</th>
                    <th className="px-4 py-3 font-medium">Monetization read</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                  {[
                    [
                      "Active education channel",
                      "100K subscribers, weekly uploads, steady views",
                      "Stronger public case for monetization and recurring revenue",
                    ],
                    [
                      "Old viral channel",
                      "100K subscribers, no uploads for a year, views concentrated in one video",
                      "Weaker public case because current demand is unclear",
                    ],
                    [
                      "Policy-sensitive channel",
                      "100K subscribers, high views, risky or reused content",
                      "Public scale may overstate approval odds",
                    ],
                  ].map(([profile, signals, read]) => (
                    <tr key={profile}>
                      <td className="px-4 py-3 font-medium text-[var(--foreground)]">{profile}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{signals}</td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">{read}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Better signals to combine with subscribers">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Subscriber count becomes much more useful when paired with demand
              and activity signals. This is why IsMonetized weighs multiple
              public inputs instead of treating subscriber count as proof.
            </p>

            <GuideList
              items={[
                "Total views and average views per video",
                "Recent upload activity and publishing consistency",
                "Video count and content library depth",
                "Business potential from public reach and audience demand",
                "Confidence score based on how many public signals agree",
              ]}
            />
          </GuideSection>

          <GuideSection title="How to use this in practice">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              Start with subscribers, then ask whether the channel still earns
              attention. If views are low, uploads are sparse, or most traffic
              came from old videos, the subscriber count may be less meaningful.
              If subscribers, views, and activity all point in the same
              direction, the estimate becomes more useful.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              You can review how the scoring works in the{" "}
              <Link
                href="/methodology"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                methodology
              </Link>{" "}
              or run a public channel through the{" "}
              <Link
                href="/"
                className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                checker
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Important caveat">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]/90">
              IsMonetized is independent and is not affiliated with, endorsed by,
              sponsored by, or officially connected to YouTube, Google, or
              Alphabet. Public data can support an estimate, but only YouTube or
              the channel owner can confirm official monetization status.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}
