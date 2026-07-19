# Design

Visual system for Widya Yasa's portfolio. Register: **brand** (see PRODUCT.md). Strategy: **Restrained** — tinted monochrome neutrals + one indigo accent (≤10% of surface).

## Color

OKLCH throughout. Neutrals carry a slight chroma (0.002–0.008) toward hue 270 so the grays belong to the same family as the accent.

| Token | Light | Dark | Use |
|---|---|---|---|
| `background` | `oklch(1 0 0)` | `oklch(0.155 0.006 270)` | Page surface |
| `foreground` | `oklch(0.21 0.006 270)` | `oklch(0.97 0.002 270)` | Body text |
| `muted` / `muted-foreground` | `oklch(0.965 / 0.44 …)` | `oklch(0.235 / 0.71 …)` | Subtle fills, secondary text (≥4.5:1) |
| `accent` | `oklch(0.511 0.2 270)` | `oklch(0.56 0.2 270)` | **Indigo. CTAs, focus rings, active nav, hover emphasis only** |
| `accent-foreground` | `oklch(0.985 0 0)` | same | Text on accent |
| `accent-soft` / `accent-softer` | 9% / 5% accent alpha | 14% / 7% | Glow, selections, badge hover |
| `border` | `oklch(0.905 …)` | `oklch(0.27 …)` | Hairlines |

Rules:
- Accent is never a large-area fill; it marks interactivity and emphasis.
- No gradient text, no glassmorphism, no eyebrow labels, no side-stripe borders.
- Selection = solid accent.

## Typography

Single family: **Geist Sans** (display + body) with **Geist Mono** for labels, tech badges, metadata. Loaded via `geist` package + next/font (`--font-geist-sans`, `--font-geist-mono`).

- Headings: weight contrast (semibold/bold), `letter-spacing: -0.02em`, `text-wrap: balance`
- Body: Geist Sans regular, line length ≤ 70ch
- Labels/badges: Geist Mono, small size
- Display ceiling: `clamp()` max ≤ 6rem

## Background

Static indigo glow painted on `body` (two radial-gradient ellipses, `accent-soft` tints, `background-attachment: fixed`). No animation, no canvas, no particles — inherently reduced-motion safe.

## Motion

- Framer-motion for section reveals (fade + 16–30px rise, ease-out-quart-ish `cubic-bezier(0.21, 0.47, 0.32, 0.98)`, once per viewport)
- CSS `.animate-fade-in-up` for simple entrances
- Global `prefers-reduced-motion` block collapses all animation/transition to instant
- No bounce, no elastic, no always-on effects

## Components

Only `components/ui/button.tsx` remains from the shadcn scaffold; new sections compose from tokens directly (badges: `bg-secondary` + `hover:bg-accent-soft`). Re-add shadcn pieces only when a slice needs them.

## Theming

`next-themes`, class attribute. Target behavior (slice #3): follow system on first visit, toggle overrides and persists, no theme flash.
