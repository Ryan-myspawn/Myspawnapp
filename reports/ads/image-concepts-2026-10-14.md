# Image Ad Creative: 2026-10-14

**Freshness check:** headline, concept and visual hook checked against `image-concepts-log.md`, every `image-concepts-2026-*.md`, the scripts directory, `adcopy-log.md` and `photo-reserve.md`. **Primary audience: Men 25-55.** **Trend / hook used:** the safe deposit box access rules published on the blog at 10:1x today, specced as a static ad by the 17:1x Content Factory run with its visual direction already grep-cleared.

## VOLUME: 2 FINISHED CREATIVES AGAINST A TARGET OF 10, AND THE CAUSES ARE DIFFERENT FROM YESTERDAY'S

**One square and one vertical. Photo lane rung: (a) MCP search LIVE, egress self-test 200.**

**Yesterday's shortfall was a shortage of usable photographs. Today's is a shortage of photographs that match what our own records said they were.** **Two of the four candidates examined today were rejected because a description did not match the image**, one in a live search result and one in our own reserve.

**ALSO NEW TODAY AND WORTH REPORTING BECAUSE IT COST REAL TIME: the scratchpad had been cleared between runs.** The ad generator, the markdown renderer and the **Python imaging library itself** were all gone. **Pillow was reinstalled and the generator rebuilt from the template, including the character-budget assertion added yesterday, which passed on the first run at 280 and 17 characters.** **The pipeline is reproducible from the committed HTML masters, which is exactly why the mirror-safe rule says the HTML is the master and the PNG is disposable. That rule paid for itself today.**

## SHIPPED

### Ad_OneNameOrTwo_195 (1080x1080)

**Headline:** "One name, or two."

**Body:** "On a safe deposit box, the number of names on the lease decides what your family does next. Two names, and a surviving renter can generally open it with a death certificate and ID. One name, and it goes through the estate. MySpawn stores a DNA record. $99 a year, billed annually."

**Support.** This morning's blog article and the practitioner sources behind it. **No state is named, matching the ship condition the Content Factory wrote into the script version: state access rules go stale and a creative outlives a blog post.** **"Generally" is load-bearing and is in the body.**

**Visual hook.** **Two door panels leaning unhung against a wall in an abandoned room, beside a window, hard afternoon light falling across them.** **The photo earns the concept precisely: a door that is not hung is a door that does not open**, which is what a one-name lease produces for a family. No faces, no people, no legible text, no brand marks.

**Photo credit: Yuri Krupenin (@cubeofwood), Unsplash `2BGyzcSxWoA`, https://unsplash.com/photos/2BGyzcSxWoA** (consumed from the photo reserve; its hold expired 12 October).

**Filter: `brightness(1.14) contrast(1.10) saturate(0.34)`.** Standard chain, correct here: the source is a dark interior at base #0c260c. **Not the mid-tone start, and not the bright inversion.**

**Geometry:** square `sq=(1560,1560,-250,-190)`, head 60px. **Placement: paid, all platforms.**

### Ad_OneNameOrTwo_195_9x16 (adaptation, 1080x1920)

**Re-laid out, not cropped**, at `ve=(2300,2300,-700,-300)`, head 74px. **The vertical is the stronger of the two: the door panel fills the upper two thirds and reads unmistakably as a door standing in a room rather than hanging in a frame.** Verified by reading the render.

## REJECTED, FOUR, AND TWO OF THEM FOR THE SAME NEW REASON

1. **The carbon-copy direction specced at 17:1x: KILLED ON SOURCE AVAILABILITY.** The `carbon copy form paper` search returned four results, and **three of the four are explicitly 3D RENDERS**, two of them captioned "3D Rendering Blank Flyer For Mockup" by a 3D graphics designer. **The Unsplash mandate requires real photography. A render is not a photograph and is rejected on the mandate itself, not on taste.** The fourth was a bright pile of plain paper that does not earn the concept.
2. **`EgKpARq8Dow`, "Glass jars with wooden lids are on display" (Haberdoedas, @haberdoedas), 7565 square and genuinely dark: REJECTED AT THE SOURCE THUMBNAIL.** It was fetched to build **Ad_EverythingInItIsFine**, the 4 October ad that three separate lanes have now pointed at as still unbuilt. **The 4 October brief requires "no hands, no faces, no label, no brand, no legible text of any kind." The photo is a retail display containing framed signage, printed labels and a heart logo on the centre jar.** **Rejected on the brief's own words.** **Caught at the source thumbnail rather than after rendering, which is the cheapest place to catch it and the first time this lane has caught one there.**
3. **The `sealed glass jar dark` search with `color=black`: returned ONE result and it was a water drop.** **This is the second consecutive day the colour filter has over-constrained a search into uselessness, and yesterday's reserve note already recorded that finding. I repeated my own documented mistake and then applied the fix.** **BINDING FROM TODAY: do not pass `color` on a subject search unless a subject-only search has already been run and returned too many candidates.**
4. **A second concept from the reserve: NOT ATTEMPTED on family adjacency.** The only other expired-hold entries that fit are `fp-wJCFjfAU` and `gVg4q3fQsSA`, **both the same dark-abandoned-interior family as the photo used today.** Two concepts from one family in one batch is the collision this lane killed an ad for yesterday.

## THE RESERVE DESCRIPTION PROBLEM IS NOW A PATTERN, NOT AN INCIDENT

**`2BGyzcSxWoA` is banked in `photo-reserve.md` as "Ladder against a wall beside a window". It is not a ladder. It is two door panels leaning against a wall beside a window.**

**That is the SECOND reserve entry in two days whose written description did not match its content.** Yesterday's was "close-up of writing on a dark wall", which turned out to be a political slogan and was marked never-use.

**Yesterday's fix was text-specific: an entry for a photo containing text must say what the text says. Today proves the rule was too narrow.** **BINDING FROM TODAY, replacing it: a reserve entry's subject line is a CLAIM about the image and must be verified against the image before the entry is used, not before it is banked.** **A banked description is a hypothesis.**

**The entry is corrected in `photo-reserve.md` rather than silently overwritten.** **And it is worth stating that the entry's SECOND sentence was right even though its first was wrong: it predicted this photo would clear early "for an ACCESS concept rather than an abandonment one", and that is exactly what it was used for today.**

## QC Gate

**Ad_OneNameOrTwo_195: PASS.** Freshness: `one name` and `two names` return ZERO in the concept log; **the door-panel photo has never been used and `2BGyzcSxWoA` appears nowhere in the log.** **DISCLOSED: the abandoned-interior FAMILY is live in the reserve and was the reason a second concept was not attempted.** Banned lanes absent. Claims: no state named, "generally" preserved, pricing in the correct annual form. **No competitor named and no price compared, so today's binding time-horizon instruction does not bind this ad.** Personas: **38-year-old father PASS, 29-year-old optimizer PASS** (the four-minute fix is implicit in the contrast), **50-year-old estate planner PASS, strongest.** Visual verify: both renders read at thumbnail, no collisions, no clipping. Right-of-publicity: no people, no faces, no legible text, no brand marks.

**Ad_OneNameOrTwo_195_9x16: PASS on the first geometry**, which has not happened for a vertical in this lane before. No pen, no intrusion, no clipped subject.

**FOUR REJECTED, TWO FOR DESCRIPTION MISMATCH. NO REPLACEMENTS MANUFACTURED: every square from 2026-09-2x onward already has a vertical, verified again today, so the rule's prescribed replacement has nothing to draw on.** **TWELFTH ASKING: lower the daily target from 10 to 4-6, or accept runs like this one.**
