import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy — Reader & Subscriber Data Protection",
  description: "TechlumeAI privacy policy for readers, subscribers, contributors, and enterprise partners.",
  path: "/privacy-policy",
  keywords: ["TechlumeAI Privacy Policy", "Reader Data Protection", "Editorial Privacy"]
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <StructuredData
        data={[
          webPageSchema({
            title: "Privacy Policy — Reader & Subscriber Data Protection",
            description: "TechlumeAI privacy policy for readers, subscribers, contributors, and enterprise partners.",
            url: "/privacy-policy",
            type: "WebPage"
          })
        ]}
      />
      <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How TechlumeAI handles reader, subscriber, contributor, and partner information."
      sections={[
        {
          title: "Information We Collect",
          body: [
            "We may collect information readers provide directly, including newsletter signups, inquiry form details, contribution submissions, and partnership communications.",
            "We may also collect standard analytics data such as device type, browser type, approximate region, referral source, and page interactions."
          ]
        },
        {
          title: "How We Use Information",
          body: [
            "Information is used to operate the publication, respond to inquiries, improve editorial products, measure performance, manage subscriptions, and support commercial programs.",
            "We do not sell personal information as a standalone product."
          ]
        },
        {
          title: "Reader Choices",
          body: [
            "Newsletter subscribers can unsubscribe from email communications at any time.",
            "Readers may contact TechlumeAI to request access, correction, or deletion of personal information where applicable law provides that right."
          ]
        }
      ]}
    />
    </>
  );
}
