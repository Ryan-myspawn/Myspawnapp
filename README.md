# HELIXORA — Premium Biotech Landing Template

A cinematic, ultra-premium biotech landing page built with React, Three.js, and Framer Motion. Deep-navy palette, glowing violet/teal/emerald accents with warm gold highlights, and a photoreal rotating 3D DNA double helix as the hero centerpiece.

## Tech Stack

- **React 18 + Vite 5 + TypeScript**
- **Tailwind CSS 3** — custom design tokens
- **Framer Motion** — fade-up + blur scroll reveals, micro-interactions
- **Three.js / React Three Fiber + drei** — 3D DNA helix with bloom, particles, mouse parallax
- **@react-three/postprocessing** — Bloom + Vignette
- **Lenis** — buttery smooth scrolling
- **Lucide React** — icons
- shadcn/ui-style primitives (`Button` with `class-variance-authority`)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview
```

## Rebranding

The brand is centralized in `src/lib/config.ts`:

```ts
export const COMPANY_NAME = "HELIXORA";      // ← your brand
export const COMPANY_TAGLINE = "...";
```

Design tokens (colors, fonts, glows) live in `tailwind.config.js`:

| Token | Value | Role |
|---|---|---|
| `navy` | `#1B2735` | Background |
| `violet` | `#6055AC` | Primary accent |
| `teal` | `#00C9A7` | Secondary accent |
| `emerald` | `#10B981` | Secondary accent |
| `gold` | `#F5C26B` | Warm highlights |

Fonts: **Plus Jakarta Sans** (tight-tracked display headings) + **Instrument Serif** (italic editorial accents) + **Inter** (body), loaded in `index.html`.

Signature details: film-grain overlay, hairline rules and `( 01 )` section numbering, masked line-reveal headlines, marquee logo strip, bento feature grid, ghost-outline process numerals, scroll parallax, and a monumental footer wordmark.

## Structure

```
src/
├── App.tsx                     # Page assembly
├── components/
│   ├── three/DnaScene.tsx      # 3D DNA helix (reusable, configurable)
│   ├── ui/button.tsx           # shadcn-style button (primary / ghost)
│   ├── ui/reveal.tsx           # Scroll reveal + section kicker
│   ├── Navbar.tsx              # Fixed glass navbar + mobile menu
│   ├── Hero.tsx                # 100vh hero with 3D DNA
│   ├── LogoBar.tsx             # Trusted-by strip
│   ├── Features.tsx            # 4-card platform grid
│   ├── HowItWorks.tsx          # 3-step timeline with DNA thread
│   ├── Science.tsx             # Second smaller DNA + proof points
│   ├── Generations.tsx         # Emotional testimonials
│   ├── Pricing.tsx             # 3-tier pricing
│   ├── FinalCta.tsx            # Closing CTA
│   └── Footer.tsx
├── hooks/useLenis.ts           # Smooth scrolling
└── lib/config.ts               # Brand configuration
```

## The DNA Helix (`DnaScene`)

Reusable with props:

```tsx
<DnaScene
  scale={1}            // overall size
  particleCount={520}  // drifting glow particles
  interactive          // mouse parallax tilt
  rotationSpeed={0.14} // radians/sec on Y axis
  detail={1}           // base-pair density
/>
```

Photoreal molten-orange helix: organic molecule-bead clusters (instanced spheres) along each backbone with teal sparkle accents, dark glassy steel rungs with rare glowing teal/ember pairs, fine dust plus large soft bokeh orbs, real depth-of-field (`dof` prop), Bloom + Vignette, fog depth, cinematic axial lean, and mouse parallax. Rendering pauses automatically when scrolled offscreen. Scales down gracefully on mobile.

## ECHO Agent & Founding Thousand

- `api/chat.ts` — streaming Claude chat endpoint (ECHO, the descendant-from-2126 widget). Requires `ANTHROPIC_API_KEY`.
- `api/reserve.ts` — Founding Thousand reservations + live counter. Requires Vercel KV / Upstash Redis: `KV_REST_API_URL`, `KV_REST_API_TOKEN`.
- Widget: `src/components/EchoAgent.tsx` · Section: `src/components/FoundingThousand.tsx`.

Both endpoints are Vercel Edge Functions; set the env vars in the hosting dashboard.
