# Longposts: 2026-09-23 (#87 to #91)

## PRE-PUBLICATION FIX ON #84, HANDLED FIRST

**#84, "The Shoebox Beats Everything I Sell at One Thing" (21 September), has been on hold since it was written.** Its second paragraph used the line that **four companies in this category shut down, pivoted or paused in about two years.**

**That line is now dead, and it died by our own audit rather than by anyone correcting us.** The four were checked individually and **one of four claims held.** Details are in `reports/competitors/baseline.md` dive #27 and in article #87 below.

**#84 is released from hold with one instruction: delete the base-rate sentence and do not replace it with another aggregate.** The article's actual argument, that a box of photographs survives without anyone maintaining it and that is a real advantage, **never depended on the category failing.** It is stronger without the line.

**Nothing was published. This is a pre-publication fix, not a public correction.**

---

# #87 [FACEBOOK] I checked four companies one at a time. One of the four claims held.
*Founder voice, trust/custody. 565 words.*

**Freshness check:** No prior longpost is an audit of a single source's accuracy rate. #81 was a positioning error found in a sweep; #86 was about the sequence of our internal gates. **This is about a source with a stake in the answer, measured.**
**Primary audience:** Men 25-55.
**Trend / hook used:** Our own four-company audit, completed 22 September 2026.

Three weeks ago I read a market summary that said most of the best-known names in digital legacy had shut down, pivoted or paused in about two years. It named four companies.

I believed it. I built an argument on it. **This category fails, so ask hard questions about who is holding your things.** It was the best argument I had written all month.

Then somebody asked who wrote the summary.

A competitor. Not a journalist, not a regulator. A company selling into the same market, describing the fate of its rivals.

So I checked all four. One at a time. It took four sittings across three weeks and it finished yesterday.

**One held. Three did not. And every one of the three failed in the same direction.**

**Company one: shut down. True.** Shutdown notice posted, homepage not loading as of August 2026, iOS app not updated since September 2023.

**Company two: shut down. False as framed.** It filed **Chapter 11 on 5 May 2024** in White Plains, New York, case **7:2024bk22398**, listing about **$1.5 million in assets against $10.5 million in liabilities.** It then **emerged.** Its assets were acquired by an investment company, reported in trade coverage on **3 March 2025**, and it is operating and expanding in 2026, including work with museums and a New York City schools trial.

**Company three: left the category. False as framed.** It raised **$10.3 million** in **November 2025** from Mayfield and Boldstart and **changed markets**, because its founder found that most of its users were not preparing for death at all. They wanted to use the thing while they were alive. That is not a failure. That is a company reading its customers correctly.

**Company four: stalled behind a waitlist with no public pricing. Cannot support it.** That description traces back to the company's **own StartEngine fundraising document for a 2022 round** and is being presented as a 2026 status. A **December 2024** source reports a **$10 price for a constrained chat session**, which contradicts "no public pricing." I found no evidence it has shut down, and it appears in grief-technology coverage through 2026.

**One out of four.**

Here is the part I keep turning over. A competitor's market summary is not a lie and is not dishonest. **It is marketing, and marketing is allowed to select.** The error was entirely mine: I treated a selected account as if it were a survey.

And I should have caught it faster, because of the tell. **The claim arrived pre-fitted to an argument I already wanted to make.** A claim that flatters your thesis deserves more checking than one that contradicts it. I gave it less.

The honest replacement is duller and truer: **one failed, one reorganized, one raised money and changed markets, one is still going.** The category is volatile, not doomed. Volatility is still a custody question, because a company that reorganizes or gets bought is a company whose terms can change while your things are inside it.

That version is less alarming. Which makes it worse marketing. We are publishing it anyway, because that is the only reason anyone should believe the next thing we say.

New rule here, and it is absolute: **no aggregate claim about anyone else's outcomes goes out until every company in it has been checked individually.**

**What would you have done with a 25 percent hit rate?**

**SOURCES (ready-to-paste first comment):**
- StoryFile Chapter 11: filed 5 May 2024, US Bankruptcy Court, White Plains NY, case 7:2024bk22398; ~$1.5M assets vs ~$10.5M liabilities. Court record. Asset acquisition by Key 7 Investment Company, trade coverage 3 March 2025. *(via search index: verify before posting)*
- Eternos: $10.3M raise, Mayfield and Boldstart, November 2025; rebrand to Uare.ai; founder Rob LoCascio's stated finding that most users were not preparing for death. Reported funding news. *(via search index: verify before posting)*
- You, Only Virtual: "pre-revenue, 10K+ waitlist" traces to a StartEngine offering for a 2022 round (company-authored investor material); $10 constrained-chat price reported by a December 2024 source. *(via search index: verify before posting)*
- HereAfter AI: shutdown notice; homepage not loading as of August 2026; iOS app last updated September 2023.
- **Epistemic labels, kept separate on purpose:** company two is **court record**; company three is **reported funding news**; company four is **a company's own investor document.** The original summary flattened three evidence grades into one fact.

---

# #88 [X] The law says your data must come back "without hindrance." Here is what actually arrives.
*Practical legacy guide. 659 words.*

**Freshness check:** No longpost covers data export or portability. #75 was file-naming and metadata hygiene for scans you already hold; this is about getting files out of a company in the first place.
**Primary audience:** Men 25-55.
**Trend / hook used:** Today's research into what consumer exports actually contain.

Under the **California Privacy Rights Act**, in force since **1 January 2023**, a company handing back your personal information electronically must provide it in a format that is **"portable and, to the extent technically feasible, in a readily useable format"** letting you move it to another entity **"without hindrance."**

The CPRA went further than the original CCPA in a way almost nobody mentions: **the business must also transfer that information directly to another entity if you ask.** Not just give you a file. Send it on.

Now the reality.

**Google Takeout.** Your albums arrive as separate named folders, which is genuinely good. But:

Every photo's **dates, GPS coordinates and description are written into a companion .json file sitting beside the image**, not left in the file's EXIF. Import that folder elsewhere and your library can land dated the day you exported it.

**Shared albums are silently skipped.** Takeout exports what you uploaded. Albums shared with you are not included and you are not warned.

**It arrives in pieces.** Roughly **19 zip archives for a 100GB library**, with simultaneous downloads limited and **links expiring after about one week.**

**It is bigger than your library.** Expect **1.5 to 2 times** the storage figure shown, because a photo in "Vacation 2022" and in "Photos from 2022" exports twice.

**Apple.** The archive at privacy.apple.com arrives as CSV, JSON and media attachments by service: contacts, calendar, music preferences, past repair records.

**It does not include your iCloud Photos library or your Drive files.** Those need a separate download that most people never learn exists. **Messages come through as limited metadata, not conversations.** It takes **three to seven days** to prepare and **links stay live for 14 days.**

**Meta.** Accounts Center now covers Instagram and Facebook together or separately. And **Transfer Your Information** does direct service-to-service transfer, sending Instagram photos and videos straight to somewhere like Google Photos.

That last one matters because it is the **strong form of the right actually working.** The law describes direct transfer. One company built it.

So the scoreboard: the right is real, it is stronger than most people know, and **the phrase carrying all the weight is "to the extent technically feasible."**

Two things follow from that, and both cost you time rather than money.

**The duplication is not cosmetic.** If a 100GB library exports at 1.5 to 2 times its size, a meaningful share of what you download is the same image twice, filed once under its album and once under its year. Anything you import it into will either ingest both copies or make you deduplicate first. **Budget for that before you start, not after 19 archives have landed.**

**And direct transfer is the exception, not the norm.** Of the three biggest consumer platforms, **one offers service-to-service transfer of your photos and videos.** The other two hand you files. The law describes the stronger version; the market has mostly built the weaker one. **When a company does offer direct transfer, use it, because it is the only route that does not pass through your own hard drive and your own patience.**

An hour of work, today, on a normal day:

**Request an export now**, while it costs you nothing. Not during an emergency.

**Open it and check one photo's date.** If the date lives in a sidecar file, you have a metadata job, and you want to find that out before someone else inherits it.

**Count what is missing.** Shared albums. Messages. Anything under the same login in a different product.

**Check the expiry and download it immediately.** A link that dies in seven days is not an archive.

**Ask for the transfer, not just the file**, wherever it is offered.

And point the same question at anything held on your behalf, including us: not only who can get in, but **what can leave, in what shape, and who signs off.**

If a company cannot answer that, the silence is the answer.

**SOURCES (reply thread):**
1/ CPRA, effective 1 Jan 2023: electronic disclosures must be portable and, to the extent technically feasible, readily useable and transmittable to another entity without hindrance; expanded beyond CCPA to require direct transfer to another entity on request. Statutory plus IAPP and Bloomberg Law practitioner analysis. *(via search index: verify before posting)*
2/ Google Takeout: per-file companion .json carrying dates, GPS and descriptions rather than in-file EXIF; shared albums skipped; ~19 archives per 100GB; links expiring ~1 week; 1.5-2x reported library size from year-versus-album duplication. Documented behavior, practitioner and university IT sources. *(via search index: verify before posting)*
3/ Apple privacy.apple.com: CSV, JSON and media by service category; iCloud Photos and Drive excluded and requiring a separate download; limited message metadata; 3-7 days to prepare; links live 14 days. *(via search index: verify before posting)*
4/ Meta: Accounts Center joint or separate download; Transfer Your Information supports direct transfer of Instagram photos and videos to another service. Vendor announcement and coverage. *(via search index: verify before posting)*
5/ **Standing caveat: consumer export behavior changes without notice. Re-verify before relying on any of this.**

---

# #89 [FACEBOOK] Two halves of your family archive. Two completely different laws.
*Practical legacy guide. 645 words.*

**Freshness check:** No longpost covers wills, probate mechanics or the tangible-versus-digital split. #75 was archival hygiene on files you hold. **This is about which of your things a legal document can actually reach.**
**Primary audience:** Men 25-55.
**Trend / hook used:** This week's research into what a personal property memorandum does and does not cover.

There is no rule about who gets the family photographs. There is no birth-order law, no default keeper, nothing. In most families the person who ends up with the boxes is whoever happened to care, usually during a house clearance, usually in one week, under pressure.

There is a tool for this and almost nobody uses it.

**Most US states have adopted a provision based on Uniform Probate Code section 2-513**, "separate writing identifying devise of certain types of tangible personal property." You can find it enacted as **Hawaii 560:2-513, Massachusetts 190B 2-513, New Mexico 45-2-513 and Idaho 15-2-513**, among others.

In plain terms: **your will can point at a separate signed list saying who gets which objects.** That list is legally effective without being part of the will.

The statute's own conditions:

It covers **tangible personal property** and explicitly **not money.** It must be **signed by you.** It must describe the items and the recipients **with reasonable certainty.** It may be written **before or after the will is executed.** And **it may be altered afterwards.**

Those last two are the whole value. Changing a will means a new document or a codicil, usually an attorney, usually witnesses. **Changing this list means picking up a pen.** For a family archive that flexibility is the difference between a document that stays true and one that describes a house you moved out of in 2011.

Two limits inside that statute catch people, and both are easy to avoid if you know them first.

**It only covers property the will has not already given to someone specifically.** If your will names the watch, the separate list cannot reassign the watch. The list works on everything the will leaves unallocated, which for most people is almost the entire contents of a house.

**And "reasonable certainty" is doing real work.** "My photographs" is thin. "The photograph albums in the hall cupboard" is not. The test is whether a stranger holding your list could walk into your house and identify the item and the person without guessing. **Write it as if the reader has never met your family, because eventually that is who reads it.**

Now the half it does not touch.

**A personal property memorandum covers tangible property. Most of a modern family archive is not tangible.**

**Nearly every US state has enacted the Revised Uniform Fiduciary Access to Digital Assets Act**, and the distinction it draws is the one that catches people: **the act governs the data, not the device.** Your phone is ordinary tangible property that passes through normal probate. **The photographs on it, and the ones in the cloud account it syncs to, are digital assets under a separate regime.**

And the default runs the opposite way to everyone's assumption. **Unless access is explicitly granted in your will or trust, the presumption is that your executor does not have it.**

**Silence is not permission.**

So a line reading "my photographs to my daughter" reaches the box in the wardrobe. On its own it does not reach the forty thousand images in the account.

Four things, in order of how little they cost you:

**Say out loud who the keeper is.** In a conversation, before any document. The most common failure is four siblings each assuming one of the others has it in hand.

**Separate "who stores it" from "who gets copies."** Most archive fights are about access, not custody, and scanning ends a surprising number before they start.

**Write the separate list**, signed, described clearly, kept with the will.

**Write the second instruction for the digital half, explicitly.** This is the step nearly everyone skips.

One caveat worth stating plainly: **this is state law and it varies**, including whether your state recognizes the mechanism at all. Check yours or ask an attorney rather than assuming.

**Which half of your family's archive would actually survive next year?**

**SOURCES (ready-to-paste first comment):**
- Uniform Probate Code s. 2-513, "separate writing identifying devise of certain types of tangible personal property." Enacted e.g. Hawaii Revised Statutes 560:2-513; Massachusetts General Laws ch. 190B Art. II s. 2-513; New Mexico Statutes 45-2-513; Idaho Code 15-2-513. **Primary statutory sources.** *(via search index: verify your own state before relying on it)*
- Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA), adopted in nearly every US state: governs the data rather than the device; fiduciary access presumed absent unless explicitly granted. **Uniform act, widely enacted.** *(via search index: verify before posting)*
- **No state adoption count is claimed here**, because no verified count was available at the time of writing.

---

# #90 [X] Almost nothing I catch is false. It is old.
*Contrarian method take. ZERO PRODUCT. 611 words.*

**Freshness check:** #86 was an ops essay about the sequence of our own internal gates. **This is about the shape of the error out in the world**, with four dated worked examples, three of them from the last five days. Different subject, different structure, no overlap in examples.
**Primary audience:** Men 25-55.
**Trend / hook used:** Four dated-source catches between 19 and 22 September 2026.

I run a small research operation and I catch things for a living. Here is what surprised me.

**Almost nothing I catch is a lie. It is a true thing with its date removed.**

Four from the last five days.

**One.** "Personal possessions are five times more likely than money to cause family conflict." You will find that across estate-planning content. It is a real finding from a real survey: the **Allianz American Legacies Study**, run by Age Wave with Allianz Life and Harris Interactive, **2,627 respondents.** It was published in **2005.** Twenty-one years ago. Almost nobody quoting it says so. It is probably still true, and in 2005 a family archive was a box, which is a different world from the one the number is now used to describe.

**Two.** A wave of "seafood reverses aging" coverage in early September. The underlying paper is a **2022 mouse study.** Sixteen-month-old mice, two months of intervention. Not new, not human, and not what the headlines implied.

**Three.** A market summary published this year describing a competitor as stalled behind a waitlist. The line traces to that company's **own investor fundraising document for a 2022 round**, presented as a 2026 status.

**Four.** A **September 2026** longevity funding roundup reporting **$613.9 million raised**, with one company at **71 percent** of it. Seventy-one percent of $613.9M is about **$436 million**, which is that company's **$435 million Series C.** That round closed on **2 June 2026**, led by Founders Fund, at a valuation around **$3.1 billion.**

Is the roundup lying? Almost certainly not. It is probably cumulative and probably not trying to mislead anyone. **It does not have to be.** A reader scanning "September funding news" still walks away thinking longevity raised $613.9M this month and one company took most of it.

That is the whole pattern. **Nobody had to lie. The date just came off.**

And there is a structural reason it keeps happening, which is worth understanding because it tells you where to look.

**Dates fall off at every hop.** The paper has a date. The university press release usually has one. The coverage of the press release sometimes has one. The aggregator summarizing the coverage rarely does. The social post summarizing the aggregator never does. **Nobody in that chain removed the date on purpose. Each link just compressed the one before it, and the date is the first thing that compresses.**

Which gives you a test that takes about ninety seconds.

**Count the hops.** If what you are reading cites a write-up which cites another write-up, you are at least three links from anything with a date on it. **Go find the thing with a date on it.** It is usually one search away, and it usually says something slightly duller and considerably more useful than the version that reached you.

Which changes what a good question looks like. Most people's instinct when shown a surprising number is to ask whether it is true. That is usually the wrong first question, because usually it is.

**Ask when instead.**

When was it measured. When was it published. How far is the gap between those two. And what changed in the world between then and now that the number could not have accounted for.

The 2005 conflict statistic could not have known about cloud accounts. The 2022 mouse paper could not have known which human trials would fail. The 2022 investor line could not have known what the company would do in 2024.

None of those is a scandal. **All four are true things doing work they were never measured to do.**

So: not wrong. Just not new.

**Ask when.**

**SOURCES (reply thread):**
1/ Allianz American Legacies Study, Age Wave with Allianz Life Insurance Company of North America and Harris Interactive, n = 2,627 boomers and elders, **published 2005**. **Industry-commissioned survey, NOT peer-reviewed, 21 years old.** *(via search index: verify before posting)*
2/ Seafood/aging: underlying work is a **2022 mouse study**, Front Mol Biosci, 16-month-old mice, two-month intervention. **Peer-reviewed, mouse-stage, 2022.** *(via search index: verify before posting)*
3/ The waitlist line traces to a company's **own StartEngine offering for a 2022 round**. **Company-authored investor material.** *(via search index: verify before posting)*
4/ NewLimit **$435M Series C, 2 June 2026**, led by Founders Fund with Thrive Capital, Lilly Ventures, Nat Friedman and Daniel Gross; valuation approximately **$3.1 billion.** **Reported funding news, consistent across STAT, BioPharma Dive, Fierce Biotech and the company's own blog.** *(via search index: verify before posting)*
5/ The September roundup reporting $613.9M with one company at 71%: **aggregator roundup, used here only as an illustration of dated framing, not as evidence of September activity.**

---

# #91 [FACEBOOK] A major research database spent five months closed this year. Look at what it decided the fix was.
*Science explainer, story-driven. ZERO PRODUCT. 594 words.*

**Freshness check:** No longpost covers data security, research infrastructure or egress control. #77 was platform death policies; #82 was acquisition custody. **This is an institution redesigning itself around what leaves rather than who enters.**
**Primary audience:** Men 25-55.
**Trend / hook used:** UK Biobank's phased reopening, beginning September 2026.

In **April 2026**, one of the most-used health research resources in the world found that **deidentified participant-level data which had already been exported from its analysis platform** was being offered for sale online.

It did not issue a statement and carry on. **It paused researcher access entirely.** The platform stayed closed for close to five months.

Then it published what it was rebuilding, and this is the part worth your attention.

Not a stronger front door.

**On reopening, phased from September 2026, researchers can go in and compute and download nothing at all.**

**A manual output checking system, with limited capacity, arrives later in 2026.**

**An automated one is targeted for early 2027.**

**An airlock is being rolled out alongside the reopening.**

Applications for new projects are **suspended until late 2026.** Every existing project was **extended by six months**, along with its compute credits. A **£200,000 independent security review** was commissioned and its recommendations accepted. Access on reopening is limited to institutions **fully compliant on mandatory training, annual reports and data deletion for projects that have ended.**

Read that list again. Every single item is about **egress.** What can leave, in what form, and who checks it on the way out.

Here is why I think this matters far beyond research.

Every conversation about digital security, digital legacy, and account access is about **entry**. Who has the password. Who is the legacy contact. Who gets in after you die. We have all been trained to think of a breach as somebody breaking in.

**This one was not a break-in.** The data had already been exported. By people who were allowed to have it. Through a door that was open to them on purpose.

That is a different theory of what a leak is, and it produces a completely different fix. You cannot solve it with a better lock. **You solve it by checking what people are carrying on the way out.**

There is a second half to their fix that is easy to skim past, and it is arguably the harder one. **Access on reopening is limited to institutions that are fully compliant on mandatory training, on annual reports, and on deleting data from projects that have already ended.**

That last item is the one I keep thinking about. **A project finishes, and the copy it was given does not automatically go anywhere.** Somebody has to delete it, and somebody has to check that they did. **An institution that never enforced that requirement was not less secure on paper. It just had more copies of itself in the world than it could count.**

Which means the question almost nobody asks about any service holding anything of theirs is: **what can leave, who approves it, is there a record that it happened, and what gets deleted when the reason for holding it ends.**

Ask your cloud provider. Ask your bank. Ask whoever holds your family's photographs.

One more thing, and it is a matter of fairness.

It would be easy to tell this as a scandal. It is not one. **They disclosed. They got the listing taken down. They paused access rather than pressing on. They commissioned an independent review and accepted it. They compensated every affected project with six months. They published a staged plan with dates on it.** Most organizations manage about two of those.

That is what a good response to a bad year looks like, and saying so is both accurate and more useful than outrage.

**Which of the services holding your things could tell you what is allowed out?**

**SOURCES (ready-to-paste first comment):**
- UK Biobank, April 2026: deidentified participant-level data already exported from the Research Analysis Platform found offered for sale; researcher access paused. **Institutional statement plus contemporaneous coverage.** *(via search index: verify before posting)*
- Reopening mechanics: phased from September 2026; **no downloads at reopening**; manual Output Checking System later in 2026; **automated targeted early 2027**; airlock rolled out with reopening; new project applications suspended until late 2026; all projects and compute credits **extended by six months**; access conditional on compliance with mandatory training, annual reports and data deletion for ended projects. **UK Biobank's own published material.** *(via search index: verify against their community pages before posting)*
- **£200,000 independent security review** commissioned, recommendations accepted. Reported **13 July 2026**. *(via search index: verify before posting)*
- **DELIBERATELY EXCLUDED:** a widely quoted figure of roughly 500,000 affected participants. **That is security-press reporting, not an institutional statement**, and this article works without it.
- **NOT ASSERTED:** how the data got out. **That has not been publicly established and no mechanism is claimed here.**

---

## RUN SUMMARY

**5 articles, #87 to #91.** Lanes: founder-voice trust/custody (#87), practical legacy guide (#88, #89), contrarian method (#90), science explainer story (#91). **Two articles carry zero product mention (#90, #91).** Platforms: 3 Facebook, 2 X.

**NO REDDIT ARTICLE THIS RUN, and that is deliberate rather than an omission.** **The Reddit channel has been blocked at the network level since before the last run** (`CONNECT tunnel failed, response 403`, re-tested 22 September, and it is our container's egress proxy rather than any Reddit decision). **Two playbook-compliant Reddit articles are already written and unposted: #81 for r/SideProject and #86 for r/Entrepreneur.** **Writing a third for a channel that cannot receive the first two would be padding, not production.** The moment access returns: **#86 first, then #81.**

**Word counts, measured on the PUBLISHABLE body only** (excluding the three required production lines and the sources block, which are not posted): #87 565 · #88 659 · #89 645 · #90 611 · #91 594. **All inside the 500-1,000 band.** *(Measured twice. A first pass put four articles under the 500 floor, and they were expanded with material that had been left out rather than by restating the numbers: the deduplication consequence and the direct-transfer asymmetry in #88; the specific-devise and reasonable-certainty limits in #89; the hop-by-hop mechanism by which dates fall off, plus a ninety-second test, in #90; and the data-deletion compliance condition in #91. A second pass then found the counting script was itself stripping fully-bold one-line paragraphs as if they were metadata, so the first numbers were undercounts. The expansions were kept: every one of them is a fact the articles are better for carrying.)*

**Fact density check:** every article carries a dated number, statute citation, case number, dollar figure or named study at least once per short section. #87 runs four company findings with three separate evidence grades; #90 runs four dated examples in 534 words.

**Publish first: #87 on Facebook.** It is the only thing in the bank a competitor cannot copy without first being wrong in public, and it is the article that retires the base-rate line the rest of the fleet has been carrying.
