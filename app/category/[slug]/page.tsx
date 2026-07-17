import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/ad-slot";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { CategoryResourceHub } from "@/components/category/category-resource-hub";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { StructuredData } from "@/components/structured-data";
import { categories, getCategory } from "@/lib/data/categories";
import { getArticlesByCategory } from "@/lib/data/articles";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, categoryPageSchema, collectionPageSchema, faqSchema } from "@/lib/seo/schema";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return createMetadata({ title: "Category Not Found" });
  }

  return createMetadata({
    title: `${category.name} — Editorial Pillar & Guides`,
    description: category.description,
    path: `/category/${category.slug}`,
    image: category.image,
    keywords: [category.name, `${category.name} Architecture`, ...(category.topicClusters || []), "Enterprise Guides"],
    category: category.slug
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.slug);

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: category.name, href: `/category/${category.slug}` }
          ]),
          collectionPageSchema(
            category.name,
            category.description,
            `/category/${category.slug}`,
            categoryArticles.map((a) => ({ name: a.title, url: `/articles/${a.slug}` }))
          ),
          categoryPageSchema(
            category,
            categoryArticles.map((a) => ({ name: a.title, url: `/articles/${a.slug}` }))
          ),
          ...(category.faqs && category.faqs.length > 0 ? [faqSchema(category.faqs)] : [])
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: category.name, href: `/category/${category.slug}` }]} />
        <div className="mt-8 grid gap-8 rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[1fr_360px] lg:p-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-300">
              Enterprise Editorial Pillar & Resource Hub
            </p>
            <h1 className="font-display text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {category.description}
            </p>
            <div className="mt-6 grid max-w-lg grid-cols-3 gap-3">
              <Metric label="Articles" value={categoryArticles.length} />
              <Metric
                label="Trending"
                value={categoryArticles.filter((article) => article.trending).length}
              />
              <Metric
                label="Guides"
                value={categoryArticles.filter((article) => article.isCornerstone || article.tags.includes("Guides")).length}
              />
            </div>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-[var(--radius)] bg-slate-100 dark:bg-slate-900">
            <Image
              src={category.image}
              alt={`${category.name} coverage illustration`}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <AdSlot size="leaderboard" />
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <CategoryResourceHub category={category} categoryArticles={categoryArticles} />
          <aside className="grid content-start gap-8">
            <NewsletterInline />
            <AdSlot size="rectangle" />
          </aside>
        </div>
      </section>
    </>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[var(--radius)] bg-slate-50 p-3 text-center dark:bg-slate-900">
      <p className="font-display text-2xl font-black">{value}</p>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
