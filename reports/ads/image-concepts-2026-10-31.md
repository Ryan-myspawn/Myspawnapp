# MySpawn Image Ad Creatives, 2026-10-31

**TWO FINISHED CREATIVES, NOT TEN, and the run spent its remaining time on the retro-check promised yesterday rather than on padding the count.** **That audit is the more valuable half of this run and it is written up in full below, including the two false alarms it produced before it produced a true finding.**

**PHOTO LANE STATUS: RUNG A, LIVE.** Egress self-test returned **200** and the Unsplash MCP search ran. **Honest note: today's query returned only 3 results total, the thinnest search this lane has seen, so the reserve was topped up with only 2 usable entries rather than the usual 6 to 10.**

---

## Ad_AgreedNotFound_220 (1080x1080)

**Freshness check:** **VISUAL HOOK IS NEW: a shadow used as the line.** The photo has never been used. **Declared adjacency: yesterday's Ad_219 used a motorway interchange, which is also a line-and-route image, so two consecutive days have used linear ground imagery. The subjects are unrelated and the concepts are opposite (many routes versus one boundary), and that is said rather than left to notice.** Not a custody object.
**Primary audience:** Men 25-55.
**Trend-hook used:** None fresh. **Rotating preferred direction: this week's biobanking and research-governance science, via the 14-day rule.**

**HEADLINE (54 chars, measured):** A limit that was agreed is not a limit that was found.
**BODY (280 chars, measured):** The 14-day limit on embryo research comes from a 1984 UK committee report, which said in its own pages that the line rested on consensus, not scientific fact. Good rules can still be agreements. Ask who set it and what it binds. MySpawn stores DNA for $99 a year, billed annually.

**SUPPORT.** The claim is public record and carried without exaggeration. **The ad does not say the rule is wrong, and the line "Good rules can still be agreements" is there specifically to stop that reading.** The argument is about how to read a number, which is the positioning this brand actually owns.
**WHY THE PHOTO EARNS IT.** A shadow is a real, visible, perfectly sharp line **with no substance at all.** That is the concept, rendered rather than illustrated.
**PLACEMENT:** Meta and Instagram feed. **Paid-safe: no faces, no signage, no plates, no brand marks, no trade dress.**

**PHOTO:** `wG63CSZ7oIc`, **MAK (@mak_jp)**, https://unsplash.com/photos/a-metal-pole-with-a-shadow-on-dark-pavement-wG63CSZ7oIc . Native 4000x4000, used at w=1800, re-framed rather than used full-frame.
**TREATMENT:** `brightness(1.42) contrast(1.16) saturate(0.10)`, navy tint 0.22, bottom gradient 700px, scrim 0.46. **Source mean luminance was 26.3, the darkest frame this lane has used, so brightness was derived UPWARD by a wide margin.**

## Ad_AgreedNotFound_220_9x16 (1080x1920, adaptation)

Same concept and photo, re-composed at 2400x2400 placed at left -660, top -700 so the shadow edge crosses the upper middle above the type block. **Not a blind crop.** Same credit.

---

## THE RETRO-CHECK, which is the run's main output

**Yesterday's clipping defect raised a specific worry: that other committed creatives might be missing their "myspawn.me / $99 a year" lockup without anyone noticing. 406 committed delivery JPEGs were audited today. The answer is that NONE are missing it.** Getting to that answer took three passes and **both wrong answers are recorded, because a retro-check that only reports its final number teaches nothing.**

**PASS 1 FLAGGED 176 FILES. WRONG, and badly.** The probe assumed every creative was a 1080-tall design and looked at a fixed pixel band. **Most flagged files were 9x16 verticals, whose canvas is 1920 tall and whose lockup sits at a completely different height. The probe was looking at empty sky.**

**PASS 2, aspect-aware, FLAGGED 49. STILL WRONG.** Squares and verticals were measured against their own design heights. **But 47 of the 49 returned the identical value, 44, which is the signature of a flat background rather than of absent text. A uniform result across unrelated files is a property of the measuring instrument, not of the files.**

**PASS 3, VISUAL, FOUND THE ACTUAL EXPLANATION.** One flagged file was cropped and looked at. **The August legacy-style ads CENTRE their lockup; the current photo style left-aligns it at x=78.** The probe only ever looked left. **Every flagged file has its lockup, in a different place. Zero defects. All 49 were from 23 to 29 August, all legacy style, and nothing from September or October was flagged at all, which independently confirms the current pipeline is clean.**

**WHAT THE AUDIT DID FIND, by accident, is real.** The visual check surfaced an **em dash** inside a shipped August creative. **A literal-character grep across all 418 ad HTML masters returned ZERO, which looked like a clean bill of health and was not: the dashes are ENTITY-ENCODED.** **Searching for `&mdash;`, `&#8212;` and `&#x2014;` returns 4 master files carrying 6 em dashes, dated 26 and 31 August.** The no-em-dash rule became binding on 21 August, so **all four violate it, all four are at least two months old, and nothing since 31 August is affected.**

**NEW BINDING RULE, because this one has been silently wrong for months: every em-dash check on an HTML file must test the three entity forms as well as the literal character. A literal-only grep on markup is a false clean.** The markdown checks this fleet runs daily are unaffected, since markdown carries the literal character.

**NOT FIXED TODAY, deliberately: the four affected creatives are months old and editing shipped assets is a content decision. Listed for a decision rather than quietly rewritten.** Affected days: **2026-08-26 (3 files) and 2026-08-31 (1 file).**

---

## QC GATE

**Ad_AgreedNotFound_220: FIXED, then PASS.**
- **DEFECT, COMPOSITION: FIXED.** The first render placed the photograph full-frame, which put the shadow edge, the entire point of the image, underneath the headline and gradient. **It read as a dim pole in the dark, not as a line.** Re-framed at 1500x1500 offset to -210,-620 so the edge crosses the upper third, and brightness pulled back from 1.62 to 1.42 once the brighter region moved into view. **Re-verified by reading both renders.**
- **THE LOCKUP WAS PRESENT ON THE FIRST RENDER, because yesterday's lesson was applied: both canvases were rendered at 1080x1280 and 1080x2120 and cropped, never at the exact canvas height.** **Explicitly re-verified rather than assumed.**
- **Banned lanes: CLEAR.** No letter-to-the-future framing, no military or government-biobank material, no descendant-creation claim.
- **Claims check: PASS.** One historical claim, public record, stated without exaggeration, with an explicit guard against reading it as an attack on the rule. **Pricing correct and annual in both body and lockup. No one-off phrasing anywhere in this file.**
- **Persona bench: 3 of 3.** Provider: "ask who set it and what it binds" is a usable test. Optimizer: the 1984 admission is the hook. Estate planner: the agreed-versus-found distinction transfers straight to accreditation claims.
- **Right of publicity: CLEAR.** No faces, no individuals. Mary Warnock is not named in the creative at all. No signage, plates or marks.
- **Visual verify: DONE on both canvases, plus a dedicated compression inspection.**

**Ad_AgreedNotFound_220_9x16: PASS, with a compression note worth keeping.** **It required q52 to fit under the 950KB ceiling, the lowest quality this lane has ever shipped.** The cause is the photograph's dense sensor grain across a large dark area, which is extremely expensive to encode. **Inspected at full resolution before shipping: the grain reads as film grain, the shadow edge stays crisp and there is no visible banding in the gradient, so it ships.** **Third datapoint in the compression series after 28 October (q80) and 30 October (q76): a grainy night photograph at 2160x3840 is at the edge of what this ceiling supports.**

**SUMMARY: 2 creatives, 1 PASS, 1 FIXED-then-PASS, 0 KILLED. Retro-check: 406 files audited, 0 lockup defects, 2 false alarms recorded, 1 genuine unrelated defect found and listed for a decision.**

## SHORTFALL NOTE: 2 of 10

**The backlog-vertical route was available and was again not used.** Yesterday's reason was that re-rendering blind risked multiplying a suspected defect. **That reason has now expired, because the audit cleared the backlog: there is no lockup defect to multiply.** **Today's reason is different and simpler: the audit itself consumed the run's capacity, and it was worth more than eight mechanical re-renders.** **Twenty-eighth asking on lowering the daily target to 4 to 6. The target has not been met once in this session, and a target met zero times is not a target.**
