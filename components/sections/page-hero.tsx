type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="container-page pt-10">
      <div className="rounded-[var(--radius)] border border-slate-200 bg-white p-6 shadow-luxe dark:border-slate-800 dark:bg-slate-950 sm:p-8 lg:p-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-sky-300">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-black leading-tight tracking-normal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
