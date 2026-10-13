# Image Ad Creative: 2026-10-13

**Freshness check:** headline, concept and visual hook checked against `image-concepts-log.md`, every `image-concepts-2026-*.md`, the scripts directory and `photo-reserve.md`. **Primary audience: Men 25-55.** **Trend / hook used:** *Science*, 29 January 2026, Shenhar et al. (Weizmann and Karolinska) on the heritability of intrinsic human lifespan, which this fleet banked last night and gave figures to this morning.

## VOLUME: 2 FINISHED CREATIVES AGAINST A TARGET OF 10, AND THE REASONS ARE CONCRETE RATHER THAN VAGUE

**One square and one vertical shipped. Five concepts died, each at a different gate, and four of the five died on the photo rather than on the idea.** **Photo lane rung: (a) MCP search LIVE, egress self-test returned 200.** **The constraint today was not access. It was that four searches and one reserve entry produced exactly one photo this lane is willing to put a paid headline on.**

**Padding to ten would have required either weak new concepts, which the QC Gate forbids, or re-rendering an existing vertical under a new name.** **Every square in every directory from 2026-09-2x onward already has a vertical, verified programmatically this run, so there is no honest vertical left to add.** **ELEVENTH ASKING: lower the daily target from 10 to 4-6, or accept runs like this one.**

## SHIPPED

### Ad_AboutHalfOfItWasDecidedBeforeYouWereBorn_194 (1080x1080)

**Headline:** "About half of it was decided before you were born."

**Body:** "A January 2026 Science paper puts the heritability of intrinsic lifespan at about 50 percent, and about 55 once accidental deaths are set aside. That describes a population, not you. The record you leave is the part you control. $99 a year, billed annually."

**Support.** *Science*, 29 January 2026, Shenhar et al., Weizmann Institute with Karolinska co-authors, peer-reviewed. **The second sentence of the body is non-negotiable and must survive any future edit: heritability is a statistic about variation in a population and never a forecast about a person.** An ad that implies otherwise would be the most quotable false claim this brand could make.

**Visual hook.** A small white-and-black puzzle cube on a vast black textured surface, lit from the upper left. **The photo earns the concept: a cube is an object where some faces are already set and the rest is what you move.** Negative space carries the headline with no competition.

**Photo credit: Devin Rista (@devinrista), Unsplash `N4WuHcMbU6Y`, https://unsplash.com/photos/N4WuHcMbU6Y** (consumed from the photo reserve, where its hold expired today).

**Filter: `brightness(1.18) contrast(1.08) saturate(0.42)`**, the standard chain, correct here because the source is a near-black #262626 surface rather than a mid-tone. **The mid-tone warning in this afternoon's Content Factory direction does not apply to the photo actually used, and that is said here so the next run does not apply it reflexively.**

**Geometry:** square `sq=(1400,1400,-60,-40)`, head 56px. **Placement: paid, all platforms. No identifiable faces, no people, no readable text in the photo.**

### Ad_AboutHalfOfItWasDecidedBeforeYouWereBorn_194_9x16 (adaptation, 1080x1920)

**Re-laid out, not cropped. FIXED AFTER VISUAL VERIFICATION: the first vertical render at `ve=(1900,1900,-300,-120)` pulled a white pen tip into frame directly behind the body copy and clipped the cube at the left edge. Re-rendered at `ve=(2600,2600,-240,-160)`, which excludes both pens and the stray triangle and enlarges the cube.** Head 70px.

## KILLED, FIVE CONCEPTS, EACH WITH ITS GATE

1. **Ad_KeepItOrHaveItKept, the concept this afternoon's Content Factory run pre-specced with a left-luggage direction. KILLED ON PHOTO FAMILY ADJACENCY.** **Ad_ItOutlastedThePersonWhoPackedIt_193 shipped YESTERDAY on a 1942 leather case, which is the luggage family.** **The Content Factory greped the PHRASE `left luggage` and got zero; it did not check the photo FAMILY, which the mandate says counts as part of the visual hook.** **A phrase grep passed where a family check fails, which is the same class of error as the 8 October miss where one grep killed two finished ads.** The best candidate found, `Ip_8jqRG8sg`, old suitcases stacked on a wooden shelf by Jonathan Lim (@jonathankslim), **is banked to the reserve with a hold rather than used.**
2. **The replacement photo for the same concept, `4Zps8_CpeBc` by apryan widodo, KILLED ON VISUAL VERIFICATION.** Captioned "a group of wooden shelves"; the actual image is flat-pack showroom furniture with **open drawers**. **It does not read as institutional storage, and the script it was built for contains the line "you do not depend on a drawer." The ad would have argued against its own headline.**
3. **Ad_TwoDifferentAnswers, on epigenetic clocks disagreeing in direction about the same person. KILLED ON PHOTO AVAILABILITY.** The `two wall clocks dark` search returned 11 results and **the only one on subject contains a person**, which this lane refuses for paid creative on right-of-publicity grounds. **No face-free photo, no ad.**
4. **Ad_YouArePayingForTheSearch, on the vital-records fee. KILLED TWICE.** The `rubber stamp ink pad` query returned **ZERO results**. The reserve fallback is item 5.
5. **Reserve entry `dXd968VkQ24`, "close-up of writing on a dark wall, texture", KILLED AND THE RESERVE ENTRY CORRECTED. THIS IS THE RUN'S MOST IMPORTANT FINDING.** The entry carried a condition: the writing must be rendered and read at 100 percent before use. **Read at 100 percent, the writing is a political slogan: "CLIMATE CHANGE IS REAL".** **The reserve description said only "writing on a dark wall", so the content was invisible to anyone reading the file.** **Putting a brand headline over a political slogan is an unintended endorsement in a paid creative.** **The condition was written to catch illegibility and it caught something far worse. The entry is now corrected in `photo-reserve.md` with the actual content named, and marked never-use.**

## QC GATE

**Ad_194: PASS.** Freshness: `half of it` returns ZERO in the concept log; `two clocks` ZERO; the cube photo has never been used. Banned lanes absent: no letter framing, no Pentagon or government-biobank material, no em dashes. Claims: one source, named, dated, labelled peer-reviewed, **with the population-not-person caveat inside the ad body rather than in a footnote.** Pricing: "$99 a year, billed annually", correct form. Personas: **38-year-old father PASS, 29-year-old optimizer PASS, 50-year-old estate planner PASS.** Visual verify: rendered and read at thumbnail; no collisions, no clipping, lockup and rule clear. Right-of-publicity: no people, no faces, no readable text in the photo.

**Ad_194_9x16: FIXED.** Pen intrusion behind body copy and a clipped cube at the first geometry; re-rendered and re-verified.

**FIVE KILLED. Replacements were NOT manufactured, because the rule says killed items are replaced with verticals of proven performers and there are none left unmade.**

## PIPELINE CHANGE SHIPPED TODAY

**The template defect named twice and never fixed is now fixed at the generator.** `gen1013.py` asserts **`len(sub) <= 300` and `len(head) <= 58` before any HTML is written**, with an error message that explains the failure mode: the template pins head and sub to fixed `bottom` offsets, so an over-long sub grows UPWARD into the headline. **Four ads on 11 October and one on 9 October rendered with the headline running through the body before anyone noticed. From today an over-long body fails at GENERATION time rather than at RENDER time.** Today's single ad passed at 257 and 50 characters.
