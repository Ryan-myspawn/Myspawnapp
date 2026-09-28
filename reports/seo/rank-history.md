## 2026-08-31 snapshot
NO DATA: Semrush API units exhausted (subscription active). No positions pulled; no deltas computable next run against this date. 6 provisional keywords queued (volumes unverified).

## 2026-09-07 snapshot
NO DATA: Semrush API units still exhausted (second consecutive week; subscription active: top-up at semrush.com/mcp-access). No positions pulled; no deltas computable. Of the Aug 31 provisional keywords, 4 of 6 were consumed by articles this week; only "cord blood banking alternatives" remains open. No new keywords queued without verified volumes.

## 2026-09-14 snapshot
NO DATA: Semrush API units exhausted for the FOURTH consecutive week (subscription confirmed active this run; top-up at semrush.com/mcp-access). No positions pulled. **Four weeks of positional history for a first-months site is now permanently lost: the first run after a top-up restores a snapshot, not a trend.** Blog-performance check doubly blocked: site root and all three API endpoints returned HTTP 000 from this container, which is egress restriction here rather than evidence about the site. METHOD CHANGE: after two weeks of correctly refusing to queue unverified keywords, a third week of zero queue additions became its own failure, so this run queued 3 candidates derived from observed search-result phrasing during the week's research, explicitly labeled volumes-unverified and ranked by editorial confidence rather than data. Re-validate all queue entries when units return; drop any with no volume rather than writing the article to justify the entry.

## 2026-09-21 snapshot
**NO DATA. Semrush API units exhausted for the SIXTH consecutive week.** Probed live this run: the API returns `no_api_units` with the subscription confirmed **active**. Top-up at https://www.semrush.com/mcp-access. No positions pulled, no deltas computable, no competitor keyword wins observable.
**Cumulative loss, stated once and not repeated: six weeks of positional history for a site in its first months.** That window cannot be reconstructed later. **The first run after a top-up restores a snapshot, not the trend.**

## 2026-09-28 snapshot
**NO DATA. Probed live: `no_api_units`, subscription confirmed active.** Top-up at https://www.semrush.com/mcp-access. No positions, no deltas, no competitor wins.
**CORRECTION TO THIS FILE'S OWN COUNTING, and the diagnosis is exact rather than vague.** Four prior snapshots exist: 31 Aug, 7 Sep, 14 Sep, 21 Sep.
**The basis WAS snapshots and the first two entries prove it: 31 August is the first and carries no number, and 7 September correctly calls itself the "second consecutive week."**
**Then it double-incremented, twice.** 14 September is the **third** snapshot and calls itself the **fourth**. 21 September is the **fourth** snapshot and calls itself the **sixth**. **Each of those two entries added two instead of one.**
**From today the count is snapshots in this file, stated in the same sentence as the number. Today is the FIFTH consecutive no-data snapshot.** The figures "fourth" and "sixth" in the 14 and 21 September entries are wrong by one and by two respectively and must not be quoted.
**Why it went unnoticed: nobody had a motive to check how many weeks Semrush had been broken.** The number only ever grew, which felt right, so it was never read. **Same defect this operation spent the week finding in competitor prices.**
**Blog performance doubly unverifiable: no rank data, and `myspawn.me` returned HTTP 000 with an explicit CONNECT 403 from our own egress proxy, so it cannot be confirmed that any published article is live.**
