**Freshness check:** This angle has not been used in the last 7 days. `still usable`, `sample integrity`, `A260`, `spectrophotomet` and `degraded sample` return ZERO fleet-wide. `viability` returns four blog hits and `quality control` two, and **both were read at body level before a word was drafted**: the viability hits are collection-window notes and a living-cells-versus-information distinction, and the quality-control hit is a CLIA record-retention category. **No published article explains how sample integrity is MEASURED.**

**Primary audience:** Men 25-55

**Trend / hook used:** No news peg, and that is declared rather than dressed up. This is a question-shaped topic from our own science watch: the thing every storage customer eventually wants to know and almost no storage company explains.

**Epistemic note, stated up front.** The instrument specifications below come from **manufacturer application notes, a peer-reviewed comparison, and biobank and laboratory guidance**, and **none was opened at its own domain**, because DNS resolution has failed from this machine for twenty-one consecutive days. Treat every threshold as reported rather than verified. **This is not laboratory advice and no number here should be used as an acceptance criterion without validating it for your own workflow.**

# How Do You Know a Stored DNA Sample Is Still Usable?

**You measure three different things, with three different instruments, and the one most people mean by "still usable" is the one a standard quantification cannot tell you at all.** How much DNA is there, how clean is it, and how broken is it are separate questions. A sample can quantify beautifully and be shredded. The honest answer to "is it still good" is that somebody has to spend a little of it to find out, and the useful question for anyone paying for storage is not what the measurements are but **who runs them, how often, and what happens when one comes back poor.**

## Question one: how much is there

**The fast answer comes from a spectrophotometer**, the NanoDrop-style instrument that reads ultraviolet absorbance at 260 nanometres. One or two microlitres, a few seconds, a number.

**Its weakness is that it is not fussy about what it counts.** Free nucleotides, RNA and some contaminants also absorb at 260 nm, so the reading is total absorbance rather than intact double-stranded DNA.

**The fluorometer answers the same question differently, and the gap between them is large.** A Qubit-style instrument uses a dye that binds specifically to double-stranded DNA, so it reports the thing you actually have. **A peer-reviewed comparison in *PLOS ONE* found spectrophotometry-based methods reported mean DNA concentrations three to four times higher than the fluorometric method on the same bacterial extracts.** *(Peer-reviewed. Via search index.)*

**One nuance worth carrying, because the simple version is wrong.** New England Biolabs' own technical note says that **in general, fluorescence measurements are not more accurate or reproducible, but that for dilute samples they give more reproducible results.** *(Manufacturer technical note, via search index.)* **So "the fluorometer is more accurate" is not quite right. It is more specific about what it counts, which matters most when there is little to count.**

## Question two: how clean is it

**Purity is read off ratios of absorbance at different wavelengths, and there are two.**

**A260/A280 catches protein and phenol.** The working target for DNA is around **1.8**, and NEB puts pure double-stranded DNA in buffered solution at **1.85 to 1.88**. Considerably lower suggests protein or phenol; noticeably above 2 suggests RNA carryover.

**A260/A230 catches the other contamination family**: organic solvents, guanidine salts, carbohydrates, EDTA. The usual target is **2.0 to 2.2**, with values below about 1.8 treated as a warning. **Promega publishes a more lenient guideline of greater than 1.5**, which is a reminder that these are not universal constants: **they are thresholds different laboratories set differently.**

**And purity is not integrity.** A perfectly clean sample can be perfectly broken.

## Question three, the one that actually answers the question

**Fragment length is measured by electrophoresis**, and on an automated system it produces a single score: **the DNA Integrity Number, or DIN.**

**DIN runs on a scale of 1 to 10. High means intact. Low means strongly degraded.** Agilent says the score comes from an algorithm built on the analysis of roughly **7,000 different genomic DNA samples**. *(Manufacturer application note, via search index.)* **We could not find a public description of the formula**, which is worth knowing before anyone treats a DIN as an objective physical constant.

**Reported thresholds, and they vary by what you intend to do with the sample.** One source treats **DIN of 7 or higher** as high-quality genomic DNA with minimal degradation, and another study used **DIN 7** as its quality-control cutoff. **An FFPE sequencing study set its threshold at DIN greater than 3**, after low-DIN samples produced poor on-target rates.

**There is also a floor below which the score simply is not produced: no DIN is determined below about 3 nanograms per microlitre**, with one source giving a functional range of roughly **5 to 300 ng/µL.** **So an extremely depleted sample does not get a bad integrity score. It gets no integrity score**, which is a different and more awkward result.

## The three things nobody tells you

**One: testing consumes the sample.** Every microlitre spent on quality control is a microlitre that no longer exists. **"Just test it every year" is advice with a cost attached**, and for a small archival sample that cost is not trivial. A custodian who tests constantly and a custodian who never tests are both making a trade, and only one of them is likely to tell you so.

**Two: you cannot run any of this yourself.** These are laboratory instruments. **The practical consequence is that for a consumer, sample integrity is not something you verify. It is something you take on trust from somebody who can verify it**, which makes the custodian's testing policy more important than any single number.

**Three: thresholds are decisions, not facts.** DIN 7 and DIN 3 are both defensible cutoffs for different purposes. A260/A230 above 2.0 and above 1.5 are both published. **A laboratory that tells you a sample "passed" without telling you the threshold has told you almost nothing.** That pattern is the same one we took apart in [what biobank accreditation actually proves](/blog/biobank-accreditation-explained): a standard certifies process, and the acceptance criteria are still somebody's choice.

## What to actually ask a storage provider

**Four questions, in this order.**

**Do you test stored samples after intake, or only at intake?** Intake-only is a legitimate model, particularly for dry-state storage where there is little expected to change. It is also a very different product from periodic re-testing, and you should know which you bought.

**If you re-test, on what interval, and how much sample does it consume?**

**What are your acceptance thresholds, by number?** Not "we verify quality". A number, and what it is measured with.

**What happens if a sample falls below them?** This is the one that separates real answers from marketing. **Is there a notification? A re-collection? A refund? Nothing?** A provider who has never thought about a failing result has told you how likely they think it is, which is not the same as how likely it is.

## Where MySpawn sits, including what we cannot answer

**We store a physical DNA record from hair and nail clippings at GenVault in New Jersey, an independent facility that is ISO 9001 and ISO 20387 certified, CAP accredited and FDA-registered, at ambient temperature, for $99 a year, billed annually**, with the first 1,000 members locking the founding rate. We run no test, generate no result and offer no cloning, gene editing or any service that creates a descendant.

**And here is the part that costs us something to publish: we do not currently have a published re-testing schedule or published acceptance thresholds for stored member samples.** **Four of the questions in the section above are questions we would have to answer by asking our own storage partner, and we have not published those answers.** **Until we do, the honest position is that a customer cannot verify our sample integrity any more than they can verify anyone else's, and anybody telling you otherwise about any provider in this category is overstating what a certificate proves.**

**What we can say precisely is what the storage model is**, which is the thing that determines how much any of this matters. **A dry, ambient-temperature record is a different preservation problem from living cells in liquid nitrogen**, and we explain what actually degrades DNA over time, and what does not, in [how long DNA lasts](/blog/how-long-does-dna-last). **If you want the shortest version: what you store and how you collect it constrains the ceiling long before storage does**, which is the argument in [which DNA sample type is best](/blog/best-dna-sample-type).

## FAQ

### Can I test my own stored DNA sample?

Not practically. Quantification, purity ratios and integrity scoring all require laboratory instruments, and integrity scoring in particular needs an electrophoresis system. The realistic path is asking your custodian what they measure and what their thresholds are.

### Does a high DNA concentration mean the sample is good?

No, and this is the most common confusion in the subject. Concentration answers how much, not how intact. A sample can read high on a spectrophotometer, partly because that instrument also counts RNA, free nucleotides and some contaminants, and still be heavily fragmented.

### What is a good A260/A280 ratio for DNA?

Around 1.8 is the usual target, with pure double-stranded DNA in buffered solution reported at roughly 1.85 to 1.88. Much lower suggests protein or phenol contamination; noticeably above 2 suggests RNA. Treat it as a purity check and not as an integrity check.

### What DIN score counts as acceptable?

It depends entirely on the intended use. Scores of 7 or higher are commonly treated as high-quality genomic DNA, while one FFPE sequencing study set its usable threshold at above 3. There is no single universal pass mark, which is why a laboratory should state the number it used.

### How often should a stored sample be re-tested?

There is no settled answer, and the honest trade-off is that every test consumes some of the sample. Ask a provider what interval they use and how much material each test costs, because a provider that re-tests frequently is spending your sample to reassure you.

**If you are choosing a storage provider this month, skip the brochure and ask the four questions above. Then ask them of us.** [MySpawn is $99 a year, billed annually](https://myspawn.me), and the first 1,000 members lock the founding rate.

## SEO PACKAGE

- **Title tag:** How Do You Know a Stored DNA Sample Is Still Usable?
- **Meta description:** Three measurements, three instruments, and the one most people mean by "still usable" is the one quantification cannot answer. What to ask a provider.
- **URL slug:** `is-stored-dna-still-usable`
- **Primary keyword:** how to tell if a DNA sample is still good
- **Secondary keywords:** DNA integrity number DIN · A260/A280 ratio DNA · Qubit vs NanoDrop DNA · how to test DNA sample quality · degraded DNA sample · DNA storage quality control
- **Internal links:** [biobank-accreditation-explained](/blog/biobank-accreditation-explained) · [how-long-does-dna-last](/blog/how-long-does-dna-last) · [best-dna-sample-type](/blog/best-dna-sample-type)

### FAQPage JSON-LD

```json
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Can I test my own stored DNA sample?","acceptedAnswer":{"@type":"Answer","text":"Not practically. Quantification, purity ratios and integrity scoring all require laboratory instruments, and integrity scoring needs an electrophoresis system. The realistic path is to ask your custodian what they measure and what thresholds they apply."}},
{"@type":"Question","name":"Does a high DNA concentration mean the sample is good?","acceptedAnswer":{"@type":"Answer","text":"No. Concentration answers how much, not how intact. A sample can read high on a spectrophotometer, which also counts RNA, free nucleotides and some contaminants, and still be heavily fragmented."}},
{"@type":"Question","name":"What is a good A260/A280 ratio for DNA?","acceptedAnswer":{"@type":"Answer","text":"Around 1.8 is the usual target, with pure double-stranded DNA in buffered solution reported at roughly 1.85 to 1.88. Much lower suggests protein or phenol; noticeably above 2 suggests RNA carryover. It is a purity check, not an integrity check."}},
{"@type":"Question","name":"What DIN score counts as acceptable?","acceptedAnswer":{"@type":"Answer","text":"It depends on intended use. A DIN of 7 or higher is commonly treated as high-quality genomic DNA, while one FFPE sequencing study set its usable threshold above 3. There is no universal pass mark, so a laboratory should state the number it used."}},
{"@type":"Question","name":"How often should a stored sample be re-tested?","acceptedAnswer":{"@type":"Answer","text":"There is no settled answer, and every test consumes some of the sample. Ask a provider what interval they use and how much material each test costs, because frequent re-testing spends your sample to reassure you."}}
]}
```

## SOURCES

1. **Spectrophotometric versus fluorometric quantification**, including the finding that spectrophotometry-based methods reported mean DNA concentrations three to four times higher than Qubit on the same extracts. ***PLOS ONE*, comparison of DeNovix, NanoDrop and Qubit.** **Grade: PEER-REVIEWED. Via search index; not opened at its own domain.**
2. **New England Biolabs technical note on analysing nucleic acid concentration and purity**: A260/A280 of 1.85 to 1.88 for pure dsDNA in buffered solution, and the statement that fluorescence measurements are **not** in general more accurate or reproducible but are more reproducible for dilute samples. **Grade: manufacturer technical note. Via search index.** **This source is included specifically because it CONTRADICTS the simpler claim that fluorometry is more accurate, and the article carries the contradiction rather than the simpler version.**
3. **A260/A230 targets of 2.0 to 2.2, with contamination indicated below about 1.8**, and **Promega's more lenient guideline of greater than 1.5.** **Grade: manufacturer and vendor guidance. Via search index.** **The disagreement between the two is reported in the article as evidence that thresholds are decisions rather than constants.**
4. **DNA Integrity Number**: 1 to 10 scale, high meaning intact, derived from an algorithm built on roughly 7,000 genomic DNA samples; **no public description of the formula was found and the article says so.** **Agilent application notes on the Genomic DNA ScreenTape assay. Grade: manufacturer application note. Via search index.**
5. **DIN thresholds**: 7 or higher treated as high-quality in one source and used as a QC cutoff in a study; **greater than 3 set as the threshold in an FFPE sequencing study after low-DIN samples showed poor on-target rates**; **no DIN determined below about 3 ng/µL, with a functional range reported as roughly 5 to 300 ng/µL.** **Grade: manufacturer notes and secondary study summaries. Via search index.**
6. **Biobank DNA quality guidance** (CTRNet, "Assessing Quality of DNA") surfaced in the same search and is noted as corroborating the three-measurement structure. **Grade: institutional guidance document. NOT opened, and no figure in this article rests on it alone.**
