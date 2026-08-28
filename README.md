# Sadik Ahmed Pinon — Portfolio

Personal portfolio site — Next.js (App Router) + TypeScript + Tailwind CSS v4,
deployed on Vercel.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build && npm run start   # production build, for Lighthouse/perf checks
```

## Updating content

Everything shown on the site — bio, skills, experience, education, and all
five projects — lives in typed files under `src/content/`, not scattered
through JSX. To change what the site says, edit the relevant file there and
redeploy (`git push` — Vercel rebuilds automatically). You should not need to
touch anything under `src/components/` or `src/app/` for a content change.

| To change... | Edit... |
|---|---|
| Name, role, bio, contact info, résumé link | `src/content/site.ts` |
| A project's story, stats, tech stack, links | `src/content/projects/<slug>.ts` |
| Work experience | `src/content/experience.ts` |
| Education | `src/content/education.ts` |
| Skills | `src/content/skills.ts` |
| Courses / mentorship / certifications | `src/content/professional-development.ts` |

## Pending content

These are placeholder-safe (the site works and looks intentional without
them) but worth filling in when you have them:

- **Headshot photo** — drop a file at `public/images/profile.jpg`, then set
  `profileImage: { src: "/images/profile.jpg", alt: "..." }` in
  `src/content/site.ts`. Until then, the About section shows an initials
  monogram instead of a broken image.
- **Live URL + GitHub repo** for PoultryProX, EasyGames, Data Jobs
  Dashboards, and the Screen Time Impact project — the CV only had a repo
  link for NT Population Analysis. Add them to that project's `links: []`
  array in `src/content/projects/<slug>.ts`; the "View live" / "View on
  GitHub" buttons appear automatically once a link exists.
- **Canonical GitHub handle** — the one real repo link on the CV is under
  `github.com/dhalipinon`, which doesn't obviously match "Pinon." Confirm
  which account is canonical before this repo (or the project links above)
  go public, then optionally add it to `site.github` in `src/content/site.ts`.
- **About bio in your own words (optional)** — `site.bio` currently ships
  drafted from the CV's Professional Profile section. Swap it for your own
  voice any time; it's a one-line edit.
- **Real screenshots for the other four projects (optional)** — they
  currently use a generative SVG treatment instead of a screenshot (see
  `src/components/projects/project-visual.tsx`). To swap one in, change that
  project's `visual` in its content file to
  `{ kind: "real-image", src, alt, width, height, accentColor }`.

## Contact form

Submissions send through [Resend](https://resend.com). Copy `.env.example`
to `.env.local` and fill in:

- `RESEND_API_KEY` — from your Resend account
- `CONTACT_TO_EMAIL` — where messages get delivered
- `CONTACT_FROM_EMAIL` — must be a verified sender in Resend; start with the
  `onboarding@resend.dev` sandbox address, switch to something on the real
  domain once it's connected and verified

Mirror the same three variables in the Vercel project's Environment
Variables before deploying, or the form will 500 in production.

## Deployment

Hosted on Vercel. Push to the connected GitHub repo to deploy — Vercel runs
`next build` (which includes type-checking and linting) on every push.

To connect a custom domain: Vercel project → **Settings → Domains** → add
the domain, then add the DNS records Vercel shows you at your registrar (or
buy the domain directly through Vercel to skip manual DNS entirely). Update
`NEXT_PUBLIC_SITE_URL` in `.env.local`/Vercel's env vars to match once it's
live — it drives metadata, JSON-LD, the sitemap, and robots.txt.
