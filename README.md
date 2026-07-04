# tomzahavy.com

Personal site for Tom Zahavy — built with Next.js (App Router), TypeScript, and Tailwind CSS, exported as static HTML.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- Featured projects and publication list live in [`src/lib/data.ts`](src/lib/data.ts) — edit that file to add/update entries.
- Pages: `src/app/page.tsx` (home), `src/app/about/page.tsx`, `src/app/publications/page.tsx`, `src/app/blog/page.tsx`.
- Drop a profile photo at `public/profile.jpg` and swap the initials avatar in `src/app/page.tsx` for a `next/image`.

## Deployment

Static export (`output: "export"` in `next.config.ts`) builds to `out/`. Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and deploys to GitHub Pages.

For a custom domain, add a `public/CNAME` file containing `tomzahavy.com` and point the domain's DNS at GitHub Pages.
