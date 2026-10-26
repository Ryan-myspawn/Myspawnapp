# MySpawn SEO Rank Report: Monday 26 October 2026

## NO DATA. NINTH CONSECUTIVE NO-DATA SNAPSHOT.

**Probed live this run.** `domain_overview` returned `no_api_units`: *"The user has an active Semrush subscription, but does not have enough API units to complete this request."* **Flagged not retryable, and the error states the request itself needs no changes.** More API units: **https://www.semrush.com/mcp-access**.

**The count is verified by counting `rank-history.md`'s own headers, not by incrementing last week's number.** Eight snapshots on file before today: **31 Aug, 7 Sep, 14 Sep, 21 Sep, 28 Sep, 5 Oct, 12 Oct, 19 Oct.** **Today is the ninth.**

**No positions. No deltas. No competitor wins.** givelegacy.com, securigene.com, dnalegacy.com, acorn.me and tomorrow.bio were not queried: the account limit applies to every Semrush tool, and spending a call to re-confirm the limit is waste. **One call was spent, on our own domain, and that was the whole budget.**

**Cumulative loss, stated once: nine weeks of positional history for a site in its first months. That window cannot be reconstructed later.** The first run after a top-up restores a snapshot, not the trend.

## A CORRECTION TO THIS MORNING'S FOUNDER BRIEF, ISSUED BY THIS LANE AGAINST ITSELF

**The founder brief published three hours ago said of `myspawn.me`: "this is about the domain rather than our egress." THAT IS WRONG, and this lane's own standing record was right.**

**Re-probed verbosely this run, which is what settled it.** The request never leaves this container: **our own proxy at `127.0.0.1:40175` answers `CONNECT www.myspawn.me:443` with `HTTP/1.1 403 Forbidden`, and curl reports `CONNECT tunnel failed, response 403`.** The control host `images.unsplash.com` negotiated its tunnel normally in the same loop.

**WHY THE ERROR HAPPENED AND WHY IT MATTERS.** The brief ran a plain `curl -w "%{http_code}"`, saw `000` for myspawn.me and `200` for the control, and concluded the difference was about the domain. **A bare `000` cannot distinguish "host refused us" from "our proxy refused to try", and only the verbose form shows the 403 on CONNECT.** **The practical consequence of the wrong version is that a reader would go and check a Vercel deployment that this environment has produced no evidence about.**

**THE CORRECT STANDING LINE, which this lane has carried for five weeks and the brief should have used: `myspawn.me` is blocked by our own egress policy, so the product counters are unverifiable FROM HERE and this is not evidence about the site either way.** **`reports/founder-brief-2026-10-26.md` has been corrected in place in the same commit as this report.**

**PROCESS NOTE WORTH KEEPING: the two lanes disagreed, and the disagreement was visible only because both wrote their reasoning down rather than just their conclusion.** The founder brief lane re-derived a diagnosis the SEO lane had already settled, and got it wrong because it used a cheaper probe. **A lane re-deriving another lane's settled finding should read that finding first.**

## BLOG PERFORMANCE

**Unverifiable, for the sixth consecutive week, on two independent grounds, both re-checked this run rather than carried forward.**
1. **No rank data**, per the above.
2. **`myspawn.me` refused by our own proxy with a 403 on CONNECT**, per the correction above.

**67 articles published, up from 61 last week.** Six were added: `cryo-tank-failure`, `dna-testing-without-consent`, `leaving-money-directly-to-grandchildren`, `power-of-attorney-dna-account`, `self-proving-affidavit-will`, `who-is-next-of-kin`. **Zero of them have measurable rank, and that is a reporting limit rather than a result.**

## QUEUE: RE-GREP BEFORE REFILL

Per the binding reframing set on 19 October, **the queue is a gap list that decays, not a backlog to drain.** Re-grepped first.

**TWO OF LAST WEEK'S FIVE ARE CONSUMED, INCLUDING THE #1 PICK.** `who-is-next-of-kin` and `cryo-tank-failure` both published this week. **The #1 pick converting inside seven days is the first time this tracker's top recommendation has been published in the week it was made, and it is the only evidence available that this lane affects anything.**

**A TWO-LEVEL GREP TRAP CAUGHT AND WORTH RECORDING: the phrase "cryo tank" returns ZERO across all 67 published bodies, yet `cryo-tank-failure.md` exists and is published.** The article uses other phrasing throughout. **A phrase-level zero is NOT proof a topic is unowned. Check the slug list as well as the bodies, every time.** A refill done on the phrase grep alone would have re-queued an article we had just published.

**STILL OPEN from last week:** artificial womb and blastoid, both carrying rail flags; storage unit, partially owned by one article.

## KEYWORD OPPORTUNITIES: GAP-VERIFIED, NOT VOLUME-VERIFIED

**STATED PLAINLY BECAUSE THE BRIEF ASKS FOR SOMETHING I CANNOT HONESTLY PRODUCE: the brief asks for keywords with "real volume and low difficulty". I HAVE NO VOLUME AND NO DIFFICULTY DATA, for the ninth week.** Every candidate below is verified only as a **content gap across 67 published articles**, at body level and against the slug list. **None is a measured opportunity and none may be described as one until units are restored.**

**FIVE CANDIDATES, each returning ZERO at body level across all 67 articles:**

| Candidate | Gap check | Note |
|---|---|---|
| **how long does probate take** | 0 | Searcher-phrased, and the timing question our estate lane keeps gesturing at without answering. |
| **trustee discretion** (and **taxable termination** timing) | 0 | **Already queued in `topic-log.md` with a binding condition; this is corroboration, not a new entry.** |
| **transfer on death** | 0 | Adjacent to `small estate affidavit`, which 4 articles already own. **Risk of cannibalization; check at body level before writing.** |
| **ancillary probate** | 0 | Narrow, and probably low volume. **Listed because it is a true gap, not because it is a good bet.** |
| **biobank consent** | 0 | **The strongest of the five on fit:** it is our own category, and `sample destruction` is already owned by 5 articles while consent at intake is owned by none. |

**`conservatorship`, `spendthrift` and `decanting` also returned zero and are NOT queued.** All three are estate-law terms with no plausible path to our product, and queuing a gap we would never write is how a gap list turns back into debt.

## DELIVERY

**Email: not sent, and not attemptable.** **Gmail day 59. This connector exposes no send capability in any state, and as of this morning it refuses READS too**, which is a new failure class recorded in `reports/inbox/concierge-log.md`.

## THE #1 KEYWORD TO TARGET NEXT

**"biobank consent" (searcher-phrased: what you are agreeing to when you bank a sample).** **It is the only candidate that is simultaneously a verified zero across 67 articles, squarely inside our own category, and the natural front half of a journey whose back half we already own five times over in `sample destruction`.** **Caveat that must travel with the pick: this is a gap, not a measured opportunity, because there is no volume data for the ninth consecutive week.**
