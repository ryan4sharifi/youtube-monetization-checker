import type { Metadata } from "next";
import Link from "next/link";
import ChannelCard from "@/components/result/ChannelCard";
import ScoreCard from "@/components/result/ScoreCard";
import SignalsCard from "@/components/result/SignalsCard";
import DisclaimerCard from "@/components/result/DisclaimerCard";
import EarningsEstimateCard from "@/components/result/EarningsEstimateCard";
import ChannelInsightsCard from "@/components/result/ChannelInsightsCard";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

type PageProps = {
  params: Promise<{
    handle: string;
  }>;
};

type CheckResponse = {
  channel: {
    title: string;
    youtube_channel_id: string;
    thumbnail_url?: string | null;
    subscriber_count?: number | null;
    view_count?: number | null;
    video_count?: number | null;
  };
  score: {
    status: string;
    confidence: number;
    positive_signals: string[];
    negative_signals: string[];
  };
  earnings: {
    estimated_monthly_views: number;
    low_rpm: number;
    high_rpm: number;
    monthly_low: number;
    monthly_high: number;
    yearly_low: number;
    yearly_high: number;
    confidence: string;
  };
  insights: {
    channel_size: string;
    upload_strength: string;
    activity_level: string;
    business_potential: string;
  };
};

async function getChannelData(handle: string): Promise<CheckResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/api/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: handle }),
      cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

function normalizeHandle(rawHandle: string) {
  const decoded = decodeURIComponent(rawHandle).trim();

  const isUrl =
    decoded.startsWith("http://") ||
    decoded.startsWith("https://") ||
    decoded.includes("youtube.com/") ||
    decoded.includes("youtu.be/");

  if (isUrl) return decoded;
  if (decoded.startsWith("@")) return decoded;

  return `@${decoded}`;
}

function getDisplayLabel(input: string) {
  try {
    const isUrl =
      input.startsWith("http://") ||
      input.startsWith("https://") ||
      input.includes("youtube.com/") ||
      input.includes("youtu.be/");

    if (!isUrl) return input;

    const url = new URL(input);
    const path = url.pathname;

    if (path.startsWith("/@")) {
      return path.slice(1); // returns "@FoxNews"
    }

    return input;
  } catch {
    return input;
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case "possibly_monetized":
      return "Possibly Monetized";
    case "likely_not_monetized":
      return "Likely Not Monetized";
    case "insufficient_data":
    default:
      return "Insufficient Data";
  }
}

function buildCanonicalUrl(handle: string) {
  return `${siteConfig.url}/check/${encodeURIComponent(handle)}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle: rawHandle } = await params;
  const handle = normalizeHandle(rawHandle);
  const canonicalUrl = buildCanonicalUrl(handle);

  return {
    title: `Is ${handle} monetized? | ${siteConfig.name}`,
    description: `Check if ${handle} is monetized on YouTube. View an estimate based on subscribers, views, upload history, and other public signals.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Is ${handle} monetized? | ${siteConfig.name}`,
      description: `Estimate whether ${handle} is monetized on YouTube using public channel signals.`,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [siteConfig.ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Is ${handle} monetized? | ${siteConfig.name}`,
      description: `Estimate whether ${handle} is monetized on YouTube using public signals.`,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function CheckPage({ params }: PageProps) {
  const { handle: rawHandle } = await params;
  const handle = normalizeHandle(rawHandle);
  const displayHandle = getDisplayLabel(handle);
  const data = await getChannelData(handle);
  const canonicalUrl = buildCanonicalUrl(handle);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Can this tool confirm whether ${displayHandle} is officially monetized?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `No. ${siteConfig.name} provides an estimate using public YouTube data such as subscribers, views, and upload history. It does not have access to YouTube's internal monetization status.`,
        },
      },
      {
        "@type": "Question",
        name: "How is the monetization estimate calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The estimate uses public channel signals such as subscriber count, total views, upload volume, and other activity indicators to determine whether a channel appears likely to be monetized.",
        },
      },
      {
        "@type": "Question",
        name: "Why might this estimate be inaccurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "YouTube does not expose a public yes-or-no monetization field for every channel. A channel may meet public thresholds but still not be approved, or it may be monetized while some important signals are not visible publicly.",
        },
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Is ${displayHandle} monetized?`,
    url: canonicalUrl,
    description: `Estimate whether ${displayHandle} is monetized on YouTube using public signals.`,
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md" className="pt-4 md:pt-6 xl:pt-8">
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              YouTube Monetization Check
            </div>
            <h1
              className="max-w-3xl text-2xl font-semibold tracking-[-0.03em] md:text-3xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Is {displayHandle} monetized on YouTube?
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-[var(--foreground-muted)]">
              This page provides an estimate of whether <span className="font-medium text-[var(--foreground)]">{displayHandle}</span> is monetized on YouTube using public signals such as subscribers, views, and upload activity. This is not an official YouTube confirmation, but a data-driven indication of whether the channel appears likely to be monetized.
            </p>
          </div>

          {!data && (
            <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="text-[var(--foreground-muted)]/90 leading-7">
                We could not fetch data for this channel right now. Double-check
                the handle or try another channel.
              </p>
              <div className="mt-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          )}

          {data && (
            <>
              <div className="space-y-4">
                <ChannelCard channel={data.channel} />
                <ScoreCard score={data.score} />
                <SignalsCard
                  positive_signals={data.score.positive_signals}
                  negative_signals={data.score.negative_signals}
                />
                <EarningsEstimateCard earnings={data.earnings} />
                <ChannelInsightsCard insights={data.insights} />
                <DisclaimerCard />
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                <h2
                  className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Summary for {displayHandle}
                </h2>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                  Based on the currently visible public data, this channel is
                  classified as <span className="font-medium text-[var(--foreground)]">{getStatusLabel(data.score.status)}</span>{" "}
                  with a confidence score of <span className="font-medium text-[var(--foreground)]">{data.score.confidence}%</span>.
                  Public signals like subscriber count, total views, and upload
                  history were used to generate this estimate.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                  <h2
                    className="text-xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    How this estimate works
                  </h2>
                  <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                    This tool analyzes public YouTube channel signals such as
                    subscriber count, total views, channel activity, and upload
                    history. It does not use private creator data or YouTube
                    Studio access.
                  </p>
                </div>

                <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                  <h2
                    className="text-xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Why the result may change
                  </h2>
                  <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                    YouTube monetization is not publicly confirmed for every
                    channel. A channel can gain or lose eligibility over time,
                    and some monetization decisions depend on internal review,
                    policy compliance, and region-specific rules.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                <h2
                  className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Frequently asked questions
                </h2>

                <div className="mt-5 space-y-4 md:space-y-5">
                  <div>
                  <h3 className="text-base font-medium tracking-[-0.02em] text-[var(--foreground)]">
                      Can this tool confirm whether {displayHandle} is officially monetized?
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                      No. This tool provides an estimate based on public data. It
                      does not have access to YouTube&apos;s internal monetization
                      approval status.
                    </p>
                  </div>

                  <div>
                  <h3 className="text-base font-medium tracking-[-0.02em] text-[var(--foreground)]">
                      What signals are used to estimate monetization?
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                      The estimate looks at public signals such as subscribers,
                      total views, video count, and other visible channel
                      activity indicators.
                    </p>
                  </div>

                  <div>
                  <h3 className="text-base font-medium tracking-[-0.02em] text-[var(--foreground)]">
                      Why is this not always 100% accurate?
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                      YouTube does not expose a public monetization field for all
                      channels. Public data can suggest likelihood, but it cannot
                      guarantee the final status.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground-muted)]/90">
                <Link
                  href="/"
                  className="font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  Check another channel
                </Link>
                <span>•</span>
                <Link
                  href="/"
                  className="font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  Back to homepage
                </Link>
              </div>
            </>
          )}
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}