# MySpawn SEO Rank Report: Monday 19 October 2026

## NO DATA. EIGHTH CONSECUTIVE NO-DATA SNAPSHOT.

**Probed live this run.** `domain_overview` returned `no_api_units`: *"The user has an active Semrush subscription, but does not have enough API units to complete this request."* **Flagged not retryable, and the error states explicitly that the request itself needs no changes.** More API units: **https://www.semrush.com/mcp-access**.

**The count is verified by counting this file's own headers, not by incrementing last week's number.** Seven snapshots on file before today: **31 Aug, 7 Sep, 14 Sep, 21 Sep, 28 Sep, 5 Oct, 12 Oct.** **Today is the eighth.** *(This file double-incremented twice and corrected itself on 28 September. The method stays: count the headers, in the same sentence as the number.)*

**No positions. No deltas. No competitor wins.** givelegacy.com, securigene.com, dnalegacy.com, acorn.me and tomorrow.bio were not queried: the account limit applies to every Semrush tool, and spending a call to re-confirm that is waste. One call was spent, on the domain we actually care about, and that is the whole Semrush budget this run.

**Cumulative loss, stated once: eight weeks of positional history for a site in its first months. That window cannot be reconstructed later.** The first run after a top-up restores a snapshot, not the trend.

## BLOG PERFORMANCE

**Unverifiable, for the fifth consecutive week, on two independent grounds. Both were checked this run rather than carried forward.**

1. **No rank data**, per the above.
2. **`myspawn.me` returned HTTP 000 with an explicit `connect_rejected` from our own egress proxy.** The control host in the same loop, `images.unsplash.com`, returned **200**. **A known-allowlisted host answering while myspawn.me is refused is the test passing: this is our network declining to leave, not evidence about the site.**

**61 articles exist in the repository** (62 markdown files in `reports/blog/`, minus `topic-log.md`). Whether any of them is on the internet is, from this seat, still unknown.

## KEYWORD OPPORTUNITIES

**No volumes. No difficulty scores. Every entry below is editorial judgment about search intent and must be re-validated when units return. Drop any with no real volume rather than writing the article to justify the queue entry.**

### What this run actually did, and it is not what the last two runs did

The 12 October run queued three instead of five to ten, arguing that **four open items plus three new against a consumption rate of about two a week would build a backlog that looks like output and functions as debt.** That arithmetic assumed the queue was six deep this morning.

**It was not. It was two deep, and nobody had checked.** This run re-grepped all six open items at both levels before proposing anything, and **four of the six are already owned by published articles.** They were not consumed as queue entries. They were consumed in substance by articles the blog sourced elsewhere, which left the entries sitting in the log looking like available work.

**Three of the four were killed by binding checks this tracker wrote itself**, one and two weeks ago, which is the mechanism working rather than a discovery:

- **"does life insurance ask for genetic test results" : KILLED.** The 12 October check read: *if any of the five `life insurance` articles EXPLAINS the GINA insurance gap rather than mentioning it, kill this.* **`genetic-privacy-laws.md` explains it twice in the body and once in JSON-LD**, names all three excluded policy types, names Florida 2020 as the first state to close it partially, and states the patchwork position. That is coverage.
- **"how long are sperm donor records kept" : KILLED.** The check allowed it **only** as the procedural article naming who to ask and what to ask for. **`records-request-process.md` names The Sperm Bank of California's actual request sequence and what the identity-release undertaking contains, and carries "how to request donor records from a sperm bank" as a secondary keyword**; `legacy-planning-no-family-health-history.md` tells the reader to request time-limited records first and names the ten-year floor. The procedural version is the version we already published.
- **"how to confirm a DNA company destroyed your sample" : KILLED.** `what-happens-dna-sample-if-i-cancel.md` carries a **verbatim written-request template whose item (3) is "my stored biological sample has been destroyed, and on what date"**, plus two FAQ headings on destruction. The confirmation mechanic is owned.
- **"how to write a letter to your future child" : KILLED on cannibalization, and on a second independent ground.** `letter-to-future-grandchildren.md` owns the craft end to end: why, the three mistakes, what to say, how long, how to make it survive. Changing the recipient does not produce a different article. **Separately, the letter-to-the-future framing lane is retired.** It should not have been carried for two weeks.

**Surviving from the old queue: two.** *DNA testing without consent* (clean: zero consent headings across 61 articles, and the only covert-collection material sits inside `police-access-consumer-dna.md`, which is about state statutes governing law enforcement, not a private person testing a relative) and *what is a biological will* (zero hits, but it was flagged least-certain on 5 October and that flag stands: drop it first).

**So the corrected reframing, which changes how this section should be read going forward: the queue is not a backlog to be drained, it is a gap list that decays.** Subject-matter turnover in the published set is roughly one article a day from all sources; entry turnover from this tracker measured one last week. **The gap between those two numbers is the four dead entries.** The discipline is re-grep then refill, weekly, not hoard.

**Five queued, which is the brief's floor and is honest this time because four were removed in the same pass.** All five returned zero or near-zero at both heading and body level across the 61 published articles, checked fleet-wide and not blog-only, and all five are backed by material this operation produced in the last two weeks.

### 1. "who is legally next of kin" : slug `who-is-next-of-kin` : lane (d)
**THE #1 PICK, and the gap is a defect in our own corpus rather than a market opening.** **`next of kin`, `next-of-kin` and `nextofkin` return ZERO across all 61 published articles.** So do `priority of kin` and `order of kin`. We have written the custody lane for two months, we write around the concept constantly, and **we have never once used the term the reader actually types.**
**Adjacency disclosed honestly:** `intestacy`/`intestate` appears in **4** articles with **zero headings**, all of it about who inherits property. **Next of kin is a different question: who has authority to act, decide and receive, which is not the same list as who inherits.** That distinction is the article.
**Backed by:** fleet material from 3 October (longpost and script both on kin authority). Internal-links to roughly half the archive, which no other candidate here does.

### 2. "are artificial wombs real" : slug `artificial-womb-reality` : lane (b)
**The volume play, and the one where our honest answer is the differentiated one.** **`artificial womb` and `EctoLife` both return ZERO across the published set**, while `artificial womb` appears in **40 fleet files**: we have researched this repeatedly and never published a page.
**Backed by:** the 18 October episode script "Nobody Is Building An Artificial Womb". The receipts we hold are that **EctoLife is a concept animation, the "pregnancy robot" is fabricated, and in vitro gametogenesis has produced no mature human gametes.**
**RAIL FLAG, BINDING: writable only as a plain debunk.** The honest answer is no, and the page must state that MySpawn stores a sample and promises no descendant creation of any kind. If it cannot be written without implying otherwise, do not write it.

### 3. "what happens if a cryogenic storage tank fails" : slug `cryo-tank-failure` : lane (d)
**The most on-product item in the list, and the one with the sharpest trap.** **`tank failure`, `freezer failure`, `power outage` and `Pacific Fertility` all return ZERO**; `liquid nitrogen` appears in **2** articles and `cryogenic` in **3**, every instance a cost-comparison clause rather than coverage. `tank` alone returns zero.
**Why it is on-product:** cryogenic viability depends on continuous power, nitrogen supply and monitoring; a dry ambient record does not. **That is our storage argument, and this is the version where the reader verifies it against documented incidents instead of taking our word.**
**BINDING, and it is the whole risk: the incidents must be sourced before drafting, not asserted from memory.** This article is worthless and dangerous if the failures are described from recollection. If the 2018 clinic tank failures cannot be sourced at a level this operation would accept anywhere else, kill it rather than soften it. **And it must not be written as a dig at fertility clinics: different material, different job, honestly stated.**
**Backed by:** 7 October longpost and script, which already hold the thesis.

### 4. "what happens to a storage unit when the owner dies" : slug `storage-unit-after-death` : lane (c)
**`storage unit` returns one hit across 61 articles, and it is a rhetorical clause in `what-to-leave-grandchildren.md` ("volume is not legacy"), not coverage.** **`lien` returns six files and in not one of them does it mean a storage lien**: every instance is a law-firm source name or a probate-code liability cap. The two-level grep clears it.
**Backed by:** longpost #149 (17 October) on self-storage lien timelines.
**BINDING: this is writable only as the procedural timeline article**, what the facility may do and on what clock after the renter dies or stops paying, and who has standing to retrieve. **If it comes out as a second "volume is not legacy" essay, it duplicates `what-to-leave-grandchildren` and must be killed.**

### 5. "what is a blastoid" : slug `embryo-models-explained` : lane (b)
**`blastoid` and `organoid` both return ZERO across the published set**, against **12 fleet files**, so again: researched repeatedly, never published.
**Backed by:** the 18 October re-source that satisfied its own blocking condition rather than failing it, returning a named lead researcher (Hongmei Wang, Beijing Institute for Stem Cell and Regenerative Medicine), approximately 50 donated IVF embryos, approximately 1,000 blastoid experiments, and the apposition, attachment and invasion sequence.
**RAIL FLAG, BINDING, and this is the least certain of the five: it sits next to the gamete rail.** Writable only as a science explainer carrying the plain boundary that embryo models are not reproduction and that MySpawn does nothing of the kind. **Listed last on purpose. Drop it before any of the other four.**

### Deliberately not proposed, for rules rather than taste
- **`self-proving`, `apostille`, `affidavit of heirship` and `notary` all return ZERO**, which makes them the best raw gaps in the corpus. **They are not queued here because they are already scheduled: the blog queue holds them for today, 19 October.** Queuing tomorrow's assignment as an opportunity would be padding.
- **"how to check if a study has been retracted"**: we published `what-does-retracted-study-mean` yesterday. Would cannibalize.
- **Military and government-biobank lane**: retired.
- **Pet DNA preservation**: plausible volume, off-product, founder call. Unchanged for three weeks.
- **Embryo-in-divorce terms**: the gamete rail, where we must never imply MySpawn addresses reproductive risk.
- **`unclaimed property` and `escheat`**: zero and near-zero respectively, but every honest version of the article overlaps `what-happens-dna-company-shuts-down`.

## DELIVERY

**Email: not sent, and not attemptable.** Gmail is in its fifty-third consecutive failed run and its fifth consecutive **false recovery**: the tool schemas load, the calls are refused for authorization. **Of the 23 exposed Gmail tools, not one sends.** The Google Calendar connector returned the identical refusal on 18 October, six hours after Gmail's, which points at the account's connector authorisation rather than at either service: **one re-authorisation pass may fix both, and they should be tried together.** A rendered copy of this report is in `reports/outbox/`.

## THE #1 KEYWORD TO TARGET NEXT

**"who is legally next of kin."** **Three spellings of the phrase return zero across sixty-one articles about who gets custody of what after a death, which means the gap is not in the market, it is in us.**
