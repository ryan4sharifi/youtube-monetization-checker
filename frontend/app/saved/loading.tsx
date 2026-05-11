export default function SavedLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-2">
        <div className="h-8 w-48 animate-pulse rounded-2xl bg-[var(--background-elevated)]" />
        <div className="h-5 w-72 animate-pulse rounded-xl bg-[var(--background-elevated)]" />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="h-40 animate-pulse rounded-xl border border-[var(--border)] bg-[var(--background-elevated)]"
          />
        ))}
      </div>
    </div>
  );
}
