import type { Metadata } from "next";
import { Mail, MessageSquareText, Newspaper } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = createMetadata({
  title: "Contact TechlumeAI — Editorial & Partnership Inquiries",
  description:
    "Contact TechlumeAI for editorial tips, guest posts, sponsored content, link insertions, partnerships, and business inquiries.",
  path: "/contact",
  keywords: ["Contact TechlumeAI", "Editorial Inquiries", "Partner With TechlumeAI", "Press Inquiries"]
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Contact TechlumeAI — Editorial & Partnership Inquiries",
            description: "Contact TechlumeAI for editorial tips, guest posts, sponsored content, link insertions, partnerships, and business inquiries.",
            url: "/contact",
            type: "ContactPage"
          })
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Reach the TechlumeAI editorial and partnerships team."
        description="Send story tips, business inquiries, guest post proposals, link insertion requests, sponsored article campaigns, and brand partnership notes."
      />
      <section className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_0.8fr]">
        <InquiryForm />
        <aside className="grid content-start gap-4">
          {[
            [Mail, "Business inquiries", siteConfig.email],
            [Newspaper, "Editorial tips", "newsroom@techlumeai.com"],
            [MessageSquareText, "Guest posts", "submissions@techlumeai.com"]
          ].map(([Icon, title, body]) => {
            const TypedIcon = Icon as typeof Mail;
            return (
              <div
                key={title as string}
                className="rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950"
              >
                <TypedIcon className="mb-3 size-5 text-blue-700 dark:text-sky-300" />
                <h2 className="font-display text-xl font-black tracking-normal">
                  {title as string}
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {body as string}
                </p>
              </div>
            );
          })}
        </aside>
      </section>
    </>
  );
}
