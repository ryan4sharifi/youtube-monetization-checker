import type { Metadata } from "next";
import SavedChannelsList from "@/components/saved/SavedChannelsList";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: `Saved Channels | ${siteConfig.shortName}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function SavedPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-[-0.03em]">
            Saved Channels
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Track and revisit channels you’re analyzing
          </p>
        </div>
      </div>

      <div className="mt-8">
        <SavedChannelsList />
      </div>
    </div>
  );
}
