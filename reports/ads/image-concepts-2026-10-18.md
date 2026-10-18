# MySpawn Image Ad Creative: 2026-10-18

## RESULT: TWO FINISHED CREATIVES AGAINST A TARGET OF TEN

**One new photo-composited square and its vertical adaptation.** **That is a long way short of ten and it is an improvement on yesterday's ZERO, achieved on the same constraint and by a narrower search strategy.**

**Photo lane status: FALLBACK LADDER RUNG (a), the top rung.** Egress self-test `images.unsplash.com` **200**. The MCP search connector worked on every call. **Control discipline applied: the 200 above is the control that matters; `example.com` remains a known-invalid control and was not used.**

**FOUR QUERIES RUN. ONE PRODUCED A USABLE PHOTOGRAPH, WHICH IS A HIT RATE OF ONE IN FOUR AND IS THE BEST THIS LANE HAS MANAGED IN THREE DAYS.**

## Ad_NobodyWritesTheDateOnTheBack_202

**Freshness check:** This concept, headline and visual hook have not been used before. **`date on the back`, `blank page` and `wsrstudio` all return ZERO in `image-concepts-log.md`.** **The visual hook (a blank sheet of paper with a pen and a hard window shadow, shot top-down on dark wood) is new to the log; no prior creative uses paper as its subject.**
**Primary audience:** Men 25-55. **The 38-year-old father leads; the 50-year-old estate planner is the second read.**
**Trend / hook used:** The thesis of longpost #151 (17 October) and today's date-forensics explainer: **an archive is a store of what somebody believed when they wrote it down, and the valuable part is the apparatus around each claim rather than the confidence.**

**Headline (35 characters, measured):** Nobody writes the date on the back.
**Sub (198 characters, measured, inside the 300 budget):** A box of photographs with nothing written on them is a beautiful object and a poor record. The part worth keeping is the apparatus: when, from whom, how sure. MySpawn is $99 a year, billed annually.

**Support:** The photo IS the argument rather than decorating it. A blank page and a pen, with nothing written. **The headline does not describe the picture, it turns it: the viewer is looking at the thing the headline says nobody does.**
**Placement:** Paid, both ratios. **No identifiable faces, no legible text of any kind, no brand marks.**
**Ratios note:** **the vertical is a re-composition, not a crop.** Square photo layer 1180x1180 at (-50,-110); vertical 1900x1900 at (-410,-90). **Both were REFRAMED after the first render: see the QC gate.**

**Photographer credit: Wulan Sari (@wsrstudio), Unsplash photo `_8Av8gw79UY`,** https://unsplash.com/photos/black-pen-on-white-paper-_8Av8gw79UY

| Vertical adaptation | Note |
|---|---|
| **Ad_NobodyWritesTheDateOnTheBack_202_9x16 (adaptation)** | Same concept, same source photo, re-composed at a 1900px photo layer so the page and the shadow survive the tall canvas. Headline 70px against the square's 58px. |

## The three queries that produced nothing, recorded so they are not retried blind

| Query | Result |
|---|---|
| `petri dish laboratory dark` | **ZERO results.** |
| `old wall calendar` | 46 results, **all three top candidates REJECTED.** Two are the same photographer's "Hypnobirthing relaxation calendar", which is bright, carries a third-party organisation's product, and sits in the motherhood frame the binding rules minimise. The third is a restaurant poster carrying legible "Lunar New Year 2022" text. |
| `blank sheets of paper on dark table` | 69 results. **One usable (shipped). Two REJECTED: both are the SAME photographer's explicit 3D renders, captioned "3D Rendering Blank Flyer For Mockup" and "3D Rendering A4 Blank Flyer on Gray Background For Mockups".** |

**THE 3D-RENDER REJECTION GROUND HAS NOW FIRED THREE TIMES ON THE SAME PHOTOGRAPHER AND TWICE ON THE SAME IMAGE.** `yqrPVPA4OQo` was rejected on **14 October**, again on **16 October**, and again today. **This is no longer a coincidence to note: this account's renders rank highly for exactly the clean, minimal, object-on-a-surface queries this lane runs.** **RECOMMENDED STANDING RULE, and it would have saved three searches: treat `mjh_shikder` as a known-rejected source and skip its results on sight.**

## QC Gate

| Item | Freshness, truth-checked | Banned lanes | Claims | 3-persona bench | Visual verify | Verdict |
|---|---|---|---|---|---|---|
| **Ad_NobodyWritesTheDateOnTheBack_202** | **PASS.** Concept, headline and visual hook all ZERO in the log. Paper has never been a subject in this archive. | Clean. **NOT letter-to-the-future framing, and the distinction is deliberate: this is about annotating a record you already have, not writing a message to a descendant.** No Pentagon, no em dashes. | Headline 35 chars, sub 198, both measured and inside budget. **Pricing "$99 a year, billed annually".** No science claim, no competitor, no accreditation claim. | Father PASS and leads; estate planner PASS; optimizer PASS. | **FIXED.** First render was reframed: see below. | **FIXED** |
| **Ad_NobodyWritesTheDateOnTheBack_202_9x16** | Adaptation, shares parent concept. | Clean. | Same copy. | Same. | **FIXED.** First render was an abstract blur: see below. | **FIXED** |

**BOTH CREATIVES WERE FIXED RATHER THAN SHIPPED AS FIRST RENDERED, AND THE FAULT IS THE INVERSE OF THE ONE LOGGED ON 16 OCTOBER.** That day the note read: *"when a photo's subject is small and centred, the generator's default scale is too tight."* **Today the subject is LARGE and fills the frame, and the inherited scale was too tight in the other direction: the square clipped the pen and cropped out the window shadow, leaving a flat grey rectangle, and the vertical zoomed so far in that the page, the pen and the shadow all disappeared into an abstract blur.**
**FIX: photo layers pulled back from 1560 to 1180 (square) and from 2500 to 1900 (vertical), with the offsets re-centred.** **Both re-rendered and re-verified at thumbnail before shipping.**
**AMENDED NOTE FOR THE GENERATOR, replacing the 16 October one-directional version: the inherited scale values are tuned for a small centred subject and must be RE-DERIVED for every photo, in both directions. A subject that fills the native frame needs a SMALLER photo layer, not a larger one.**

**PASS 0, FIXED 2, KILLED 3 (the two 3D renders and the calendar set), SHIPPED 2.**

## SIXTEENTH ASKING: LOWER THE DAILY TARGET FROM 10 TO 4-6

**Four days of evidence: 8, then 4, then 0, then 2.** **Today's run was deliberately narrower than yesterday's, searching for subjects unlikely to carry branding or text rather than for the most conceptually exciting image, and that change took the hit rate from zero-of-two to one-of-four.** **That is the strategy to keep, and it still does not produce ten.**

**The recommendation is unchanged and is now better supported: 4 new squares plus verticals as available, with a standing instruction to bank 6 to 10 vetted photographs on every run where search works.** **The reserve still holds ONE entry, on hold until 29 October, and it is the reason a thin search day becomes a thin shipping day.**

**NOTHING WAS BANKED TO THE RESERVE TODAY EITHER, and that is the honest failure inside a better day: four queries produced one usable photograph and it shipped immediately.**
