# Image Ad Creative, 2026-11-09

Run fired 18:09 UTC. **Fallback ladder: RUNG A.** Egress self-test to `images.unsplash.com` returned 200 and the MCP search worked, so the photo was sourced fresh and the reserve was not drawn on.

## Shipped

### Ad_WhyDoesItRecur_227 (square + 9x16 adaptation)

**Freshness check:** `road marking` returns 0 in `reports/ads/`; `dashed`, `segmented`, `lane marking` and `broken line` return 1 each and **all four hits are in today's own handover copy, opened rather than counted.** The headline is new. **Object class clean against the last five days: blank concrete wall (7 Nov), fan of blank sheets (8 Nov), and the 4 Nov batch's price board, market stall, painted number, tiled number, signboard and pinboard.**
**Primary audience:** Men 25-55. **The 38-year-old father leads: an annual line item is a household decision and he is the one who sees it every year.**
**Trend-hook used:** **A rotating preferred direction, practical why-now.** The subject came from today's Competitor Watch finding that the adjacent cord-blood category markets the one-time-versus-annual choice to buyers directly.

- **Headline:** Why does it recur? (18 characters, measured)
- **Subhead (244 characters, measured):** A one-time fee buys a promise from a balance sheet. An annual fee buys a relationship either side can end, so you find out early if something is wrong. MySpawn is $99 a year, billed annually, and the first 1,000 members lock that founding rate.
- **Photo:** Unsplash `wmoml4uefao` by **Bence Balla-Schottner (@ballaschottner)**, https://unsplash.com/photos/gray-asphalt-road-wmoml4uefao, raw https://images.unsplash.com/photo-1551813637-f29e0d661815, 3083x3083 native, measured at mean L 130.2, stddev 45.9 before compositing.
- **Files:** `Ad_WhyDoesItRecur_227.html`, `_9x16.html`, `_hd.jpg` 2160x2160 at 876,969 bytes, `_9x16_hd.jpg` 2160x3840 at 947,352 bytes.
- **Placement:** square for feed, 9:16 for Stories, Reels and TikTok paid.

**WHY THE PHOTO EARNS IT, AND IT IS THE EXACT STRUCTURE THE COPY ARGUES.** Top-down asphalt with a **continuous unbroken line** on one side and a **segmented dashed line** on the other, in the same frame. **The headline asks why a fee recurs; the image is one payment and many payments, side by side, as a real object rather than a diagram.** The handover barred substituting a chart if no such photograph existed. One existed.

**COMPOSITION NOTE, because the first vertical failed and the fix is the useful part.** The square carries both lines, but **the first 9:16 render was centre-cropped and lost the dashed line almost entirely**, leaving only continuous lines and therefore only half the argument. **The photo layer was re-offset to the right edge of the source and re-rendered.** **A vertical that drops the element the concept rests on is a blind crop in effect even when it was composed deliberately, and that is what the never-blind-crops rule is actually about.**

**EXPOSURE, per the 7 November rule.** Bright-ish source at mean 130, so the filter **started at brightness 0.90 and came down to nothing further**: 0.90 held on inspection. Second consecutive run where the rule worked without a second pass.

## QC Gate

- **Freshness:** PASS. Headline, visual hook and object class verified clear. **Four single-hit greps opened rather than trusted, all four being today's own handover.**
- **Banned lanes:** CLEAR. No letter-to-the-future framing. No Pentagon, military-DNA or government-biobank material. Em dashes zero on both masters in all four forms, measured by program.
- **Claims check:** PASS, with the pricing rail handled deliberately. **"One-time" appears once, describing a COMPETING price structure, which is the only context the rail permits.** **It is not applied to MySpawn anywhere, and the handover's editing note is repeated here: do not delete it on a keyword sweep and do not let it migrate into a sentence about us.** No competitor price is asserted; no company is named. Storage-only boundary intact.
- **Pricing:** "$99 a year, billed annually" plus the founding-rate lock; lockup reads "$99/yr".
- **Persona bench:** PASS 3 of 3. Father leads; estate planner passes on "a promise from a balance sheet"; optimizer passes on the recurring fee reframed as an early-warning system.
- **Visual verify:** PASS, **and it caught a real defect.** Both renders viewed. The vertical was rejected on first pass for losing the dashed line and re-composed before export. No text collision, no overflow, no clipping. **Photo carries no legible text, no face, no person, no vehicle and no brand mark.**
- **Right of publicity:** PASS. No person in frame.
- **Mirror-safe rule:** **FIXED, and the miss is recorded.** The standard export loop floors at quality 60 and **the vertical came out at 964,726 bytes, over the 950KB ceiling, because asphalt texture is high-entropy.** It was re-exported at q60 with chroma subsampling 2 and landed at **947,352 bytes.** **A step-down loop with a floor can terminate above the limit; the limit must be re-checked after the loop rather than assumed.**

## Declines

**None.** The first searched query returned a usable photograph. **That is a first for this lane in the last week and is worth recording as a contrast: the three previous runs took two, two and one decline respectively, and the difference is that today's direction named a COMMON road feature rather than a scarce staged object.**

## Output against target

**One new concept in two ratios against a target of ten.** **Thirty-fifth consecutive day the target has not been met, and the request to lower it to four to six is repeated.** No reserve banking this run: the search returned one usable photograph and nine road signs, verges and stop signs, none bankable.
