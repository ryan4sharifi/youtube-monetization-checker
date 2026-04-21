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
      <Section size="md" className="pt-4 md:pt-6 xl:pt-8">
        <div className="space-y-7 md:space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur md:text-xs">
              <MessageSquare className="h-3.5 w-3.5 shrink-0" />
              Contact
            </div>

            <h1
              className="max-w-4xl text-3xl font-extrabold tracking-[-0.06em] text-[var(--foreground)] md:text-4xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Get in touch
            </h1>

            <p className="max-w-3xl text-base leading-7 text-[var(--foreground-muted)]/90 md:text-lg md:leading-8">
              Questions, feedback, bug reports, or partnership ideas — this is
              the best place to reach out.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.08fr_0.92fr] md:gap-6">
            <div className="rounded-[32px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_94%,transparent)] shadow-[0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur">
                <Mail className="h-5 w-5 text-[var(--brand)]" />
              </div>

              <h2
                className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Email support
              </h2>

              <p className="mt-3 leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                For general questions, feedback, or support requests, send an
                email and include as much detail as possible so the message can
                be handled quickly.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--brand)] px-5 py-3 font-semibold text-white !text-white shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-hover)]"
                >
                  Email us
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="space-y-5 md:space-y-6">
              <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]/90">
                  Best for
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground-muted)]/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    <span>Bug reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    <span>Feature requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    <span>Business inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    <span>General feedback</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
                <div className="inline-flex items-center gap-2 text-[var(--foreground)]">
                  <ShieldCheck className="h-4 w-4 text-[var(--brand)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]/90">
                    Responsible communication
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground-muted)]/90 md:leading-8">
                  Please do not send sensitive personal data. This site is for
                  public-signal research and general support only.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-8">
            <h2
              className="text-2xl font-bold tracking-[-0.04em] text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Helpful links
            </h2>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
              >
                About
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
              >
                Disclaimer
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 font-medium text-[var(--brand)] transition duration-200 hover:text-[var(--brand-hover)]"
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
