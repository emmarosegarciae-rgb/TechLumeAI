import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { authors } from "@/lib/data/authors";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Editorial Leadership & Authors Index — TechlumeAI",
  description:
    "Meet the award-winning technical journalists, senior AI engineers, and research analysts behind TechlumeAI's enterprise coverage.",
  path: "/authors",
  keywords: ["TechlumeAI Authors", "Editorial Team", "AI Journalists", "Technical Writers"]
});

export default function AuthorsDirectoryPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([{ name: "Authors", href: "/authors" }]),
          collectionPageSchema(
            "Editorial Leadership & Authors Index — TechlumeAI",
            "Meet the award-winning technical journalists, senior AI engineers, and research analysts behind TechlumeAI's enterprise coverage.",
            "/authors",
            authors.map((a) => ({ name: a.name, url: `/authors/${a.slug}` }))
          )
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: "Authors Hub", href: "/authors" }]} />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
            <UserRound className="size-4" />
            <span>Editorial Authority Directory</span>
          </div>
          <h1 className="mt-2 font-display text-4xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-5xl">
            Meet the TechlumeAI Editorial Team
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Our newsroom combines decades of enterprise technology journalism with active software engineering and AI research expertise to deliver high-signal technical briefings.
          </p>
        </div>
      </section>

      <section className="container-page py-12 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-luxe transition-all hover:-translate-y-1 hover:border-blue-400 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-sky-500"
            >
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={author.avatar}
                    alt={`${author.name} — ${author.role}`}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-display text-lg font-black text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-300">
                      {author.name}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {author.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 line-clamp-3">
                  {author.bio}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 dark:border-slate-900">
                {author.expertise.slice(0, 3).map((exp) => (
                  <span
                    key={exp}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
