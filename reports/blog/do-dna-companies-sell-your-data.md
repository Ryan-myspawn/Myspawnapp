**Freshness check:** heading-checked against the archive before a word was written, per the standing rule. `genetic-privacy-laws` covers GINA, HIPAA and the state-law landscape; `what-happens-dna-company-shuts-down` covers bankruptcy; `data-ownership-after-acquisition` covers a change of corporate owner; `who-owns-your-dna-after-you-die` (yesterday) covers death. **A grep for "data broker" across all thirty-two published articles returns zero hits.** The routine, lawful, everyday movement of genetic data to third parties has never been our subject. Gap confirmed rather than assumed.
**Primary audience:** Men 25-55.
**Trend-hook used:** the 2026 state legislative wave on genetic privacy, including a Connecticut act whose genetic provisions take effect on 1 October 2026, two days from publication.

---

# Do DNA Testing Companies Sell Your Data to Brokers?

**Most consumer DNA companies do not sell your genetic data, and that sentence is true, narrow, and much less protective than it sounds.** "Sell" is a specific commercial act, and companies avoid it carefully. Genetic data still moves: through research licensing deals, through corporate transactions, through de-identified datasets, and through the ordinary non-genetic information attached to your account, which genuinely can reach data brokers. The right question is not "do you sell my DNA." It is **"list every way my data can leave, and tell me which ones need my separate permission."** As of 2026, thirteen states make at least part of that answer legally enforceable.

## The word "sell" is doing more work than you think

When a company writes "we do not sell your genetic data," it is usually telling the truth under the definition it is using. Most privacy statutes define a sale as an exchange of personal information for money or other valuable consideration. Companies build their data flows to sit outside that definition.

What sits outside it is not small. **A research collaboration in which a pharmaceutical company pays for access to a genomic database is not structured as a sale of your data. A merger in which an entire company changes hands is not a sale of your data. A de-identified aggregate dataset licensed to a research institution is not, in most framings, your data at all.**

None of those is sinister. Research partnerships between drug developers and direct-to-consumer genetic testing companies are a real and long-standing feature of the industry, and many of them have produced legitimate science. The problem is not that the movement happens. **The problem is that a customer asking one question in plain English gets a truthful answer to a different question**, and walks away believing something that is not the case.

## Four doors, and only one of them is the one people worry about

### 1. Research partnerships and licensing

This is the largest and most deliberate channel. Companies build consent flows that ask whether you want to participate in research, and participation typically means your de-identified data can be included in datasets that commercial partners pay to access. **This is usually opt-in, it is usually disclosed, and it is usually buried.** If you have ever clicked through an onboarding flow quickly, you may be in it.

### 2. Corporate transactions

Your data follows the company. We walked the full sequence in [what happens when a DNA company shuts down](/blog/what-happens-dna-company-shuts-down): 23andMe filed for Chapter 11 in March 2025, its database of roughly 15 million customers became an asset of the bankruptcy estate, and the assets sold in July 2025 for about $305 million to TTAM Research Institute, a nonprofit led by the company's co-founder. A multistate action by state attorneys general followed, and in July 2026 the bankruptcy court approved a $46.75 million distribution to breach claimants.

**A sale of the company is not a sale of your data, and the distinction protects nobody.** The practical outcome is identical: a different organization now holds it, under terms you did not negotiate. [Our article on data ownership after an acquisition](/blog/data-ownership-after-acquisition) covers the clause that decides this.

### 3. De-identified and aggregated data

Removing your name is not the same as making data anonymous. **A genome is identifying by construction.** It is the most durable identifier a person has, it is shared in predictable proportions with relatives who never consented to anything, and re-identification research has repeatedly shown that combining a genetic dataset with public genealogical records can narrow a "de-identified" record to a small number of candidate people. This is not a claim that any particular company has been re-identified. It is a claim that **"de-identified" is a procedural label, not a physical property of the data.**

### 4. Everything about you that is not your DNA

This is the door nobody asks about and the one that most resembles what people picture when they say "data broker." Your email address, your purchase history, your device identifiers, your browsing on the company's site, the fact that you bought a genetic test at all: that material is ordinary consumer data. It is subject to ordinary consumer-data practices, and it can move through the ordinary advertising and data-broker ecosystem, depending on the company and the jurisdiction.

**The inference is the payload.** "This person purchased a hereditary cancer risk test" is a commercially interesting fact about someone even if not a single base pair ever leaves the building.

## What the newer state laws actually changed

Since 2020 more than a dozen states have passed laws aimed specifically at direct-to-consumer genetic testing, and **as of 2026, thirteen states regulate the DTC market directly**. Montana, Tennessee, Texas and Virginia added DTC-specific genetic privacy laws in the 2023 to 2024 window, and the early-2026 session produced a fresh wave of bills.

The provision that matters most to this article is unglamorous and powerful: **several of these statutes require separate express consent for each transfer or disclosure of genetic data to a third party**, on top of the initial consent to be tested at all. That converts a single blanket agreement at signup into a series of specific, refusable decisions.

Two 2025 and 2026 developments are worth knowing by name. **Montana's Senate Bill 163 (2025)** revises the state's Genetic Information Privacy Act to widen its scope, and reportedly prohibits bulk genetic data transactions that would result in access by a country of concern. **Connecticut Public Act 26-64**, signed 27 May 2026, has genetic provisions taking effect **1 October 2026**, with further phases in January and July 2027. **South Dakota Senate Bill 49** was signed in March 2026 and took effect on 1 July 2026.

**Epistemic note, stated because this article is about not being misled: every statutory detail in this section comes from legal-industry summaries and trackers retrieved through a search index rather than from the statutory text, which was unreachable from our network at the time of writing. Section numbers and dates are reported as summarized. Before relying on any of them for a decision, read the statute or ask a lawyer in your state.**

## Where the protection stops, and it stops in three places

**It stops at your state line.** The same tube of saliva has meaningfully different legal armor in Montana than in a state with no DTC-specific statute. Federal law does not fill the gap: GINA covers health insurance and employment discrimination and nothing else, and HIPAA generally does not reach a consumer genetics company at all, because it is usually not a covered entity.

**It stops at consent you already gave.** A separate-consent requirement is prospective. It does not retroactively unwind a research authorization you clicked through in 2019.

**It stops at the difference between data and the sample.** Deleting an account deletes records. Whether the physical specimen is destroyed is a separate operational question with a separate answer, and it is the question fewest people ask. [Our genetic privacy law guide](/blog/genetic-privacy-laws) covers that distinction in detail.

## What to check before you hand anyone a sample

1. **Ask for the list, not the reassurance.** "Do you sell my data" invites a one-word answer. "Name every category of third party that can receive my genetic data, and the legal basis for each" does not.
2. **Find the research-participation setting and look at its current state.** Not what you remember choosing.
3. **Ask what happens to the physical sample on deletion**, in writing, separately from the data question.
4. **Read the change-of-control clause.** It is usually one sentence and it usually says your data transfers with the business.
5. **Check whether your state has a DTC-specific genetic privacy law**, because it determines whether any of the above is enforceable or merely polite.

## Where MySpawn sits in this

We are a storage service, and our answer to the broker question is structural rather than promissory: **there is no research dataset to license, because we do not analyze, sequence, interpret or score anything.** We store a preserved biological sample at GenVault in New Jersey, a CAP-accredited, ISO 9001 and ISO 20387 certified, FDA-registered biorepository, at ambient temperature. **FDA registration is a listing requirement and conveys no FDA approval or endorsement.** Storage is $99 a year, billed annually; the first 1,000 members lock the founding rate. **Storage confers no health benefit, produces no result, and tells you nothing about yourself.** That is the whole product, and it is also why the commercial incentive that creates genetic data flows does not exist here.

## FAQ

### Do DNA testing companies sell your genetic data?
Most say they do not, and under the legal definition of "sale" that is generally accurate. Genetic data can still move through research licensing, corporate transactions and de-identified datasets, none of which is usually structured as a sale. Non-genetic data attached to your account can reach conventional data brokers.

### Can a data broker buy my actual genome?
There is no ordinary retail market where a broker buys an individual's genome from a consumer testing company. The realistic exposures are aggregate research datasets, a change of corporate ownership, and inferences drawn from the non-genetic fact that you bought a genetic test.

### Does deleting my account delete my DNA sample?
Not necessarily. Data deletion and physical sample destruction are separate processes with separate policies. Ask about the sample explicitly and get the answer in writing.

### Which states protect genetic data best?
As of 2026, thirteen states regulate direct-to-consumer genetic testing specifically, with California and Illinois among the strictest; Illinois is notable for allowing individuals to sue directly. Protection depends heavily on where you live.

### Does HIPAA stop a DNA company from sharing my data?
Usually not. Most direct-to-consumer genetic companies are not HIPAA-covered entities, so the rule that governs your doctor's office does not govern them.

### If I never opted into research, is my data safe?
Safer, not safe. Declining research participation closes the largest deliberate channel. It does not affect what happens if the company is sold, and it does not affect ordinary account data.

---

**Considering long-term storage instead of testing?** MySpawn keeps a preserved DNA sample at an accredited New Jersey biorepository for $99 a year, billed annually, with no analysis, no scoring and no research dataset attached to it. The first 1,000 members lock the founding rate.

---

## SEO package

- **Title tag (57):** Do DNA Testing Companies Sell Your Data to Brokers?
- **Meta description (152):** Most DNA companies truthfully say they do not sell your data. Here are the four doors your genetic data can still move through, and what 2026 law changed.
- **URL slug:** `do-dna-companies-sell-your-data`
- **Primary keyword:** do dna testing companies sell your data
- **Secondary keywords:** genetic data brokers · can data brokers buy dna data · dna testing privacy 2026 · who can access my genetic data · state genetic privacy laws 2026 · does deleting my dna account destroy my sample
- **Internal links:** `/blog/what-happens-dna-company-shuts-down` · `/blog/data-ownership-after-acquisition` · `/blog/genetic-privacy-laws` · `/blog/who-owns-your-dna-after-you-die`

```json
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Do DNA testing companies sell your genetic data?","acceptedAnswer":{"@type":"Answer","text":"Most say they do not, and under the legal definition of a sale that is generally accurate. Genetic data can still move through research licensing, corporate transactions and de-identified datasets, none of which is usually structured as a sale. Non-genetic data attached to your account can reach conventional data brokers."}},
{"@type":"Question","name":"Can a data broker buy my actual genome?","acceptedAnswer":{"@type":"Answer","text":"There is no ordinary retail market where a broker buys an individual genome from a consumer testing company. The realistic exposures are aggregate research datasets, a change of corporate ownership, and inferences drawn from the non-genetic fact that you bought a genetic test."}},
{"@type":"Question","name":"Does deleting my account delete my DNA sample?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. Data deletion and physical sample destruction are separate processes with separate policies. Ask about the sample explicitly and get the answer in writing."}},
{"@type":"Question","name":"Which states protect genetic data best?","acceptedAnswer":{"@type":"Answer","text":"As of 2026, thirteen states regulate direct-to-consumer genetic testing specifically, with California and Illinois among the strictest. Illinois is notable for allowing individuals to sue directly. Protection depends heavily on where you live."}},
{"@type":"Question","name":"Does HIPAA stop a DNA company from sharing my data?","acceptedAnswer":{"@type":"Answer","text":"Usually not. Most direct-to-consumer genetic companies are not HIPAA-covered entities, so the rule that governs a doctor's office does not govern them."}},
{"@type":"Question","name":"If I never opted into research, is my data safe?","acceptedAnswer":{"@type":"Answer","text":"Safer, not safe. Declining research participation closes the largest deliberate channel, but it does not affect what happens if the company is sold, and it does not affect ordinary account data."}}]}
```

## Sources and epistemic labels

**A BLANKET LABEL APPLIES TO THIS ARTICLE AND IT IS UNUSUAL ENOUGH TO STATE FIRST: no source below was opened at its own domain.** General-web fetching was blocked from our network on the day of writing, for the second consecutive day, so every external fact here comes from **search-index summaries of the sources named**. Nothing is quoted. Statutory details are reported as summarized rather than as read, and the article says so in body copy as well as here.

1. **Future of Privacy Forum**, on Montana, Tennessee, Texas and Virginia genetic privacy laws. https://fpf.org/blog/the-dna-of-genetic-privacy-legislation-montana-tennessee-texas-and-virginia-enter-2024-with-new-genetic-privacy-laws-incorporating-fpfs-best-practices/ **LABEL: policy-organization analysis. Index-level.**
2. **Troutman Pepper Locke, "Trends in State and Federal Regulation of Consumer Genetic Testing".** https://www.troutman.com/insights/locke-lord-quickstudy-trends-in-state-and-federal-regulation-of-consumer-genetic-testing/ **LABEL: law-firm client note. Index-level.**
3. **Covington, Inside Privacy, "Several States Introduce New Genetic Privacy Bills in Early 2026".** https://www.insideprivacy.com/health-privacy/several-states-introduce-new-genetic-privacy-bills-in-early-2026/ **LABEL: law-firm tracker. Index-level.**
4. **Orrick, "Navigating Privacy Gaps and New Legal Requirements for Companies Processing Genetic Data".** https://www.orrick.com/en/Insights/2025/08/Navigating-Privacy-Gaps-and-New-Legal-Requirements-for-Companies-Processing-Genetic-Data **LABEL: law-firm client note. Index-level.**
5. **Hunton, on South Dakota's Genetic Data Privacy Act.** https://www.hunton.com/privacy-and-cybersecurity-law-blog/south-dakota-enacts-genetic-data-privacy-act **LABEL: law-firm blog. Index-level. This domain was attempted directly and refused by our egress proxy.**
6. **Consumer Reports, on direct-to-consumer genetic testing privacy.** https://www.consumerreports.org/health/dna-test-kits/privacy-and-direct-to-consumer-genetic-testing-dna-test-kits-a1187212155/ **LABEL: consumer-advocacy reporting. Index-level.**
7. **Our own published work**, for the 23andMe timeline and figures, which were verified when those articles were written: [what happens when a DNA company shuts down](/blog/what-happens-dna-company-shuts-down) and [genetic privacy laws](/blog/genetic-privacy-laws). **LABEL: internal, previously verified.**
8. **Connecticut Public Act 26-64**, signed 27 May 2026, genetic provisions effective 1 October 2026. **LABEL: from our own legislative tracking. Index-level; the act text was not read.**

**This article is not legal advice.**
