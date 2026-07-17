# TechlumeAI

Premium AI and technology publication built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style primitives, Framer Motion, and Lucide icons.

## What Is Included

- Magazine-style home page with featured story, editor picks, trending news, latest articles, category modules, video cards, sponsor placements, and newsletter capture.
- SEO-ready article pages with metadata, Open Graph, Twitter cards, article schema, breadcrumbs, FAQ schema, table of contents, author card, share actions, related posts, and comment integration surface.
- Category archives with filtering, sorting, and progressive loading.
- Search page with instant client-side filtering, category filters, sort controls, suggestions, and popular searches.
- Author, About, Contact, Services, Write For Us, Advertise, Newsletter, Privacy, Terms, Cookies, DMCA, Disclaimer, and Editorial Policy pages.
- Sitemap, robots, RSS feed, manifest, favicon, responsive SVG art, and reusable data files for future CMS migration.

## Tech Stack

- Next.js `16.2.10`
- React `19.2.7`
- TypeScript
- Tailwind CSS `4.3.2`
- Framer Motion
- Lucide React
- shadcn-compatible component structure

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Content Architecture

Content is separated under `lib/data`:

- `articles.ts`
- `authors.ts`
- `categories.ts`
- `navigation.ts`
- `site.ts`

This keeps the current static site easy to migrate later to Sanity, Contentful, Strapi, WordPress Headless, or Markdown.

## Deployment

The project is ready for Vercel, GitHub upload, and Node-compatible static/server deployments.

For Vercel:

```bash
npm install
npm run build
```

For Google Intergravity or another host, use the same build command and configure `NEXT_PUBLIC_SITE_URL` to the production domain.

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://techlumeai.com
NEXT_PUBLIC_SITE_NAME=TechlumeAI
NEXT_PUBLIC_CONTACT_EMAIL=partnerships@techlumeai.com
```

## Commercial Pages

The site includes structured pages for guest posts, sponsored posts, link insertions, brand promotion, content marketing, digital PR, newsletter sponsorship, and display advertising.
