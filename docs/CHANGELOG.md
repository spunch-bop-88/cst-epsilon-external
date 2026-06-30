# Changelog

## 2026-06 (Session Summary)

### Initial Homepage Build

- Replaced starter Next.js content with a custom premium homepage.
- Built full-screen hero section with:
  - large placeholder club title,
  - value-focused supporting copy,
  - CTA buttons (`Join Now`, `View Events`),
  - animated recruitment tape text,
  - floating 3D-style abstract object.
- Added supporting homepage sections for value proposition, events preview, and recruitment CTA.

### Theme and Visual Direction Iterations

- Shifted homepage from light style to dark-mode visual system (not pure black).
- Tuned colors toward medium emerald + gray palette.
- Integrated official brand accent `#00ab55` into key UI components.
- Refined text tones to remove blue/neon cast from light text.

### Hero and Spacing Refinements

- Fixed clipping/overlap behavior for floating 3D object across section boundaries.
- Reduced excessive space below hero multiple times to improve section continuity.
- Updated hero section sizing to better fit viewport below fixed navbar.

### Navigation and Site Structure

- Added global top navbar with links:
  - About
  - Lineage
  - Events
  - Join
  - Contact
- Reworked navbar layout to:
  - keep club name left,
  - center nav links,
  - place Instagram/YouTube icons at right.
- Added placeholder social links for future URL replacement.

### New Route Pages

- Added route pages:
  - `/about`
  - `/lineage`
  - `/events`
  - `/join`
  - `/contact`
- Added basic section content placeholders for each page.

### Lineage Page Evolution

- Rebuilt lineage into centered, non-card vertical flow.
- Added class sequencing updates:
  - `Charters: 2009`
  - `Alpha Class: Spring 2010`
  - `Beta Class: Fall 2010`
  - `...`
  - `Alpha Beta Class: Spring 2025`
  - `Active House`
- Removed large `Class Lineage` header, keeping only small green `Lineage` label.
- Applied animated green glow treatment to lineage icons.
- Made both `Charters` and `Active House` person icons larger.

### Motion and Interaction Enhancements

- Added page transition animation via App Router template wrapper.
- Added staged hero load-in animations (badge, title, copy, CTA, floating object).
- Added reduced-motion fallback for accessibility.

### Scrollbar and Scroll Behavior

- Replaced default scrollbar styling with custom themed scrollbar.
- Adjusted scrollbar to neutral gray style and thinner width.
- Removed scrollbar bleed through navbar by making navbar opaque.
- Moved scrolling to a dedicated content container below navbar.
- Set scrollbar track background to transparent.
- Removed scrollbar arrow buttons.

### Reliability Checks

- Repeatedly validated updates with `npm run lint`.
- Verified successful production builds with `npm run build` throughout.
