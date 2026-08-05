# The 20-Second Conversion Review — Prompt & Implementation Log

This document contains two things:

1. A reusable **prompt for a UI/UX expert** (human or AI) to review any landing page
   against a "new visitor decides to buy in under 20 seconds" bar.
2. The **result of applying that prompt** to `landing_new_6_3.html`, and the changes
   shipped in `landing_new_6_4.html`.

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

*Review target: `landing_new_6_3.html` · Output: `landing_new_6_4.html`*
