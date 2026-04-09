

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/privacy-policy`;

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Learn how we handle data, privacy, and information when using this YouTube monetization checker.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Learn how we handle data, privacy, and information when using this YouTube monetization checker.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Privacy Policy
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Your privacy matters
            </h1>

            <p className="max-w-3xl text-lg text-[var(--foreground-muted)]">
              This page explains what data is collected, how it is used, and how
              your information is handled when using {siteConfig.name}.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold">Information we collect</h2>
              <p className="mt-3 text-[var(--foreground-muted)] leading-7">
                We do not require accounts or personal data to use this tool. The
                only information processed is publicly available YouTube channel
                data based on the input you provide.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold">How we use information</h2>
              <p className="mt-3 text-[var(--foreground-muted)] leading-7">
                Data is used solely to generate monetization estimates and
                improve the performance and reliability of the tool.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold">Cookies and analytics</h2>
              <p className="mt-3 text-[var(--foreground-muted)] leading-7">
                This site may use basic analytics tools or cookies to understand
                usage patterns and improve user experience. No personally
                identifiable information is collected.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold">Third-party services</h2>
              <p className="mt-3 text-[var(--foreground-muted)] leading-7">
                We may rely on third-party APIs or services (such as YouTube data
                sources) to provide functionality. These services operate under
                their own privacy policies.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold">Data security</h2>
              <p className="mt-3 text-[var(--foreground-muted)] leading-7">
                We take reasonable measures to protect data and ensure the
                reliability of the service. However, no online system can be
                guaranteed to be completely secure.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold">Changes to this policy</h2>
              <p className="mt-3 text-[var(--foreground-muted)] leading-7">
                This policy may be updated over time. Continued use of the site
                means you accept any updates.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="text-2xl font-bold">Back to the tool</h2>
            <p className="mt-3 max-w-2xl text-[var(--foreground-muted)]">
              Use the checker to estimate monetization based on public data.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white hover:bg-[var(--brand-hover)]"
              >
                Try the checker
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}