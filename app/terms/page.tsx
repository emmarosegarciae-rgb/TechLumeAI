import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use — Reader & Commercial Licensing Agreement",
  description: "Terms of use for TechlumeAI readers, contributors, advertisers, and enterprise partners.",
  path: "/terms",
  keywords: ["TechlumeAI Terms of Use", "Content Licensing", "Reader Agreement"]
});

export default function TermsPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Terms of Use — Reader & Commercial Licensing Agreement",
            description: "Terms of use for TechlumeAI readers, contributors, advertisers, and enterprise partners.",
            url: "/terms",
            type: "WebPage"
          })
        ]}
      />
      <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      description="The terms governing access to TechlumeAI content, services, and commercial programs."
      sections={[
        {
          title: "Use of the Site",
          body: [
            "TechlumeAI content is provided for informational and editorial purposes. Readers are responsible for how they use information from the publication.",
            "You may not interfere with site operation, scrape at abusive scale, misrepresent affiliation, or use the publication for unlawful activity."
          ]
        },
        {
          title: "Content Rights",
          body: [
            "TechlumeAI owns or licenses the editorial content, branding, design, and original assets published on the site.",
            "Limited excerpts may be shared with attribution and a link back to the original article."
          ]
        },
        {
          title: "Commercial Programs",
          body: [
            "Sponsored content, guest posts, advertising, and link insertion programs are subject to editorial review, disclosure rules, and campaign-specific agreements.",
            "TechlumeAI may decline or remove partner content that conflicts with reader trust or site quality."
          ]
        }
      ]}
    />
    </>
  );
}
