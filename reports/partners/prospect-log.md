# Partnership Prospector Log
*Channel rotation tracker + every person/firm ever prospected. Never re-prospect the same person.*

## Channel rotation
| Week | Date | Channel | Geography | Count |
|---|---|---|---|---|
| 1 | 2026-08-25 | Estate-planning attorneys | US (TX, FL, CA, NY/NJ) | 21 firms, 14 named principals |
| 2 | 2026-09-01 | Financial advisors / wealth planners | US (GA, FL, TX, PA, NY, OH, CA) | 16 prospects, 8 named principals |
| 3 | 2026-09-08 | Genetic counselors (fertility clinics HELD, see flag) | US (national/telehealth) | 6 named practices + 4 clinics as market map |

Next: week 4 = funeral homes / memorial services (SecuriGene's channel). Fertility clinics were deliberately NOT spent in week 3 (adjacency risk vs the storage-only rail) and sit in a HOLD bucket pending founder call. Rotation candidate for week 5+: employer-benefits platforms (Progyny/Carrot/Maven lane, flagged by Competitor Watch Aug 23).

## Prospected (do not re-contact)
2026-08-25 · estate attorneys: Jim Cunningham (CunninghamLegal, CA) · Portia Wood (Wood Legal Group, CA) · Brad Wiewel (Texas Trust Law, TX) · Pamela Hailey-Petty (Hailey-Petty Law Firm, TX) · Cynthia Hurley + Kimberly Loveland (Loveland & Hurley, TX) · John Mangan (Beacon Legacy Law, FL) · Phillip A. Baumann (BaumannKangas, FL) · Irene de Jesus (Coastal Legacy Law, FL) · Donald Novick (Novick & Associates, NY) · George Bischof (The Wills & Trusts Firm, NYC) · Vlad Portnoy (Law Offices of Vlad Portnoy, NY/NJ) · Gary Winter (Lawvex, CA) · John M. Lane (John M. Lane Law, TX) · Patrick L. Smith (FL) · firms without named principals: Robbins Estate Law (TX), Legacy Protection Lawyers (FL), SJF Law Group (FL), Sandoval Legacy Group (CA), Singh Law Firm (CA), San Diego Legacy Law (CA), Legacy Counselors at Law (CA).

## Prospected (do not re-contact) — week 2
2026-09-01 · financial advisors: Mike Brocker (Legacy Wealth) · Chloé A. Moore (Financial Staples, Atlanta) · Alfredo Botty (ArchPoint, Miami) · George C. McCabe (McCabe & Associates) · Jan Graybill (Legacy Planning Partners) · Garner Mabry IV + Bobby Foster (Legacy Private Wealth Partners) · Keenan Beasley (Factory Holdings) · firms pending principals: Century Management (Austin), Legacy Planning Advisors (Suwanee GA + Arlington VA), Legacy Capital Advisors, Truepoint (Cincinnati), HB Wealth (Atlanta), BakerAvenue (SF), RWA Wealth Partners.

## Prospected (do not re-contact) — week 3
2026-09-08 · genetic counselors: Andy McCarty (Clover Genetics) · Eleanor Griffith (Grey Genetics) · Amy Vance (Bay Area Genetic Counseling) · practice leads TBD at FiND Genetics, InformedDNA, Genome Medical. Market map only, NOT prospected: POPART, Houston Fertility Center, Carolinas Fertility Institute, Pinnacle Fertility.

## Prospected (do not re-contact) — week 4 SUBSTITUTION
2026-09-15 · estate attorneys, NEW GEOGRAPHIES (IL/CO/WA/MN/OR) · named principals: Steven R. Owens (The Legacy Planning Group, Denver CO) · Chris Tymchuck (Unique Estate Law, Minneapolis MN) · Thomas Hackett (NW Legacy Law, Portland OR) · Karn Thapar (Thapar Law, Portland OR). Firms without confirmed principals: Peck Ritchey (Chicago IL), Regas Frezados & Dallas (Chicago IL), Legacy Law Group Colorado (Denver CO), Osterman Law (Denver CO), Ryan Swanson & Cleveland (Seattle WA), Stone Arch Law (Minneapolis MN), Guttman Law (Minneapolis MN), Sandahl & Damhof (Minneapolis MN), LaBerge Legacy Law (Minneapolis MN), Legacy Preservation Law (Portland OR). DEPRIORITISED (outside small/mid profile): Neal Gerber Eisenberg (Chicago IL).
**WEEK 4 FUNERAL-HOME CHANNEL NOT PROSPECTED — GATED.** Competitor Watch's funeral pre-need dive set a hard gate: "FOUNDER CALL required before any outreach; do not prospect this channel in the weekly Prospector until that call is made." No call has occurred. Gate holds; substituted new-geography estate attorneys per the rotation's own "repeat with new geographies" instruction.

## Ops notes
- 2026-09-15: Apollo API_INACCESSIBLE 4th consecutive week (re-tested this run: api/v1/mixed_people/api_search not included in Free plan). TEMPLATE CHANGE: the outreach draft now attributes the accreditations to GenVault explicitly and de-claims "FDA-registered" in the same sentence, because FDA registration conveys no approval or endorsement. **Retrofit this wording into the week 1-3 templates before any of them is sent** — all are still unsent, so it costs nothing now. Standing concern escalated: **78+ prospects across four channel-weeks, zero outreach approved or sent** (was 63+). If approval is not coming, the honest options are pausing this trigger or changing its output to work that does not depend on approval.
- 2026-09-08: Apollo API_INACCESSIBLE 3rd consecutive week (re-tested). NSGC directory deliberately NOT scraped for names (terms + brand risk); recommended path is referrals from the six named practices or conference presence. Standing concern: 63+ prospects queued across 3 channels with zero outreach approved or sent.
- 2026-09-01: Apollo still API_INACCESSIBLE (Free plan; re-verified). Week-2 list from public sources. Gmail down — digest undeliverable, pack in repo + chat only.
- 2026-08-25: Apollo search API inaccessible on Free plan (API_INACCESSIBLE). List built from public web sources with source URLs; no emails/LinkedIn harvested. If plan upgraded, enrich this week's names before starting week 2. Nothing sent to any prospect.
