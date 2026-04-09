"use client";

import { useState } from "react";
import { Search } from "lucide-react";

 type Props = {
  onSearch: (query: string) => Promise<void> | void;
  loading?: boolean;
};

export default function SearchBox({ onSearch, loading }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = async () => {
    if (!query.trim()) return;
    await onSearch(query);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Paste a YouTube handle or channel URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)] px-5 py-4 pr-12 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] shadow-[0_2px_8px_rgba(15,23,42,0.04)] focus:outline-none focus:border-[var(--brand)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--brand)_12%,transparent)] transition md:text-base"
          />

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]">
            <Search className="h-4 w-4 shrink-0" />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition hover:scale-[1.02] hover:bg-[var(--brand-hover)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed md:text-base"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Checking...
            </span>
          ) : (
            "Check channel"
          )}
        </button>
      </div>

      <p className="mt-2 text-xs text-[var(--foreground-muted)] md:text-sm">
        Supports @handles, channel URLs, and usernames
      </p>
    </div>
  );
}