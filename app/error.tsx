"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to enterprise error reporting/monitoring service
    console.error("TechlumeAI Runtime Error Boundary Triggered:", error);
  }, [error]);

  return (
    <section className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
      <div className="max-w-xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-luxe dark:border-slate-800 dark:bg-slate-900/60">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-950/80 dark:text-rose-400">
          <AlertTriangle className="size-6" aria-hidden="true" />
        </div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-rose-600 dark:text-rose-400">
          500 — System Exception
        </p>
        <h1 className="font-display text-2xl font-black tracking-normal text-slate-900 dark:text-white sm:text-3xl">
          An unexpected technical error occurred.
        </h1>
        <p className="mx-auto mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          Our engineering monitoring systems have logged this exception. You can attempt to retry loading this view or return to our core knowledge architecture.
        </p>

        {error.digest && (
          <div className="mt-4 rounded-md bg-slate-200/70 px-3 py-1.5 text-xs font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            Error Digest ID: {error.digest}
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button onClick={() => reset()} variant="default" className="gap-2">
            <RefreshCw className="size-4" aria-hidden="true" />
            Try Again
          </Button>
          <Button asChild variant="secondary" className="gap-2">
            <Link href="/search">
              <Search className="size-4" aria-hidden="true" />
              Search Archive
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/">
              <Home className="size-4" aria-hidden="true" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
