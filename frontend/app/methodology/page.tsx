import type { Metadata } from "next";
import Link from "next/link";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { CircleDashed } from "lucide-react";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/methodology`;

const rpmRows = [
  {
    segment: "Small or early channel",
    publicSignal: "Under 10K subscribers",
    conservative: "$0.30",
    typical: "$1.25",
    higher: "$2.50",
  },
  {
    segment: "Growing channel",
    publicSignal: "10K-99K subscribers",
    conservative: "$0.70",
    typical: "$2.00",
    higher: "$3.50",
  },
  {
    segment: "Established channel",
    publicSignal: "100K-999K subscribers",
    conservative: "$1.20",
    typical: "$3.00",
    higher: "$5.00",
  },
  {
    segment: "Large channel",
    publicSignal: "1M-9.9M subscribers",
    conservative: "$2.00",
    typical: "$5.00",
    higher: "$8.00",
  },
  {
    segment: "Very large channel",
    publicSignal: "10M+ subscribers",
    conservative: "$3.00",
    typical: "$6.50",
    higher: "$10.00",
  },
];

export const metadata: Metadata = {
  title: `Methodology | How ${siteConfig.shortName} Estimates Monetization`,
  description:
    "Learn how IsMonetized estimates YouTube monetization likelihood, confidence scores, monthly views, RPM ranges, and earnings using public channel data.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Methodology | How ${siteConfig.shortName} Works`,
    description:
      "A transparent explanation of the public signals, confidence scoring, RPM assumptions, and limitations behind IsMonetized estimates.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Methodology | How ${siteConfig.shortName} Works`,
    description:
      "How IsMonetized turns public YouTube channel signals into monetization and earnings estimates.",
    images: [siteConfig.ogImage],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="Methodology"
            icon={<CircleDashed className="h-4 w-4" />}
            title="How IsMonetized turns public YouTube signals into useful estimates"
            description="IsMonetized does not guess from a single number. It combines public channel size, views, video volume, upload activity, confidence signals, and RPM assumptions to estimate monetization likelihood and possible earnings ranges."
          />

          <GuideSection title="What IsMonetized estimates">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The checker estimates whether a public YouTube channel appears
              likely to be monetized, how confident that estimate is, and what
              a reasonable monthly and yearly ad-revenue range could look like.
              It is designed for research, competitor review, creator due
              diligence, and directional channel analysis.
            </p>

            <GuideList
              items={[
                "Monetization likelihood, such as possibly monetized, likely not monetized, or insufficient data",
                "A confidence score based on visible public signals",
                "Estimated monthly views derived from lifetime views, video count, and activity patterns",
                "Estimated monthly and yearly earnings ranges using public-data RPM assumptions",
                "Channel insights such as size, upload strength, activity level, and business potential",
              ]}
            />
          </GuideSection>

          <GuideSection title="What IsMonetized cannot confirm">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              YouTube does not expose an official public field that says whether
              every channel is monetized. IsMonetized cannot see private creator
              dashboards, AdSense accounts, YouTube Partner Program records,
              watch-time dashboards, revenue reports, or policy-review history.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              That means results should be read as informed estimates, not
              official YouTube confirmation. For important decisions, use the
              estimate as one input and verify against official sources where
              possible.
            </p>
          </GuideSection>

          <GuideSection title="Public signals used">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The model starts with public YouTube channel data and visible
              activity signals. These are useful because monetized channels tend
              to show a combination of eligibility, demand, and ongoing activity.
            </p>

            <GuideList
              items={[
                "Subscriber count, because it helps indicate public eligibility and audience scale",
                "Total view count, because it shows lifetime demand and channel reach",
                "Video count, because publishing depth affects monthly traffic assumptions",
                "Recent upload activity when available, because active channels are more likely to generate recurring views",
                "Average views per video when available, because it helps separate large inactive archives from active audience demand",
                "Visible channel metadata such as title, handle, thumbnail, and public identifiers",
              ]}
            />
          </GuideSection>

          <GuideSection title="Public signals not available">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Several of the most important monetization factors are private or
              not reliably visible from the outside. This is why a transparent
              estimate is more honest than a definitive yes-or-no claim.
            </p>

            <GuideList
              items={[
                "Official YouTube Partner Program approval status",
                "Private watch hours and Shorts eligibility progress",
                "AdSense account status, payment holds, or revenue account details",
                "Advertiser suitability decisions and limited-ads status",
                "Audience geography, ad fill rate, ad blockers, and member-only revenue",
                "Sponsorship, affiliate, merch, memberships, and off-platform income",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why monetization cannot be confirmed from public data alone">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A channel can have enough subscribers and views to look eligible
              while still being unapproved, demonetized, limited by policy, or
              missing required setup steps. The opposite can also happen: a
              channel can be monetized while some public signals are weak,
              hidden, delayed, or misleading.
            </p>
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Ads appearing on videos are also not perfect proof. YouTube may
              show ads in contexts where the creator is not earning in the way a
              viewer assumes. The safest approach is to interpret multiple
              public signals together.
            </p>
          </GuideSection>

          <GuideSection title="How the confidence score works">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The confidence score reflects the strength of visible evidence. In
              the current backend model, public thresholds such as subscriber
              count, lifetime views, and established upload history contribute
              to the score. Stronger public signals increase confidence; weak or
              missing signals lower it.
            </p>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                {
                  label: "Subscriber signal",
                  copy: "Channels above 1,000 subscribers have crossed a key public eligibility threshold.",
                },
                {
                  label: "View signal",
                  copy: "Meaningful lifetime views suggest real demand, not just a dormant profile.",
                },
                {
                  label: "Upload signal",
                  copy: "An established library makes the channel easier to evaluate than a sparse profile.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </GuideSection>

          <GuideSection title="How earnings ranges are estimated">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Earnings are estimated in two steps. First, the backend estimates
              likely monthly views using lifetime views, video count, average
              views per video, and activity multipliers for large or frequently
              updated channels. Second, it applies a low and high RPM range based
              on channel size.
            </p>

            <GuideList
              items={[
                "Very large archives and media-style channels receive higher monthly-view multipliers because old videos can keep generating traffic.",
                "Channels with strong average views per video receive a performance boost because public demand appears stronger.",
                "Channels with many videos can receive an activity boost because deep libraries often produce recurring long-tail views.",
                "Large channels receive a subscriber-based floor to avoid underestimating current traffic from public lifetime averages alone.",
              ]}
            />
          </GuideSection>

          <GuideSection title="RPM assumptions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              RPM means estimated creator revenue per 1,000 views after common
              platform and monetization effects. The current model uses channel
              size as a public proxy because exact niche, viewer location, ad
              fill, and advertiser demand are not fully visible from public data.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="min-w-full divide-y divide-[var(--border)] text-sm">
                <thead className="bg-[var(--background-elevated)] text-left text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Channel segment</th>
                    <th className="px-4 py-3 font-medium">Public signal</th>
                    <th className="px-4 py-3 font-medium">Conservative RPM</th>
                    <th className="px-4 py-3 font-medium">Typical midpoint</th>
                    <th className="px-4 py-3 font-medium">Higher RPM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-[var(--card)]">
                  {rpmRows.map((row) => (
                    <tr key={row.segment}>
                      <td className="px-4 py-3 font-medium text-[var(--foreground)]">
                        {row.segment}
                      </td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">
                        {row.publicSignal}
                      </td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">
                        {row.conservative}
                      </td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">
                        {row.typical}
                      </td>
                      <td className="px-4 py-3 text-[var(--foreground-muted)]">
                        {row.higher}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-6 text-[var(--foreground-muted)]">
              These RPM assumptions are directional. Finance, business, tech,
              and software audiences can exceed size-based estimates, while
              broad entertainment, shorts-heavy, or global audiences can fall
              below them.
            </p>
          </GuideSection>

          <GuideSection title="Why estimates can be wrong">
            <GuideList
              items={[
                "Public YouTube data can be delayed, hidden, rounded, removed, or unavailable.",
                "A channel may meet public thresholds but fail private policy review.",
                "A channel may earn from sponsorships, affiliates, memberships, or merch that public ad estimates do not capture.",
                "RPM can change by season, geography, niche, video length, advertiser demand, and policy status.",
                "Older videos, deleted videos, viral spikes, and dormant archives can distort lifetime averages.",
              ]}
            />
          </GuideSection>

          <GuideSection title="How to interpret results responsibly">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Treat the output as a research-grade estimate. A high score means
              the public signals are strong, not that YouTube has officially
              confirmed monetization. A low score means public evidence is weak,
              not that earning is impossible.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/"
                className="inline-flex items-center rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-hover)]"
              >
                Try the checker
              </Link>
              <Link
                href="/disclaimer"
                className="inline-flex items-center rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
              >
                Read the disclaimer
              </Link>
            </div>
          </GuideSection>

          <GuideSection title="Independent product">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              IsMonetized is independent and is not affiliated with, endorsed by,
              sponsored by, or officially connected to YouTube, Google, or
              Alphabet. The tool uses public signals to make estimates; it does
              not provide official YouTube Partner Program confirmation.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </div>
    </main>
  );
}
