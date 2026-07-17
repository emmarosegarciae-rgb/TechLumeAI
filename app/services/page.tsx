import type { Metadata } from "next";
import { ArrowRight, BadgeDollarSign, FileText, Link2, Megaphone, PenLine, Radio } from "lucide-react";
import Link from "next/link";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Partner Services — Guest Posts, PR & Content Sponsorships",
  description:
    "Guest posts, sponsored articles, link insertions, brand promotion, content marketing, and digital PR for AI and technology brands.",
  path: "/services",
  keywords: ["TechlumeAI Partner Services", "Guest Posts", "Sponsored Articles", "Digital PR for SaaS"]
});

const services = [
  {
    id: "guest-posts",
    icon: PenLine,
    title: "Guest Posts",
    body: "Publish expert-led technology articles for a premium audience of engineers, founders, executives, and SaaS buyers."
  },
  {
    id: "sponsored-posts",
    icon: FileText,
    title: "Sponsored Articles",
    body: "Collaborate on deeply researched, high-signal technical stories aligned with your brand features, benchmarks, or product positioning."
  },
  {
    id: "link-insertions",
    icon: Link2,
    title: "Link Insertions",
    body: "Contextual, editorially relevant link insertions inside existing evergreen technical guides and comparison articles."
  },
  {
    id: "brand-promotion",
    icon: Megaphone,
    title: "Brand Promotion",
    body: "Multi-channel campaigns pairing homepage placement, category sponsorship, newsletter inclusion, and custom briefing blocks."
  },
  {
    id: "content-marketing",
    icon: BadgeDollarSign,
    title: "Content Marketing",
    body: "Editorial calendars, authority content, comparison assets, and newsletter campaigns for technology companies."
  },
  {
    id: "digital-pr",
    icon: Radio,
    title: "Digital PR",
    body: "Narrative development, expert commentary, and content-led visibility for AI, SaaS, cybersecurity, and cloud brands."
  }
];

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Partner Services — Guest Posts, PR & Content Sponsorships",
            description: "Guest posts, sponsored articles, link insertions, brand promotion, content marketing, and digital PR for AI and technology brands.",
            url: "/services",
            type: "WebPage"
          })
        ]}
      />
      <PageHero
        eyebrow="Commercial Programs"
        title="Premium publishing services for AI and technology brands."
        description="Reach a high-intent technology audience through guest posts, sponsored articles, link insertions, newsletter placements, brand promotion, content marketing, and digital PR."
      />
      <section className="container-page py-10">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950"
              >
                <Icon className="mb-4 size-6 text-blue-700 dark:text-sky-300" />
                <h2 className="font-display text-2xl font-black tracking-normal">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {service.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="container-page grid gap-8 py-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="rounded-[var(--radius)] border border-slate-200 bg-slate-950 p-6 text-white shadow-luxe dark:border-slate-800">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
            Campaign Fit
          </p>
          <h2 className="font-display text-3xl font-black leading-tight tracking-normal">
            Built for brands that need credibility with technical buyers.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Every partner program is reviewed for audience fit, transparency,
            editorial clarity, and long-term site quality.
          </p>
          <Button asChild className="mt-6" variant="secondary">
            <Link href="/advertise">
              View media kit
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <InquiryForm compact />
      </section>
    </>
  );
}
