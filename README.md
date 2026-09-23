# FIVE ⚡

FIVE is a cinematic landing experience for a card concept built around one core idea: **spend normally, earn Sparks, and erase real expenses**.

I built this repo as a focused, single-page product drop for the **UNILAG first launch story**—dark, premium, and interaction-led rather than a generic fintech brochure.

---

## Why this project exists

Most fintech pages explain features. FIVE is designed to make people *feel* the mechanic first, then understand it:

- Curiosity (visual hook)
- Desire (card + motion)
- Proof (interactive Eraser demo)
- Commitment (founding-access form)

The goal is emotional clarity with minimal friction.

---

## What users can do right now

The current implementation is a one-page interactive flow with:

- Loading intro
- Sticky nav with launch context and scarcity copy
- Hero with expense selector
- Animated card loop (expense flash + balance tick)
- Interactive “Eraser” transaction demo
- “How it works” 3-step section
- Card showcase + unlock paths
- Squad/multiplier section
- Campus energy visual section
- Scrolling social-proof feed
- Founding-access form and success state
- Final close CTA

> Note: this repo is currently frontend-only. Form submission and waitlist position are local UI behavior (no backend/API persistence yet).

---

## Engineering architecture

This project is intentionally simple and fast:

- **Framework:** Next.js App Router
- **Main page:** `app/page.tsx` (single client component)
- **Styling:** handcrafted global CSS + design tokens
- **Assets:** static files in `public/assets`
- **State:** local React state (`useState`) and lifecycle effects (`useEffect`)

Design system foundations:

- Tokens are centralized in `tokens.css` (color, type, spacing, motion, radius)
- Section-by-section styling lives in `app/globals.css`
- Motion is CSS-first, with reduced-motion fallback support

This keeps the experience highly art-directed without introducing unnecessary framework complexity.

---

## AI in this repository

There is **no end-user AI runtime feature** in the app itself today.

AI appears in the **creative/development workflow context** (for example, design-direction artifacts like `FIVE-INFO.md` and `.hallmark/log.json`), but the shipped page logic is standard React + CSS animation.

---

## Tech stack

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript `5`
- ESLint `9` + `eslint-config-next`
- Tailwind packages are installed, but this implementation is currently CSS-token driven rather than Tailwind utility driven

---

## Project structure

```text
FIVE/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main landing page UI and interactions
│   └── globals.css       # Section styles and animations
├── public/
│   └── assets/           # Card/logo/icons/campus image assets
├── tokens.css            # Design tokens (theme primitives)
├── AGENTS.md             # Agent guidance note for this repo
├── FIVE-INFO.md          # Creative + product direction document
├── eslint.config.mjs     # Lint configuration
├── next.config.ts        # Next.js config
├── tsconfig.json         # TypeScript config
└── package.json
```

---

## Local setup

### Prerequisites

- Node.js (modern LTS recommended)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

---

## Scripts

From `package.json`:

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — lint with ESLint

---

## Configuration & environment variables

There are currently **no required environment variables** for local development.

If/when backend integrations are added (waitlist storage, referrals, analytics, etc.), this section should be expanded with explicit `.env` requirements.

---

## Testing & quality practices

Current quality checks in-repo:

- Type-safe implementation with TypeScript
- ESLint via `npm run lint`
- Motion accessibility fallback via `prefers-reduced-motion`

There are no automated unit/integration test suites yet in this repository.

---

## Deployment considerations

This is a standard Next.js app and can be deployed anywhere that supports Next.js builds.

Typical flow:

1. `npm run build`
2. `npm run start` (or deploy to a managed platform like Vercel)

Because the current experience is primarily static + client interactions, deployment is straightforward.

---

## Contributing

If you contribute, please keep the core intent intact:

- Protect the emotional pacing of the page
- Keep motion premium and restrained
- Prefer token-driven design consistency over ad-hoc styles
- Preserve mobile experience quality
- Avoid introducing complexity unless it unlocks clear product value

For implementation edits, start from `app/page.tsx`, `app/globals.css`, and `tokens.css` first.
