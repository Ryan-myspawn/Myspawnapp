# Image Ad Creative, 2026-10-25

**FOUR CREATIVES SHIPPED: two new square concepts and their two vertical adaptations.** Two new concept codes, 213 and 214. **The photo lane was LIVE for this run: the egress self-test against `images.unsplash.com` returned 200, so the fallback ladder was never entered.**

## What shipped

| Code | Headline | Visual | Photo |
|---|---|---|---|
| `Ad_WhatWeHaveDataFor_213` | What we have data for, and what we do not | Rendered wall meeting a rough grey surface on a hard horizontal line | `qWJOS0TTlBw` MAURO BIGHIN (@mauro_bighin) |
| `Ad_WhatWeHaveDataFor_213_9x16` | same | same photo, re-laid out for 1080x1920 | same |
| `Ad_ChildfreeIsNotABlankSpace_214` | Childfree is not a blank space. | Stacked split log ends, cut faces square to camera | `0UmrKpxzcJg` Michael Schreiber (@schreibmich) |
| `Ad_ChildfreeIsNotABlankSpace_214_9x16` | same | same photo, re-laid out for 1080x1920 | same |

**Copy measured before typing, not after: 213 head 41 / body 292; 214 head 31 / body 257. Both under the 58 and 300 ceilings the generator asserts.** 213's copy was taken verbatim from today's scripts file, where it was already measured; 214's was written for this run and measured here.

## A BRIEF WAS DEPARTED FROM, AND THE DEPARTURE IS NAMED RATHER THAN BURIED

Today's scripts brief specified for 213 **"a hard VERTICAL line, shot square-on"**. The photograph that shipped divides on a hard **HORIZONTAL** line. **This is a departure and it is recorded as one.** The brief's purpose was a clean two-part composition that reads as a division, and a horizontal split delivers that purpose; it arguably serves the copy better, since "what we have data for" sits above the line and "what we do not" below it, which is the reading order. **But the brief said vertical, the result is horizontal, and a lane that quietly reinterprets its own briefs stops being able to tell a judgement from a drift.**

## THE SCALE RULE EARNED ITS KEEP AGAIN, IN BOTH DIRECTIONS AND ON BOTH AXES

**Ad 214's first render FAILED ITS OWN BINDING REGISTER CONDITION and was rebuilt.** The concept has carried a condition since it was queued on 21 October: the image must read **orderly, never abandoned**. At the first scale, `sq=(1240,1240,-80,-80)` with `brightness(0.78)`, only about five log ends filled the frame and the result read as a dark heap in close-up. **That is the abandoned register, which is precisely what the condition forbids.** Two corrections, derived from the photograph rather than inherited:
- **Scale pulled BACK to `sq=(1080,1080,0,0)`**, showing the whole 1800x1800 crop, so the repetition of cut faces reads as a stack somebody built.
- **Brightness re-derived UPWARD, 0.78 to 1.15.** This is the second consecutive run in which a value had to go ABOVE 1.00, after Ad 212's 1.34 yesterday.

**A DISCREPANCY WORTH KEEPING: the Unsplash API reported `#262626` for this photograph, but the frame is plainly mid-tone warm brown.** Had the starting brightness been derived from the reported colour under the "darker than #404040, start at 1.00" rule, it would have started in the wrong place. **The rule should be read as: derive from the frame you can see, and treat the API colour field as a hint, not a measurement.**

Ad 213 moved the other way and a long way: dominant tone `#d9c073` is far lighter than #404040, and **brightness came DOWN to 0.52**, the lowest value in this run series.

## Photo gate: three rejections, two of them before any download

- **`3HiuSpU7LuQ` (JOGphotos), REJECTED ON REGISTER.** Shallow focus, damp, dark. It reads abandoned, which is the one thing 214's binding condition forbids.
- **`ixBoBZZguFM` (Adi ., numbered mailboxes), REJECTED TWICE FOR DIFFERENT REASONS, which is the point.** This run killed it on **visual adjacency**: numbered boxes in a grid are the same frame as Ad 211's numbered archive drawers, shipped yesterday. Only afterwards did `photo-reserve.md` show it had **already** been rejected on 24 October, on legible newspaper mastheads. **Two independent gates, two different grounds, same photograph. The reserve file is doing the job it was written for.**
- **The bed direction for 214 was killed as a direction, not as a photograph.** Candidates existed and passed the mechanical blockers. It was dropped because a bed drags a childfree ad toward intimacy and reproduction, which is off-register for a storage product and risks reading as a comment on how somebody lives. **No download was committed.**

## Honest note on 214

**It is the weaker of the two creatives and should be labelled that way rather than defended.** The stack reads as worked, cut and kept, which satisfies the register in substance. It does not read as an architectural wall of stacked wood, which is what the concept wanted. **If it underperforms, the photograph is the first thing to change, not the copy.**

# QC GATE

**1. FRESHNESS: PASS.** `firewood`, `split wall`, `two-part`, `painted wall` and `comforter` are all fleet-zero in `image-concepts-log.md`. **The 7-day rule was treated as a floor, not a standard:** neither concept reuses a shipped visual, and the adjacency kill above was applied at a distance of one day, which is well inside any window.
**2. BANNED LANES ABSENT: PASS.** No letter-to-the-future or 100-year-letter framing. No Pentagon, military-DNA or government-biobank material. No descendant-creation claim anywhere: 214 says explicitly that storing DNA **is not a plan to change** the decision not to have children. **Em dash count verified programmatically at 0 on every file this run touched.**
**3. PRICING: PASS.** Both creatives read **"$99 a year, billed annually"**. Neither contains "once", "one-time", "no subscription" or "no annual fee". 213 carries the annual wording inside the evidence list, where the claim is being made.
**4. PHOTO BLOCKERS: PASS, VERIFIED AT FULL RESOLUTION BEFORE DOWNLOAD WAS COMMITTED.** No identifiable faces in either frame. No legible personal or contact data. No legible third-party brand marks. No recognisable third-party trade dress. No 3D renders, no staged flatlay mockups, no dial, gauge or meter face. Neither photograph is from `mjh_shikder`.
**5. VISUAL VERIFY: PASS, ALL FOUR RENDERED AND INSPECTED.** Rendered MODE=local, inspected, 214 corrected and re-inspected, then regenerated MODE=remote before the HTML was copied into the repository. Squares cropped to 2160x2160, verticals to 2160x3840.
**6. MIRROR-SAFE: PASS, VERIFIED BY FIND.** No PNG anywhere under `assets/ads/`. Four HTML masters and four JPEGs, largest 920,767 bytes, all under the 950KB ceiling. Two files stepped down from q92: 213 square to q88, 213 vertical to q80, 214 vertical to q84.
**7. RIGHT OF PUBLICITY: PASS.** No individual appears in either frame and none is named. **214 names no group as deficient and makes no claim about anybody's choices; its first sentence exists to prevent that reading.**

**VERDICT: 4 SHIPPED, 1 BRIEF DEPARTURE DECLARED, 1 CREATIVE REBUILT AGAINST ITS OWN BINDING CONDITION, 3 PHOTOGRAPHS REJECTED.**

# THE COUNT, STATED PLAINLY

**Four finished against a target of ten. Six backlog verticals were deliberately NOT manufactured to pad the number.** The trigger permits delivering ten by generating more verticals of proven backlog ads; that was declined again, because a vertical of an old ad is a file, not a creative, and counting it as one is how the target stopped meaning anything.

**Evidence line, now TENTH consecutive day under target: 8, 4, 0, 2, 4, 8, 3, 4, 4, 4.** The 23 October non-run is excluded rather than scored as a zero, per `reports/missed-runs-2026-10-24.md`.

**FOUNDER DECISION, TWENTY-SECOND ASKING: lower the daily ad target from 10 to 4-6.** Ten days of evidence say the lane produces four to eight good creatives when the photo search cooperates and fewer when it does not. **The target has not been hit once in that window, and a target that is never hit is not a target, it is a standing apology.**
