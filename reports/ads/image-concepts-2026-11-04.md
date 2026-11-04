# MySpawn Image Ad Creative, 2026-11-04

**PHOTO LANE STATUS: RUNG A, FULLY LIVE.** `curl` to `images.unsplash.com` returned **200**. The MCP search connector worked on both queries. **This is the cleanest photo-lane day in some time: two searches, two downloads, two usable photographs, no decline.**

**OUTPUT: 4 FINISHED CREATIVES, NOT 10, AND THE ARITHMETIC IS GIVEN RATHER THAN THE APOLOGY.** 2 new photo-composited squares plus their 2 vertical adaptations. **The 10-a-day target cannot be met by this lane and the reason is structural, not effort: the 2 November run established that every ad directory back to 1 October already has matching squares and verticals, so the brief's fallback of "more verticals of the backlog's proven ads" has nothing left to draw on.** **Thirty-second asking: lower the daily target to 4 to 6, or accept that the number in the brief is decorative.**

---

## CONCEPT 1: Ad_PermissionIsNotSupply_223

**Freshness check:** **`billboard`, `ivy`, `poster site`, `permission is not supply` and `no obligation` ALL RETURN ZERO across `reports/ads/image-concepts-log.md` and `reports/ads/`.** **`hoarding` returns 1 and was opened: it is an incidental word in prose, not a visual hook.** **The photo is new to the log; the photographer is new to the log.** The headline exists nowhere in this fleet before today.
**Primary audience:** Men 25-55, leading at the 50-year-old estate planner. **40-60 reading: the man who has been told a treatment is available and has never asked who decides.**
**Trend-hook used:** **A rotating preferred direction, practical why-now, rather than a 7-to-14 day news peg, and no news peg is claimed.** The underlying material is a 2018 statute and a standing federal regulation, surfaced by this afternoon's Deep Production explainer.

- **HEADLINE:** Permission is not supply. **(25 characters, measured.)**
- **BODY (276 characters, measured):** Two of the four routes to a drug that is not approved for your use involve a regulator. Neither involves an obligation: the company can simply decline. A stored DNA record is not a treatment and needs nobody's authorisation. MySpawn stores one for $99 a year, billed annually.
- **SUPPORT:** the four access routes are off-label prescribing, expanded access under 21 CFR Part 312 Subpart I, the federal Right to Try Act of 30 May 2018, and the clinical trial. **Under both investigational routes the manufacturer is under no obligation to provide the product.** Source class: Congressional Research Service report R45414, read through a search index. **No source was opened at its own domain today.**
- **VISUAL:** **two empty poster frames set into an ivy-covered wall, road below.** **The photograph IS the argument: these are the surfaces on which a permission would be posted, and nothing is posted on either.** Darkened to `brightness(0.80) contrast(1.22) saturate(0.14)`, navy multiply tint at 0.30, photo layer 1300x1290 at (-110,-120).
- **PHOTO CREDIT:** **Jannet Serhan (@printandproper), Unsplash `BynTDnLtsCM`, https://unsplash.com/photos/two-empty-billboards-in-front-of-a-wall-covered-in-ivy-BynTDnLtsCM** Native 3024x2999, mean luminance 123.1, stddev 75.8.
- **PLACEMENT:** Meta feed and carousel first card. **Paid-eligible: no identifiable face, no person, no legible third-party brand mark, no legible text in the photograph.**
- **RATIOS:** square shipped; vertical shipped as `_9x16` and deliberately re-composed full bleed at 1936x1920 rather than cropped, which clips both frames at the outer edges and makes the central ivy column the spine of the tall frame.

## CONCEPT 2: Ad_FindableWithoutYou_224

**Freshness check:** **`house number`, `painted number`, `tiled number` and `findable` ALL RETURN ZERO across `reports/ads/`.** The photo and the photographer are both new to the log.
**Primary audience:** Men 25-55. **The 40-60 family-history lane is the lead reader here and the concept was written for him.**
**Trend-hook used:** **Preferred direction, practical why-now.** Handed over from this morning's Ad Copy Lab, where this concept is Meta asset M2 with its visual direction already grepped and its exclusions attached.

- **HEADLINE:** Findable without you. **(21 characters, measured.)**
- **BODY (213 characters, measured):** The figure has to be somewhere another person can read it without calling you. We store a DNA record for $99 a year, billed annually. No tiers, nothing to prepay, and nothing anyone has to remember on your behalf.
- **SUPPORT:** no third-party claim and no borrowed figure. **The only assertion is our own price, which is a verified fact about our own product.**
- **DELIBERATE OMISSION, and it is a compliance decision rather than a style one: this creative does NOT carry the cross-page consistency claim that today's paid batch is built on.** That batch carries a binding release condition because `www.myspawn.me` is blocked from this environment and nobody here has read our pricing page. **An image ad asserting the same thing would inherit the same condition, so it does not assert it, and this creative is therefore releasable on its own terms.**
- **VISUAL:** **brass house numbers screwed to a plaster pier, tile courses at the left edge, a dark recess at the right.** **The object IS the argument: it is legible years later with nobody present to explain it.** Final treatment `brightness(0.92) contrast(1.30) saturate(0.18)`, tint 0.22, top gradient deepened to 360.
- **PHOTO CREDIT:** **Lallaoke (@lallaoke), Unsplash `mHiSP8FNyp4`, https://unsplash.com/photos/number-51-is-displayed-on-a-stone-wall-mHiSP8FNyp4** Native 5500x5071, mean luminance 142.6, stddev 77.4.
- **PLACEMENT:** Meta feed, 40-60 audience set. **Paid-eligible: no person, no face. The only legible characters are a house number with no street name and no other identifying detail.**
- **RATIOS:** square shipped; vertical shipped as `_9x16`, re-composed at 2080x1918 so the numerals sit at the optical centre of the tall frame.

## VERTICAL ADAPTATIONS

- **Ad_PermissionIsNotSupply_223_9x16 (adaptation)**, same photo, re-composed full bleed, not cropped.
- **Ad_FindableWithoutYou_224_9x16 (adaptation)**, same photo, re-composed, not cropped.

---

## QC GATE

| Item | Verdict | Notes |
|---|---|---|
| **Ad_PermissionIsNotSupply_223** | **PASS** | Freshness verified by grep on five tokens plus photo and photographer. Claims check: one source class, named in this doc. Storage-only boundary explicit in the body copy. **Persona bench 3 of 3.** **Right-of-publicity: no person in the photograph, no individual or company named in the copy.** Visually verified at 2160x2160. |
| **Ad_FindableWithoutYou_224** | **FIXED, then PASS. Two fixes, both recorded.** | **FIX 1, EXPOSURE: the first render at `brightness(0.70)` and tint 0.28 destroyed the hook. The numerals lost separation from the plaster and read as a faint relief rather than as a legible number. Re-derived UPWARD to 0.92 with contrast 1.30 and tint 0.22, and the numerals are legible.** **This is the third consecutive new-photo concept in this lane whose first render was too dark, after Ad_221 and Ad_222. The pattern is now firm enough to state as a working rule: on a bright source, start at brightness 0.90 and come down, rather than starting dark and coming up.** **FIX 2, LEGIBILITY: the wordmark sat white-on-pale plaster at low contrast. Top gradient deepened from 250 to 360 on the square and 300 to 460 on the vertical.** Persona bench 3 of 3. |
| **Both verticals** | **PASS** | **Re-composed, never blind crops.** The 223 vertical was re-rendered once: a first attempt at 1650x1637 with a positive top offset left a hard horizontal seam where the photograph began, and it was replaced with a full-bleed composition at 1936x1920. Visually verified at 2160x3840. |
| **Banned lanes** | **CLEAR** | No letter-to-the-future or Memory-Vault-video framing used; nothing handwritten, no paper, no envelope in either image. No Pentagon, military-DNA or government-biobank material. **Em dashes zero.** |
| **Pricing** | **CLEAR** | **$99 a year, billed annually, in both bodies and in both lockups.** No "one-time", no "once", no "no subscription", no "no annual fee". **The founding-rate line is omitted from both creatives, because the member-counter flag opened on 19 August has never been cleared.** |
| **Accreditation** | **CLEAR BY ABSENCE** | **No CAP, ISO or FDA-registered claim appears in either creative, consistent with the policy recorded in the paid lane two hours ago.** |
| **Mirror safety** | **PASS, verified** | Four JPEGs, no PNGs committed. **916,189 / 874,116 / 821,788 / 909,558 bytes, all under 950,000.** Squares held full quality at q92; both verticals stepped down, to q76 and q72, which is the expected cost of 2160x3840 on a high-texture source. |

**ONE COUNT WAS TYPED WRONG AND CORRECTED BY MEASUREMENT RATHER THAN SILENTLY: concept 2's body was first written as 229 characters and the program returned 213.** **Recorded because the standing finding is that my character estimates are unreliable in both directions, and a count that is never checked is a count that is wrong at some unknown rate.**

**VERDICT: SHIP 4. 2 new concepts PASS (one after two recorded fixes), 2 vertical adaptations PASS. 0 killed.**

---

**RUN FIRST: Ad_PermissionIsNotSupply_223.** It is the only creative this lane has produced in weeks whose photograph states the argument before a word is read: two surfaces where a notice would be posted, and nothing posted on either. **Ad_FindableWithoutYou_224 is the better commercial asset and the weaker image.**
