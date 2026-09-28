# Portfolio design system

## Current direction

Updated September 25, 2026 to follow the user's new scrapbook references. This replaces the earlier cream-and-sage editorial design. The reference images are stored in `docs/references/scrapbook/`.

The physical scene is a personal notebook spread across a gray gridded worktable. A visitor is leafing through someone's ideas, projects, and handwritten notes in daylight. The interface should feel tactile, playful, and personal, while navigation stays straightforward.

## Color and surfaces

The source of truth is `src/styles/global.css`. The outer surface is warm gray graph paper. The inner surface is off-white ruled notebook paper. Ink is a warm near-black. Saturated yellow, cobalt blue, pink, and green have distinct roles in folder tabs, labels, and stickers. Mint, butter, lavender, and blush are supporting paper colors.

## Typography

- **Jersey 10:** pixelated display type for the name and page titles, inspired by the reference's blocky headline.
- **Kalam:** handwritten notes, personal copy, and photo captions.
- **Manrope:** interface copy and readable project descriptions.
- **Courier New:** short stamped labels and metadata.

Fonts are served locally through Fontsource. Strong scale contrast separates the name, personal statement, and tiny notebook labels.

## Composition

- One ruled-paper notebook inside a visible graph-paper border.
- Compact sticky navigation with a yellow current-page indicator.
- Centered home hero with an orange name outline, small annotations, and circular stamps.
- Taped polaroids around a handwritten introduction.
- Torn-edge skill stickers and overlapping file-folder project sections.
- Real static pages for About, Work, each project, Playground, and Contact.
- A pinned-note Contact page and a smiley-led closing invitation.

At 620px and below, navigation becomes a disclosure, collages stack deliberately, project copy sits above its artwork, and photos use compact side-by-side arrangements. At very narrow widths the Playground becomes a single column.

## Imagery and accuracy

The portrait remains the owner's public portfolio photo. Studio, circuit, and laptop photos are decorative inspiration imagery from Unsplash, not claims about the owner's workspace or work. Project artwork is authored HTML/CSS and explicitly labeled as concept illustration. No invented client list or project metrics.

## Motion and interaction

- Short staggered hero entrance and one-time section reveals.
- Gentle photo and sticker rotations on hover.
- Native, keyboard-accessible expandable Playground notes.
- Playground category filters and a shuffle action with live-region feedback.
- Mobile menu with expanded state and Escape-to-close focus return.
- Contact copy success and failure feedback.
- Reduced-motion support, no autoplaying loops, and no scroll hijacking.

## Accessibility

Semantic page landmarks, one main heading per page, skip link, current-page navigation state, descriptive links, visible focus, meaningful image alternatives, decorative artwork hidden from assistive technology, and full content access without JavaScript. See `docs/validation.md` for the latest verified results and limitations.
