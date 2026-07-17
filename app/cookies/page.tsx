import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy — Reader Analytics & Privacy Settings",
  description: "How TechlumeAI uses cookies, session analytics, and browser storage across our technical publication.",
  path: "/cookies",
  keywords: ["TechlumeAI Cookies", "Analytics Policy", "Reader Privacy Settings"]
});

export default function CookiesPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Cookie Policy — Reader Analytics & Privacy Settings",
            description: "How TechlumeAI uses cookies, analytics, and similar technologies.",
            url: "/cookies",
            type: "WebPage"
          })
        ]}
      />
      <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      description="How cookies and similar technologies support site performance, analytics, and reader experience."
      sections={[
        {
          title: "Cookie Use",
          body: [
            "TechlumeAI may use cookies and similar technologies for preferences, security, analytics, newsletter attribution, and performance measurement.",
            "Cookie categories can include essential cookies, analytics cookies, preference cookies, and advertising measurement cookies."
          ]
        },
        {
          title: "Managing Cookies",
          body: [
            "Readers can manage cookies through browser controls and, where implemented, site-level consent tools.",
            "Blocking some cookies may affect saved preferences, analytics quality, or certain interactive features."
          ]
        }
      ]}
    />
    </>
  );
}
