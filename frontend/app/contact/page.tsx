import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/constants/site";

const pageUrl = `${siteConfig.url}/contact`;
const contactEmail = "support@ismonetized.com";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Get in touch with the team behind this YouTube monetization checker.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch with the team behind this YouTube monetization checker.",
    url: pageUrl,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch with the team behind this YouTube monetization checker.",
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)] md:text-xs">
              <MessageSquare className="h-3.5 w-3.5 shrink-0" />
              Contact
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold tracking-[-0.05em] text-[var(--foreground)] md:text-5xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Get in touch
            </h1>

            <p className="max-w-3xl text-base leading-7 text-[var(--foreground-muted)] md:text-lg md:leading-8">
              Questions, feedback, bug reports, or partnership ideas — this is
              the best place to reach out.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] shadow-[0_4px_14px_rgba(15,23,42,0.05)]">
                <Mail className="h-5 w-5 text-[var(--brand)]" />
              </div>

              <h2
                className="mt-4 text-2xl font-bold tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Email support
              </h2>

              <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
                For general questions, feedback, or support requests, send an
                email and include as much detail as possible so the message can
                be handled quickly.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white transition hover:bg-[var(--brand-hover)]"
                >
                  Email us
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Best for
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground-muted)]">
                  <li>• Bug reports</li>
                  <li>• Feature requests</li>
                  <li>• Business inquiries</li>
                  <li>• General feedback</li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)]">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--brand)]" />
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Responsible communication
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]">
                  Please do not send sensitive personal data. This site is for
                  public-signal research and general support only.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2
              className="text-2xl font-bold tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Helpful links
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                About
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                Disclaimer
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                Privacy Policy
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
