# Image Ad Creative, 2026-11-07

Run fired 18:07 UTC. Egress self-test to images.unsplash.com returned 200, so the live search rung was available and the reserve was a fallback only.

## Shipped

### Ad_NoOneLooked_225
- **Headline:** No one reported a problem. No one looked.
- **Subhead:** A storage company with no complaints has told you nothing about your own sample. Ask what was checked, on what date, and who signed it. MySpawn keeps a DNA record for $99 a year, billed annually.
- **Image:** a plain, empty dark concrete wall, shot flat, no subject, no object, no text.
- **Photo:** Unsplash `2exJKlfFscI` by David Foodphototasty (@phototastyfood), https://unsplash.com/photos/a-black-and-white-photo-of-a-concrete-wall-2exJKlfFscI, raw https://images.unsplash.com/photo-1696360085467-032bbc0275e3, 5174x5174 native, downloaded at w=4000.
- **Files:** `assets/ads/2026-11-07/Ad_NoOneLooked_225.html` (1:1), `_9x16.html`, `_hd.jpg` 2160x2160 at 948,525 bytes, `_9x16_hd.jpg` 2160x3840 at 919,381 bytes.
- **Why the pairing earns:** the argument is that an empty result is not the same as a checked result. The image is the empty result. A blank surface is not decoration here, it is the claim.

## QC Gate
- Pricing line reads "$99 a year, billed annually" and the lockup reads "$99/yr". No "once", no "one-time", no "no subscription", no "no annual fee".
- No fertility, gamete, therapy or descendant-creation implication. The copy is about custody of a stored record only.
- Em dash count on both HTML masters: 0 literal, 0 `&mdash;`, 0 `&#8212;`, 0 `&#x2014;`, measured by program.
- Photo carries no identifiable face, no third-party brand mark, no legible text, no person at all.
- Headline measured at 41 characters, subhead at 195, both by program, both inside the 58 / 300 asserts in the generator.
- Source measured before compositing at 4000x4000, mean luminance 80.4, stddev 20.0.
- Rendered square at window 1080x1280 and vertical at 1080x2120, then cropped to 2160x2160 and 2160x3840.

## Exposure note
The source was already dark at mean L 80.4, so the new "start bright and come down" rule did not apply in its literal form. It was built at brightness 1.02, inspected, and raised to 1.14 because the surface had gone muddy rather than empty. The rule's real content is **set exposure by inspection in the direction the source demands, and inspect before the first export**, not "always come down". Written that way so the next bright-source run still gets the original instruction.

## Declines

**Decline 1: the handed-over container direction.** Today's Content Factory handed over the static ad "Even Temporarily" with the direction "two identical empty containers side by side on a plain surface, shot straight on, nothing in either", glasses explicitly barred, and a note that it deliberately specified a COMMON object after yesterday proved the index does not hold scarce objects. The search "buckets" (squarish, content filter high, 10 results) returned a popcorn cup, golf balls with a person in frame, a trash can, a clay cup, flowers, two fishermen, Christmas ornaments, silhouetted people and scaffolding with a person. Nothing usable. Object-class greps run first: `locker` 17 hits in ads and therefore occupied; `bucket`, `two tins`, `two boxes`, `two containers` all zero.

**Decline 2: reserve photo `wNZfcbJnWYo`.** Banked as "brick wall, already black and white, texture rather than subject, needs a concept where a blank surface is the point", which is exactly the concept this run had. Opened at full resolution: a large painted numeral **3** sits in the centre of the frame. It is not a blank surface, it is a labelled one, and a big numeral in a creative whose price is $99 is an unforced misread. Moved to DO-NOT-USE. This is the fourth time a reserve entry banked at alt-text level has died at full-size inspection, which is what the 14 September standing note predicts.

## Finding: yesterday's hypothesis was wrong

Yesterday's run concluded that the Unsplash index does not hold **pairs** of objects. That is false. The search `two identical doors` returned **267 results**. The constraint is the **object class**, not the pairing: the index is thin on plain domestic containers and thick on architecture, which is the same shape the 16, 19 and 20 September search notes already recorded. Doors remain a standing photo blocker for us for an unrelated reason, so that search produced nothing shippable, but it did settle the question.

Recorded rather than dropped, because a wrong rule left in the log costs more than a decline does. The corrected rule: **before blaming the index for a composition, test the composition against a class the index is known to be rich in. If it succeeds there, the problem is the class, not the composition.**

## Output against target
One creative in two ratios against a nominal daily target of ten. Two photo declines, one of them a reserve entry that had been banked unopened. The daily target of ten has now been met on no day in this file's history; the proposal to lower it to four to six is raised again here, for the thirty-third time.
