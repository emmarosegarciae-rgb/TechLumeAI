/**
 * ArticleContent — Phase 11: AEO Block Architecture
 *
 * Phase 10: Groups article blocks into self-contained <section> elements
 * bounded by headings. Each section carries Schema.org Article microdata.
 *
 * Phase 11: Adds 5 new AEO-optimised block types:
 *   - key-takeaways     → labeled insight cards (Schema.org/ItemList)
 *   - advantages-limitations → balanced trade-off analysis
 *   - decision-framework    → structured decision table (Schema.org/Table)
 *   - related-reading       → curated internal learning paths
 *   - references            → external citation list with metadata
 */

import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bookmark,
  BookOpen,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  Link2,
  ListCheck,
  Quote as QuoteIcon,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  X,
  XCircle,
  Zap
} from "lucide-react";
import type { ArticleBlock } from "@/lib/types";
import { slugify } from "@/lib/utils";

type ArticleContentProps = {
  blocks: ArticleBlock[];
};

// ─── Section grouping ────────────────────────────────────────────────────────

type SectionGroup = {
  headingBlock: (ArticleBlock & { type: "heading" }) | null;
  blocks: ArticleBlock[];
};

function groupIntoSections(blocks: ArticleBlock[]): SectionGroup[] {
  const sections: SectionGroup[] = [];
  let current: SectionGroup = { headingBlock: null, blocks: [] };

  for (const block of blocks) {
    if (block.type === "heading") {
      // Save previous section if it has content
      if (current.blocks.length > 0 || current.headingBlock !== null) {
        sections.push(current);
      }
      current = { headingBlock: block, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }

  // Flush last section
  if (current.blocks.length > 0 || current.headingBlock !== null) {
    sections.push(current);
  }

  return sections;
}

// ─── Block renderers ──────────────────────────────────────────────────────────

function RenderBlock({ block, index }: { block: ArticleBlock; index: number }) {
  if (block.type === "paragraph") {
    return <p key={index}>{block.value}</p>;
  }

  if (block.type === "heading") {
    return (
      <h2 key={index} id={slugify(block.value)}>
        {block.value}
      </h2>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote key={index}>
        <p>{block.value}</p>
        {block.cite ? <cite className="mt-2 block text-sm">- {block.cite}</cite> : null}
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={index} className="my-5 grid gap-3 pl-5">
        {block.items.map((item) => (
          <li key={item} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "code") {
    return (
      <pre key={index}>
        <code>{block.value}</code>
      </pre>
    );
  }

  if (block.type === "callout") {
    return (
      <div
        key={index}
        className="my-6 rounded-[var(--radius)] border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40"
      >
        <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-blue-700 dark:text-sky-300">
          {block.title}
        </p>
        <p className="m-0 text-base leading-7 text-slate-700 dark:text-slate-200">
          {block.value}
        </p>
      </div>
    );
  }

  if (block.type === "tldr") {
    return (
      <div
        key={index}
        itemScope
        itemType="https://schema.org/ItemList"
        className="my-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/5 to-blue-500/10 p-6 shadow-luxe dark:from-cyan-950/40 dark:via-slate-900/80 dark:to-blue-950/40"
      >
        <div className="mb-4 flex items-center gap-2.5 font-display text-sm font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
          <CheckCircle2 className="size-5 text-cyan-500" />
          <span>Executive Summary &amp; Key Takeaways</span>
        </div>
        <ul className="grid gap-3">
          {block.items.map((item, i) => (
            <li key={i} itemProp="itemListElement" className="flex items-start gap-3 font-sans text-base leading-7 text-slate-800 dark:text-slate-200">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-700 dark:text-cyan-300">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "definition") {
    return (
      <div
        key={index}
        itemScope
        itemType="https://schema.org/DefinedTerm"
        className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-luxe dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-3.5 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            <Bookmark className="size-4 text-blue-600 dark:text-blue-400" />
            <span>Definitive Entity Concept</span>
          </div>
        </div>
        <div className="p-6">
          <h3 itemProp="name" className="font-display text-2xl font-black text-slate-900 dark:text-slate-100">
            {block.term}
          </h3>
          <p itemProp="description" className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
            {block.definition}
          </p>
          {block.context ? (
            <p className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3.5 font-mono text-xs font-medium leading-relaxed text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
              <span className="font-bold text-slate-800 dark:text-slate-200">Production Application: </span>
              {block.context}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  if (block.type === "expert-opinion") {
    return (
      <div
        key={index}
        className="my-8 rounded-2xl border-l-4 border-l-blue-600 border-y border-r border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60"
      >
        <QuoteIcon className="mb-3 size-8 text-blue-500/40" />
        <p className="font-display text-lg font-bold italic leading-8 text-slate-800 dark:text-slate-100">
          &ldquo;{block.quote}&rdquo;
        </p>
        <div className="mt-5 flex items-center gap-3.5">
          {block.avatar ? (
            <Image
              src={block.avatar}
              alt={block.author}
              width={48}
              height={48}
              className="rounded-full border border-slate-200 dark:border-slate-700"
            />
          ) : (
            <div className="flex size-12 items-center justify-center rounded-full bg-blue-600 font-display text-base font-bold text-white">
              {block.author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-display text-base font-bold text-slate-900 dark:text-white">
              {block.author}
            </p>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {block.role} &bull; <span className="text-blue-600 dark:text-sky-400">{block.company}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (block.type === "comparison-matrix") {
    return (
      <div
        key={index}
        itemScope
        itemType="https://schema.org/Table"
        className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-luxe dark:border-slate-800 dark:bg-slate-900"
      >
        {block.title ? (
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950">
            <h3 itemProp="name" className="font-display text-lg font-bold text-slate-900 dark:text-slate-100">
              {block.title}
            </h3>
          </div>
        ) : null}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead className="border-b border-slate-200 bg-slate-100/70 font-display text-xs uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
              <tr>
                {block.headers.map((header, colIdx) => (
                  <th
                    key={header}
                    className={`px-5 py-3.5 font-bold ${
                      block.highlightColumn === colIdx
                        ? "bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-cyan-300"
                        : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {block.rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                >
                  {row.map((cell, colIdx) => (
                    <td
                      key={colIdx}
                      className={`px-5 py-4 leading-relaxed text-slate-700 dark:text-slate-300 ${
                        block.highlightColumn === colIdx
                          ? "bg-blue-500/5 font-semibold dark:bg-blue-500/10"
                          : colIdx === 0
                            ? "font-bold text-slate-900 dark:text-slate-100"
                            : ""
                      }`}
                    >
                      {cell === "YES" || cell === "True" || cell === "Check" ? (
                        <span className="inline-flex items-center gap-1.5 font-bold text-green-600 dark:text-green-400">
                          <Check className="size-4" /> {cell}
                        </span>
                      ) : cell === "NO" || cell === "False" || cell === "Cross" ? (
                        <span className="inline-flex items-center gap-1.5 font-bold text-red-600 dark:text-red-400">
                          <X className="size-4" /> {cell}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (block.type === "timeline") {
    return (
      <div key={index} className="my-8 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          <Calendar className="size-4 text-blue-600 dark:text-blue-400" />
          <span>Architecture &amp; Evolution Timeline</span>
        </div>
        <div className="relative border-l-2 border-blue-500/30 pl-6 dark:border-blue-500/40">
          {block.items.map((item, i) => (
            <div key={i} className="mb-8 last:mb-0">
              <div className="absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-white bg-blue-600 dark:border-slate-900 dark:bg-cyan-400" />
              <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-800 dark:bg-blue-950 dark:text-cyan-300">
                {item.date}
              </span>
              <h4 className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-slate-100">
                {item.title}
              </h4>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "stat-card") {
    return (
      <div
        key={index}
        className="my-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-luxe dark:border-slate-800 dark:from-slate-950 dark:to-slate-900"
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
          <TrendingUp className="size-4" />
          <span>Verified Benchmark Data</span>
        </div>
        <p className="mt-4 font-display text-5xl font-black tracking-tight text-white sm:text-6xl">
          {block.number}
        </p>
        <p className="mt-2 text-lg font-medium leading-relaxed text-slate-200">
          {block.label}
        </p>
        {block.context ? (
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {block.context}
          </p>
        ) : null}
        {block.source ? (
          <p className="mt-4 border-t border-slate-700/60 pt-3 font-mono text-xs text-slate-400">
            Source: <span className="text-cyan-300">{block.source}</span>
          </p>
        ) : null}
      </div>
    );
  }

  if (block.type === "case-study") {
    return (
      <div
        key={index}
        className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2 font-display text-base font-bold text-slate-900 dark:text-white">
            <Building2 className="size-5 text-blue-600 dark:text-cyan-400" />
            <span>Enterprise Case Study: {block.company}</span>
          </div>
          <span className="rounded-full bg-green-500/10 px-3 py-1 font-mono text-xs font-bold text-green-700 dark:bg-green-500/20 dark:text-green-300">
            {block.metric}
          </span>
        </div>
        <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
          {block.description}
        </p>
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Verified Outcome &amp; Strategic Impact
          </p>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
            {block.outcome}
          </p>
        </div>
      </div>
    );
  }

  if (block.type === "best-practices") {
    return (
      <div
        key={index}
        itemScope
        itemType="https://schema.org/HowTo"
        className="my-8 rounded-2xl border border-green-200 bg-green-50/70 p-6 dark:border-green-900/60 dark:bg-green-950/20"
      >
        <div className="mb-4 flex items-center gap-2.5 font-display text-base font-black uppercase tracking-[0.16em] text-green-800 dark:text-green-300">
          <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
          <span itemProp="name">{block.title || "Enterprise Best Practices"}</span>
        </div>
        <ul className="grid gap-3">
          {block.items.map((item, i) => (
            <li key={i} itemProp="step" itemScope itemType="https://schema.org/HowToStep" className="flex items-start gap-3 text-sm font-medium leading-6 text-green-950 dark:text-green-100">
              <Check className="mt-1 size-4 shrink-0 text-green-600 dark:text-green-400" />
              <span itemProp="text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "common-mistakes") {
    return (
      <div
        key={index}
        className="my-8 rounded-2xl border border-red-200 bg-red-50/70 p-6 dark:border-red-900/60 dark:bg-red-950/20"
      >
        <div className="mb-4 flex items-center gap-2.5 font-display text-base font-black uppercase tracking-[0.16em] text-red-800 dark:text-red-300">
          <XCircle className="size-5 text-red-600 dark:text-red-400" />
          <span>{block.title || "Common Anti-Patterns & Pitfalls"}</span>
        </div>
        <ul className="grid gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-medium leading-6 text-red-950 dark:text-red-100">
              <X className="mt-1 size-4 shrink-0 text-red-600 dark:text-red-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "checklist") {
    return (
      <div
        key={index}
        className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mb-4 flex items-center gap-2.5 font-display text-base font-black uppercase tracking-[0.16em] text-slate-800 dark:text-slate-100">
          <ListCheck className="size-5 text-blue-600 dark:text-cyan-400" />
          <span>{block.title || "Implementation Checklist"}</span>
        </div>
        <div className="grid gap-3">
          {block.items.map((item, i) => (
            <label
              key={i}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition hover:border-blue-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
            >
              <input
                type="checkbox"
                className="mt-1 size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {item.label}
                </p>
                {item.note ? (
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {item.note}
                  </p>
                ) : null}
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={index} className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-luxe dark:border-slate-800 dark:bg-slate-900/60">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover"
          />
        </div>
        {block.caption ? (
          <figcaption className="mt-3.5 px-2 pb-1.5 text-center font-mono text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.type === "table") {
    return (
      <div key={index} className="my-6 overflow-x-auto">
        <table>
          <thead>
            <tr>
              {block.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Phase 11 AEO Block Renderers ──────────────────────────────────────────

  if (block.type === "key-takeaways") {
    return (
      <div
        key={index}
        className="my-8 overflow-hidden rounded-2xl border border-amber-200/70 bg-amber-50/60 dark:border-amber-900/50 dark:bg-amber-950/20"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="border-b border-amber-200/70 bg-amber-100/60 px-6 py-4 dark:border-amber-900/50 dark:bg-amber-950/40">
          <div className="flex items-center gap-2.5">
            <Lightbulb className="size-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            <span className="font-display text-sm font-black uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">
              {block.title || "Key Takeaways"}
            </span>
          </div>
        </div>
        <div className="grid gap-3 p-6 sm:grid-cols-2" itemProp="itemListElement">
          {block.items.map((item, i) => (
            <div
              key={i}
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-start gap-3 rounded-xl border border-amber-200/60 bg-white/80 p-4 dark:border-amber-900/40 dark:bg-slate-900/60"
            >
              <span
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-mono text-xs font-bold text-amber-700 dark:text-amber-400"
                itemProp="position"
              >
                {i + 1}
              </span>
              <div>
                <p className="font-display text-sm font-bold text-slate-900 dark:text-slate-100" itemProp="name">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400" itemProp="description">
                  {item.insight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "advantages-limitations") {
    return (
      <div key={index} className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-luxe dark:border-slate-800 dark:bg-slate-900">
        {block.title ? (
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950">
            <p className="font-display text-sm font-black uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">
              {block.title}
            </p>
          </div>
        ) : null}
        <div className="grid gap-0 sm:grid-cols-2">
          {/* Advantages */}
          <div className="border-b border-r border-slate-200 p-5 dark:border-slate-800">
            <div className="mb-3 flex items-center gap-2 font-display text-sm font-black uppercase tracking-[0.14em] text-green-700 dark:text-green-400">
              <ThumbsUp className="size-4" aria-hidden="true" />
              <span>Advantages</span>
            </div>
            <ul className="grid gap-2.5">
              {block.advantages.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-green-600 dark:text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Limitations */}
          <div className="border-b border-slate-200 p-5 dark:border-slate-800">
            <div className="mb-3 flex items-center gap-2 font-display text-sm font-black uppercase tracking-[0.14em] text-red-700 dark:text-red-400">
              <ThumbsDown className="size-4" aria-hidden="true" />
              <span>Limitations</span>
            </div>
            <ul className="grid gap-2.5">
              {block.limitations.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <X className="mt-0.5 size-4 shrink-0 text-red-500 dark:text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {block.useCases && block.useCases.length > 0 ? (
          <div className="border-t border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-950/60">
            <div className="mb-3 flex items-center gap-2 font-display text-sm font-black uppercase tracking-[0.14em] text-blue-700 dark:text-blue-400">
              <Zap className="size-4" aria-hidden="true" />
              <span>Appropriate Use Cases</span>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {block.useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <ChevronRight className="mt-0.5 size-4 shrink-0 text-blue-500" />
                  {uc}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }

  if (block.type === "decision-framework") {
    return (
      <div
        key={index}
        className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-luxe dark:border-slate-800 dark:bg-slate-900"
        itemScope
        itemType="https://schema.org/Table"
      >
        <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-slate-50 px-6 py-4 dark:border-slate-800 dark:from-indigo-950/40 dark:to-slate-950">
          <div className="flex items-center gap-2.5">
            <Zap className="size-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            <span className="font-display text-sm font-black uppercase tracking-[0.16em] text-indigo-800 dark:text-indigo-300">
              {block.title || "Decision Framework"}
            </span>
          </div>
          {block.title ? <meta itemProp="name" content={block.title} /> : null}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead className="border-b border-slate-200 bg-slate-50/80 font-display text-xs font-bold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
              <tr>
                <th className="px-5 py-3.5">Situation</th>
                <th className="px-5 py-3.5 bg-indigo-500/5 text-indigo-700 dark:text-indigo-300">Recommendation</th>
                <th className="px-5 py-3.5">Reasoning</th>
                {block.rows.some(r => r.alternative) ? <th className="px-5 py-3.5">Alternative</th> : null}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {block.rows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30">
                  <td className="px-5 py-4 font-semibold text-slate-900 dark:text-slate-100">{row.situation}</td>
                  <td className="bg-indigo-500/5 px-5 py-4 font-bold text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-300">{row.recommendation}</td>
                  <td className="px-5 py-4 leading-relaxed text-slate-600 dark:text-slate-400">{row.reasoning}</td>
                  {block.rows.some(r => r.alternative) ? (
                    <td className="px-5 py-4 text-slate-500 dark:text-slate-400 italic">{row.alternative || "—"}</td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (block.type === "related-reading") {
    const typeBadgeColor: Record<string, string> = {
      "Guide": "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
      "Comparison": "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
      "Tutorial": "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
      "Glossary": "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
      "Case Study": "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
      "Report": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    };
    return (
      <div key={index} className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-luxe dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center gap-2.5">
            <BookOpen className="size-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span className="font-display text-sm font-black uppercase tracking-[0.16em] text-slate-700 dark:text-slate-200">
              {block.title || "Related Reading"}
            </span>
          </div>
        </div>
        <div className="grid gap-3 p-5 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
            >
              <Link2 className="mt-0.5 size-5 shrink-0 text-slate-400 transition-colors group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-blue-400" aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${typeBadgeColor[item.type] ?? typeBadgeColor["Report"]}`}>
                    {item.type}
                  </span>
                </div>
                <p className="font-display text-sm font-bold text-slate-900 group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="mt-0.5 size-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-500 dark:text-slate-700" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "references") {
    return (
      <div key={index} className="my-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="mb-4 flex items-center gap-2.5">
          <BookOpen className="size-5 text-slate-500 dark:text-slate-400" aria-hidden="true" />
          <span className="font-display text-sm font-black uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">
            References & Sources
          </span>
        </div>
        <ol className="grid gap-3">
          {block.items.map((ref, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-200 font-mono text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {i + 1}
              </span>
              <div className="text-sm">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:underline dark:text-blue-400"
                >
                  {ref.title}
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
                {(ref.author || ref.publisher || ref.date) ? (
                  <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {[ref.author, ref.publisher, ref.date].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
                {ref.context ? (
                  <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">{ref.context}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (block.type === "answer") {
    return (
      <div key={index} className="my-8 rounded-2xl border-2 border-indigo-500/20 bg-indigo-50/30 p-6 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-950/20" itemScope itemType="https://schema.org/Question">
        <h3 className="mb-4 flex items-start gap-3 font-display text-xl font-bold text-slate-900 dark:text-slate-100" itemProp="name">
          <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xs font-black text-white shadow-sm">
            Q
          </div>
          {block.question}
        </h3>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <div className="mb-5 flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm dark:bg-slate-900" itemProp="text">
            <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white shadow-sm">
              A
            </div>
            <div>
              <p className="font-sans text-base font-semibold leading-7 text-slate-800 dark:text-slate-200">
                {block.directAnswer}
              </p>
              {block.explanation ? (
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {block.explanation}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {(block.benefits || block.limitations) && (
          <div className="mb-5 grid gap-4 sm:grid-cols-2">
            {block.benefits && block.benefits.length > 0 && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <div className="mb-2 flex items-center gap-2 font-display text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="size-4" /> Benefits
                </div>
                <ul className="grid gap-2">
                  {block.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {block.limitations && block.limitations.length > 0 && (
              <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
                <div className="mb-2 flex items-center gap-2 font-display text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  <AlertTriangle className="size-4" /> Limitations
                </div>
                <ul className="grid gap-2">
                  {block.limitations.map((l, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <X className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {block.targetAudience || block.relatedConcepts ? (
          <div className="flex flex-wrap items-center gap-4 border-t border-indigo-200 pt-4 dark:border-indigo-800">
            {block.targetAudience && (
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <Building2 className="size-4 text-indigo-500" />
                <span>Target: {block.targetAudience}</span>
              </div>
            )}
            {block.relatedConcepts && block.relatedConcepts.length > 0 && (
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <Link2 className="size-4 text-indigo-500" />
                <span>Related: {block.relatedConcepts.join(", ")}</span>
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
  if (block.type === "faq") {
    return (
      <div
        key={index}
        className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-luxe dark:border-slate-800 dark:bg-slate-900"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="border-b border-slate-200 bg-gradient-to-r from-violet-50 to-slate-50 px-6 py-4 dark:border-slate-800 dark:from-violet-950/30 dark:to-slate-950">
          <div className="flex items-center gap-2.5">
            <Lightbulb className="size-5 text-violet-600 dark:text-violet-400" aria-hidden="true" />
            <span className="font-display text-sm font-black uppercase tracking-[0.16em] text-violet-800 dark:text-violet-300">
              {block.title || "Frequently Asked Questions"}
            </span>
          </div>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="px-6 py-5"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3
                itemProp="name"
                className="flex items-start gap-3 font-display text-base font-bold text-slate-900 dark:text-slate-100"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-black text-violet-700 dark:text-violet-300">
                  Q
                </span>
                {item.question}
              </h3>
              <div
                className="mt-3 ml-8"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text" className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {item.answer}
                </p>
                {item.intent && (
                  <span className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Intent: {item.intent}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "next-questions") {
    return (
      <div key={index} className="my-8 rounded-xl bg-slate-50 p-6 dark:bg-slate-900/50">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {block.title || "Readers Often Ask"}
        </h4>
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-violet-500 mt-1">↳</span>
              <div>
                <span className="font-medium text-slate-800 dark:text-slate-200">{item.question}</span>
                {item.anchorText && (
                  <span className="ml-2 text-sm text-slate-500">({item.anchorText})</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "practical-scenario") {
    return (
      <div key={index} className="my-10 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm dark:border-indigo-900/30 dark:bg-slate-900">
        <div className="border-b border-indigo-100 bg-indigo-50/50 px-6 py-4 dark:border-indigo-900/30 dark:bg-indigo-950/20">
          <span className="inline-block rounded bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
            {block.scenarioType}
          </span>
          <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{block.title}</h3>
        </div>
        <div className="p-6">
          <p className="text-slate-700 dark:text-slate-300 mb-4">{block.description}</p>
          {block.steps && (
            <ul className="list-decimal space-y-2 pl-5 text-slate-700 dark:text-slate-300">
              {block.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          )}
          {block.codeSnippet && (
            <pre className="mt-4 rounded-lg bg-slate-950 p-4 text-sm text-slate-300 overflow-x-auto">
              <code>{block.codeSnippet}</code>
            </pre>
          )}
          {block.outcome && (
            <div className="mt-4 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950/30">
              <span className="font-semibold text-emerald-800 dark:text-emerald-300">Outcome: </span>
              <span className="text-emerald-700 dark:text-emerald-400">{block.outcome}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (block.type === "decision-support") {
    return (
      <div key={index} className="my-10 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {block.title || "Decision Support"}
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h4 className="mb-2 font-semibold text-slate-800 dark:text-slate-200">Should I use this?</h4>
            <p className="text-slate-700 dark:text-slate-300">{block.shouldIUseThis}</p>
          </div>
          <div className="mb-6">
            <h4 className="mb-2 font-semibold text-slate-800 dark:text-slate-200">Trade-offs</h4>
            <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              {block.tradeOffs.map((tradeoff, i) => (
                <li key={i}>{tradeoff}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-slate-800 dark:text-slate-200">Alternatives</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {block.alternatives.map((alt, i) => (
                <div key={i} className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/50">
                  <span className="block font-medium text-slate-900 dark:text-white">{alt.name}</span>
                  <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">{alt.whenToUse}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (block.type === "ai-overview") {
    return (
      <div key={index} className="my-10 overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-gradient-to-b from-blue-50/50 to-white shadow-md dark:border-blue-400/20 dark:from-blue-950/20 dark:to-slate-900">
        <div className="flex items-center gap-2 border-b border-blue-100 bg-blue-50/80 px-6 py-3 dark:border-blue-900/30 dark:bg-blue-950/40">
          <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-sm font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
            AI Overview
          </span>
          <div className="ml-auto flex gap-4 text-xs font-medium text-slate-500">
            <span>⏱ {block.readingTimeMin} min read</span>
            <span>📅 {block.lastUpdated}</span>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-6 text-xl font-medium leading-relaxed text-slate-900 dark:text-slate-100">
            {block.definition}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">Why It Matters</h4>
              <p className="text-slate-700 dark:text-slate-300">{block.whyItMatters}</p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">Who Should Care</h4>
              <p className="text-slate-700 dark:text-slate-300">{block.whoShouldCare}</p>
            </div>
          </div>
          <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">Key Takeaways</h4>
            <ul className="list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
              {block.keyTakeaways.map((takeaway, i) => (
                <li key={i}>{takeaway}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded bg-blue-100 px-2 py-1 font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              {block.primaryEntity}
            </span>
            {block.relatedEntities.map((entity, i) => (
              <span key={i} className="rounded bg-slate-100 px-2 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {entity}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (block.type === "section-summary") {
    return (
      <div key={index} className="my-8 rounded-xl bg-slate-100 p-6 dark:bg-slate-800/50">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Section Summary
        </h4>
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">Key Takeaways: </span>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
              {block.keyTakeaways.map((takeaway, i) => (
                <li key={i}>{takeaway}</li>
              ))}
            </ul>
          </div>
          {block.definitions && block.definitions.length > 0 && (
            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Important Definitions: </span>
              <ul className="mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                {block.definitions.map((def, i) => (
                  <li key={i}>
                    <strong>{def.term}</strong>: {def.definition}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {block.enterpriseInsights && block.enterpriseInsights.length > 0 && (
            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Enterprise Insights: </span>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
                {block.enterpriseInsights.map((insight, i) => (
                  <li key={i}>{insight}</li>
                ))}
              </ul>
            </div>
          )}
          {block.nextStep && (
            <div className="mt-4 rounded bg-white p-3 shadow-sm dark:bg-slate-900">
              <span className="font-semibold text-blue-600 dark:text-blue-400">Next Step: </span>
              <span className="text-slate-700 dark:text-slate-300">{block.nextStep}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (block.type === "entity-panel") {
    return (
      <div key={index} className="my-10 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-50/40 via-white to-slate-50 p-6 shadow-luxe dark:border-purple-400/20 dark:from-purple-950/20 dark:via-slate-900 dark:to-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-100 pb-4 dark:border-purple-900/40">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              {block.category} &bull; Canonical Entity Profile
            </span>
            <h3 className="mt-1 font-display text-2xl font-black text-slate-900 dark:text-white">
              {block.entityName}
            </h3>
          </div>
          {block.releaseTimeline && (
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
              Timeline: {block.releaseTimeline}
            </span>
          )}
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Definition</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-800 dark:text-slate-200">{block.definition}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Purpose</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{block.purpose}</p>
            </div>
            {block.architecture && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Architecture & Underlying Mechanics</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{block.architecture}</p>
              </div>
            )}
          </div>
          <div className="space-y-3 rounded-xl bg-purple-50/50 p-4 border border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30">
            {block.creator && (
              <div className="flex justify-between border-b border-purple-100/80 pb-2 text-xs dark:border-purple-900/40">
                <span className="font-bold text-slate-500">Creator / Organization</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{block.creator}</span>
              </div>
            )}
            {block.industry && (
              <div className="flex justify-between border-b border-purple-100/80 pb-2 text-xs dark:border-purple-900/40">
                <span className="font-bold text-slate-500">Target Industry & Scope</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{block.industry}</span>
              </div>
            )}
            {block.competingTechnologies && block.competingTechnologies.length > 0 && (
              <div>
                <span className="text-xs font-bold text-slate-500">Competing & Alternative Entities</span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {block.competingTechnologies.map((comp, i) => (
                    <span key={i} className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {block.officialResources && block.officialResources.length > 0 && (
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-500">Official Citations & Resources</span>
                <ul className="mt-1 space-y-1">
                  {block.officialResources.map((res, i) => (
                    <li key={i}>
                      <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-purple-600 underline hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
                        {res.title} &rarr;
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (block.type === "semantic-relationships") {
    return (
      <div key={index} className="my-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-3.5 dark:border-slate-800 dark:bg-slate-800/50">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Semantic Relationship Mapping &bull; <span className="text-purple-600 dark:text-purple-400">{block.primaryEntity}</span>
          </h4>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
          {block.relationships.map((rel, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold">
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300">
                  {block.primaryEntity}
                </span>
                <span className="text-slate-400 dark:text-slate-500">&mdash;[{rel.relationship}]&rarr;</span>
                <span className="rounded bg-slate-100 px-2 py-1 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  {rel.targetEntity}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 sm:max-w-md sm:text-right">
                {rel.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "entity-reinforcement") {
    const categories = [
      { label: "Supporting Technologies", items: block.technologies },
      { label: "Organizations & Ecosystem", items: block.companies },
      { label: "Standards & Protocols", items: [...(block.standards || []), ...(block.protocols || [])] },
      { label: "Frameworks & APIs", items: [...(block.frameworks || []), ...(block.apis || [])] },
      { label: "Languages & Tooling", items: block.languages },
      { label: "Enterprise Concepts", items: block.enterpriseConcepts }
    ].filter((cat) => cat.items && cat.items.length > 0);

    return (
      <div key={index} className="my-8 rounded-xl border border-slate-200/80 bg-slate-50/70 p-6 dark:border-slate-800 dark:bg-slate-900/40">
        <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Entity Reinforcement & Topo-Semantic Grounding
        </h4>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div key={i} className="rounded-lg bg-white p-3 shadow-2xs border border-slate-200/60 dark:bg-slate-800/60 dark:border-slate-700/60">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                {cat.label}
              </span>
              <div className="mt-2 flex flex-wrap gap-1">
                {cat.items?.map((item, j) => (
                  <span key={j} className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-700/60 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "cognitive-pathway") {
    return (
      <div key={index} className="my-10 overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 p-6 shadow-luxe dark:border-blue-400/20 dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-950">
        <div className="border-b border-blue-100 pb-4 dark:border-blue-900/40">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Cognitive Content Model &bull; 6-Stage Reasoning Ladder
          </span>
          <h3 className="mt-1 font-display text-2xl font-black text-slate-900 dark:text-white">
            {block.title || "Logical Reasoning Pathway"}
          </h3>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.stages.map((st, i) => (
            <div key={i} className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs dark:border-slate-800 dark:bg-slate-800/50">
              <div>
                <span className="inline-block rounded bg-blue-100 px-2 py-0.5 text-xs font-black text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                  {st.stage}
                </span>
                <h4 className="mt-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
                  {st.question}
                </h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {st.reasoningSummary}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "reasoning-decision-tree") {
    return (
      <div key={index} className="my-10 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 p-6 shadow-luxe dark:border-emerald-400/20 dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-950">
        <div className="border-b border-emerald-100 pb-4 dark:border-emerald-900/40">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Decision Tree Architecture &bull; Cause-and-Effect Justification
          </span>
          <h3 className="mt-1 font-display text-2xl font-black text-slate-900 dark:text-white">
            {block.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Problem: <span className="font-normal">{block.problemStatement}</span>
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400">
              <span className="rounded bg-emerald-600 px-2 py-0.5 text-white">IF YES</span>
              <span>{block.ifCondition}</span>
            </div>
            <h4 className="mt-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
              Recommendation: {block.ifTrue.recommendation}
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Rationale: </span>
              {block.ifTrue.rationale}
            </p>
          </div>
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-800 dark:text-amber-400">
              <span className="rounded bg-amber-600 px-2 py-0.5 text-white">IF NO</span>
              <span>Alternative Path</span>
            </div>
            <h4 className="mt-2 font-bold text-slate-900 dark:text-slate-100 text-sm">
              Recommendation: {block.ifFalse.recommendation}
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Rationale: </span>
              {block.ifFalse.rationale}
            </p>
          </div>
        </div>
        {block.enterpriseScenario && (
          <div className="mt-4 rounded-xl bg-slate-100/80 p-4 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Enterprise Scenario & Implementation Rationale
            </span>
            <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              {block.enterpriseScenario}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (block.type === "mental-model") {
    return (
      <div key={index} className="my-10 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-50/40 via-white to-slate-50 p-6 shadow-luxe dark:border-purple-400/20 dark:from-purple-950/20 dark:via-slate-900 dark:to-slate-950">
        <div className="border-b border-purple-100 pb-4 dark:border-purple-900/40">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
            Mental Model Engineering &bull; {block.modelType}
          </span>
          <h3 className="mt-1 font-display text-2xl font-black text-slate-900 dark:text-white">
            {block.title}
          </h3>
          <p className="mt-2 text-xs font-semibold leading-relaxed text-purple-900 dark:text-purple-300 bg-purple-100/60 dark:bg-purple-900/40 p-3 rounded-lg">
            {block.analogyOrPrinciple}
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {block.breakdown.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs dark:border-slate-800 dark:bg-slate-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                {item.label}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {block.perspectives && block.perspectives.length > 0 && (
          <div className="mt-6 border-t border-purple-100 pt-4 dark:border-purple-900/40">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Multi-Perspective Evaluation Matrix
            </span>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {block.perspectives.map((p, i) => (
                <div key={i} className="rounded-lg bg-slate-50 p-3 border border-slate-200/80 dark:bg-slate-800/40 dark:border-slate-700">
                  <span className="block text-xs font-bold text-slate-900 dark:text-slate-100">
                    {p.role}
                  </span>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (block.type === "editorial-governance-panel") {
    return (
      <div key={index} className="my-10 overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-50/60 via-white to-slate-50 p-6 shadow-luxe dark:border-indigo-400/20 dark:from-indigo-950/30 dark:via-slate-900 dark:to-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-100 pb-4 dark:border-indigo-900/40">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Editorial Operating System (EOS) &bull; Layer 8 Governance
            </span>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-indigo-600 px-2.5 py-0.5 text-xs font-black text-white shadow-2xs">
                {block.contentClass}
              </span>
              <span className="rounded-md bg-slate-200/80 px-2.5 py-0.5 text-xs font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                Pillar: {block.primaryPillar}
              </span>
              <span className="rounded-md bg-slate-200/80 px-2.5 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Cluster: {block.topicCluster}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="block text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                Editorial Score
              </span>
              <span className="font-display text-xl font-black text-indigo-600 dark:text-indigo-400">
                {block.editorialScore} / 100
              </span>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide shadow-2xs ${
              block.opportunityScore === "Critical"
                ? "bg-rose-600 text-white"
                : block.opportunityScore === "High"
                ? "bg-amber-600 text-white"
                : "bg-blue-600 text-white"
            }`}>
              Priority: {block.opportunityScore}
            </span>
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white/80 p-3.5 dark:border-slate-800 dark:bg-slate-800/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Target Audience & Enterprise Scope
            </span>
            <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
              {block.targetAudience}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white/80 p-3.5 dark:border-slate-800 dark:bg-slate-800/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Content Lifecycle & Decay Status
            </span>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Current Status:
              </span>
              <span className={`rounded px-2 py-0.5 text-xs font-bold ${
                block.decayStatus === "Fresh"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300"
              }`}>
                {block.decayStatus}
              </span>
            </div>
          </div>
        </div>
        {block.futureExpansion && block.futureExpansion.length > 0 && (
          <div className="mt-4 rounded-xl border border-indigo-200/60 bg-indigo-50/40 p-3.5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
              Knowledge Graph Roadmap &bull; Queued Expansion Articles
            </span>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {block.futureExpansion.map((topic, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Suppress unused import warnings for icons reserved for future alert variants
  void AlertTriangle;

  return null;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function ArticleContent({ blocks }: ArticleContentProps) {
  const sections = groupIntoSections(blocks);

  return (
    <div className="article-prose">
      {sections.map((section, sectionIdx) => {
        const headingId = section.headingBlock
          ? slugify(section.headingBlock.value)
          : `section-${sectionIdx}`;

        return (
          <section
            key={sectionIdx}
            aria-labelledby={section.headingBlock ? headingId : undefined}
            itemScope
            itemType="https://schema.org/Article"
            className="article-section"
          >
            {section.headingBlock ? (
              <h2 id={headingId} itemProp="headline">
                {section.headingBlock.value}
              </h2>
            ) : null}
            {section.blocks.map((block, blockIdx) => (
              <RenderBlock key={blockIdx} block={block} index={blockIdx} />
            ))}
          </section>
        );
      })}
    </div>
  );
}


