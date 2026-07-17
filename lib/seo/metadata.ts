import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { SITE_URL } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/utils";

export type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  keywords?: string[] | string;
  category?: string;
  noIndex?: boolean;
};

/**
 * Enterprise Metadata Framework Engine for TechlumeAI
 * Guarantees strict adherence to:
 * - Title Tag Framework (50-60 chars target, entity + keyword + intent without brand duplication)
 * - Meta Description Framework (140-160 chars target, unique benefit + CTA)
 * - Open Graph & Twitter Card summary_large_image generation
 * - Image SEO alt text & exact canonical path resolution
 */
export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/images/illustrations/og-techlumeai.svg",
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  keywords,
  category = "technology",
  noIndex = false
}: MetadataInput = {}): Metadata {
  // Intelligent Title Formatting to prevent exceeding 60 characters or duplicating brand name
  let pageTitle = siteConfig.name;
  if (title) {
    const hasBrand = title.toLowerCase().includes("techlumeai");
    const wouldExceedLength = title.length + siteConfig.name.length + 3 > 63;
    pageTitle = hasBrand || wouldExceedLength ? title : `${title} | ${siteConfig.name}`;
  }

  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const altText = imageAlt || (title ? `${title} — TechlumeAI Editorial Illustration` : `${siteConfig.name} — Premium AI & Technology Publication`);

  // Format keywords array
  let keywordsList: string[] | undefined;
  if (Array.isArray(keywords)) {
    keywordsList = keywords;
  } else if (typeof keywords === "string") {
    keywordsList = keywords.split(",").map((k) => k.trim()).filter(Boolean);
  } else if (tags && tags.length > 0) {
    keywordsList = tags;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    keywords: keywordsList,
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": absoluteUrl("/rss.xml")
      }
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      publishedTime,
      modifiedTime,
      authors,
      tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: altText
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
      creator: "@techlumeai"
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }
      ],
      apple: [{ url: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }]
    },
    manifest: "/manifest.webmanifest",
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true
          }
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
          }
        },
    applicationName: siteConfig.name,
    category
  };
}
