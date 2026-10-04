# Image Ad Creative: 2026-10-04

**Lane status: LIVE, rung (a), top of the ladder.** Egress self-test to `images.unsplash.com` returned **200**. The Unsplash MCP search returned results on every query. Nothing in this run was blocked by infrastructure.

**Volume: 1 concept, 2 creatives (square + vertical), against a target of 10.** The honest accounting is in the last section and it is not flattering.

---

## SHIPPED

### Ad_EverythingInItIsFine_178 (+ _9x16)

- **Headline:** Everything in it is fine. Nobody can reach it.
- **Support:** In many states the box closes when the renter dies, and the will a court needs to open it is often inside. $99 a year.
- **Photo:** Unsplash `nWRDOgD5KEc`, "a view of a city through a chain link fence", Justin Zhu (@justinabox), 4288x2848, source color #f3f3f3.
- **Raw URL stored in both masters:** `https://images.unsplash.com/photo-1700463108327-2e87ee0c3a91`
- **Square crop:** source region (1250,560) to (3250,2560), 2000x2000, scaled 0.54 to the 1080 canvas: `width:2316px;height:1538px;left:-675px;top:-302px`.
- **Vertical:** full-bleed at scale 0.70, `width:3002px;height:1994px;left:-1120px;top:-200px`. **Re-composed, not cropped from the square.**
- **Filter: `brightness(0.58) contrast(1.14) saturate(0)`.** This is the **inverse** of the standard chain and the reason is in the source: the standard `brightness(1.18)` exists to open up dark originals, and this original is a bright overcast grayscale at #f3f3f3. A first render at `brightness(0.46) contrast(1.22)` was read back and **rejected for crushing the rooftops into the fence**, which kills the "everything in it is fine" half of the argument. 0.58 was chosen by looking at the second render, not by arithmetic.
- **Exports:** 2160x2160 at 351KB and 2160x3840 at 555KB, both q92, both far under the 950KB mirror budget. **No PNG is committed under `assets/ads/`.**

**WHY THIS IMAGE CARRIES THIS ARGUMENT.** The brief's own statement of principle was that "a lock hides the contents, and this ad is about contents that are demonstrably intact." A fence satisfies that literally: the town behind it is whole, lit, occupied and completely legible, and there is a barrier between the viewer and all of it. Nothing is damaged. Nothing is hidden. Nothing is reachable.

---

## THE BRIEFED OBJECT WAS KILLED, AND WHAT REPLACED IT

**The commissioned visual direction was "a sealed glass jar on a dark surface, photographed close in low light."** It was followed to the point of downloading and inspecting the best candidate Unsplash has, and then it was killed on three grounds, two of which are the brief's own binding rules.

**The candidate: `YRXMgQytB_0`, Tymek Niciak (@niciak), 4672x7008, #260c0c, created 18 September 2026.** A ribbed glass jar of colored paper scraps on black velvet with an Alocasia plant and berries behind it. Downloaded at full resolution. **The contents inspected at full resolution are clean: the paper scraps carry no print, no text and no marks of any kind.** The signage check passed. The photograph is beautiful.

**It was killed anyway.**

1. **THE ARTWORK REFUTES THE HEADLINE.** The jar has a lift-off domed lid with a knob. The headline says nobody can reach it. Anyone looking at the picture can see exactly how to reach it, in one motion, with one hand. This is worse than a collision with a prior ad: a prior ad costs us freshness, and this costs us the argument.
2. **"Non-consumer subject" was binding and this is a consumer subject.** A decorative sweet jar styled with a houseplant, artificial berries and a blue ceramic pot is a home-decor still life.
3. **"Photographed close" cannot be satisfied without destroying the subject the brief named.** The scene is wide and prop-heavy. The only crop that removes the plant and the pot also removes the lid, and the brief says the subject is the seal.

**FOUR MORE JARS WERE SEARCHED AND NONE OF THEM FIXED IT.** `EDhbbmXbybQ` has a person in frame and is rejected on sight under the no-identifiable-faces rule for paid creative. `MlOOd7FApg0` is two jars on a windowsill, which is the window family of Ad_OneStillLit_119, the same collision that killed a photo on 30 September. `YpEkbC_e-J0` is a jar of flowers, which is a vase, and a vase on a table is the nearest thing in frame to Ad_SameAgeLowerNumber_146's carafe at fourteen days. `JedUU-_hcGM` is explicitly a **product mockup uploaded by an account called Mockup Free**, which is the 25 September structural finding arriving in its purest form. Two further queries, one for a clamped bail-wire jar and one for a wax seal, returned a praying-mantis pin, a weathered temple door, a wine-bottle product shot and a statue holding a chalice.

**THE CONCLUSION IS ABOUT SUPPLY, NOT LUCK. Unsplash's jar inventory is kitchenware and decor, because jars are photographed by the people who sell them or style them.** That is the 25 September finding, and the jar brief walked into it.

**THE SUBSTITUTION IS NOT A NEW LIBERTY. It is the 2 October precedent, applied for the second time in three days.** Ad_SameTwoWordsDifferentDeal_177 was briefed as "two identical printed forms" and shipped as industrial valve gear, with the reasoning recorded in the log: **the idea was kept and the object was replaced.** Today the idea is kept ("intact, visible, unreachable") and the object is replaced for cause, with the cause stated above.

---

## WHAT WAS GREPPED, AND THE TWO FAMILIES IT KILLED BEFORE A BYTE WAS DOWNLOADED

**Three logs, one grep**, run against `image-concepts-log.md`, `longpost-log.md` and `weekly/production-log.md`.

| Term | Hits | What it meant |
|---|---|---|
| jar, glass jar, sealed jar, specimen jar, preserve jar, resin | **0 everywhere** | The brief's own clearance, confirmed independently |
| glass | 4 (image log) | Read in full: Ad_TheyBuiltTheLabs_48 (architecture), **Ad_TwoDishes_114 at 24 days**, Ad_CustodyNotAccess_137 (door family), **Ad_SameAgeLowerNumber_146 at 14 days** |
| vessel / seal / amber | 1 / 6 / 3 | The three "amber" hits are all the color token, not the fossil resin |
| **fence, grille, grate, cage, netting, perimeter** | **0 across all three logs** | **The family that shipped. It has never been used.** |
| chain link | 1 | **Ad_SurvivingIsNotImproving_156 (26 September), and the object is iron chain LINKS, not fencing.** Disclosed below rather than treated as clean, because the words collide even though the objects do not |
| ice, frozen, freeze | several | **This is the one that mattered. See below.** |

**THE GREP KILLED THE BEST SUBSTITUTE IDEA I HAD, AND IT DESERVES TO BE RECORDED AS A SAVE.** Before the fence, the intended replacement object was **something frozen inside clear ice**: visibly intact, plainly unreachable, non-consumer, no brand marks, no faces. It died twice in the same grep.

1. **Ad_ColdIsNotTheOnlyWay_157 shipped an ice photograph on 25 September, nine days ago**, inside any window we use.
2. **Far worse: it would have argued against our own product.** Longpost #49 (7 September) and the 6 September explainer are both titled around the fact that **we deliberately do not freeze DNA**, and Ad_157 exists specifically to make the ambient-versus-frozen case. An ad using ice as our metaphor for safekeeping would have contradicted a published position we have defended twice.

**That second objection is not a repetition rule. It is a brand-argument rule, and the grep is the only reason it surfaced before an image was chosen rather than after one was built.**

---

## ADJACENCIES DISCLOSED

1. **Ad_SurvivingIsNotImproving_156 (26 September, 8 days), heavy rusted iron chain links.** Same noun, different object: a chain is a tensile element shot as texture, a chain-link fence is a boundary shot as a screen you look through. Disclosed because "chain" greps to both and a future run should see that this was weighed rather than missed.
2. **Ad_CustodyNotAccess_137 (18 September, 16 days), "Custody is not access", a locked metal and glass door.** This is the nearer collision and it is on **argument**, not image. 137 says a company holds your thing and will not hand it over. **178 says the thing is yours, it is intact, and the legal instrument that opens it is locked inside it.** Different actor, different failure, and sixteen days apart.
3. **Ad_DepositBox_55 (27 August), the brief's named collapse test. PASSES, and not narrowly.** 55 is a grid graphic of safe deposit boxes arguing you LACK a vault. **178 contains no boxes, no grid of boxes, no numbered compartments and no vault.** A chain-link mesh is a diamond lattice, which is noted here explicitly so that nobody later reads "grid" in this file and assumes the test was fudged.
4. **The dark-industrial-hardware cooldown runs to 9 October and this ad is inside the window on metal.** It is argued to be outside the family: Ad_172 was cable bundles on an equipment rack and Ad_177 was valve gear in an engine room, both **machinery**. A fence is **boundary architecture**, shot in daylight, with no mechanism in frame. **A fence must not be shot as machinery was the same instruction the brief gave about the jar, and it is honored.** If a future run disagrees, the disagreement should be recorded rather than this entry being quietly reused as precedent.

---

## RISKS ACCEPTED, NAMED RATHER THAN HIDDEN

**THE SETTING IS NOT AMERICAN.** The tiled roofs and the hillside read as East or Southeast Asia. **The product is USA-only, and on 27 September this operation killed a photograph (`cPVj7QlcKyM`) partly because "km/h marks it non-US."** That precedent is cited against this ad deliberately. Two things separate them and neither is a reason to ignore the objection. A dashboard reading km/h is a **measurement standard**, which contradicts the product's jurisdiction directly; a roofline is **scenery**, and the ad makes no claim about where the reader lives. The crop was chosen at the mid-field rooftops and away from the most locally specific structures, and heavy darkening compresses the distance further. **This is a weighed acceptance, not a clearance. If a persona bench or the founder reads the location first, the ad should be pulled.**

**THE FEAR RAIL.** A chain-link fence can read as detention. **There is no razor wire, no barbed top, no institutional building and no person in frame**, the light is flat daylight rather than night, and what is behind the fence is an ordinary town with the lights on. The register is separation, not menace. The 14 September tone kill (`T0FXa1jSrSk`, a derelict corridor reading as threat) is the standard this was checked against.

**THE VERTICAL UPSCALES.** At scale 0.70 the 2160px export draws on roughly 1543 source pixels, about 1.4x. The native file is 4288px, well clear of the 2610px-is-thin warning recorded yesterday, the background is defocused in the original, and the lower half sits under the gradient. Acceptable, and recorded so it is not rediscovered as a defect.

---

## CLAIMS RAIL

| Claim in the creative | Status |
|---|---|
| "In many states the box closes when the renter dies" | **Previously verified, carried from the 3 October brief unchanged.** Stated as "in many states", not as universal, and **no state is named and no statute is cited in the artwork.** |
| "the will a court needs to open it is often inside" | **Previously verified, and the wording was tightened for this creative.** The brief's body says the court paper "is produced from the will, which is frequently inside". A first draft of the support line compressed this to "the paper that opens it is inside", **which is false**: the will is inside, and the court order is produced from the will. Rewritten before render. |
| "$99 a year" | **Correct and annual.** |
| Any company, platform, bank or competitor | **None named anywhere in either creative.** |
| Any descendant, cloning, editing or IVG implication | **None. The ad is about a document in a box.** |

**PRICING-PHRASE CHECK.** `grep -oin` for "once", "one-time", "no subscription" and "no annual fee" was run **against the two shipped HTML masters only**, which are the deliverable. **Zero hits.** The scope is stated this way on purpose: a row that tries to tally the banned words across the whole file keeps changing its own tally by being written, and that error has been made here before.

---

## PERSONA BENCH

| Persona | Verdict | Reading |
|---|---|---|
| 38, father and provider | **PASS** | Owns the problem directly. He has a box, he has a will, and the sentence "the will a court needs to open it is often inside" is the kind of procedural trap he assumes somebody has already thought about. |
| 29, undecided optimizer | **FAIL, carried unchanged** | **He has no safe deposit box and no executor.** This is the standing failure the static-ad lane has carried since the concept was written and it is not newly introduced by the image. Recorded as a known 2 of 3, not re-litigated. |
| 50, estate planner | **PASS** | This is his objection to boxes, stated back to him. The "in many states" hedge is what keeps him from dismissing it. |

**2 of 3. Ships.** The failing persona is failing on the **concept**, which was commissioned and approved on 3 October, not on today's photograph.

**Right of publicity: no people in frame, verified at full resolution across three zones.** **Brand marks, signage and legible text: none, verified at full resolution across three zones** (lower left, mid field, right field).

---

## VOLUME, HONESTLY

**One concept and two creatives against a target of ten.**

- **Yesterday shipped zero.** Today is not a recovery to target, it is a recovery to one.
- **The backlog-vertical fallback is still unavailable.** 72 of 167 committed HTML masters point at local `src_*.jpg` files that no longer exist, so **43 percent of the archive cannot be re-rendered**, and the un-renderable set is identical to the missing-vertical set because all 95 remote-URL masters already have verticals.
- **The structural cause has not changed and has now cost two consecutive days.** A single commissioned object per day, searched the same day, against a seven-day repetition window and roughly one usable photograph per query, produces zero or one. **The sourcing-only run is at its EIGHTEENTH asking.** It is the fix for exactly this failure and it has never been run.
- **What saved today was not search luck. It was the grep**, which produced a family with zero prior use in any of the three logs, and the 2 October precedent that permits replacing a briefed object while keeping its argument. **Both of those are process, and both are cheap. Neither of them gets us to ten.**
