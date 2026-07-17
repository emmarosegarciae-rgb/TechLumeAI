import { PageHero } from "@/components/sections/page-hero";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: { title: string; body: string[] }[];
};

export function LegalPage({ eyebrow, title, description, sections }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="container-page py-10">
        <div className="mx-auto max-w-3xl rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-8">
          <div className="article-prose">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
