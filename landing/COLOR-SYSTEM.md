# MySpawn "Archival" Color System — v1.0

Replaces the blue → indigo/purple startup-template palette in `landing_new_6_6.html`.
Implemented in `landing_new_6_7.html`. Direction: an heirloom archive, not a tech
product — warm paper, green-black ink, one burnished-copper accent, deep pine dark rooms.

## Palette

### Neutrals / surfaces (warm paper, replaces cold gray-blue)
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#FAF7F2` | Page background — warm bone, not blue-white |
| `--surface` | `#FFFFFF` | Cards on bone |
| `--soft` | `#F4EDE2` | Parchment tint — chips, soft fills (was `#EEF2FF`) |
| `--line` | `#E8E2D6` | Hairlines, borders, dividers (was `#e5e7eb`) |

### Text hierarchy (green-black ink, replaces slate navy)
| Token | Hex | Role |
|---|---|---|
| `--ink` | `#23281F` | Headlines, strong text — near-black with a warm moss cast |
| `--ink-soft` | `#2E3429` | Emphasis body text |
| `--ink-mute` | `#5C6155` | Body / secondary — warm olive-gray |
| `--ink-faint` | `#9C9F92` | Tertiary, captions, mono labels |

### Accent (one family only: burnished copper)
| Token | Hex | Role |
|---|---|---|
| `--copper-light` | `#B06A3C` | Light copper — gradients' light stop, icons on dark |
| `--copper` | `#96522E` | Primary accent — links, section labels, borders, brand "Spawn" |
| `--copper-deep` | `#7A4123` | Hover / active / pressed states |

### Dark sections (deep pine, replaces navy → purple night)
| Token | Hex | Role |
|---|---|---|
| `--pine-black` | `#23281F` | Dark section base (shares the ink hex — one material) |
| `--pine` | `#203228` | Mid stop of dark gradients |
| `--pine-light` | `#2C4636` / `#2E4A38` | Lifted stop; offer card |
| `--champagne` | `#DCC29A` | Accent on dark: checkmarks, small-caps labels, dot markers (was lavender `#C7D2FE`) |
| champagne text-gradient | `#FFFFFF → #E3C79E` | Headline highlight on dark only |

### Utility
| Token | Hex | Role |
|---|---|---|
| `--clay` | `#BC4B2E` | Urgency/scarcity only (founder tag) — fired clay, not alarm red |
| clay tint | `#E7B29E` | Urgency text on dark |

## Gradient strategy: near-zero

1. **No two-hue decorative gradients anywhere.** The blue→purple wash is gone.
2. Surfaces are **flat**. Dark sections may use a single-family tonal ramp
   (`#23281F → #203228 → #2C4636`) — reads as light falling on one material, not a theme.
3. Buttons are **solid** with a top-to-bottom tonal nudge of the *same* hue
   (`#A96237 → #8F4E2B`) for physicality. No blur-glow halos, no animated glows.
4. Gradient text survives in exactly two places, both static (no shimmer animation):
   copper tonal on light headlines, white→champagne on dark headlines.
5. Photographic scrims (video caption fades, vignettes) are exempt — they're
   legibility tools, not decoration.

## Why this reads human, not AI

- The AI tell isn't blue itself — it's **default-Tailwind blue→indigo applied
  everywhere at once**, plus glow-blur buttons and animated gradient text. Every one
  of those treatments is now removed or made static.
- Warm bone + green-black ink is a **book/archive material language** that matches
  what MySpawn actually sells — legacy, bloodline, permanence — instead of the SaaS
  language of "we have an API."
- One accent family, used sparingly, signals editorial confidence. Copper carries
  warmth ("human, intimate") while pine carries the medical-trust register.
- Nothing in the palette can be produced by naming a Tailwind shade.

## Implementation notes for the developer

1. **The CSS variables in `:root` are the single source of truth** — the whole swap
   was done by remapping hex values plus a small override block at the end of
   `<style>` (search `ARCHIVAL PALETTE`). Variable *names* like `--indigo`,
   `--lavender`, `--blue` still exist with new values; rename them to
   `--copper`, `--champagne`, `--copper-light` when convenient.
2. **Media is still graded blue/purple** (hero DNA video, offer video, logo mark
   PNG). The palette shift gets ~80% of the way; for the last 20%, re-render the
   brand mark in copper/ink and regrade or replace hero/offer footage with
   warm-toned versions. Until then the warm UI actually helps the cool footage read
   as "lab material" rather than "theme."
3. **Contrast floors:** body text `#5C6155` on `#FAF7F2` ≥ 4.5:1; copper `#96522E`
   is for accents, large text, and bold labels — don't use it below ~14px regular
   weight on bone. On pine, use `#DCC29A` champagne (not copper) for small text.
4. **Keep gradients out of new components.** Default to flat `--soft` fills and
   `--line` hairlines; if a new section "needs" a gradient, it needs a photograph
   or better copy instead.
