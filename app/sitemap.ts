import type { MetadataRoute } from "next";
import { articles } from "@/lib/data/articles";
import { authors } from "@/lib/data/authors";
import { categories } from "@/lib/data/categories";
import { getAllGlossaryEntities } from "@/lib/data/glossary";
import { getAllTopics } from "@/lib/data/topics";
import { SITE_URL } from "@/lib/site-config";

const staticRoutes = [
  "",
  "/articles",
  "/topics",
  "/glossary",
  "/authors",
  "/category",
  "/comparisons",
  "/about",
  "/contact",
  "/services",
  "/write-for-us",
  "/advertise",
  "/newsletter",
  "/privacy-policy",
  "/terms",
  "/cookies",
  "/dmca",
  "/disclaimer",
  "/editorial-policy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8
  })) satisfies MetadataRoute.Sitemap;

  const articlePages = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "weekly",
    priority: article.featured ? 0.95 : 0.85
  })) satisfies MetadataRoute.Sitemap;

  const categoryPages = categories.map((category) => ({
    url: `${SITE_URL}/category/${category.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.85
  })) satisfies MetadataRoute.Sitemap;

  const topicPages = getAllTopics().map((topic) => ({
    url: `${SITE_URL}/topics/${topic.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8
  })) satisfies MetadataRoute.Sitemap;

  const glossaryPages = getAllGlossaryEntities().map((entity) => ({
    url: `${SITE_URL}/glossary/${entity.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75
  })) satisfies MetadataRoute.Sitemap;

  const authorPages = authors.map((author) => ({
    url: `${SITE_URL}/authors/${author.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.65
  })) satisfies MetadataRoute.Sitemap;

  return [
    ...staticPages,
    ...articlePages,
    ...categoryPages,
    ...topicPages,
    ...glossaryPages,
    ...authorPages
  ];
}
