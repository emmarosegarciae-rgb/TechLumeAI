import { articles } from "@/lib/data/articles";
import { getAuthor } from "@/lib/data/authors";
import { getCategory } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = articles
    .map((article) => {
      const author = getAuthor(article.author);
      const category = getCategory(article.category);
      const url = absoluteUrl(`/articles/${article.slug}`);

      return `
        <item>
          <title>${escapeXml(article.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(article.excerpt)}</description>
          <author>${escapeXml(author?.name || siteConfig.name)}</author>
          <category>${escapeXml(category?.name || "Technology")}</category>
          <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <link>${siteConfig.url}</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>en-US</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
