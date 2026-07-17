import type { Metadata } from "next";
import { NewsletterInline } from "@/components/sections/newsletter-inline";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Newsletter — Weekly AI & Enterprise Tech Intelligence",
  description:
    "Subscribe to the TechlumeAI newsletter for weekly AI engineering briefings, enterprise research summaries, and technical architecture reviews.",
  path: "/newsletter",
  keywords: ["TechlumeAI Newsletter", "AI Engineering Briefing", "Enterprise Tech Newsletter"]
});

export default function NewsletterPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Newsletter — Weekly AI & Enterprise Tech Intelligence",
            description: "Subscribe to the TechlumeAI newsletter for weekly AI engineering briefings, enterprise research summaries, and technical architecture reviews.",
            url: "/newsletter",
            type: "WebPage"
          })
        ]}
      />
      <PageHero
        eyebrow="Newsletter"
        title="A sharp weekly briefing for AI and technology leaders."
        description="Get the most important AI, software, cybersecurity, cloud, startup, and enterprise technology stories with practical context."
      />
      <section className="container-page grid gap-8 py-10 lg:grid-cols-[0.8fr_1fr]">
        <div className="rounded-[var(--radius)] border border-slate-200 bg-slate-950 p-6 text-white shadow-luxe dark:border-slate-800">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
            What You Get
          </p>
          <ul className="grid gap-3 text-sm leading-7 text-slate-300">
            <li>Weekly analysis on AI, cloud, security, programming, startups, and enterprise buying.</li>
            <li>Concise summaries designed for technical and business decision-makers.</li>
            <li>Curated links to the most useful TechlumeAI stories and external research.</li>
            <li>Partner placements labeled clearly and separated from editorial judgment.</li>
          </ul>
        </div>
        <NewsletterInline />
      </section>
    </>
  );
}
