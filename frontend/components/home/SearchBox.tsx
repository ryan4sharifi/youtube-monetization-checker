

"use client";

import { useState } from "react";

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
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="@mrbeast or youtube link"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand)] transition"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--brand-hover)] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Checking..." : "Check"}
        </button>
      </div>
    </div>
  );
}