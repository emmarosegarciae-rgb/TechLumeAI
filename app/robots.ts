import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image*"],
        disallow: ["/api/", "/_next/", "/admin/", "/draft/", "/preview/", "/search?*"]
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: ["/", "/_next/static/", "/_next/image*"],
        disallow: ["/api/", "/_next/", "/admin/", "/draft/", "/preview/", "/search?*"]
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
