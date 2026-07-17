import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "DMCA Policy — Copyright Protection & Infringement Claims",
  description: "TechlumeAI copyright compliance, intellectual property protection, and DMCA takedown notice process.",
  path: "/dmca",
  keywords: ["TechlumeAI DMCA Policy", "Copyright Infringement Notice", "Intellectual Property Protection"]
});

export default function DmcaPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "DMCA Policy — Copyright Protection & Infringement Claims",
            description: "TechlumeAI copyright and DMCA notice process.",
            url: "/dmca",
            type: "WebPage"
          })
        ]}
      />
      <LegalPage
      eyebrow="Legal"
      title="DMCA Policy"
      description="Copyright owners may contact TechlumeAI regarding alleged infringement."
      sections={[
        {
          title: "Copyright Notices",
          body: [
            "If you believe content on TechlumeAI infringes your copyright, send a notice with the copyrighted work, the allegedly infringing URL, contact information, and a good-faith statement.",
            "Notices can be sent to legal@techlumeai.com for review."
          ]
        },
        {
          title: "Counter Notices",
          body: [
            "If you believe content was removed or restricted in error, you may submit a counter notice with relevant ownership, authorization, or fair use details.",
            "TechlumeAI reviews copyright requests with care and may request additional information."
          ]
        }
      ]}
    />
    </>
  );
}
