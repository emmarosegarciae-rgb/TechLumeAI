import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Write For Us — Contribute AI & Tech Thought Leadership",
  description:
    "Submit expert guest posts, technical investigations, and engineering explainers to TechlumeAI's enterprise publication.",
  path: "/write-for-us",
  keywords: ["Write For TechlumeAI", "Contribute AI Articles", "Guest Posts", "Technical Writing Opportunities"]
});

const requirements = [
  "Original analysis written for AI professionals, engineers, founders, marketers, SaaS teams, or technology executives.",
  "Clear thesis, practical examples, accurate claims, and no misleading attribution.",
  "Disclosure of brand relationships, paid campaigns, affiliate relationships, or conflicts of interest.",
  "High editorial quality with useful internal and external references."
];

export default function WriteForUsPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Write For Us — Contribute AI & Tech Thought Leadership",
            description: "Submit expert guest posts and technology thought leadership to TechlumeAI.",
            url: "/write-for-us",
            type: "WebPage"
          })
        ]}
      />
      <PageHero
        eyebrow="Contribute"
        title="Write for TechlumeAI."
        description="Submit expert commentary, technical explainers, founder insights, and practical technology analysis for a premium professional audience."
      />
      <section className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-5">
          <Panel
            title="Submission Guidelines"
            items={[
              "Articles should be useful, specific, and written for experienced technology readers.",
              "We favor practical frameworks, technical clarity, original examples, and strong editorial structure.",
              "Promotional material is reviewed as partner content and labeled clearly when accepted."
            ]}
          />
          <Panel
            title="Pricing Framework"
            items={[
              "Guest contribution and sponsored article rates are scoped by category, editorial complexity, link requirements, and campaign goals.",
              "Newsletter and display options can be bundled with sponsored editorial programs.",
              "Long-term partner packages are available for technology companies with recurring content needs."
            ]}
          />
          <Panel
            title="Editorial Policy"
            items={requirements}
          />
        </div>
        <InquiryForm />
      </section>
    </>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
      <h2 className="font-display text-2xl font-black tracking-normal">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            <CheckCircle2 className="mt-1 size-4 shrink-0 text-green-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
