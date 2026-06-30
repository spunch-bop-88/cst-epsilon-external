# Implementation Notes

## Framework and Styling

- Framework: Next.js App Router (v16).
- Styling: Tailwind CSS v4 + custom global CSS utilities.

## Global Layout Model

- Navbar is fixed at top and uses explicit height (`h-16`).
- Main app scrolling happens in `.app-scroll-area` below navbar.
- Body scroll is disabled (`overflow-hidden`) to avoid viewport scrollbar overlap with header.

## Animation System

- Route transitions: applied via `app/template.tsx` with `.route-transition`.
- Hero load animations: `.hero-load-up` with stagger delay helpers.
- Continuous effects:
  - moving tape text,
  - floating orb motion,
  - lineage glow pulse.
- Reduced-motion media query disables non-essential motion.

## Color System

- Background base: dark slate/green blend.
- Foreground text tuned to neutral soft gray-green for readability.
- Brand accent: `#00ab55`.

## Custom Scrollbar

- Scrollbar is scoped to `.app-scroll-area`.
- WebKit customization includes thin thumb, transparent track, no arrows.
- Firefox fallback uses `scrollbar-color` and `scrollbar-width`.

## Content Notes

- Placeholder copy retained where official organization language is pending.
- Social links currently use placeholder href values.
