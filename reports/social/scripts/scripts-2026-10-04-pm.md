# Content Factory PM: Sunday 4 October 2026

**Delta sweep verdict: the US day was quiet, and nothing broke after 13:00 UTC that is worth newsjacking.** Three searches returned a conference that ended yesterday, market-size figures from a press aggregator, and a genetic-privacy statute that turned out to be three months old. **Per the standing branch, tonight is one evergreen script plus three X drafts and two Threads posts.**

**BUT THE SWEEP FOUND TWO THINGS ANYWAY, AND THE SECOND ONE IS THE MOST IMPORTANT ITEM IN THIS FILE.**

---

## FIND 1: VERMONT ENACTED A GENETIC DATA PRIVACY LAW AND IT IS NOT IN OUR TRACKING SECTION

**Vermont H.639, "An act relating to genetic data privacy", enacted as Act 135. Signed 15 June 2026. Effective 1 July 2026.** It requires direct-to-consumer genetic testing companies to give clear information about collection and use of genetic data and to obtain consent before using genetic data or biological samples beyond the primary purpose of testing; it limits data sharing, gives consumers access to their own data, and prohibits disclosure to insurers and employers [1][2].

**THE DATE WAS CHECKED BEFORE THE ITEM WAS EVALUATED, per the standing rule, and the date is what demotes it.** Effective 1 July 2026 is **three months ago**. **This is a dated receipt, not a hook, and it gets no calendar peg because the date has passed.**

**WHAT IT ACTUALLY IS: a gap in our own record.** Our science-watchlist tracking section on US state genetic-privacy statutes names **Connecticut SB 4, South Dakota SB 49, Utah HB 182 and Montana SB 163**, plus a law-firm survey counting thirteen states. **Vermont appears nowhere in it. Vermont took effect on 1 July 2026, the same day as South Dakota SB 49, which we did list.**

**HOW HONEST TO BE ABOUT THIS, stated precisely rather than dramatically.** Longposts of 15 September, 17 September and #102 on 29 September all quote the thirteen-state figure **as a law-firm survey explicitly labeled "not an official registry."** **None of them claims the list is complete, so none of them contains a false statement.** **What we have is an incompleteness in our own tracking section, not a published error**, and the distinction matters because calling it a correction would overclaim. **Added to the watchlist tonight.**

**Not used for content tonight:** a script about a state genetic-privacy law would sit five days from longpost #102, inside the window.

**Also surfaced and NOT used: an Israeli inheritance-bill amendment on digital rights inheritance**, which would require platforms to publish death policies and let people designate access without a court. **No date established, and non-US. Flagged, not banked.**

---

## FIND 2: THREE PUBLISHED BLOG ARTICLES STILL SAID "$99, ONCE." THEY ARE CORRECTED IN THIS COMMIT.

**This morning's production run found a forty-five-day-old pricing error in production-log line 66 and then swept the other logs before claiming it was the only instance.** That sweep was run against the **logs**. **Tonight's sweep was run against the whole repository, and the blog articles directory was never in the morning's scope.**

| File | Line | What it said |
|---|---|---|
| `reports/blog/gen-z-not-having-kids.md` | 40 | "This is what MySpawn does: **$99, once**, for the first 1,000 members" |
| `reports/blog/gen-z-not-having-kids.md` | 64 | "the MySpawn kit is **$99, once**" |
| `reports/blog/childfree-legacy.md` | 52 | "It costs **$99, once**" |
| `reports/blog/childfree-legacy.md` | 81 | "the MySpawn kit is **$99, once**, for the first 1,000 members" |
| `reports/blog/what-happens-dna-company-shuts-down.md` | 76 | "The MySpawn kit is **$99, once**, for the first 1,000 members" |

**Five instances, three articles, customer-facing, forty days after the 25 August correction.** All five are corrected to **"$99 a year, billed annually"** in this commit, and each article carries a dated correction note at its foot.

**THE ONE PIECE OF GOOD NEWS, and it is worth stating because it bounded the work: not one of the three arguments depended on the fee being one-time.** The binding rule says a thesis resting on MySpawn being one-time is false and must be reworked. **These were string errors, not broken theses, so the fix is a string fix.**

**AND ONE FILE THAT LOOKED WRONG AND IS RIGHT: `dna-banking-cost.md`.** It returns hits for "no annual fee" and "charge once", and **both are about home-capsule competitors**, while MySpawn is stated correctly as "$99 per year" in the same FAQ. **Left untouched. A sweep that corrects a correct file is worse than one that misses a wrong one.**

**WHAT I CANNOT VERIFY, said plainly: whether the live site serves the same text.** `myspawn.me` has been unreachable from this environment for weeks. **The repository is fixed. Whether the published pages match the repository is a founder check.**

**AND THE PROCESS POINT.** The morning run's sweep was sound in method and wrong in scope. **A pricing sweep that stops at the logs misses the only files a customer reads.** **Proposed standing rule: the banned-phrase sweep runs against the whole repository, not against the log set, every time it is run.**

---

## EVERGREEN SCRIPT: "The Four Questions" (~70s)

**Freshness check:** **The format is the whiteboard and marker, proven, last used 21 September PM, thirteen days out and clear of the window.** The 28 September piece explicitly is NOT this format, and says so in its own file: it is voice plus on-screen column headers with **no physical prop and no drawing**. **The structure inside the whiteboard is new:** every prior whiteboard script drew a single list, a ladder, or the two-column build added on 21 September. **None of them drew a timeline.** The last seven days of evergreens ran a planted detail, a document read aloud, a timed demonstration, an applied-rule walkthrough, one sentence said five times, cards laid down, a comparison, a subtracting list, an answers-only cut, a series episode and a prop that stays closed. **None is a drawn build of any kind.**

**Primary audience: Men 25-55.** Provider-first. The whole piece is a man refusing to guess about his own company on camera.

**Trend-hook used:** **NONE, and deliberately.** The US day was quiet and this is the evergreen branch. **The subject is sourced from our own product structure rather than from a news item**, which is the honest version of an evergreen.

**Subject freshness, verified by grep rather than asserted:** **"card expires", "expired card", "payment fails", "auto-renew", "unpaid", "grace period", "miss a payment" and "what if you stop paying" all return ZERO across the entire scripts directory and all three logs.** **"Renewal", "invoice" and "billing" return ZERO across scripts and logs.**

**TWO ADJACENCIES DISCLOSED, and the second one is same-day.**
1. **26 September PM, eight days out**, the parked-car monologue, contains the line *"an institution has an address, an inspection record, and a procedure for the day you stop paying attention."* **That piece asserts the procedure exists. This one asks what it says.** That is the right relationship between the two and not a repeat, but it is the nearest prior line and it is named here rather than discovered later.
2. **TODAY, zero days: the static ad Ad_EverythingInItIsFine_178**, "Everything in it is fine. Nobody can reach it," which is a safe deposit box closing on death. **Both assets share the shape "intact but unreachable" and that is a real risk at zero days.** **The separation is the thesis, not the shape: the ad's argument is about a third party closing access, and this script's argument is a consumer-action checklist of four questions to put to a vendor.** **The post plan staggers them deliberately rather than relying on the argument alone.**

**Format:** a whiteboard, one marker, eye-level, hands and torso in frame. He draws as he talks. **No graphics, no cuts inside the drawing.**

**Sound:** marker squeak, room tone. No music.

### VO and shots

| Time | VO | Shot / on-screen |
|---|---|---|
| 0-7s | "We charge ninety-nine dollars a year to store a DNA sample. Which means there is a question about us that would not exist if we charged once." | [SHOT: blank whiteboard, he uncaps the marker] Text: **$99 A YEAR** |
| 7-16s | "What happens if the payment fails?" | [SHOT: he draws one long horizontal line, left to right] |
| 16-24s | "Day zero. Your card expires, or your bank reissues it, or you die. Same event as far as the billing system is concerned." | [SHOT: marks a tick at the far left] Text: **DAY 0** |
| 24-36s | "Question one. How long is the grace period." | [SHOT: writes GRACE PERIOD above the line, then a question mark under it] |
| 36-46s | "Question two. What goes first. Does the login close, or does the sample go?" | [SHOT: writes LOGIN OR SAMPLE, question mark under it] |
| 46-56s | "Question three. Destroyed, returned, or just unreachable. Those are three different answers and companies use them interchangeably." | [SHOT: writes DESTROYED / RETURNED / UNREACHABLE, question mark under it] |
| 56-66s | "Question four. Who gets told. In the scenario you bought this for, you are not reading the email." | [SHOT: writes WHO GETS TOLD, question mark under it, steps back: the whole line is question marks] |
| 66-76s | "I am not filling these in with guesses about my own company. I am going to get the answers and publish them. If you pay anyone an annual fee to hold something biological, go get these four. If they cannot answer the fourth one, you already have your answer." | [SHOT: he caps the marker, leaves the board full of question marks, walks out of frame] Text: **ASK ALL FOUR. OURS INCLUDED.** |

**HARD RULE ON THIS SCRIPT, and it is a ship-blocker.** **He must not state MySpawn's grace period, destruction policy, notification policy, or any of the four answers.** **This operation does not know them.** The piece works because he refuses to guess on camera; it becomes a liability the moment a number is invented. **If a founder answer arrives before filming, that is a DIFFERENT and better script, and it should be written as one rather than patched into this one.**

**This is also a forcing function on the custody-page debt named this morning:** three published articles tell readers to demand written answers from vendors, and our own published answer does not exist. **This script adds a fourth asset making the same demand. The debt gets more expensive every time we ship one of these.**

### Captions

- **TikTok / Reels:** "Four questions to ask any company holding something of yours on an annual fee. I could not answer all four about my own company, which is the video."
- **Shorts:** "What happens to your stuff if the payment fails? Four questions. Ask us too."
- **7-second teaser:** 56-63s only, the fourth question, ending on the full board of question marks.
- **Hashtags:** #estateplanning #digitallegacy #dna #consumerrights #askquestions

---

## X DRAFTS

**X-1 (against interest, the strongest item of the week).**
> We found "$99, once" in three of our own published articles tonight. It is $99 a year. The error predates our August pricing correction and survived in those files for forty days after it.
>
> Fixed, with a dated note on each one. Posting it because a company that quietly fixes its own price copy is indistinguishable from one that did not have the error.

**X-2 (distribution for the script, written to work unclicked).**
> Four questions for any company holding something of yours on an annual fee:
>
> 1. How long is the grace period?
> 2. What goes first, the login or the thing?
> 3. Destroyed, returned, or just unreachable?
> 4. Who gets told, if you are the one who is gone?
>
> We cannot answer all four about ourselves yet. Working on it.

**X-3 (useful to the reader, our own miss stated in one clause).**
> Add Vermont to your list. Act 135, "An act relating to genetic data privacy," signed 15 June 2026, in force since 1 July. Consent required before a DTC company uses your genetic data or your biological sample beyond the test itself, and no disclosure to insurers or employers.
>
> We track this lane closely and it was not on our list until tonight.

---

## THREADS POSTS

**Threads-1 (ends with a question, which is the format's mechanic).**
> Something I only thought about because we charge annually rather than once.
>
> If the payment fails, what happens first: does your login close, or does the thing itself go? Those are very different products, and most terms pages do not say which one they are.
>
> Has anyone actually found a company that answers this in writing?

**Threads-2 (the week's second theme, written not to repeat its own script's caption).**
> A backup you have never opened is a belief, not a backup.
>
> The number of copies is the easy part. The hard part is whether the thing each copy points at still exists, and whether anyone but you knows where to look.
>
> When did you last open the oldest one?

---

## TOMORROW MORNING POST PLAN (Monday 5 October)

| Time (ET) | Platform | Asset | One line of reasoning |
|---|---|---|---|
| **8:00am** | **Email** | **NEWSLETTER ISSUE 6** | **The single most important thing tomorrow, and it is not a social post.** Ten sends have been missed; this is the eleventh if it slips. It is written and dated for tomorrow. |
| 9:00am | X | **X-1, the pricing correction** | Monday morning, provider audience, and an against-interest admission reads strongest before the feed gets noisy. It also gets ahead of anyone else finding it. |
| 10:30am | Threads | Threads-1, the payment question | Ends on a genuine open question, which is the only thing that reliably earns replies on Threads. |
| 12:30pm | X | X-3, Vermont | Midday, informational, useful unclicked. **Deliberately not adjacent to X-1: two self-critical posts in one morning reads as a theme rather than as candor.** |
| 2:00pm | Meta / paid | **Ad_EverythingInItIsFine_178, vertical first** | The static ad clears a two-day hold. **Deliberately scheduled hours away from the evergreen script's slot, per the zero-day adjacency disclosed above.** |
| 5:30pm | TikTok / Reels | **"The Four Questions"** (if shot) | Evening, and the four-question structure is a save-and-return asset rather than a scroll asset. **Conditional: the filming backlog is nineteen days and this asset is unshot like the rest.** |
| Hold | X | X-2 | Holds until the script is actually shot. **A distribution post for an unshot video is how a backlog becomes invisible.** |

---

## QC GATE

| Item | Verdict | Note |
|---|---|---|
| **Freshness, evergreen script** | **PASS** | **Subject verified by grep, not asserted: eleven payment-lapse terms return ZERO across the scripts directory and all three logs.** **Format is the whiteboard, last used 21 September PM, thirteen days out**, with the 28 September near-miss checked and excluded using that file's own words. **The timeline structure is new inside the format.** |
| **Adjacency disclosure** | **PASS, with a same-day risk named** | **Two disclosed: 26 Sep PM at eight days on the nearest prior line, and TODAY'S Ad_178 at ZERO days on the "intact but unreachable" shape.** The second is handled by separating the thesis **and** by staggering the post plan, rather than by argument alone. |
| **Banned lanes** | **PASS** | No letter-to-the-future framing, no Pentagon, military-DNA or government-biobank material, no descendant-creation implication. Storage only. |
| **Claims check** | **PASS** | **The script asserts NOTHING about MySpawn's actual policies and carries a ship-blocker forbidding it.** Vermont Act 135 is stated with its signing date, effective date and enforcement scope, sourced, and **explicitly demoted from news to receipt on its date.** The Israeli bill is flagged and unused for want of a date. |
| **Pricing** | **PASS** | Scoped to the deliverable. **One reference in the script, "ninety-nine dollars a year", and X-1 states "$99 a year" while quoting the retired phrase as the error being corrected.** **The quotation is the subject of the correction, not a claim, which is the one case where the retired string legitimately appears.** |
| **Our own archive** | **FIVE ERRORS FOUND AND FIXED** | Three customer-facing blog articles, five price strings, corrected in this commit with dated notes. **One file that looked wrong was verified correct and left alone.** |
| **Right of publicity** | **PASS** | No named individual anywhere. No company named except our own. Vermont's statute is cited, no legislator named. |
| **Persona bench, evergreen script** | **3 of 3** | **38-year-old provider: PASS**, four questions he can use tomorrow on any vendor. **29-year-old optimizer: PASS**, and this is the first asset in weeks he clears, because it needs no box, no executor and no estate, only a recurring charge. **50-year-old estate planner: PASS**, question four is his entire professional concern. |
| **Persona bench, text posts** | **5 of 5 clear 2 of 3 or better** | **X-1 scores 3 of 3** and is the strongest text item tonight. **Threads-2 loses the 29-year-old**, who has no decades-old backup to open; recorded rather than argued away. |

---

## Sources

1. Vermont H.639 / Act 135, "An act relating to genetic data privacy": bill and act documents at the Vermont General Assembly. **The primary PDFs could not be opened from this environment: `legislature.vermont.gov` is blocked by the network egress proxy, so the signing date of 15 June 2026 and the effective date of 1 July 2026 are taken from secondary reporting and should be confirmed against the act text before any further use.**
2. Secondary coverage of H.639's provisions and committee progress (Vermont Business Magazine; privacy-practice commentary). **Labeled trade and legal-press reporting, not primary.**

**NOTE ON WHAT WAS NOT SOURCED.** The longevity-market figures returned by tonight's sweep (an anti-aging market "more than $85 billion in 2025" projected "toward $120 billion by 2030", and "$8.49 billion across 325 deals") came from a press-release aggregator with no methodology and no clear date. **Not banked and not used.** The 13th ARDD meeting at Harvard, 1-3 October 2026, is a real dated event that **ended yesterday**, and a conference taking place is not a finding.
