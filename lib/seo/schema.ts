import type { Article, Author, Category } from "@/lib/types";
import { siteConfig } from "@/lib/data/site";
import { absoluteUrl } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      "@id": absoluteUrl("/#logo"),
      url: absoluteUrl("/logos/techlumeai-mark.svg"),
      width: 512,
      height: 512,
      caption: `${siteConfig.name} Enterprise Logo`
    },
    foundingDate: siteConfig.foundingDate,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "editorial and business inquiries",
      areaServed: siteConfig.country
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Software Engineering",
      "Cloud Architecture",
      "Cybersecurity",
      "Developer Platforms"
    ],
    ethicsPolicy: absoluteUrl("/editorial-policy"),
    publishingPrinciples: absoluteUrl("/editorial-policy"),
    correctionsPolicy: absoluteUrl("/editorial-policy#corrections"),
    missionCoveragePrioritiesPolicy: absoluteUrl("/about"),
    sameAs: Object.values(siteConfig.social)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization")
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  const currentPath = items[items.length - 1]?.href || "";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${currentPath}#breadcrumb`),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}

export function imageObjectSchema({
  url,
  caption,
  alt,
  width = 1200,
  height = 630,
  author
}: {
  url: string;
  caption?: string;
  alt: string;
  width?: number;
  height?: number;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": absoluteUrl(`${url}#image`),
    contentUrl: absoluteUrl(url),
    url: absoluteUrl(url),
    caption: caption || alt,
    description: alt,
    width,
    height,
    ...(author
      ? {
          creator: {
            "@type": "Person",
            name: author
          }
        }
      : {})
  };
}

export function videoObjectSchema({
  title,
  description,
  url,
  duration,
  uploadDate,
  thumbnail
}: {
  title: string;
  description: string;
  url: string;
  duration?: string;
  uploadDate?: string;
  thumbnail?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": absoluteUrl(`${url}#video`),
    name: title,
    description,
    contentUrl: url,
    uploadDate: uploadDate || new Date().toISOString().split("T")[0],
    ...(duration ? { duration } : {}),
    ...(thumbnail ? { thumbnailUrl: [absoluteUrl(thumbnail)] } : {})
  };
}

export function articleSchema(article: Article, author: Author, category: Category) {
  const schemaType = article.isCornerstone
    ? "TechArticle"
    : article.primaryIntent?.includes("News")
      ? "NewsArticle"
      : "Article";

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": absoluteUrl(`/articles/${article.slug}#article`),
    headline: article.title,
    description: article.excerpt,
    image: [
      {
        "@type": "ImageObject",
        "@id": absoluteUrl(`${article.image}#image`),
        url: absoluteUrl(article.image),
        caption: article.imageAlt || `${article.title} — Technical Illustration`,
        description: article.imageAlt || article.title,
        width: 1200,
        height: 630
      }
    ],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/articles/${article.slug}#webpage`),
      url: absoluteUrl(`/articles/${article.slug}`)
    },
    articleSection: category.name,
    keywords: [
      article.primaryKeyword,
      ...(article.secondaryKeywords || []),
      ...(article.entityVariations || []),
      ...article.tags
    ].filter(Boolean).join(", "),
    author: {
      "@type": "Person",
      "@id": absoluteUrl(`/authors/${author.slug}#person`),
      name: author.name,
      url: absoluteUrl(`/authors/${author.slug}`),
      jobTitle: author.role,
      description: author.bio,
      knowsAbout: author.expertise,
      sameAs: Object.values(author.socials).filter(Boolean)
    },
    publisher: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        "@id": absoluteUrl("/#logo")
      }
    }
  };

  if (article.factCheckedBy) {
    schema["contributor"] = {
      "@type": "Person",
      name: article.factCheckedBy,
      jobTitle: "Technical Fact Checker"
    };
  }

  if (article.video) {
    schema["video"] = videoObjectSchema({
      title: `${article.title} — Video Summary`,
      description: article.excerpt,
      url: article.video.url,
      duration: article.video.duration,
      uploadDate: article.publishedAt
    });
  }

  if (article.relatedEntities && article.relatedEntities.length > 0) {
    schema["about"] = article.relatedEntities.map((term) => ({
      "@type": "DefinedTerm",
      "@id": absoluteUrl(`/glossary/${term}#term`),
      name: term,
      url: absoluteUrl(`/glossary/${term}`)
    }));
  }

  if (article.references && article.references.length > 0) {
    schema["citation"] = article.references.map((ref) => ({
      "@type": "CreativeWork",
      name: ref.title,
      url: ref.url,
      ...(ref.author ? { author: { "@type": "Person", name: ref.author } } : {}),
      ...(ref.publisher ? { publisher: { "@type": "Organization", name: ref.publisher } } : {}),
      ...(ref.date ? { datePublished: ref.date } : {})
    }));
  }

  if (article.questionKeywords && article.questionKeywords.length > 0) {
    schema["hasPart"] = article.questionKeywords.map((q, idx) => ({
      "@type": "Question",
      "@id": absoluteUrl(`/articles/${article.slug}#question-${idx + 1}`),
      name: q
    }));
  }

  if (article.knowledgeGraph) {
    if (article.knowledgeGraph.parent) {
      schema["isPartOf"] = {
        "@type": "CollectionPage",
        "@id": absoluteUrl(`/topics/${article.knowledgeGraph.parent}#collection`),
        name: article.knowledgeGraph.parent,
        url: absoluteUrl(`/topics/${article.knowledgeGraph.parent}`)
      };
    }
    if (article.knowledgeGraph.related && article.knowledgeGraph.related.length > 0) {
      schema["mentions"] = article.knowledgeGraph.related.map((rel) => ({
        "@type": "Article",
        "@id": absoluteUrl(`/articles/${rel}#article`),
        url: absoluteUrl(`/articles/${rel}`)
      }));
    }
  }

  if (article.aiRetrievalScore !== undefined || article.aiCitationScore !== undefined) {
    schema["additionalProperty"] = [
      ...(article.aiRetrievalScore !== undefined
        ? [
            {
              "@type": "PropertyValue",
              name: "AIRetrievalReadinessScore",
              value: article.aiRetrievalScore
            }
          ]
        : []),
      ...(article.aiCitationScore !== undefined
        ? [
            {
              "@type": "PropertyValue",
              name: "AICitationPotentialScore",
              value: article.aiCitationScore
            }
          ]
        : [])
    ];
  }

  return schema;
}

export function faqSchema(faq: NonNullable<Article["faq"]>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item, index) => ({
      "@type": "Question",
      "@id": `#faq-question-${index + 1}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        "@id": `#faq-answer-${index + 1}`,
        text: item.answer
      }
    }))
  };
}

export function authorSchema(author: Author, authorArticles?: Array<{ title: string; slug: string; excerpt: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`/authors/${author.slug}#person`),
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: absoluteUrl(`/authors/${author.slug}`),
    image: {
      "@type": "ImageObject",
      "@id": absoluteUrl(`${author.avatar}#image`),
      url: absoluteUrl(author.avatar),
      caption: `${author.name} — ${author.role} at ${siteConfig.name}`
    },
    knowsAbout: author.expertise,
    sameAs: Object.values(author.socials).filter(Boolean),
    worksFor: {
      "@type": "NewsMediaOrganization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      url: siteConfig.url
    },
    ...(authorArticles && authorArticles.length > 0
      ? {
          authorOf: authorArticles.map((art) => ({
            "@type": "Article",
            "@id": absoluteUrl(`/articles/${art.slug}#article`),
            headline: art.title,
            description: art.excerpt,
            url: absoluteUrl(`/articles/${art.slug}`)
          }))
        }
      : {}),
    ...(author.credentials && author.credentials.length > 0
      ? {
          hasCredential: author.credentials.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Degree/Certification",
            name: c
          }))
        }
      : {}),
    ...(author.alumniOf
      ? {
          alumniOf: {
            "@type": "EducationalOrganization",
            name: author.alumniOf
          }
        }
      : {})
  };
}

export function collectionPageSchema(
  title: string,
  description: string,
  url: string,
  items?: Array<{ name: string; url: string; description?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl(`${url}#collection`),
    name: title,
    description,
    url: absoluteUrl(url),
    ...(items && items.length > 0
      ? {
          mainEntity: {
            "@type": "ItemList",
            "@id": absoluteUrl(`${url}#itemlist`),
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              description: item.description,
              url: absoluteUrl(item.url)
            }))
          }
        }
      : {})
  };
}

export function categoryPageSchema(
  category: Category,
  items?: Array<{ name: string; url: string; description?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "CategoryCode",
    "@id": absoluteUrl(`/category/${category.slug}#category`),
    name: category.name,
    description: category.description,
    url: absoluteUrl(`/category/${category.slug}`),
    inCodeSet: {
      "@type": "CategoryCodeSet",
      "@id": absoluteUrl("/category#codeset"),
      name: `${siteConfig.name} Editorial Pillars`
    },
    ...(items && items.length > 0
      ? {
          mainEntity: {
            "@type": "ItemList",
            "@id": absoluteUrl(`/category/${category.slug}#itemlist`),
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              description: item.description,
              url: absoluteUrl(item.url)
            }))
          }
        }
      : {})
  };
}

export function definedTermSchema(term: string, definition: string, url: string, synonyms?: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": absoluteUrl(`${url}#term`),
    name: term,
    description: definition,
    url: absoluteUrl(url),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": absoluteUrl("/glossary#termset"),
      name: `${siteConfig.name} AI & Technology Knowledge Glossary`,
      url: absoluteUrl("/glossary")
    },
    ...(synonyms && synonyms.length > 0 ? { alternateName: synonyms } : {})
  };
}

export function webPageSchema({
  title,
  description,
  url,
  type = "WebPage"
}: {
  title: string;
  description: string;
  url: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "SearchResultsPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": absoluteUrl(`${url}#webpage`),
    name: title,
    description,
    url: absoluteUrl(url),
    publisher: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        "@id": absoluteUrl("/#logo")
      }
    }
  };
}

export function howToSchema({
  title,
  description,
  steps
}: {
  title: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    step: steps.map((s, index) => ({
      "@type": "HowToStep",
      "@id": `#howto-step-${index + 1}`,
      position: index + 1,
      name: s.name,
      text: s.text,
      ...(s.image ? { image: absoluteUrl(s.image) } : {})
    }))
  };
}

export function itemListSchema(
  items: Array<{ name: string; url: string; description?: string }>,
  title?: string,
  description?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(title ? { name: title } : {}),
    ...(description ? { description } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      url: absoluteUrl(item.url)
    }))
  };
}

// ============================================================================
// Phase 14: Generative Engine Optimization (GEO) & AI Answer Schema Helpers
// ============================================================================

export function geoAnswerSchema({
  question,
  directAnswer,
  explanation,
  evidenceSummary,
  url,
  author = siteConfig.name
}: {
  question: string;
  directAnswer: string;
  explanation?: string;
  evidenceSummary?: string;
  url?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: question,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${directAnswer}${explanation ? ` ${explanation}` : ""}${evidenceSummary ? ` (Evidence: ${evidenceSummary})` : ""}`,
        author: {
          "@type": "Organization",
          name: author
        },
        ...(url ? { url: absoluteUrl(url) } : {})
      }
    }
  };
}

export function aiOverviewMetadataSchema({
  title,
  summary,
  url,
  primaryEntity,
  relatedTerms = [],
  lastUpdated
}: {
  title: string;
  summary: string;
  url: string;
  primaryEntity: string;
  relatedTerms?: string[];
  lastUpdated?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: summary,
    url: absoluteUrl(url),
    ...(lastUpdated ? { dateModified: lastUpdated } : {}),
    about: [
      {
        "@type": "DefinedTerm",
        name: primaryEntity,
        url: absoluteUrl(`/glossary/${primaryEntity}`)
      },
      ...relatedTerms.map((term) => ({
        "@type": "DefinedTerm",
        name: term,
        url: absoluteUrl(`/glossary/${term}`)
      }))
    ]
  };
}

export function citationReferenceSchema({
  title,
  assetId,
  assetType,
  canonicalUrl,
  description
}: {
  title: string;
  assetId: string;
  assetType: string;
  canonicalUrl: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${title} (${assetId})`,
    description: `${description} [Classification: ${assetType}]`,
    url: absoluteUrl(canonicalUrl),
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    includedInDataCatalog: {
      "@type": "DataCatalog",
      name: `${siteConfig.name} Enterprise AI Citation Repository`,
      url: siteConfig.url
    }
  };
}

