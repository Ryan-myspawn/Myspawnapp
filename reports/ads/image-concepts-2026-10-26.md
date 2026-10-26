# Image Ad Creative, 2026-10-26

**Freshness check:** both concepts come from assets this fleet produced today: the Competitor Watch price finding at 14:1x UTC and the Content Factory script at 17:1x UTC. **Neither headline, hook nor photo subject appears in `image-concepts-log.md`.**
**Primary audience:** Men 25-55. Control and optionality, practical realism, the status of knowing which question to ask.
**Trend-hook used:** **No external 7-to-14-day hook; today's radar declared none exists.** **Ad 216 uses a dated regulatory fact (25 January 2025) as its spine, which is a preferred rotating direction rather than a trend claim.**

**PHOTO LANE: LIVE, RUNG 0.** The egress self-test against `images.unsplash.com` returned **200**, so the fallback ladder was never entered. Both photos were searched and downloaded fresh today.

## What shipped

| Code | Headline | Visual | Photo |
|---|---|---|---|
| `Ad_APriceYouCanNegotiate_215` | A price you can negotiate is not a price. | Empty cork noticeboard and its frame edge, square-on, nothing posted on it | `bxYR-CkJ1Ps` Noah Blaine Clark (@noahblaineclark) |
| `Ad_APriceYouCanNegotiate_215_9x16` | same | same photo, re-laid out for 1080x1920 | same |
| `Ad_SecurityIsNotConsent_216` | Security is not consent. | Diagonal structural scaffolding, steel tube and panel grid against sky | `6CbQjhiB-9g` Declan Sun (@declansun) |
| `Ad_SecurityIsNotConsent_216_9x16` | same | same photo, re-laid out for 1080x1920 | same |

**PHOTOGRAPHER CREDITS (courtesy, both photos used today):**
- **Noah Blaine Clark**, Unsplash `@noahblaineclark`, photo page https://unsplash.com/photos/brown-and-white-wooden-frame-bxYR-CkJ1Ps, native 5270x5270.
- **Declan Sun**, Unsplash `@declansun`, photo page https://unsplash.com/photos/metal-scaffolding-with-blue-fabric-panels-against-a-cloudy-sky-6CbQjhiB-9g, native 6097x6169.

**Copy measured before typing: 215 head 41 / body 278; 216 head 24 / body 294.** 215's copy was taken verbatim from today's scripts file where it was already measured; 216's was written here and measured here.

## A PHOTO WAS SAVED BY A CROP, AND THE THING CROPPED OUT WAS THE WHOLE PROBLEM

**Ad 215's photograph was REJECTED at the thumbnail gate and then recovered.** The full frame is a cork noticeboard carrying **a legible handwritten note reading "I'M OKAY OKAY OKAY"**. That is somebody else's text, legible at any size, and its emotional register is entirely wrong for an ad about pricing.

**Two independent problems, one crop.** The shipped frame is an **1800x1800 crop at source (200,1400)**, taking the left portion of the board and the frame edge, **excluding the note completely.** **This is the same move that saved Ad 212 on 24 October, and the rule it confirms is worth stating plainly: the gate's job is to decide whether a SHIPPABLE FRAME exists inside the photograph, not whether the photograph is clean.**

## THE SCALE RULE WENT UP ON BOTH AXES AGAIN

**Ad 215: brightness re-derived UPWARD, 0.46 to 0.62.** At 0.46 the cork texture vanished and the frame read as an anonymous dark wall, which destroys the concept: the ad needs the viewer to recognise **a board with nothing on it**. **This is the third consecutive run in which a value had to move after the first render, and the second in which it moved upward.**

**Ad 216: brightness DOWN to 0.60** from a bright sky-lit source. **Derived from the frame rather than from the API colour field**, per the 25 October caution. The reported colour was `#d9f3f3`, which is a sky average and says nothing useful about the steel.

**216 also used a larger-than-target crop: 3000x3000 at source (900,1500), downscaled to 1800x1800.** At 6097 wide a straight 1800 crop would have been 30 percent of the frame and would have lost the grid, which is the whole subject.

## Photo gate: three rejections

- **`CldCrNWQpzw` (Dennis Klicker), REJECTED on trade dress.** The frame contains a recognisable tablet device. Standing blocker since 21 October.
- **`bCPwAe2FQ-8` (Andrijana Bozic), REJECTED ON A RETIRED LANE, not on content.** The photo is captioned "letter" and the frame is a letter. **Letter-to-the-future framing is retired under the binding content rules, and a letter as the hero image of a MySpawn ad re-opens it visually even if no copy mentions it.** Worth recording: **this is the first rejection in this file made on LANE grounds rather than on what is in the picture.**
- **`Ul_j2V20udc` and `QXgPXa6ydzg`, REJECTED on identifiable people.** Both contain persons in frame; the standing preference for paid creative is no identifiable faces, and neither concept needed a person.

## QC GATE

**1. FRESHNESS: PASS.** `negotiate`, `price you can`, `Security is not consent`, `security is not`, `who can read` and `not a price` all return ZERO in `image-concepts-log.md`. **Visual hooks are also new: `notice board`, `noticeboard` and `blank sign` return ZERO.** **Scaffolding was chosen specifically because `door` (20), `lock` (45), `vault` (18) and `wall` (24) are heavily occupied and a lock image is the cliche this concept would otherwise reach for.**
**2. BANNED LANES ABSENT: PASS, AND ONE WAS ENFORCED AT THE GATE.** No letter-to-the-future or 100-year-letter framing, enforced by rejecting a letter photograph. No Pentagon, military-DNA or government-biobank material: **216 names a federal standard but characterises no agency and invokes no government database, and the subject is a technical specification.** No descendant-creation claim. No bereavement framing. **Em dash count verified programmatically at 0.**
**3. CLAIMS CHECK: PASS.** **216's factual spine is dated and specific: from 25 January 2025, institutions handling genomic data under the NIH sharing policy must meet NIST SP 800-171.** The security-versus-consent distinction is framed as our argument, not as a regulator's words. **215 makes one claim about ourselves and it is against our own interest: that our accreditation certificates are not published.**
**4. PRICING: PASS.** Both bodies read **"$99 a year, billed annually"**. Verified programmatically over the ad copy; the banned one-off phrasings return zero.
**5. PHOTO BLOCKERS: PASS, VERIFIED AT FULL RESOLUTION BEFORE DOWNLOAD WAS COMMITTED TO A CREATIVE.** No identifiable faces in either shipped frame. No legible personal data after the 215 crop. No legible third-party brand marks. No recognisable third-party trade dress. No 3D renders, no staged flatlay mockups, no dial, gauge or meter face. Neither photograph is from `mjh_shikder`. **215 additionally satisfies its own concept-specific blocker: no legible price, currency symbol or number anywhere in the photograph.**
**6. VISUAL VERIFY: PASS, ALL FOUR RENDERED AND INSPECTED.** Rendered MODE=local, inspected, 215 corrected and re-inspected, then regenerated MODE=remote before the HTML was copied into the repository.
**7. MIRROR-SAFE: PASS, VERIFIED BY FIND.** No PNG anywhere under `assets/ads/`. Four HTML masters and four JPEGs, largest 883,466 bytes, all under the 950KB ceiling. One file stepped down from q92 to q84.
**8. RIGHT OF PUBLICITY: PASS.** No individual appears in either shipped frame and none is named. **No competitor is named in either ad, although 215 exists because of a specific competitor finding; the ad argues about our own published price and our own unpublished certificates.**
**9. PERSONA BENCH: 3 of 3 on both.** **38-year-old father/provider:** both hand him something to do. **29-year-old undecided optimizer:** 216 passes strongest; a named standard with a date is the specificity he tests brands on. **50-year-old estate planner:** 215 passes strongest; a published price as a commitment is his professional instinct.

**VERDICT: 4 SHIPPED, 1 PHOTO SAVED BY A CROP, 3 PHOTOS REJECTED (one of them on a retired lane, a first for this file), 1 BRIGHTNESS RE-DERIVED UPWARD AFTER FIRST RENDER.**

## HONEST NOTE ON 215

**It is the weaker of the two and should be labelled so rather than defended.** After the crop and the brightness lift it reads as a textured surface with a frame edge. A viewer who does not look twice sees a dark wall, not an empty noticeboard. **The concept is good and the execution is adequate; if it underperforms, change the photograph, not the copy.**

## THE COUNT, STATED PLAINLY

**Four finished against a target of ten. Six backlog verticals were again deliberately NOT manufactured.** A vertical of an old ad is a file, not a creative.

**Evidence line, now ELEVENTH consecutive day under target: 8, 4, 0, 2, 4, 8, 3, 4, 4, 4, 4.** The 23 October non-run remains excluded rather than scored as a zero.

**FOUNDER DECISION, TWENTY-THIRD ASKING: lower the daily ad target from 10 to 4-6.**
