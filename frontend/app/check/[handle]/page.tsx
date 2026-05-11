import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import ChannelCard from "@/components/result/ChannelCard";
import ScoreCard from "@/components/result/ScoreCard";
import SignalsCard from "@/components/result/SignalsCard";
import DisclaimerCard from "@/components/result/DisclaimerCard";
import EarningsEstimateCard from "@/components/result/EarningsEstimateCard";
import ChannelInsightsCard from "@/components/result/ChannelInsightsCard";
import EarningsExplanationSection from "@/components/result/EarningsExplanationSection";
import MonetizationAnalysisSection from "@/components/result/MonetizationAnalysisSection";
import MonetizationTipsSection from "@/components/result/MonetizationTipsSection";
import RelatedGuidesSection from "@/components/result/RelatedGuidesSection";
import FeedbackCard from "@/components/result/FeedbackCard";
import SaveChannelButton from "@/components/result/SaveChannelButton";
import { siteConfig } from "@/constants/site";
import { guides } from "@/lib/guides";
import {
  buildCheckCanonicalUrl,
  buildCheckPath,
  getCanonicalHandle,
  isInvalidCheckInput,
  safeDecodeURIComponent,
} from "@/lib/channelRoutes";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

if (!API_BASE) {
  console.error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

type PageProps = {
  params: Promise<{
    handle: string;
  }>;
};

type CheckResponse = {
  success?: boolean;
  channel: {
    title: string;
    youtube_channel_id: string;
    input_query?: string | null;
    normalized_query?: string | null;
    custom_url?: string | null;
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
    uploads_last_30d?: number | null;
    avg_views_per_video?: number | null;
  };
};

async function getChannelData(handle: string): Promise<CheckResponse | null> {
  if (!API_BASE) return null;

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

function getCanonicalHandleForResult(data: CheckResponse | null, input: string) {
  return (
    getCanonicalHandle(data?.channel.custom_url) ??
    getCanonicalHandle(data?.channel.normalized_query) ??
    getCanonicalHandle(data?.channel.input_query) ??
    getCanonicalHandle(input)
  );
}

function isFiniteCount(value: number | null | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function hasPositiveCount(value: number | null | undefined) {
  return isFiniteCount(value) && value > 0;
}

function isIndexableCheckResult(data: CheckResponse | null): data is CheckResponse {
  if (!data || data.success === false) return false;
  if (!data.channel?.title || !data.channel.youtube_channel_id) return false;

  const statCount = [
    data.channel.subscriber_count,
    data.channel.view_count,
    data.channel.video_count,
  ].filter(isFiniteCount).length;

  const hasActivity = [
    data.channel.subscriber_count,
    data.channel.view_count,
    data.channel.video_count,
  ].some(hasPositiveCount);

  const hasScore =
    typeof data.score?.confidence === "number" &&
    Array.isArray(data.score.positive_signals) &&
    Array.isArray(data.score.negative_signals);

  const hasEarnings =
    typeof data.earnings?.monthly_low === "number" &&
    typeof data.earnings.monthly_high === "number";

  return statCount >= 2 && hasActivity && hasScore && hasEarnings && Boolean(data.insights);
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

function formatNumber(value?: number | null) {
  if (value === null || value === undefined) return "unavailable";
  return value.toLocaleString();
}

function formatCurrency(value?: number | null) {
  if (value === null || value === undefined) return "unavailable";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getChannelSizeExplanation(size: string) {
  switch (size) {
    case "very_large":
      return "This is a very large channel by public subscriber scale, so even modest RPM assumptions can translate into meaningful earnings ranges.";
    case "large":
      return "This channel has large-audience public signals, which usually makes monetization more plausible when views and activity are also strong.";
    case "medium":
      return "This channel appears established enough to evaluate, but activity and view consistency matter more than size alone.";
    case "small":
      return "This channel is still small by public scale, so subscriber eligibility, recent activity, and view consistency become especially important.";
    default:
      return "The available public data is limited, so this channel should be interpreted with extra caution.";
  }
}

function getUploadStrengthExplanation(strength: string) {
  switch (strength) {
    case "strong":
      return "A deep upload history can create recurring long-tail traffic and gives the estimate more public evidence to work with.";
    case "moderate":
      return "A moderate library gives some useful signal, but recent consistency still matters for current monetization potential.";
    case "light":
      return "A light upload history makes the estimate less certain because there is less public content performance to evaluate.";
    default:
      return "Upload strength is unclear from the available public data.";
  }
}

function getBusinessPotentialExplanation(potential: string) {
  switch (potential) {
    case "high":
      return "High public reach suggests meaningful commercial potential, though actual revenue still depends on niche, audience geography, and policy status.";
    case "medium":
      return "The channel shows some commercial potential, but earnings may vary widely depending on content category and audience quality.";
    case "early":
      return "The channel appears early from public signals, so earnings estimates should be treated as especially directional.";
    default:
      return "Commercial potential is unclear because some public signals are unavailable or weak.";
  }
}

function getConfidenceExplanation(score: number) {
  if (score >= 80) {
    return "The public signals are strong and aligned, so the estimate has a higher degree of confidence. It is still not official confirmation.";
  }
  if (score >= 60) {
    return "The public signals point in a positive direction, but some important private signals remain unavailable.";
  }
  if (score >= 40) {
    return "The public evidence is mixed. Treat the result as a research signal rather than a firm conclusion.";
  }
  return "The public evidence is weak or sparse, so the result should be interpreted cautiously.";
}

function getEarningsRangeExplanation(earnings: CheckResponse["earnings"]) {
  return `The current estimate uses about ${formatNumber(
    earnings.estimated_monthly_views
  )} estimated monthly views with an RPM range of $${earnings.low_rpm.toFixed(
    2
  )} to $${earnings.high_rpm.toFixed(2)}, producing a monthly range of ${formatCurrency(
    earnings.monthly_low
  )} to ${formatCurrency(earnings.monthly_high)}.`;
}

function getNoindexRobots() {
  return {
    index: false,
    follow: false,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle: rawHandle } = await params;
  const input = safeDecodeURIComponent(rawHandle).trim();
  const query = getCanonicalHandle(input) ?? input;
  const data = isInvalidCheckInput(input) ? null : await getChannelData(query);
  const canonicalHandle = getCanonicalHandleForResult(data, input);
  const canonicalUrl = canonicalHandle
    ? buildCheckCanonicalUrl(canonicalHandle, siteConfig.url)
    : `${siteConfig.url}/check/${encodeURIComponent(input)}`;
  const displayHandle = canonicalHandle ?? input;
  const indexable = Boolean(canonicalHandle && isIndexableCheckResult(data));

  return {
    title: indexable
      ? `Is ${displayHandle} monetized? | ${siteConfig.name}`
      : `Channel result unavailable | ${siteConfig.name}`,
    description: indexable
      ? `Check if ${displayHandle} is monetized on YouTube. View an estimate based on subscribers, views, upload history, and other public signals.`
      : "This channel result could not be indexed because the public data is unavailable, invalid, or insufficient.",
    robots: indexable ? undefined : getNoindexRobots(),
    alternates: {
      canonical: canonicalUrl ?? undefined,
    },
    openGraph: {
      title: indexable
        ? `Is ${displayHandle} monetized? | ${siteConfig.name}`
        : `Channel result unavailable | ${siteConfig.name}`,
      description: indexable
        ? `Estimate whether ${displayHandle} is monetized on YouTube using public channel signals.`
        : "This channel result is not indexed because the public data is unavailable, invalid, or insufficient.",
      url: canonicalUrl ?? undefined,
      siteName: siteConfig.name,
      images: [siteConfig.ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: indexable
        ? `Is ${displayHandle} monetized? | ${siteConfig.name}`
        : `Channel result unavailable | ${siteConfig.name}`,
      description: indexable
        ? `Estimate whether ${displayHandle} is monetized on YouTube using public signals.`
        : "This channel result is not indexed because the public data is unavailable, invalid, or insufficient.",
      images: [siteConfig.ogImage],
    },
  };
}

export default async function CheckPage({ params }: PageProps) {
  const { handle: rawHandle } = await params;
  if (!rawHandle) {
    console.error("Missing handle in params");
    return null;
  }

  const input = safeDecodeURIComponent(rawHandle).trim();
  const inputCanonicalHandle = getCanonicalHandle(input);
  const inputCanonicalPath = inputCanonicalHandle ? buildCheckPath(inputCanonicalHandle) : null;

  if (inputCanonicalPath && input !== inputCanonicalHandle) {
    redirect(inputCanonicalPath);
  }

  const query = inputCanonicalHandle ?? input;
  const data = isInvalidCheckInput(input) ? null : await getChannelData(query);
  const canonicalHandle = getCanonicalHandleForResult(data, input);
  const canonicalPath = canonicalHandle ? buildCheckPath(canonicalHandle) : null;

  if (data && canonicalPath && input !== canonicalHandle) {
    redirect(canonicalPath);
  }

  const displayHandle = canonicalHandle ?? inputCanonicalHandle ?? input;
  const canonicalUrl =
    canonicalHandle && buildCheckCanonicalUrl(canonicalHandle, siteConfig.url);
  const indexable = Boolean(canonicalHandle && isIndexableCheckResult(data));

  const relatedGuides = guides
    .slice(0, 4)
    .map((g) => ({
      title: g.title,
      description: g.description,
      href: `/guides/${g.slug}`,
    }));

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
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-8 md:space-y-10">
          <div className="flex items-start justify-between gap-4">
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

          <div className="pt-1">
              <SaveChannelButton handle={displayHandle} />
          </div>
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
                <MonetizationAnalysisSection
                  data={{
                    score: data.score.confidence,
                    subscribers: data.channel.subscriber_count ?? undefined,
                    totalViews: data.channel.view_count ?? undefined,
                    uploadsLast30d: data.insights?.uploads_last_30d ?? undefined,
                    avgViewsPerVideo: data.insights?.avg_views_per_video ?? undefined,
                  }}
                />
                <EarningsEstimateCard earnings={data.earnings} />
                <FeedbackCard handle={displayHandle} />
                <EarningsExplanationSection
                  data={{
                    monthlyLow: data.earnings.monthly_low,
                    monthlyHigh: data.earnings.monthly_high,
                    yearlyLow: data.earnings.yearly_low,
                    yearlyHigh: data.earnings.yearly_high,
                    views: data.earnings.estimated_monthly_views,
                  }}
                />
                <ChannelInsightsCard insights={data.insights} />
                <MonetizationTipsSection
                  data={{
                    score: data.score.confidence,
                    subscribers: data.channel.subscriber_count ?? undefined,
                    uploadsLast30d: data.insights?.uploads_last_30d ?? undefined,
                    avgViewsPerVideo: data.insights?.avg_views_per_video ?? undefined,
                    isLikelyMonetized: data.score.status === "possibly_monetized",
                  }}
                />
                <DisclaimerCard />
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                <h2
                  className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Summary for {displayHandle}
                </h2>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)] md:leading-8">
                  Based on publicly available data, <span className="font-medium text-[var(--foreground)]">{displayHandle}</span> is currently classified as <span className="font-medium text-[var(--foreground)]">{getStatusLabel(data.score.status)}</span> with a confidence score of <span className="font-medium text-[var(--foreground)]">{data.score.confidence}%</span>. This estimate is derived from signals such as subscriber count, total views, and channel activity.
                </p>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)] md:leading-8">
                  Channels that meet YouTube’s monetization thresholds — including 1,000 subscribers and sufficient watch time — are generally more likely to be approved for monetization. Strong engagement, consistent uploads, and audience retention also play a key role in determining whether a channel can generate revenue.
                </p>
                <p className="mt-3 leading-7 text-[var(--foreground-muted)] md:leading-8">
                  While this analysis provides a data-driven estimate, actual monetization status may vary depending on YouTube’s internal review process, content policies, and advertiser suitability.
                </p>
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur md:p-7">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
                    What this means
                  </p>
                  <h2
                    className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    A practical read on {displayHandle}
                  </h2>
                  <p className="mt-3 leading-7 text-[var(--foreground-muted)] md:leading-8">
                    The estimate combines the backend score, public channel
                    scale, upload depth, and earnings range. These explanations
                    help translate the cards above into a decision-useful
                    research summary.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      label: "Channel size classification",
                      value: data.insights.channel_size.replaceAll("_", " "),
                      copy: getChannelSizeExplanation(data.insights.channel_size),
                    },
                    {
                      label: "Confidence score",
                      value: `${data.score.confidence}%`,
                      copy: getConfidenceExplanation(data.score.confidence),
                    },
                    {
                      label: "Earnings range",
                      value: `${formatCurrency(data.earnings.monthly_low)}-${formatCurrency(data.earnings.monthly_high)} / month`,
                      copy: getEarningsRangeExplanation(data.earnings),
                    },
                    {
                      label: "Upload and activity read",
                      value: data.insights.upload_strength,
                      copy: getUploadStrengthExplanation(data.insights.upload_strength),
                    },
                    {
                      label: "Business potential",
                      value: data.insights.business_potential,
                      copy: getBusinessPotentialExplanation(data.insights.business_potential),
                    },
                    {
                      label: "Public-data caveat",
                      value: "Estimate only",
                      copy: "Public signals cannot reveal private YouTube Studio data, AdSense status, policy review outcomes, or official YouTube Partner Program approval.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                        {item.label}
                      </p>
                      <p className="mt-2 capitalize font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                        {item.copy}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_88%,transparent)] p-4 text-sm leading-7 text-[var(--foreground-muted)] md:p-5">
                  <p>
                    Suggested next step: compare this result against the
                    channel&apos;s recent uploads, content category, audience, and
                    any public business signals. Use the{" "}
                    <Link
                      href="/methodology"
                      className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                    >
                      methodology
                    </Link>{" "}
                    to understand how the estimate is formed, and review the{" "}
                    <Link
                      href="/disclaimer"
                      className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                    >
                      disclaimer
                    </Link>{" "}
                    before using the result for business decisions.
                  </p>
                </div>
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
                  <div className="mt-4">
                    <Link
                      href="/methodology"
                      className="text-sm font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                    >
                      Learn how this is calculated
                    </Link>
                  </div>
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

              <RelatedGuidesSection guides={relatedGuides} />

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--foreground-muted)]/90">
                <Link
                  href="/"
                  className="font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  Check another channel
                </Link>
                <span>•</span>
                <Link
                  href="/methodology"
                  className="font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  Methodology
                </Link>
                <span>•</span>
                <Link
                  href="/faq"
                  className="font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  FAQ
                </Link>
                <span>•</span>
                <Link
                  href="/disclaimer"
                  className="font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  Disclaimer
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {indexable && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </>
      )}
    </main>
  );
}
