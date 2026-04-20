

import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideList from "@/components/guides/GuideList";
import GuideCTA from "@/components/guides/GuideCTA";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Some YouTube Channels Are Not Monetized (Common Reasons)",
  description:
    "Understand the most common reasons YouTube channels fail to get monetized and how to avoid them.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Section size="md">
        <div className="space-y-7 md:space-y-8">
          <GuideHero
            eyebrow="YouTube Monetization Guide"
            icon={<AlertCircle className="h-4 w-4" />}
            title="Why some YouTube channels are not monetized"
            description="A lot of channels hit the subscriber and watch time requirements but still don’t get approved for monetization. The reason is simple: YouTube doesn’t just look at numbers — it looks at the type and quality of content on your channel."
          />

          <GuideSection title="The short answer">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Most channels are rejected because their content doesn’t meet YouTube’s monetization policies. Even if you have enough views and subscribers, you still need original, advertiser-friendly content.
            </p>
          </GuideSection>

          <GuideSection title="Common reasons channels get rejected">
            <GuideList
              items={[
                "Reused or reposted content",
                "Low-effort videos with little original value",
                "Compilation or clip-based channels",
                "Content that violates advertiser-friendly guidelines",
                "Inconsistent or unclear channel focus",
              ]}
            />
          </GuideSection>

          <GuideSection title="Reused content is the biggest issue">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              One of the most common reasons channels get rejected is reused content. This includes reposting clips, reaction videos without meaningful commentary, or compilations that don’t add value.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              YouTube wants to see that you’re creating something original, not just repackaging existing content.
            </p>
          </GuideSection>

          <GuideSection title="Low-value content signals">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              Even if your videos are technically original, they may still be considered low-value if they don’t offer anything meaningful to viewers.
            </p>

            <GuideList
              items={[
                "Very short or repetitive videos",
                "Generic content with no clear purpose",
                "AI-generated or automated content with no human input",
                "Channels that feel mass-produced",
              ]}
            />
          </GuideSection>

          <GuideSection title="Why hitting the requirements isn’t enough">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The 1,000 subscribers and 4,000 watch hours are just the minimum entry requirements. Approval depends on whether your channel meets YouTube’s quality standards.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              That’s why some channels get approved quickly while others are repeatedly rejected.
            </p>
          </GuideSection>

          <GuideSection title="What improves your chances of approval">
            <GuideList
              items={[
                "Original content with clear value",
                "Consistent topic or niche",
                "Videos where you are clearly adding commentary or insight",
                "Content that keeps viewers engaged",
              ]}
            />
          </GuideSection>

          <GuideSection title="Real example">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              A channel that uploads movie clips or viral reposts might hit 1,000 subscribers quickly, but still get rejected. Meanwhile, a smaller channel that creates simple tutorial videos can get approved because the content is original and useful.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              The difference isn’t the growth — it’s the type of content.
            </p>
          </GuideSection>

          <GuideSection title="Common questions">
            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">Can you reapply if you get rejected?</strong><br />
              Yes. You can reapply after fixing the issues on your channel.
            </p>

            <p className="leading-7 md:leading-8 text-[var(--foreground-muted)]">
              <strong className="text-[var(--foreground)]">How do you know if your content is original enough?</strong><br />
              If you’re adding clear value — explanation, commentary, or unique content — you’re usually on the right track.
            </p>
          </GuideSection>

          <GuideCTA />
        </div>
      </Section>
    </main>
  );
}