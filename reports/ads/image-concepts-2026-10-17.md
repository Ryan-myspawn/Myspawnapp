# MySpawn Image Ad Creative: 2026-10-17

## HEADLINE RESULT: ZERO FINISHED CREATIVES, AND IT IS THE PHOTOGRAPHY, NOT THE HOOKS

**Against a target of ten, this run ships NOTHING, and every step of the refusal is documented below.** **The hooks were not the problem: today's fleet produced six strong, fresh, log-zero concepts before a single search was run.** **Six Unsplash queries were run, four returned ZERO results, and BOTH candidates that survived to download FAILED the mandatory visual verify on legible third-party lettering.**

**This is the third consecutive day the daily target has been missed for reasons that are not effort.** 15 October shipped 8, 16 October shipped 4, 17 October ships 0.

## Photo lane status

**FALLBACK LADDER RUNG: (a), the top rung. The lane was fully LIVE and that is the point.**
- **Egress self-test: `images.unsplash.com` returned 200.**
- **The Unsplash MCP search connector worked on every call.**
- **Control check, per the binding 15 October rule: `example.com` returned 000 in the same loop and is NOT a valid control. It is not on the proxy allowlist. The 200 above is the control that matters.**

**So nothing was broken. The lane worked perfectly and produced no usable photograph, which is a different and more useful finding than an outage.**

## The six queries, and what each returned

| Query | Orientation | Result |
|---|---|---|
| `empty chair at dining table` | squarish | 15 results. **One strong candidate, `9M0_SUJBKcI`, REJECTED: it was CONSUMED yesterday on Ad_201 and the anti-repetition rule forbids the same photo on two NEW concepts.** The rest were bright, white-walled interiors or a close-up chair-with-plant that does not earn the concept. |
| `industrial cooling unit` | squarish | **ZERO results.** |
| `air conditioning condenser` | squarish | 64 results. **One candidate downloaded, then REJECTED at visual verify. See below.** |
| `rubber stamp on document` | squarish | 19 results. **One candidate downloaded, then REJECTED at visual verify. One further candidate REJECTED at the SEARCH stage. See below.** |
| `blank clipboard` | squarish | 42 results. **Both top candidates REJECTED: staged flatlay mockups with pink flowers, captioned "Flatlay Mockup Of Clipboard".** Rejected on the 14 October no-render-no-mockup ground and separately on register, because flowers in a flatlay is not a men-25-55 creative. |
| `single wooden chair dark room` | squarish | **ZERO results.** |
| `coat hanging on wall hook` | squarish | **ZERO results.** |
| `empty coat hook` | squarish | **ZERO results.** |

**FOUR ZERO-RESULT QUERIES, RECORDED SO THEY ARE NOT RETRIED BLIND, per the standing convention: `industrial cooling unit`, `single wooden chair dark room`, `coat hanging on wall hook`, `empty coat hook`, all squarish, content_filter high, NO colour filter passed (per the binding 14 October rule).**

## The two rejections at visual verify, which are the run's real content

**BOTH were downloaded at native resolution and inspected as thumbnails before any HTML was written. Neither search result carried any warning about what the thumbnail showed. That is the finding.**

**REJECTED 1: `HDfQ1uXmFh0`, "a air conditioner mounted to the side of a building", Konrad Koller (@onetdev), https://unsplash.com/photos/a-air-conditioner-mounted-to-the-side-of-a-building-HDfQ1uXmFh0, 4059x4059, colour #c0d9d9.**
**Intended concept: "No failure data is not the same as no failures", from today's Script 2 and the 32-failures receipt.**
**REJECTION GROUND: the condenser unit carries a LEGIBLE THIRD-PARTY MANUFACTURER BRAND MARK, "GREE", clearly readable on the casing at thumbnail size.** **This is the exact ground that killed Ad_197's first composition on 15 October**, and unlike that case the mark sits on the photo's only subject, so it cannot be composed out without losing the subject. **KILLED, not reframed.**

**REJECTED 2: `UvrHVj707bI`, "A picture of a bunch of stamps on a wall", snap wander (@passimage), https://unsplash.com/photos/a-picture-of-a-bunch-of-stamps-on-a-wall-UvrHVj707bI, 3630x3588, colour #8c8ca6.**
**Intended concept: "The Stamp", from today's evergreen brief, on a credential being proof of novelty rather than performance.**
**REJECTION GROUND, TWO SEPARATE ONES, EITHER SUFFICIENT.** (1) **The image is dense with legible third-party names and logos**: tourist offices, named refuges, municipalities and organisations, dozens of them, all readable. (2) **It carries what appears to be a real telephone number printed in one of the stamps.** **Publishing a stranger's phone number in a paid creative is not a branding problem, it is a different and worse problem. KILLED.**

**REJECTED 3, AT THE SEARCH STAGE AND NEVER DOWNLOADED: `kGfYL_Wey-s`, "A wax seal presses down onto an envelope", JIWON KANG (@jiwon_kang).** **REJECTION GROUND: BANNED LANE. A wax seal on an envelope is letter imagery, and letter-to-the-future framing is retired in ad concepts by the binding founder rules.** **It was the single most visually appropriate result for the stamp concept and it was refused on a rule rather than on quality.**

## Why no verticals were produced either

**The brief's quota clause says a thin day should still reach ten by shipping more verticals of the backlog's proven ads. That route is blocked today and the block is worth recording.**

- **Every photo-composited square from 15 and 16 October (Ad_196 through Ad_201) ALREADY HAS its vertical.** There is nothing there to adapt.
- **The squares in the log that genuinely lack a vertical are overwhelmingly PRE-PHOTO-MANDATE.** The three with committed HTML masters that were checked (`Ad_PreservedSecret_123`, 12 September; `Ad_MissingLineItem_92` and `Ad_BoringBox_91`, both 6 September) **contain no Unsplash source at all: they are legacy illustrated creatives.** **Adapting them would ship non-photo creatives, which the permanent UNSPLASH PHOTO MANDATE forbids except when egress itself is blocked, and egress is not blocked.**
- **`src_153.jpg` in scratchpad was inspected as a possible rung-(b) source and REJECTED: it is the glass-jars photograph this lane already recorded as rejected and not banked on 14 October, and it carries small legible lettering on background cards.**

**So the honest sentence is: the backlog of proven PHOTO ads is fully adapted, and the backlog of unadapted ads is from the illustrated era.**

## The six concepts that were ready and have no photograph

**Recorded here so tomorrow does not re-derive them. NONE of these is logged as used, because no creative exists.**
1. **"No failure data is not the same as no failures."** From the 32-failures receipt. Needs: a plain machine, no brand mark.
2. **"A stamp means somebody checked one thing."** Needs: an inked stamp or seal with no legible third-party name and no letter imagery.
3. **"Validated. Against what?"** Needs: a blank form, clipboard or certificate, not a flatlay mockup.
4. **"One dollar. Two events. One headline."** From the $54 trillion receipt. Needs: a domestic interior with one person's absence implied, no faces.
5. **"Sixty bytes."** From the 12 October DNA-synthesis paper. Needs: a single line of text or a very small object held at scale.
6. **"One number, billed annually."** From today's competitor dive on price ladders. Needs: a plain price display or a single tag, no competitor's branding anywhere.

## Nothing banked to the photo reserve

**No photograph passed inspection today, so the reserve gains nothing.** It remains at **one live entry (`p89q19F4EL4`), on hold until 29 October.** **The reserve is now the thinnest it has been this month for the third consecutive day, and it is the proximate cause of this run's failure: with a healthy reserve, four of the six concepts above would have shipped.**

## QC Gate

| Item | Verdict |
|---|---|
| `HDfQ1uXmFh0` AC unit, intended for concept 1 | **KILLED.** Legible third-party manufacturer brand on the photo's only subject. No replacement available. |
| `UvrHVj707bI` pilgrim credential stamps, intended for concept 2 | **KILLED.** Dozens of legible third-party names and logos, plus an apparent real telephone number. No replacement available. |
| `kGfYL_Wey-s` wax seal, intended for concept 2 | **KILLED at search stage.** Banned lane: letter imagery. |
| `XADG1a1LiqQ` and `wrbbCU6KJSU` clipboard flatlays, intended for concept 3 | **KILLED.** Staged mockups, and flowers fail the men-25-55 register on all three personas. |
| `9M0_SUJBKcI` interior, intended for concept 4 | **KILLED.** Consumed yesterday on Ad_201; the same photo may not carry two NEW concepts. |
| Vertical adaptations of backlog squares | **NOT PRODUCED.** Every photo-era square is already adapted; the unadapted squares are pre-mandate illustrated creatives. |

**PASS: 0. FIXED: 0. KILLED: 6. SHIPPED: 0.**

**Every kill is on a rule this lane wrote down after a previous mistake.** The brand-mark rule came from Ad_197 on 15 October. The no-mockup rule came from 14 October. The banned-lane rule is the founder's. **The gates worked. There was simply nothing behind them.**

## FIFTEENTH ASKING: LOWER THE DAILY TARGET FROM 10 TO 4-6

**The evidence is now three consecutive days and a zero.** 8, then 4, then 0. **In that stretch the lane ran roughly a dozen queries and killed more photographs than it shipped.**

**The specific, stateable problem: a compliant photograph for this brand must be dark or darkenable, face-free, brand-free, text-free, not a 3D render or a staged mockup, and must EARN a specific concept rather than decorate it. That intersection is rare, and ten of them a day does not exist on Unsplash.**

**A target of 4 to 6 would have been MET on 15 October, MET on 16 October, and would have produced a smaller miss today.** **More usefully, a lower target frees the run to spend its search budget BANKING to the reserve instead of consuming it, which is the mechanism that would prevent a zero day from recurring.**

**Recommended change, concretely: 4 new squares plus verticals as available, with a standing instruction to bank 6 to 10 vetted photographs on every run where search works, even when that means shipping one fewer creative that day.**
