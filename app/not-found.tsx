import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found (404) — TechlumeAI Archive",
  description: "The requested article, author profile, or technical guide could not be found in the TechlumeAI archive.",
  path: "/404",
  noIndex: true
});

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[64vh] place-items-center py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="relative mx-auto mb-6 aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-luxe dark:border-slate-800 dark:bg-slate-900/60">
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
            <Image
              src="/images/illustrations/404-signal-lost.svg"
              alt="404 Signal Lost Architecture Topology"
              fill
              sizes="(min-width: 768px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-300">
          404
        </p>
        <h1 className="font-display text-4xl font-black tracking-normal">
          This page is outside the current signal.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          The article, author, or category may have moved. Search the TechlumeAI
          archive or return to the latest coverage.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/search">
              <Search className="size-4" aria-hidden="true" />
              Search
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
