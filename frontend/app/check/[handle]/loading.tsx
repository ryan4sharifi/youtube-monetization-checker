export default function CheckLoading() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-6 md:px-10 pt-4 md:pt-6 xl:pt-8">
        <div className="mx-auto max-w-6xl space-y-8 md:space-y-10">
          <div className="space-y-3">
            <div className="h-7 w-56 animate-pulse rounded-full border border-[var(--border)] bg-[var(--background-elevated)]" />
            <div className="h-9 max-w-xl animate-pulse rounded-2xl bg-[var(--background-elevated)]" />
            <div className="h-5 max-w-2xl animate-pulse rounded-xl bg-[var(--background-elevated)]" />
          </div>

          <div className="space-y-4">
            <div className="rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 animate-pulse rounded-full bg-[var(--background-elevated)]" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-5 max-w-xs animate-pulse rounded-xl bg-[var(--background-elevated)]" />
                  <div className="h-4 max-w-sm animate-pulse rounded-xl bg-[var(--background-elevated)]" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="h-20 animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--background-elevated)]"
                  />
                ))}
              </div>
            </div>

            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="h-32 animate-pulse rounded-[28px] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--card)_94%,transparent)] shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
