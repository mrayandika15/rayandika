# Portfolio validation

Validated September 25, 2026 after the complete scrapbook redesign, against the generated production site at `/rayandika/`. This replaces the earlier one-page validation report.

## Automated checks

- `npm run check`: zero errors, warnings, or hints.
- `npm run build`: eight static pages generated successfully.
- `npm run test:static`: eight pages and **152 local links/assets** checked; all destinations and fragment targets exist, links use the repository base path, and each page has one `h1`.
- `git diff --check`: passed.
- Dependency installation audit: zero reported vulnerabilities.

The static-link check is included in the GitHub Actions build workflow to catch base-path and navigation regressions before deployment.

## Responsive and visual checks

| Check | Result |
| --- | --- |
| Home, About, Work, Playground, Contact, and project-detail template at 360, 390, 768, 1024, and 1440px | No horizontal document overflow |
| All eight production pages at 390px | No horizontal document overflow or broken fragment links |
| Home desktop and mobile | Visually reviewed against the new supplied reference |
| About and Contact desktop, Contact mobile | Visually reviewed |
| Playground desktop | Visually reviewed, including note artwork and photographs |
| Polaroids | Local images load and retain intended aspect ratios |
| Social preview | New 1200 × 630 image captured from the production home page |

## Interaction checks

- Mobile menu opens, closes on Escape, reports expanded state, and returns focus to its button.
- Playground Code and Visual filters each show three entries; All restores six entries.
- Shuffle changes the card order and announces completion. It shuffles the currently visible entries when a filter is applied.
- Playground entries expand with the keyboard using native `details`/`summary` elements.
- Contact copy success and failure feedback work, tested with controlled clipboard stubs; the copied value is the correct public GitHub URL.
- With JavaScript disabled, navigation remains visible, all six Playground entries remain available, and enhancement-only controls remain hidden.
- Reduced-motion mode disables entrance and reveal animations while preserving content and interactions.

## Accessibility

axe-core WCAG 2 A/AA and WCAG 2.1 AA checks reported **zero violations** on all eight production pages at 390px. Desktop scans at 1440px also reported zero violations on Home, About, Work, Playground, Contact, and the project-detail template. Scans ran with reduced motion enabled to avoid sampling partially faded text.

Automated checks are not a guarantee of full accessibility conformance. Testing used Ego Lite's Chromium browser; Safari, Firefox, physical devices, and a complete screen-reader walkthrough were not tested.

## Delivery state

- Display name: **mrayandika**. Full name: Muhammad Rayandika. GitHub: **mrayandika15**.
- Portrait and selected repositories retain the user's previously approved public profile content.
- Stock images are inspiration imagery, with provenance in `asset-sources.md`; project artwork is labeled as conceptual.
- Contact uses GitHub because no public email has been supplied. Adding an email in `src/content/profile.ts` switches the contact actions to email.
- The deployment workflow is ready. No commit, push, Pages setting change, or public deployment was performed.
