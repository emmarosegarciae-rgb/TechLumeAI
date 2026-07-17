"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Bookmark, CheckCircle2, Flame, Layers, Sparkles, Star } from "lucide-react";
import type { Article, Category } from "@/lib/types";
import { getArticle } from "@/lib/data/articles";
import { getTopicsByPillar } from "@/lib/data/topics";
import { getGlossaryEntitiesByPillar } from "@/lib/data/glossary";
import { categories } from "@/lib/data/categories";
import { ArticleCard } from "@/components/article/article-card";
import { CategoryArchive } from "@/components/category/category-archive";
import { Badge } from "@/components/ui/badge";

type CategoryResourceHubProps = {
  category: Category;
  categoryArticles: Article[];
};

export function CategoryResourceHub({
  category,
  categoryArticles
}: CategoryResourceHubProps) {
  const featuredGuide = category.featuredGuideSlug
    ? getArticle(category.featuredGuideSlug)
    : categoryArticles.find((a) => a.isCornerstone || a.featured) || categoryArticles[0];

  const pillarTopics = getTopicsByPillar(category.slug);
  const pillarEntities = getGlossaryEntitiesByPillar(category.slug);
  const editorsPicks = categoryArticles.filter((a) => a.editorsPick && a.slug !== featuredGuide?.slug);
  const popularArticles = categoryArticles.filter((a) => a.trending && a.slug !== featuredGuide?.slug);
  const relatedCategories = categories.filter((c) => c.slug !== category.slug && c.slug !== "reviews" && c.slug !== "videos");

  return (
    <div className="grid gap-12">
      {/* 1. Featured Cornerstone Guide Spotlight */}
      {featuredGuide ? (
        <section className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/10 via-slate-900/5 to-cyan-500/10 p-6 shadow-luxe dark:from-blue-950/50 dark:via-slate-900/90 dark:to-cyan-950/40 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_420px]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <Badge variant="warning" className="flex items-center gap-1 font-bold uppercase tracking-wider">
                  <Star className="size-3.5 fill-amber-500 text-amber-500" />
                  <span>Cornerstone Guide</span>
                </Badge>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
                  Definitive Reference
                </span>
              </div>
              <h2 className="font-display text-3xl font-black tracking-normal text-slate-900 dark:text-white sm:text-4xl">
                <Link href={`/articles/${featuredGuide.slug}`} className="hover:text-blue-600 dark:hover:text-cyan-300">
                  {featuredGuide.title}
                </Link>
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                {featuredGuide.dek || featuredGuide.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-700 dark:text-sky-300">
                  <CheckCircle2 className="size-4 text-blue-500" />
                  <span>Verified Architecture</span>
                </span>
                <span>•</span>
                <span>{featuredGuide.readingMinutes} min deep read</span>
              </div>
              <div className="mt-8">
                <Link
                  href={`/articles/${featuredGuide.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-sans text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  <span>Read Definitive Guide</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
            <Link
              href={`/articles/${featuredGuide.slug}`}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-xl transition-transform hover:scale-[1.01] dark:border-slate-800/80"
            >
              <Image
                src={featuredGuide.image}
                alt={featuredGuide.imageAlt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>
        </section>
      ) : null}

      {/* 2. Structured Topic Clusters (Visual Navigation Hub) */}
      {pillarTopics.length > 0 ? (
        <section className="grid gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-400">
                <Layers className="size-4" />
                <span>Semantic Topic Clusters</span>
              </div>
              <h2 className="mt-1 font-display text-2xl font-black tracking-normal text-slate-900 dark:text-white sm:text-3xl">
                Explore {category.name} by Topic Hub
              </h2>
            </div>
            <Link
              href="/topics"
              className="text-sm font-bold text-blue-600 hover:underline dark:text-cyan-400"
            >
              View All Topics ({pillarTopics.length}) &rarr;
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pillarTopics.map((topic) => (
              <div
                key={topic.slug}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-luxe transition-all hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-500/50"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-sky-300">
                      Topic Cluster
                    </span>
                    <Link
                      href={`/topics/${topic.slug}`}
                      className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:text-slate-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-950"
                    >
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                    <Link href={`/topics/${topic.slug}`}>{topic.name}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {topic.description}
                  </p>
                </div>

                {topic.subtopics && topic.subtopics.length > 0 ? (
                  <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                    <p className="mb-2.5 font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">
                      Subtopics inside hub:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {topic.subtopics.slice(0, 3).map((sub) => (
                        <span
                          key={sub}
                          className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                        >
                          {sub}
                        </span>
                      ))}
                      {topic.subtopics.length > 3 ? (
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          +{topic.subtopics.length - 3} more
                        </span>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 3. Editor's Picks & Popular Articles Showcases */}
      {editorsPicks.length > 0 || popularArticles.length > 0 ? (
        <section className="grid gap-8 lg:grid-cols-2">
          {editorsPicks.length > 0 ? (
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="flex items-center gap-2 font-display text-xl font-black text-slate-900 dark:text-white">
                <Sparkles className="size-5 text-amber-500" />
                <span>Editor&apos;s Selections</span>
              </div>
              <div className="grid gap-4">
                {editorsPicks.slice(0, 3).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-blue-400 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold leading-snug text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                        {article.title}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {article.readingMinutes} min read • {article.tags[0]}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {popularArticles.length > 0 ? (
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="flex items-center gap-2 font-display text-xl font-black text-slate-900 dark:text-white">
                <Flame className="size-5 text-rose-500" />
                <span>Most Popular & Trending</span>
              </div>
              <div className="grid gap-4">
                {popularArticles.slice(0, 3).map((article, idx) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-rose-400 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 font-display text-base font-black text-rose-600 dark:bg-rose-950/60 dark:text-rose-400">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold leading-snug text-slate-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                        {article.title}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {article.readingMinutes} min read • {article.tags[0]}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      {/* 4. Canonical Entity Knowledge Base Quick Links */}
      {pillarEntities.length > 0 ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5 font-display text-lg font-black text-slate-900 dark:text-white sm:text-xl">
              <BookOpen className="size-5 text-blue-600 dark:text-cyan-400" />
              <span>{category.name} Entity Knowledge Base (`Glossary`)</span>
            </div>
            <Link
              href="/glossary"
              className="text-xs font-bold text-blue-600 hover:underline dark:text-cyan-400"
            >
              Explore Full Glossary ({pillarEntities.length} canonical terms) &rarr;
            </Link>
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Canonical terms and foundational concept definitions powering our internal semantic knowledge graph:
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pillarEntities.map((entity) => (
              <Link
                key={entity.slug}
                href={`/glossary/${entity.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/40 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                    {entity.term}
                  </span>
                  <ArrowRight className="size-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {entity.definition}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* 5. Complete Category Archive Stream */}
      <section className="grid gap-6">
        <div>
          <h2 className="font-display text-2xl font-black tracking-normal text-slate-900 dark:text-white sm:text-3xl">
            Latest {category.name} Articles & Analysis
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Search and filter all published research, technical tutorials, and benchmarks in this pillar:
          </p>
        </div>
        <CategoryArchive articles={categoryArticles} />
      </section>

      {/* 6. Category FAQs (Schema-Backed Accordion) */}
      {category.faqs && category.faqs.length > 0 ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-8">
          <h2 className="font-display text-2xl font-black tracking-normal text-slate-900 dark:text-white sm:text-3xl">
            Frequently Asked Questions — {category.name}
          </h2>
          <div className="mt-6 grid gap-4">
            {category.faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200 p-5 transition-colors dark:border-slate-800"
              >
                <summary className="cursor-pointer font-display text-base font-bold text-slate-900 group-open:text-blue-600 dark:text-white dark:group-open:text-cyan-400">
                  {faq.question}
                </summary>
                <p className="mt-3 font-sans text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* 7. Related Pillars Visual Navigation */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
        <h3 className="font-display text-lg font-black text-slate-900 dark:text-white sm:text-xl">
          Explore Related Editorial Pillars
        </h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Navigate horizontally across our authoritative knowledge ecosystem:
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {relatedCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div
                className="size-3 shrink-0 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className="font-display text-sm font-bold text-slate-800 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-cyan-400">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
