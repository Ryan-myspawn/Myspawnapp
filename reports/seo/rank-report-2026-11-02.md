# MySpawn SEO Rank Report: Monday 2 November 2026

## NO DATA. TENTH CONSECUTIVE NO-DATA SNAPSHOT.

**Probed live this run, one call, which was the whole budget.** `domain_overview` returned `no_api_units`: *"The user has an active Semrush subscription, but does not have enough API units to complete this request."* **Flagged not retryable, and the error states the request itself needs no changes.** Additional API units: **https://www.semrush.com/mcp-access**.

**The count is verified by counting `rank-history.md`'s own `## ` headers, which returned 9, not by incrementing last week's number.** On file: 31 Aug, 7 Sep, 14 Sep, 21 Sep, 28 Sep, 5 Oct, 12 Oct, 19 Oct, 26 Oct. **Today is the tenth.**

**No positions, no deltas, no competitor wins.** givelegacy.com, securigene.com, dnalegacy.com, acorn.me and tomorrow.bio were not queried. The account limit applies to every Semrush tool and spending calls to re-confirm it is waste.

**Cumulative loss, stated once and then dropped: ten weeks of positional history for a site in its first months, and that window cannot be reconstructed later.** The first run after a top-up restores a snapshot, not a trend.

## BLOG PERFORMANCE

**Unverifiable for the seventh consecutive week, on the same two independent grounds, both re-checked this run.**
1. **No rank data**, per the above.
2. **`myspawn.me` is refused by our own egress policy.** Re-probed verbosely this morning: the proxy answers `CONNECT www.myspawn.me:443` with **403 Forbidden** and curl reports `CONNECT tunnel failed, response 403`, while `images.unsplash.com` negotiated `HTTP/1.1 200 Connection Established` in the same loop. **The proxy's own status reports `"selective": false`, so this is the environment's network policy denying the host.**

**THE CROSS-LANE PROCESS NOTE FROM LAST WEEK WORKED AND IS WORTH RECORDING AS SUCH.** Last week this lane corrected the founder brief, which had used a cheap `%{http_code}` probe, seen `000`, and concluded the problem was about the domain rather than our egress. **This morning's founder brief used the verbose probe, reached the correct diagnosis independently, and explicitly withdrew the earlier "deploy pending" framing.** **The correction held across a week and across lanes, which is the first time that has been demonstrated here.**

## KEYWORD OPPORTUNITIES

**DELIVERED AS INSTRUCTED DESPITE THE DATA OUTAGE, AND THE LIMIT IS STATED PLAINLY RATHER THAN BURIED: these seven are GAP-VERIFIED and NOT VOLUME-VERIFIED.** **Every one was checked at two levels against all 73 published articles, bodies and slug list both, per the binding rule written on 26 October after a phrase-level zero nearly re-queued a live article. None has a search volume or difficulty figure attached, because no figure could be obtained, and inventing one would be worse than omitting it.**

| # | Candidate | Gap evidence (73 articles) | Why it earns a slot |
|---|---|---|---|
| 1 | **What happens to your online accounts when you die** | `RUFADAA` 4 bodies, `digital accounts` 3, `digital assets` 5, **0 slugs** | Large mainstream lane, no dedicated article, and it is the same argument as our product in a form people already search: custody of a thing that is not physical. |
| 2 | **Chain of custody, explained** | `chain of custody` 5 bodies, **0 slugs** | **Core to what we sell and we have never written it.** Likely modest volume, high intent. |
| 3 | **Living trust versus a payable-on-death beneficiary** | `living trust` **1 body**, 0 slugs | A comparison query in a lane we already write heavily, and the 31 October POD article gives it a ready internal link. |
| 4 | **How long does a DNA sample actually last** | `viable` 9, `viability` 5, **0 slugs** | Scattered across nine articles and owned by none. Direct product question. |
| 5 | **Handwritten wills: where they are valid and where they are not** | `holographic` **0 bodies** | **A complete zero.** State-by-state, and it fits the house line exactly: which instrument actually does the work. |
| 6 | **Can a spouse override a will** | `elective share` **0 bodies**, `spousal` 1 | **A complete zero** under the technical term, and the plain-language phrasing is how people search it. |
| 7 | **What happens to prepaid services if the company shuts down** | `prepaid` 9 bodies (all incidental), 0 slugs | **The most commercially honest topic on this list for an annually billed product, and the week's accreditation work feeds straight into it.** |

**TWO CANDIDATES WERE COMPLETE ZEROS AND WERE STILL NOT QUEUED, recorded so the decision is visible: `perpetual care` and `trust protector`.** Both returned 0 bodies. **Both were judged too narrow for men 25-55 and too far from anything we sell, and a zero is not by itself a reason to write.**

**ONE SUBSTRING TRAP CAUGHT IN THIS RUN.** **`disclaim` appeared to return 8 articles, which would have killed a candidate about disclaiming an inheritance. The hits are dominated by the word `disclaimer`, which is boilerplate.** The candidate was not queued anyway, but the trap is logged because it is the same failure mode as `POD` returning `PODCAST` last night.

## DELIVERY

Written to `reports/seo/rank-report-2026-11-02.md`, appended to `reports/seo/rank-history.md`, seven candidates appended to the Queue section of `reports/blog/topic-log.md` tagged **from rank tracker**. Committed and pushed to `claude/trend-radar`. **Email could not be sent: the Gmail connector requires re-authorisation and has never exposed a send tool in any state.**

---

**THE #1 KEYWORD TO TARGET NEXT: "what happens to your online accounts when you die."** It is the only candidate on the list with plausibly large mainstream volume, it is a complete gap at slug level, and it lets us make our actual argument about custody of non-physical property to an audience that is already searching for it rather than for us.
