# MySpawn Weekly Founder Brief: Monday 2026-10-26

Covering 19 to 26 October. **57 commits, 6 blog articles, 11 script packages, 6 production packs, 23 ad creatives.**

## TL;DR

1. **Output was strong and delivery was zero.** Everything below is in the repository. **Nothing was emailed, posted, filmed or sent, for the ninth straight week.** The constraint is no longer production.
2. **Two days were lost to a 12-run gap (22 to 24 October)** when triggers fired into an idle session. Documented in `reports/missed-runs-2026-10-24.md`. **Counters were converted to swept-day counts rather than back-dated, so no number in this brief is inflated to cover it.**
3. **The agent stack raised a correction against our own marketing on Saturday night**, on ambient versus frozen storage. **That is the single most useful thing it did this week and it is detailed under MARKET.**

## SHIPPED

**Blog, 6 articles:** `cryo-tank-failure`, `dna-testing-without-consent`, `leaving-money-directly-to-grandchildren`, `power-of-attorney-dna-account`, `self-proving-affidavit-will`, `who-is-next-of-kin`. All word-counted programmatically, all with 6/6 FAQ schema.

**Best two by name:**
- **`leaving-money-directly-to-grandchildren`** (1,799 words MEASURED). Carries the GST exemption at roughly $15M per person for 2026 under OBBBA, the flat 40 percent rate, the $19,000 annual exclusion per Rev. Proc. 2025-32, and the IRC 2651(e) predeceased-parent rule. **This is the most commercially useful thing written this week: it reaches people who are already paying a lawyer.**
- **`power-of-attorney-dna-account`** (1,394 words MEASURED). **Notable because it argues against the product in its own body:** naming us does not name an agent, and a stored sample is not a power of attorney. It also reports an unresolved disagreement between Pennsylvania (20 Pa.C.S. 3909) and Connecticut (45a-334j) rather than papering over it.

**Social, 11 packages.** Standouts: **"Ten Thousand British People"** (46s, outline-map format, the US map never gets marked) and **"Whoever Goes First"** (48s, played in reverse). **5 longposts, measured 527 to 613 words.**

**Ads, 23 creatives across 6 shipping days.** Best two: **`Ad_AskYourCustodianFourThings_211`**, the first creative in the log that prints a question we currently fail, and **`Ad_SomeoneHasToWatchIt_212`**, built on the possession-versus-custody distinction and conceding that both options can fail.

**Daily counts ran 8, 4, 0, 2, 4, 8, 3, 4, 4, 4 against a target of 10. Ten consecutive days under target. See BLOCKERS.**

## MARKET

**The week's most important market item is one we found against ourselves.** Saturday's evening sweep surfaced **Cache DNA**, an MIT spinout (James Banal, Professor Mark Bathe) storing DNA at room temperature in a polymer that sets to a glass-like solid, **MIT News 12 September 2025**, so used as evidence and explicitly not newsjacked. Two details bear on a claim we make in our own advertising: **Cache's ambient reagent is labelled research use only**, and **an independent 2013 protocol study called a full move to room-temperature storage "premature", describing dry storage as an additional layer of security for frozen samples rather than a replacement.** That caution is thirteen years old and the chemistry has moved, so it does not show we are wrong. **It shows "ambient is simply fine" is a stronger sentence than our sourcing supports, and no run before Saturday had checked.** A binding fence is now in `science-watchlist.md`. On competitors: **the UCL Millennium Cohort recirculation was predicted and caught for the fourth time**, and the return finally carried the sample, roughly 10,000 people born in the UK 2000 to 2002, which let us upgrade the fence from "non-US" to "British birth cohort, never a US claim". **The Nucleus whitepaper at `mynucleus.com/labs/traits-whitepaper` still could not be opened; its figures remain labelled secondary.** **Thirty-third consecutive checked day with no source opened at its own domain, which is a real limit on everything in this section.**

## PIPELINE

- **Blog queue, 2 deep, both with binding conditions that may kill them:** "What is a taxable termination and why does it arrive decades late" (must stay on timing and trustee discretion, or it is last Saturday's article again) and "What a biorepository custody agreement should say" (dies if two existing articles already list the terms).
- **Partners: nothing moving, and deliberately so.** The prospector has produced one line a week rather than a file, because a weekly artifact would imply motion that is not occurring. **Cheapest unblock is one firm name in reply; Lawvex has topped the book since week 1.**
- **Newsletter: the queue is five deep and unsent.** Issues 6 through 10 written and ready. **Issue 3 still carries a lead downgraded on 8 September, uncorrected in its own file, now six weeks old.**
- **Inbox: unknown.** 59 consecutive runs, never once able to read a thread.
- **Filming backlog: roughly 33 unshot scripts.** The 22 October shoot-or-kill date passed unactioned.
- **Longpost #156 (CMS CLIA) has been named publish-first nine times and is still out. Comments close 7 December, 42 days away.**

## NEXT WEEK

**CALENDAR: NOT READ. The Google Calendar connector refused this morning in its own words, "needs you to sign in again". That is its third consecutive refusal (18, 25, 26 October).** The pegs below come from our own sentinel records, not from your calendar, and should be treated as incomplete.
**Dated items on file: 1, 13, 15, 19 and 20 November, and 7 December (CMS CLIA comments close).**

**The three highest-leverage actions only you can do:**
1. **Re-authorise Gmail and Google Calendar** in claude.ai connector settings. **This is first because it is cheap and because it is now blocking reading, not just sending.** Note the limit honestly: **re-authorising will NOT produce a sent digest, because this Gmail connector exposes no send capability in any state. It will restore reading and drafting.**
2. **Film three scripts, or kill the backlog.** Thirty-three unshot scripts is not a backlog, it is a decision that has not been made. **"Ten Thousand British People" is the cheapest possible test: two printed maps, one marker, one person, no product and no price.**
3. **Answer the ad-target question.** Ten days of evidence say this lane produces 4 to 8 good creatives a day. **Lower the target from 10 to 4 to 6, or tell me to pad it with backlog verticals. Either answer is workable; the absence of one is what is costing time.**

## BLOCKERS

- **Gmail: no send capability in any state, and as of today it refuses reads too.** Day 59. Re-authorisation fixes reading and drafting only.
- **Google Calendar: refused, third consecutive week.** Needs re-authorisation.
- **n8n mirror: 13th asking. The canonical Drive `Ads` folder still shows created time equal to modified time, 2026-09-08. Nothing has ever been written to it.** Fifth clean negative.
- **`myspawn.me` is blocked by OUR OWN egress policy, so the product counters are unverifiable from here and this is NOT evidence about the site either way.** **CORRECTED 08:1x UTC, three hours after this brief was first written.** The original line said the HTTP 000 responses were "about the domain rather than our egress". **That was wrong.** A verbose re-probe shows our own proxy at `127.0.0.1:40175` answering `CONNECT www.myspawn.me:443` with `HTTP/1.1 403 Forbidden`, while the control host negotiated its tunnel normally in the same loop. **A bare `000` cannot tell "host refused us" from "our proxy refused to try", and the cheap probe this brief used could not see the difference.** Vercel deploy with `ANTHROPIC_API_KEY` and KV vars remains a standing item, but **nothing in this environment bears on whether it is done.**
- **Ad target 10 vs actual 4 to 8: 22nd asking.**
- **GenVault accreditation certificates unpublished: 2nd asking, and now committed to by two shipped creatives** that tell readers to demand exactly the document we have not published.
- **Partnership Prospector awaiting one firm name.**
- **Newsletter cadence: five issues deep, unsent.**

---

**THE ONE DECISION THAT WOULD MOST MOVE MYSPAWN THIS WEEK: film three scripts, starting with "Ten Thousand British People".** Nine weeks of writing have produced a large, QC-passed, unpublished library. **Re-authorising the connectors is more urgent and much smaller; filming is the one that changes the business, because nothing this stack makes reaches a human until something gets shot and posted.**
