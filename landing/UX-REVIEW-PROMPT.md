# The 20-Second Conversion Review — Prompt & Implementation Log

This document contains two things:

1. A reusable **prompt for a UI/UX expert** (human or AI) to review any landing page
   against a "new visitor decides to buy in under 20 seconds" bar.
2. The **result of applying that prompt** to `landing_new_6_3.html`, and the changes
   shipped in `landing_new_6_5.html`.

---

## 1. The prompt

> **Role:** You are a senior conversion-focused UI/UX expert (CRO + product design).
> You are reviewing a single landing page. Your only success metric: a **first-time
> visitor who has never heard of this product should understand it, trust it, and be
> able to start buying within 20 seconds of landing — on a phone.**
>
> **Method — walk the 20 seconds in order, and grade each window:**
>
> **Seconds 0–3 (first paint):** What loads, and how fast? Is anything blocking first
> paint (heavy media, fonts, scripts)? Does the first viewport alone answer:
> *What is this? Who is it for? What does it cost? What do I do next?*
>
> **Seconds 3–8 (first viewport):** Is there exactly one obvious primary call-to-action
> visible **without scrolling, on a 390px-wide phone**? Is the price visible before the
> first scroll? Is there a scarcity/urgency element, and is it credible rather than
> gimmicky? Is there at least one trust/risk-reversal signal (guarantee, accreditation,
> "cancel anytime") within thumb's reach of the CTA?
>
> **Seconds 8–15 (first scroll):** Does the very next section deepen desire (show the
> product/outcome) rather than explain mechanics? Can a skimmer who reads only
> headlines and bolded text still reconstruct the full pitch? Is a CTA re-offered at
> every point where desire peaks, or does the visitor have to hunt for the buy button?
>
> **Seconds 15–20 (decision):** Is the path from "I want this" to checkout one tap from
> anywhere on the page (persistent nav CTA, sticky mobile bar, or section CTAs)? Are
> there price or claim inconsistencies anywhere on the page that would break trust at
> the moment of decision? Do the top 3 objections (safety, legitimacy, "what if it's
> useless") get answered before the final CTA?
>
> **Deliverable:** A ranked list of findings — each with (a) the failure, (b) which
> second-window it costs, (c) the concrete fix — ordered by expected conversion impact,
> not by effort. Separate "ship now" copy/markup fixes from "needs infra" fixes
> (hosting, A/B testing). Do not restyle the brand; work within the existing design
> system. Then implement every "ship now" fix.

---

## 2. Findings & what was shipped (v6.3 → v6.4)

### Shipped — ranked by impact

| # | Window | Finding | Fix shipped |
|---|--------|---------|-------------|
| 1 | 3–8s | **The hero had no CTA at all.** The first buy-moment was a small nav pill; the real offer lived at the very bottom of a ~10-screen page. | Added primary CTA **"Claim your kit · $99" → `#claim`** plus secondary **"See how it works" → `#how`** directly under the hero subhead, above the video — inside the first viewport on both desktop and 390px mobile. |
| 2 | 3–8s | Price and scarcity were invisible above the fold on desktop until the visitor noticed the nav pill. | Added the (already-designed, unused) **eyebrow badge**: "Founder pricing · $99 · First 1,000 members" above the H1. |
| 3 | 15–20s | On mobile, once past the hero the only buy path was scrolling to the bottom offer. | Added a **sticky mobile bottom CTA bar** ("$99 founder kit / Claim your kit") that appears after the hero and auto-hides when the offer section is on screen. Respects `prefers-reduced-motion` and safe-area insets. |
| 4 | 3–8s | No risk-reversal near the CTA. | Added trust microcopy under the hero CTAs: "Done at home in 7 minutes · No subscription · Delete anytime · Stored by an ISO-accredited biobank." |
| 5 | 15–20s | **Price inconsistency:** FAQ said "you've spent a few hundred dollars" while the offer is $99 — a trust-breaker at the exact moment of objection-handling. | FAQ now says "$99". |
| 6 | 8–15s | "hover to compare" label on the descendant strip is meaningless on touch devices (majority of traffic). | Removed the dead affordance from the label. |

Also: footer version stamp bumped to *Landing new v5.7*.

### Needs infra — recommended next (not shippable in a single HTML file)

1. **Page weight is the single biggest 0–3s risk: ~27 MB** of base64-inlined video and
   imagery in one HTML file. On 4G this alone can consume the entire 20-second budget.
   Host media on a CDN, reference by URL, lazy-load everything below the fold, and
   serve posters first with videos loaded on interaction/idle. Target < 1.5 MB initial
   payload.
2. **Real social proof.** The page has zero customer voices. Even 2–3 short member
   quotes (or a live founding-member counter, e.g. "412 of 1,000 founder spots taken")
   near the hero CTA and the offer would materially raise trust. Requires real data —
   do not fabricate.
3. **A/B tests worth running:** hero H1 "Outlive yourself." vs. a benefit-explicit
   variant; CTA verb "Claim" vs. "Reserve"; moving the $99 offer card to directly
   after the pillars section.

---

*Review target: `landing_new_6_3.html` · Output: `landing_new_6_5.html`*

---

## 3. v6.6 revision — single-CTA simplification

Per founder feedback (too many $99 buy CTAs), `landing_new_6_6.html` changes:

- Removed the hero eyebrow badge ("Founder pricing · $99 · First 1,000 members").
- Removed the hero CTA buttons; the trust subline stays.
- Deleted the standalone "Anything can happen tomorrow" (pcta) section and its CTA.
- Merged that section's headline, copy, and video into the top of the **$99 offer card**,
  which now sits directly after the FAQ — one closer section, one CTA.
- Remaining buy paths: persistent nav pill, mobile sticky bar, and the single offer CTA.
- Version stamp v5.7 → v5.8.

---

## 4. v6.7 revision — "Archival" color system

Full recolor of `landing_new_6_6.html` → `landing_new_6_7.html` to remove AI-tell
styling (blue→indigo gradients, lavender tints, glow-blur CTAs, animated gradient
text, sheen sweep). New palette: bone surfaces, green-black ink, burnished-copper
accent, deep-pine dark sections, champagne on dark. Full spec: `COLOR-SYSTEM.md`.
Version stamp v5.8 → v5.9.

**Superseded** by v6.8 (below) — the founder wanted the external
`myspawnredesignguide.md` direction instead of the copper recolor.

---

## 5. v6.8 revision — "Accession form" full redesign

`landing_new_6_8.html` rebuilds `landing_new_6_6.html` from scratch to the committed
direction in the external audit (`myspawnredesignguide.md`): the site should read like
a **biobank accession record** — stamped, numbered, filed — not a SaaS template.

Full spec in `REDESIGN-6-8.md`. Headlines:

- **Palette:** paper `#E9E5DA` / vault `#16130F` / ink `#1C1813` / graphite `#6B6459`
  / rule `#C9C1B2`, oxblood `#6E1F22` (`#C4443F` on dark) carrying the brand, ochre
  `#8A6218` (`#C9922E` on dark) reserved strictly for data. No blue/indigo/violet
  anywhere. Never pure `#000`/`#fff`.
- **Zero gradients, zero glassmorphism, zero gradient-text, zero pill radii, zero CSS
  animations** — all verified absent by grep. Square corners, hard hairline rules, no
  drop shadows.
- **Type:** Archivo (display 800 at 118% width; body 400) + Martian Mono for all data,
  codes, and labels. No serif.
- **Layout:** asymmetric two-column record grid — a mono margin column carries a
  `REC-00…REC-10` index per section; the wide column carries the argument.
- **Hero:** left-aligned stamped headline + a "specimen record" data plate
  (donor / material / custody / storage / status).
- **Billionaire section is now a real `<table>`** with tabular figures shown in full
  (`$3,000,000,000`, not `$3B`) and "You / $99" as the final ledger row.
- **Card grids replaced** with hairline-ruled record rows; kit process keeps 01/02/03
  (a real sequence), benefits list loses its numbering (not a sequence).
- **Accessibility:** `<main>` landmark, single h1 with no heading-level skips,
  `:focus-visible` rings, 44px tap targets, ≥12px type, all copy and alt text verbatim.
- **Logo:** the twice-inlined purple-helix PNG is replaced with an inline oxblood
  "stamped record" SVG mark, so no indigo remains in the UI chrome.

**Known limitation:** the hero/section **videos and photos are still cool-toned**
baked media (they carry their own blue/purple grade). Recoloring the chrome gets the
interface fully on-palette; fully finishing the look needs those clips regraded or
replaced warm, per the guide's asset notes.

Version stamp v5.9 → v6.0.
