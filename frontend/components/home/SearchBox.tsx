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
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Paste a YouTube handle or channel URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-2.5 pr-10 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)] transition-colors"
          />

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]">
            <Search className="h-4 w-4 shrink-0" />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--brand-hover)] hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/80 border-t-transparent" />
              Checking...
            </span>
          ) : (
            "Check channel"
          )}
        </button>
      </div>

      <p className="mt-2 text-xs text-[var(--foreground-muted)]">
        Supports @handles, channel URLs, and usernames
      </p>
    </div>
  );
}