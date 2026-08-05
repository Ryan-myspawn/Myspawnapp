# MySpawn "Accession Form" Redesign — v6.8

Implements the committed direction from the external audit (`myspawnredesignguide.md`):
the homepage should read like a **biobank accession record** — stamped, numbered,
filed — because the product sells permanence and chain of custody. Built as
`landing_new_6_8.html` (a full rebuild of `landing_new_6_6.html`; the v6.7 copper
recolor is abandoned).

## Color system

Committed strategy: **oxblood carries the brand, ochre is reserved strictly for data,
nothing else competes.** No blue / indigo / violet anywhere. Every neutral tinted warm;
never pure `#000` or `#fff`.

| Token | Light ground | On dark ground | Role |
|---|---|---|---|
| `--paper` | `#E9E5DA` | — | Light ground (warm bone, not blue-white) |
| `--vault` | — | `#16130F` | Dark ground (warm near-black) |
| `--ink` | `#1C1813` | `#E9E5DA` | Body/heading text |
| `--graphite` | `#6B6459` | `#A79E90` | Secondary text |
| `--rule` | `#C9C1B2` | `#3A342B` | Hairlines / dividers |
| `--blood` | `#6E1F22` | `#C4443F` | Identity, emphasis, primary buttons |
| `--blood-live` | `#8F2A2C` | `#D65650` | Hover |
| `--specimen` | `#8A6218` | `#C9922E` | Accession codes & data labels ONLY, never decoration |

Dark-ground values are handled by **token redefinition** (`.rec.dark { … }`), not
per-component overrides.

## Gradient / effect strategy: none

Verified absent by grep in the shipped file: `linear-gradient` 0, `radial-gradient` 0,
`backdrop-filter` 0, `background-clip:text` 0, `border-radius:9999` 0, CSS `animation` 0.
Flat grounds only. Square corners. Hard hairline rules between sections. No drop shadows.
The only motion is a subtle scroll-reveal fade that is fully disabled under
`prefers-reduced-motion`.

## Typography

Two families, no serif:

| Role | Face | Setting |
|---|---|---|
| Display | Archivo | 800, `font-stretch: 118%` — wide, blunt, stamped |
| Body | Archivo | 400, `font-stretch: 100%` — same superfamily |
| Data | Martian Mono | 400 / 500 / 600 — codes, custody labels, currency, table figures |

`font-variant-numeric: tabular-nums` on all aligned digits; `font-synthesis-weight: none`.

> **Production note:** this standalone file loads Archivo + Martian Mono from Google
> Fonts because it is a self-contained artifact, not the deployed site. On myspawn.me
> (where CSP blocks third-party font requests — see audit finding P0) these must be
> self-hosted via `next/font/google`, exactly as the audit's prompt #1 specifies.

## Layout

Asymmetric two-column **record grid**. A narrow left margin column carries mono
metadata that indexes each section (`REC-00 … REC-10`, e.g. `REC-05 / PRECEDENT`);
the wide right column carries the argument. Sections:

| Index | Section | Treatment |
|---|---|---|
| REC-00 | Hero | Left-aligned stamped headline + specimen data plate (donor/material/custody/storage/status) |
| REC-01 | Projection | Descendant preview + hairline-bordered strip |
| REC-02 | Procedure | Genuinely numbered 01/02/03 record rows |
| REC-03 | Custody (dark) | Hairline custody terms + accreditation record grid |
| REC-04 | Entitlements | Un-numbered record rows (not a sequence) |
| REC-05 | Precedent (dark) | **Real `<table>` ledger** — full figures, "You / $99" final row |
| REC-06 | Method | IVG explainer, numbered process, filed note block |
| REC-07 | Origin (dark) | Founder record |
| REC-08 | Registry | Community chips + social record grid |
| REC-09 | Inquiries | FAQ (`<details>`/`<summary>`) |
| REC-10 | Accession | The merged closer + `$99` + single "Claim Your Kit" CTA |

Structural devices encode something true: numbering stays on the kit process (a real
sequence) and comes off the benefits list (not one).

## Accessibility (audit baseline was 2/4)

- `<main>` landmark added; single `<h1>`; heading order h1→h2→h3 with **no skips**
  (verified in-browser).
- `:focus-visible` ring on every interactive element; no `outline:none`.
- All type ≥ 12px (smallest mono labels raised to 0.75rem).
- 44px minimum tap targets on nav links, footer links, nav CTA, hamburger, sticky bar.
- No horizontal overflow at 1440px or 390px (`scrollWidth === clientWidth`).
- Every line of copy and all `alt` text preserved verbatim from v6.6; all legal
  disclaimers unchanged.

## Known limitation — media assets

The hero and section **videos/photos are still cool-toned** (they carry their own
blue/purple color grade baked into the file). The UI chrome is now fully on-palette —
including the logo, which was swapped from the twice-inlined purple-helix PNG to an
inline oxblood "stamped record" SVG. Finishing the look completely requires regrading
or replacing those clips warm, which is an asset job, not a CSS one.

## For the developer

1. All color lives in `:root` tokens + the `.rec.dark` redefinition block — no
   hardcoded hexes in markup. Port these tokens directly.
2. Self-host Archivo + Martian Mono via `next/font/google`; delete any Google Fonts
   `<link>`/`@import` (CSP blocks it in production).
3. The ledger is a semantic `<table>` — keep it a table when porting; don't let a CMS
   turn it back into stat cards. Its columns collapse gracefully below 720px.
4. Keep gradients, glassmorphism, and pill radii out of new components by default.
