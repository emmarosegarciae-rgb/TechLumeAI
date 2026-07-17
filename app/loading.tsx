export default function Loading() {
  return (
    <div className="container-page py-16">
      <div className="grid gap-4">
        <div className="h-8 w-56 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-24 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="h-52 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-52 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-52 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
