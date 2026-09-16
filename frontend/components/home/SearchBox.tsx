"use client";

import { useState, useCallback } from "react";
import { Search } from "lucide-react";

 type Props = {
  onSearch: (query: string) => Promise<void> | void;
  loading?: boolean;
};

export default function SearchBox({ onSearch, loading }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      const q = query.trim();
      if (!q) return;
      await onSearch(q);
    },
    [query, onSearch]
  );

  return (
    <div className="w-full max-w-3xl md:max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <input
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            aria-label="YouTube channel name, handle, username, or URL"
            placeholder="Channel name, @handle, or YouTube URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-11 rounded-2xl border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background-elevated)_92%,transparent)] px-5 pr-10 text-[15px] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)] transition-all duration-200"
          />

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground-muted)]">
            <Search className="h-4 w-4 shrink-0" />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="inline-flex h-11 items-center justify-center rounded-2xl bg-[var(--brand)] px-6 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-hover)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.15)] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[color:color-mix(in_srgb,var(--brand)_12%,transparent)]"
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
      </form>

      <p className="mt-2 text-xs text-[var(--foreground-muted)]">
        Free estimate. No YouTube or YouTube Studio login required.
      </p>
    </div>
  );
}
