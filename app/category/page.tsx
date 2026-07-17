import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { CategoryCard } from "@/components/sections/category-card";
import { StructuredData } from "@/components/structured-data";
import { categories } from "@/lib/data/categories";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Editorial Pillars & Coverage Categories — TechlumeAI",
  description:
    "Explore TechlumeAI's eight core editorial pillars spanning AI engineering, enterprise AI, frontier tools, programming, cloud architecture, and security.",
  path: "/category",
  keywords: ["TechlumeAI Pillars", "AI Categories", "Enterprise Tech Coverage", "Software Engineering Topics"]
});

export default function CategoriesDirectoryPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([{ name: "Categories", href: "/category" }]),
          collectionPageSchema(
            "Editorial Pillars & Coverage Categories — TechlumeAI",
            "Explore TechlumeAI's eight core editorial pillars spanning AI engineering, enterprise AI, frontier tools, programming, cloud architecture, and security.",
            "/category",
            categories.map((c) => ({ name: c.name, url: `/category/${c.slug}` }))
          )
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: "Categories Hub", href: "/category" }]} />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-10">
          <div className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
            <Layers className="size-4" />
            <span>8 Core Editorial Pillars</span>
          </div>
          <h1 className="mt-2 font-display text-4xl font-black leading-tight tracking-normal text-slate-900 dark:text-white sm:text-5xl">
            Technology Coverage Pillars
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Our newsroom organizes its technical investigations into eight structured pillars designed for deep, long-term topical authority.
          </p>
        </div>
      </section>

      <section className="container-page py-12 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
