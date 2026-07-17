import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BriefcaseBusiness, LinkIcon } from "lucide-react";
import { ArticleCard } from "@/components/article/article-card";
import { Breadcrumbs } from "@/components/article/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { StructuredData } from "@/components/structured-data";
import { Badge } from "@/components/ui/badge";
import { articles, getArticlesByAuthor } from "@/lib/data/articles";
import { authors, getAuthor } from "@/lib/data/authors";
import { createMetadata } from "@/lib/seo/metadata";
import { authorSchema, breadcrumbSchema } from "@/lib/seo/schema";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) {
    return createMetadata({ title: "Author Not Found" });
  }

  return createMetadata({
    title: `${author.name} — ${author.role}`,
    description: author.bio,
    path: `/authors/${author.slug}`,
    image: author.avatar,
    imageAlt: `${author.name} — ${author.role} at TechlumeAI`,
    type: "profile",
    keywords: [author.name, author.role, ...author.expertise]
  });
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) {
    notFound();
  }

  const authorArticles = getArticlesByAuthor(author.slug);

  return (
    <>
      <StructuredData
        data={[
          authorSchema(author, authorArticles),
          breadcrumbSchema([{ name: author.name, href: `/authors/${author.slug}` }])
        ]}
      />
      <section className="container-page pt-8">
        <Breadcrumbs items={[{ label: author.name, href: `/authors/${author.slug}` }]} />
        <div className="mt-8 grid gap-8 rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[220px_1fr] lg:p-8">
          <div>
            <Image
              src={author.avatar}
              alt={author.name}
              width={220}
              height={220}
              className="rounded-[var(--radius)] bg-slate-50 dark:bg-slate-900"
              priority
            />
            {author.alumniOf ? (
              <p className="mt-4 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span className="block font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Alumni</span>
                {author.alumniOf}
              </p>
            ) : null}
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-300">
                  Verified Technical Author Profile
                </p>
                <h1 className="font-display text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                  {author.name}
                </h1>
                <p className="mt-1 text-lg font-semibold text-slate-600 dark:text-slate-300">
                  {author.role}
                </p>
              </div>
              <div className="flex gap-2">
                {author.socials.linkedin ? (
                  <Link
                    href={author.socials.linkedin}
                    className="focus-ring grid size-10 place-items-center rounded-[var(--radius)] border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-sky-300"
                    aria-label={`${author.name} on LinkedIn`}
                  >
                    <BriefcaseBusiness className="size-4" aria-hidden="true" />
                  </Link>
                ) : null}
                {author.socials.website ? (
                  <Link
                    href={author.socials.website}
                    className="focus-ring grid size-10 place-items-center rounded-[var(--radius)] border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-sky-300"
                    aria-label={`${author.name} website`}
                  >
                    <LinkIcon className="size-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {author.bio}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {author.expertise.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>

            {author.credentials && author.credentials.length > 0 ? (
              <div className="mt-8 rounded-xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/50">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Verified Professional Credentials & Experience
                </h2>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {author.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {author.focusAreas && author.focusAreas.length > 0 ? (
              <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/50">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Technical Areas of Investigation
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {author.focusAreas.map((focus, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {author.researchContribution ? (
              <div className="mt-5 rounded-xl border border-blue-200/80 bg-blue-50/60 p-5 dark:border-blue-900/40 dark:bg-blue-950/20">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-200">
                  Research & Methodology Contribution
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-blue-950 dark:text-blue-300">
                  {author.researchContribution}
                </p>
              </div>
            ) : null}

            {author.editorialStandards ? (
              <div className="mt-5 rounded-xl border border-green-200/80 bg-green-50/60 p-5 dark:border-green-900/40 dark:bg-green-950/20">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-green-900 dark:text-green-200">
                  Editorial Integrity & Verification Standards
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-green-950 dark:text-green-300">
                  {author.editorialStandards}{" "}
                  <Link
                    href="/editorial-policy"
                    className="font-bold text-green-800 underline underline-offset-4 hover:text-green-950 dark:text-green-400 dark:hover:text-green-200"
                  >
                    View Complete Verification Policy &rarr;
                  </Link>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <SectionHeading
          eyebrow="Articles Archive"
          title={`Published Technical Reports by ${author.name}`}
          description={`${authorArticles.length} deeply researched, fact-checked articles in the TechlumeAI archive.`}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {(authorArticles.length ? authorArticles : articles.slice(0, 3)).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
