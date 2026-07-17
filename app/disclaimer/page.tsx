import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer — Editorial, Affiliate & Financial Guidance",
  description: "TechlumeAI editorial, business, affiliate, and investment guidance disclosures for enterprise decision-makers.",
  path: "/disclaimer",
  keywords: ["TechlumeAI Disclaimer", "Affiliate Disclosure", "Financial Disclaimer", "Editorial Guidance"]
});

export default function DisclaimerPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Disclaimer — Editorial, Affiliate & Financial Guidance",
            description: "TechlumeAI editorial, business, affiliate, and investment disclaimer.",
            url: "/disclaimer",
            type: "WebPage"
          })
        ]}
      />
      <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      description="Important context for how readers should interpret TechlumeAI content."
      sections={[
        {
          title: "Editorial Information",
          body: [
            "TechlumeAI publishes analysis and information for professional readers. Content should not be treated as legal, financial, investment, security, medical, or other professional advice.",
            "Readers should verify facts, vendor claims, and technical suitability before making decisions."
          ]
        },
        {
          title: "Commercial Disclosure",
          body: [
            "TechlumeAI may earn revenue from advertising, sponsored articles, guest posts, affiliate links, newsletter placements, digital products, and future software products.",
            "Sponsored and partner content is labeled to preserve reader trust."
          ]
        }
      ]}
    />
    </>
  );
}
