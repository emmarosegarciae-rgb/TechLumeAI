import type { Metadata } from "next";
import { BarChart3, LayoutDashboard, MailCheck, Megaphone } from "lucide-react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Advertise With TechlumeAI — Media Kit & Sponsorships",
  description:
    "Media kit, ad banner sizes, sponsored articles, newsletter sponsorships, and enterprise digital PR programs for technology brands.",
  path: "/advertise",
  keywords: ["Advertise on TechlumeAI", "Tech Media Kit", "Sponsored AI Articles", "Developer Advertising"]
});

export default function AdvertisePage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Advertise With TechlumeAI — Media Kit & Sponsorships",
            description: "Media kit, banner sizes, sponsored content, newsletter placements, and brand programs for TechlumeAI advertisers.",
            url: "/advertise",
            type: "WebPage"
          })
        ]}
      />
      <PageHero
        eyebrow="Advertise"
        title="Reach a premium AI and technology decision-maker audience."
        description="TechlumeAI offers sponsored articles, display ads, newsletter sponsorships, brand campaigns, and digital PR programs for technology companies."
      />
      <section className="container-page py-10">
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            [BarChart3, "Audience", "AI professionals, engineers, founders, executives, investors, marketers, agencies, and SaaS companies."],
            [LayoutDashboard, "Banner Sizes", "Leaderboard, in-article banner, sidebar rectangle, mobile banner, and newsletter sponsor modules."],
            [Megaphone, "Sponsored Content", "Partner stories, product education, thought leadership, founder profiles, and launch explainers."],
            [MailCheck, "Newsletter", "Weekly sponsored placements for high-intent readers following AI, cloud, cybersecurity, and startups."]
          ].map(([Icon, title, body]) => {
            const TypedIcon = Icon as typeof BarChart3;
            return (
              <div
                key={title as string}
                className="rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950"
              >
                <TypedIcon className="mb-4 size-6 text-blue-700 dark:text-sky-300" />
                <h2 className="font-display text-xl font-black tracking-normal">
                  {title as string}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {body as string}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container-page grid gap-8 py-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-300">
            Media Kit
          </p>
          <h2 className="font-display text-3xl font-black leading-tight tracking-normal">
            Premium placements built for authority, clarity, and measurable outcomes.
          </h2>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            <p>Display sponsorships support responsive banner units across desktop, tablet, and mobile reading experiences.</p>
            <p>Sponsored editorial includes schema-ready article pages, newsletter promotion options, and relevant internal discovery paths.</p>
            <p>Campaigns can be scoped for awareness, thought leadership, lead generation, product launch support, or evergreen SEO value.</p>
          </div>
        </div>
        <InquiryForm compact />
      </section>
    </>
  );
}
