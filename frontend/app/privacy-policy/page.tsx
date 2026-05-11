import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/privacy-policy`;

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Learn how IsMonetized handles public YouTube data, cookies, analytics, advertising, and privacy choices.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Learn how IsMonetized handles public YouTube data, cookies, analytics, advertising, and privacy choices.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <ShieldCheck className="h-3.5 w-3.5 opacity-70" />
              Privacy Policy
            </div>

            <h1
              className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Your privacy matters
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-[var(--foreground-muted)] md:text-base">
              This page explains how {siteConfig.shortName} handles public
              YouTube data, cookies, analytics, advertising services, and your
              privacy choices.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Information you provide</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                You can use the checker by entering a public YouTube channel,
                handle, or URL. If you contact us, sign in, or use saved-channel
                features, we may process the information needed to provide those
                features, such as your email address, support message, or saved
                channel list.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Public YouTube channel data</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} uses publicly available YouTube channel
                information to generate estimates and insights. This public data
                may include channel name, handle, subscriber count, total view
                count, video count, upload activity, thumbnails, video metadata,
                and other public channel metadata.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">How public data is used</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Public YouTube data is used to estimate whether a channel may be
                monetized, explain the visible signals behind that estimate,
                produce confidence scores, estimate possible earnings, and
                improve site reliability. {siteConfig.shortName} does not
                confirm official YouTube Partner Program status.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">YouTube API Services</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} may use YouTube API Services or related
                public YouTube data sources to retrieve publicly available
                channel information. By using this site, you also acknowledge the{" "}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                >
                  YouTube Terms of Service
                </a>{" "}
                and the{" "}
                <a
                  href="https://developers.google.com/youtube/terms/api-services-terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                >
                  YouTube API Services Terms of Service
                </a>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Google Analytics</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} may use Google Analytics to understand
                site traffic, feature usage, device information, and general
                performance trends. Google Analytics may use cookies or similar
                technologies to help measure how visitors use the site. You can
                learn more in the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                >
                  Google Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Google AdSense and advertising</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} may use Google AdSense and other
                third-party advertising vendors. Third-party vendors, including
                Google, may use cookies to serve ads based on a visitor&apos;s
                prior visits to this site or other websites.
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                Advertising cookies and similar technologies may be used for ad
                delivery, ad measurement, fraud prevention, frequency capping,
                and personalized advertising where permitted.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Cookies and similar technologies</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                We may use cookies, local storage, pixels, and similar
                technologies for analytics, security, site functionality,
                preferences, performance monitoring, and advertising. You can
                control cookies through your browser or device settings.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Personalized ads and opt-out choices</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                You can manage or opt out of personalized ads through{" "}
                <a
                  href="https://myadcenter.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                >
                  Google My Ad Center
                </a>{" "}
                and your browser or device controls. You can also use the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                >
                  Google Analytics opt-out browser add-on
                </a>{" "}
                where available.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Data limitations</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                Public YouTube data may be incomplete, delayed, inaccurate,
                hidden, removed, or unavailable. Some channels hide public
                metrics, change settings, delete videos, or update over time.
                These limitations can affect estimates and earnings ranges.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">No affiliation</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                {siteConfig.shortName} is independent and is not affiliated
                with, endorsed by, sponsored by, or officially connected to
                YouTube, Google, or Alphabet.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors">
              <h2 className="text-base font-semibold">Changes to this policy</h2>
              <p className="mt-1.5 text-sm leading-6 text-[var(--foreground-muted)]">
                We may update this Privacy Policy as the product, data sources,
                analytics, or advertising services change. The latest version
                will be posted on this page.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors md:p-6">
            <h2 className="text-xl font-semibold">Back to the tool</h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)]">
              Use the checker to estimate monetization based on public data.
            </p>

            <div className="mt-5 flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white !text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
