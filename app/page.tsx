import Link from "next/link";
import { ShieldCheck, Sparkles, TrendingUp, Award } from "lucide-react";
import { articles, getFeaturedArticle } from "@/lib/data/articles";
import { categories } from "@/lib/data/categories";
import type { Article, Category } from "@/lib/types";
import { HomeHero } from "@/components/sections/home-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { ArticleCard } from "@/components/article/article-card";
import { CategoryCard } from "@/components/sections/category-card";
import { VideoCard } from "@/components/video/video-card";
import { ToolDirectory } from "@/components/sections/tool-directory";
import { CompanyTicker } from "@/components/sections/company-ticker";
import { InteractiveLatestArticles } from "@/components/sections/interactive-latest-articles";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { AdSlot } from "@/components/ads/ad-slot";
import { MotionReveal } from "@/components/motion-reveal";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "TechlumeAI — Enterprise Technical Journalism & AI Research",
  description:
    "Award-winning technical journalism covering enterprise AI architectures, multi-agent workflows, frontier LLMs, and physical robotics.",
  path: "/",
  type: "website",
  keywords: ["Enterprise AI", "Multi-Agent Systems", "AI Engineering", "Frontier LLMs", "AI Security", "Robotics Foundation Models"]
});

export default function HomePage() {
  const allArticles: Article[] = articles;
  const featured = getFeaturedArticle();

  const secondary = allArticles.filter((item: Article) => item.slug !== featured.slug);
  const editorsPicks = secondary.filter((item: Article) => item.editorsPick || item.trending);
  const leadPick = editorsPicks[0] || secondary[0];
  const supportingPicks = editorsPicks.slice(1, 3);
  const trendingArticles = secondary.filter((item: Article) => item.trending).slice(0, 4);
  const sponsoredArticles = allArticles.filter((item: Article) => item.sponsored).slice(0, 3);
  const videoArticles = allArticles.filter((item: Article) => item.video).slice(0, 3);

  const trendingTopics = [
    { name: "Agentic Workflows", count: "+38%" },
    { name: "Zero-Trust SIEM", count: "+24%" },
    { name: "Model Inference Routing", count: "+29%" },
    { name: "GPU Cluster FinOps", count: "+18%" },
    { name: "Local LLM Benchmarks", count: "+31%" },
    { name: "Next.js 16 App Router", count: "+15%" }
  ];

  return (
    <div className="space-y-16 pb-16 sm:space-y-20 lg:space-y-24">
      {/* 1. Hero Section */}
      <HomeHero featured={featured} secondary={secondary} />

      {/* 2. Trust & Editorial Authority Bar */}
      <section className="container-wide">
        <div className="glass-pill flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius)] px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <ShieldCheck className="size-4 text-blue-600 dark:text-sky-400" aria-hidden="true" />
            <span>100% Handcrafted Technical Journalism</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="badge-live-dot" aria-hidden="true" />
              Serving 85,000+ U.S. Technology Leaders & Engineers
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">No AI-generated SEO fluff</span>
          </div>
        </div>
      </section>

      {/* 3. Editor's Desk (Lead Feature + Supporting Picks) */}
      <MotionReveal className="container-page">
        <SectionHeading
          eyebrow="Lead Editorial Bench"
          title="The Editor's Desk"
          description="High-signal architectural breakdowns and strategy analysis selected by our senior engineering editors."
          href="/search?q=editors-pick"
          action="Explore all picks"
        />
        <div className="grid gap-6">
          {leadPick ? <ArticleCard article={leadPick} variant="lead" priority /> : null}
          <div className="grid gap-6 md:grid-cols-2">
            {supportingPicks.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* 4. Trending Analysis & Market Search */}
      <MotionReveal className="container-page">
        <SectionHeading
          eyebrow="Live Technical Interest"
          title="Trending Analysis"
          description="The most read reports, architectural deep dives, and system evaluations across our enterprise readership this week."
          href="/search"
          action="View live rankings"
          live
        />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.85fr]">
          <div className="grid gap-4">
            {trendingArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="horizontal" />
            ))}
          </div>

          <aside className="grid h-fit gap-6">
            <div className="rounded-[var(--radius)] border border-slate-200/90 bg-white p-6 shadow-luxe dark:border-slate-800/90 dark:bg-slate-950">
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-4 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    High-Signal Topics
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">Search Volume</span>
              </div>
              <div className="grid gap-2.5">
                {trendingTopics.map((topic) => (
                  <Link
                    key={topic.name}
                    href={`/search?q=${encodeURIComponent(topic.name)}`}
                    className="focus-ring group flex items-center justify-between rounded-md p-2 transition hover:bg-slate-50 dark:hover:bg-slate-900/80"
                  >
                    <span className="text-xs font-bold text-slate-700 transition group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-sky-300">
                      #{topic.name}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-green-600 dark:text-green-400">
                      {topic.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <AdSlot size="rectangle" label="Sponsor Spotlight" />
          </aside>
        </div>
      </MotionReveal>

      {/* 5. Interactive Newswire (Instant Category Tabs) */}
      <MotionReveal className="container-page">
        <SectionHeading
          eyebrow="Real-Time Newswire"
          title="Latest Technical Coverage"
          description="Instant coverage of frontier foundation releases, compiler updates, and cybersecurity disclosures."
          href="/search"
          action="Browse full archive"
        />
        <InteractiveLatestArticles initialArticles={allArticles} />
      </MotionReveal>

      {/* 6. AI Tool & Infrastructure Directory */}
      <MotionReveal>
        <ToolDirectory />
      </MotionReveal>

      {/* 7. Company Intelligence Tracker */}
      <MotionReveal>
        <CompanyTicker />
      </MotionReveal>

      {/* 8. Featured Categories & Most Read Top 5 */}
      <MotionReveal className="container-page">
        <SectionHeading
          eyebrow="Knowledge Hierarchy"
          title="Explore Coverage Areas"
          description="Navigate deep technical reporting structured around the core disciplines of modern engineering."
          href="/search"
          action="Explore all categories"
        />
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>

          <aside className="rounded-[var(--radius)] border border-slate-200/90 bg-white p-6 shadow-luxe dark:border-slate-800/90 dark:bg-slate-950 h-fit">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="size-4 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  Most Read This Month
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">Rank Index</span>
            </div>
            <div className="grid gap-4">
              {allArticles.slice(0, 5).map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="focus-ring group flex items-start gap-3.5 rounded-md p-1.5 transition hover:bg-slate-50 dark:hover:bg-slate-900/80"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded bg-slate-100 font-mono text-xs font-black text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:text-slate-300 dark:group-hover:bg-sky-500 dark:group-hover:text-slate-950">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold leading-snug text-slate-800 transition group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-sky-300">
                      {article.title}
                    </h4>
                    <p className="mt-1 text-[11px] font-semibold text-slate-400">
                      {article.readingMinutes} min read • Verified
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </MotionReveal>

      {/* 9. Executive Video Briefings */}
      {videoArticles.length > 0 ? (
        <MotionReveal className="container-page">
          <SectionHeading
            eyebrow="Multimedia Analysis"
            title="Executive Video Briefings"
            description="Short, high-density video briefings breaking down complex architecture decisions for engineering executives."
            href="/search?q=video"
            action="Watch all briefings"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {videoArticles.map((article) => (
              <VideoCard key={article.slug} article={article} />
            ))}
          </div>
        </MotionReveal>
      ) : null}

      {/* 10. Sponsored Partner Spotlights */}
      {sponsoredArticles.length > 0 ? (
        <MotionReveal className="container-page">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-amber-500" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Partner Technical Spotlights
              </h3>
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Sponsor Content & Briefings
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sponsoredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </MotionReveal>
      ) : null}

      {/* 11. Newsletter & Briefing Banner */}
      <MotionReveal>
        <NewsletterInline />
      </MotionReveal>
    </div>
  );
}
