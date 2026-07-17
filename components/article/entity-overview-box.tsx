import React from "react";
import Link from "next/link";
import { Cpu, Layers, GitBranch, ShieldAlert, Sparkles, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import type { Article, TopicHub } from "@/lib/types";

type EntityOverviewBoxProps = {
  article: Article;
  topicHub?: TopicHub;
};

export function EntityOverviewBox({ article, topicHub }: EntityOverviewBoxProps) {
  const primaryEntity = article.primaryKeyword || article.title.split("—")[0].trim();
  const secondaryEntities = [
    ...(article.secondaryKeywords || []),
    ...(article.entityVariations || [])
  ].slice(0, 5);

  const rawCompeting = [
    ...(article.knowledgeGraph?.competing || []),
    ...(article.knowledgeGraph?.related || []),
    ...(article.relatedEntities || [])
  ];
  const competingEntities = rawCompeting
    .filter((e) => e !== primaryEntity && !secondaryEntities.includes(e))
    .slice(0, 4);
  const finalCompeting = competingEntities.length > 0 ? competingEntities : ["Alternative Architectures", "Traditional Baselines"];

  return (
    <section
      aria-labelledby="geo-entity-heading"
      itemScope
      itemType="https://schema.org/Thing"
      className="my-8 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-card to-background p-6 shadow-luxe dark:from-primary/10 dark:via-card/90 dark:to-background"
    >
      <meta itemProp="name" content={primaryEntity} />
      {article.dek ? <meta itemProp="description" content={article.dek} /> : null}

      {/* Header & Primary Entity Classification */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Cpu className="size-6" aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center gap-2 font-display text-xs font-black uppercase tracking-[0.16em] text-primary">
              <Sparkles className="size-3.5" aria-hidden="true" />
              <span>GEO Entity & AI Grounding Matrix</span>
            </div>
            <h2 id="geo-entity-heading" className="mt-0.5 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              Entity Profile: <span className="text-primary">{primaryEntity}</span>
            </h2>
          </div>
        </div>

        {topicHub ? (
          <Link
            href={`/topics/${topicHub.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
          >
            <span>Parent Cluster: {topicHub.name}</span>
            <ArrowRight className="size-3" />
          </Link>
        ) : null}
      </div>

      {/* Entity Relationship Map */}
      <div className="my-5 grid gap-4 sm:grid-cols-2 border-b border-border/60 pb-5">
        <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <Layers className="size-3.5 text-blue-500" />
            <span>Secondary & Related Entities</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {secondaryEntities.length > 0 ? (
              secondaryEntities.map((entity) => (
                <Link
                  key={entity}
                  href={`/search?q=${encodeURIComponent(entity)}`}
                  className="rounded-md bg-background px-2 py-1 text-xs font-semibold text-foreground ring-1 ring-inset ring-border/80 transition-colors hover:ring-primary"
                >
                  {entity}
                </Link>
              ))
            ) : (
              <span className="text-xs text-muted-foreground">Core AI Infrastructure Concepts</span>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <GitBranch className="size-3.5 text-purple-500" />
            <span>Competing / Alternative Entities</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {finalCompeting.map((entity) => (
              <Link
                key={entity}
                href={`/search?q=${encodeURIComponent(entity)}`}
                className="rounded-md bg-background px-2 py-1 text-xs font-semibold text-foreground ring-1 ring-inset ring-border/80 transition-colors hover:ring-purple-500"
              >
                {entity}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 8-Point GEO Constitutional Knowledge Answers */}
      <div className="mt-5" itemScope itemType="https://schema.org/ItemList">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-sm font-black uppercase tracking-[0.14em] text-foreground">
            Core Semantic Answers (What, Why, How, Where, When)
          </h3>
          <span className="text-[11px] font-semibold text-muted-foreground">AI Retrieval Standard (`SEO 5.0`)</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              q: "What is this concept?",
              a: article.dek || `${primaryEntity} is a foundational technical architecture within ${article.category}.`,
              icon: HelpCircle,
              color: "text-blue-500"
            },
            {
              q: "Why does it matter?",
              a: article.tldr?.[0] || `Addresses critical architectural bottlenecks and scaling challenges across modern production pipelines.`,
              icon: CheckCircle2,
              color: "text-emerald-500"
            },
            {
              q: "How does it work?",
              a: article.tldr?.[1] || `Orchestrates structured deterministic interfaces and high-performance execution patterns.`,
              icon: Cpu,
              color: "text-purple-500"
            },
            {
              q: "Where is it used?",
              a: article.tldr?.[2] || `Deployed across enterprise LLM infrastructure, multi-agent systems, and production AI services.`,
              icon: Layers,
              color: "text-amber-500"
            },
            {
              q: "When should it be used?",
              a: `Recommended whenever systems require robust governance, deterministic evaluation, or scalable orchestration.`,
              icon: CheckCircle2,
              color: "text-cyan-500"
            },
            {
              q: "What are its limitations?",
              a: article.cons?.[0] || `Requires upfront schema rigor, infrastructure tuning, and baseline latency budgeting.`,
              icon: ShieldAlert,
              color: "text-rose-500"
            },
            {
              q: "What are the alternatives?",
              a: `Competing approaches include custom N-to-N connectors, unstructured zero-shot prompts, or baseline monoliths.`,
              icon: GitBranch,
              color: "text-indigo-500"
            },
            {
              q: "What to learn next?",
              a: topicHub ? `Explore the parent cluster: ${topicHub.name}` : `Review our related coverage in the ${article.category} hierarchy.`,
              icon: ArrowRight,
              color: "text-primary"
            }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.q}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Question"
                className="flex flex-col justify-between rounded-xl border border-border/80 bg-background/90 p-3.5 shadow-xs transition-colors hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-sans text-xs font-bold text-foreground" itemProp="name">
                    <IconComponent className={`size-3.5 shrink-0 ${item.color}`} />
                    <span>{item.q}</span>
                  </div>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p className="mt-2 text-xs leading-5 text-muted-foreground" itemProp="text">
                      {item.a}
                    </p>
                  </div>
                </div>
                <div className="mt-3 border-t border-border/40 pt-2 text-[10px] font-bold text-muted-foreground/80">
                  Step {idx + 1} of 8
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
