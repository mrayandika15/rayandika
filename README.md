# mrayandika's portfolio

A playful, notebook-inspired portfolio built with Astro, TypeScript, and CSS. Ruled paper, taped photos, handwritten notes, colorful stickers, and folder-shaped projects follow the [new design references](docs/redesign.md).

## Run locally

Requires Node.js 22.12 or newer (Node 24 recommended) and npm.

```sh
npm ci
npm run dev
```

Open **http://localhost:4321/rayandika/**. The `/rayandika/` prefix matches this GitHub Pages project.

```sh
npm run check
npm run build
npm run test:static
npm run preview
```

The production output is static HTML, CSS, JavaScript, fonts, and images in `dist/`. No backend is required.

## Pages

| Page | Path under `/rayandika/` |
| --- | --- |
| Home | `/` |
| About | `/about/` |
| Selected work | `/work/` |
| Project details | `/work/<project-slug>/` |
| Playground | `/playground/` |
| Contact | `/contact/` |

Three project detail pages are generated from the project data. Navigation links and assets include the configured repository prefix.

## Edit content

| What | File |
| --- | --- |
| Name, GitHub URL, optional email, portrait, tools | `src/content/profile.ts` |
| Projects, slugs, summaries, focus notes, source links | `src/content/projects.ts` |
| Home headline and featured work | `src/pages/index.astro` |
| Shared handwritten introduction | `src/components/AboutScrapbook.astro` |
| Navigation and page shell | `src/components/Header.astro`, `src/layouts/BaseLayout.astro` |
| Colors, type, layouts, artwork, motion | `src/styles/global.css` |
| Menu, reveals, copy action, Playground filters and shuffle | `src/scripts/interactions.ts` |
| Hosting URL and base path | `astro.config.mjs` |

The display name is **mrayandika**; the full identity is Muhammad Rayandika; GitHub links use **mrayandika15**. These choices were confirmed by the user.

No public email was supplied. Contact actions use GitHub until an email is added to `profile.ts`. Adding one enables the email action and copy-email button. Clipboard support is progressively enhanced with success and failure feedback.

Project graphics are concept illustrations, not screenshots. The public repositories are linked so visitors can inspect the actual implementations. Project pages intentionally avoid unverified metrics and client claims.

## Images and fonts

- Portrait: locally optimized copy of the photo supplied by the owner on September 27, 2026.
- Inspiration photos: locally served Unsplash photographs; see [asset sources](docs/asset-sources.md).
- Artwork: original HTML/CSS illustrations in `ProjectVisual.astro` and the Playground page.
- Fonts: Jersey 10, Kalam, and Manrope, bundled locally through Fontsource.
- Favicon: a small pink smiley.
- Social sharing uses the current portrait from `profile.ts`.

## GitHub Pages deployment

Configured URL: **https://mrayandika15.github.io/rayandika/**.

1. Commit and push the project, including `package-lock.json`, to `main`.
2. In GitHub **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Run **Validate and deploy portfolio** from Actions, or push another change to `main`.
4. Open the deployment URL once the workflow succeeds.

Pull requests validate and build without deploying. The workflow uses the [official Astro Pages action](https://docs.astro.build/en/guides/deploy/github/). No public deployment was performed by the local redesign.

For another repository, update `site` and `base` in `astro.config.mjs`. Use base `/` for an account site or custom domain; configure DNS and `public/CNAME` separately if adding a domain.

## Verification

Run `npm run check`, `npm run build`, and `npm run test:static`. The static check verifies local page and asset links, fragment targets, repository base paths, and heading counts. Browser checks, accessibility results, and known testing limits are recorded in [docs/validation.md](docs/validation.md).

All main content, page navigation, project links, and expandable Playground entries work without JavaScript. Enhanced controls are hidden until initialized. Reduced-motion users receive the same content without entrance or shuffle animation.
