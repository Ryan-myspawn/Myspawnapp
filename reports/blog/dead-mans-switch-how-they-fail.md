**Freshness check:** This angle has not been used in the last 7 days. `dead man's switch`, `deadman`, `check-in interval` and `proof of life` return ZERO across every file in this repository except the queue note that proposed this article. The two adjacent published pieces were read in full before drafting and are handed off to in the body rather than competed with.

**Primary audience:** Men 25-55

**Trend / hook used:** No news peg, and that is stated rather than dressed up. The hook is a category that has quietly accumulated at least three incompatible designs while almost every explainer still describes only one of them.

**Epistemic note, stated up front.** **Most sources below are vendor-written comparisons published by companies selling competing products in this exact category, which is the weakest source class we use.** Treat every interval, price and feature as reported rather than verified, and check the current setting inside the product before you rely on it. **No page was opened at its own domain**, because DNS resolution failed from this machine for the nineteenth consecutive day. This is not legal or security advice.

# Dead Man's Switch: How They Actually Work, and Why Most of Them Fail

**A dead man's switch is a system that does something if you stop confirming you are alive.** The classic version emails a message to people you named after you miss enough check-ins. **The thing almost nobody tells you is that the trigger is the easy part.** Switches rarely fail because the timer misfires. They fail because of what happens after it fires: the message arrives and the thing it points at has moved, expired, been rotated, or was never transferable in the first place.

## Three designs, not one

Most explainers describe a timer and stop. There are at least three release models in current products and they fail in different directions.

**Timer only.** You check in; miss the deadline and the payload goes out. No human in the loop. **Fast, and the most prone to a false release** if you are on a long flight, in hospital, or simply on holiday without signal.

**Human verification.** You miss several check-ins, the service notifies the contacts you named, and **those people are asked to confirm your status before anything is delivered.** Slower, and far harder to trip by accident. LastSend is described as working this way.

**Request based, with no check-ins at all.** Nothing happens on a schedule. **A recipient has to actively request access, and then a waiting period runs during which you can deny it.** AbsentKey is the example given for this model. The burden is inverted: you are not proving you are alive, somebody else is asserting that you are not.

**Which one you want depends entirely on which error you would rather make.** A timer risks sending early. A verification or request model risks sending late, or never, if the person you named does not act. **There is no design that avoids both, and any product implying otherwise is selling you a feeling.**

## Real intervals, so you can calibrate

**The long-running example is deadmansswitch.net, which describes itself as having operated continuously since 2008.** Its intervals run from one day to years. **Its default schedule is the useful number: reminders at 30, 45 and 52 days, with delivery at 60 days after your last check-in.** Free accounts are limited to a single day after the trigger. *(Service's own description, read via a search index.)*

At the other end, an App Store listing for a mobile switch gives **check-in intervals from one hour to seven days**, with a later version extending to 30 days. Lifechecker.app is described with **daily-to-monthly intervals plus grace periods and pause modes**: the pause being the feature that solves the holiday problem the timer model creates.

**And there is a hardware version worth knowing exists, because it clarifies the concept.** BusKill is a USB cable that locks or wipes a laptop when the cable is physically pulled from the machine. **Same logic, seconds instead of months, and it exists to defend a laptop in a coffee shop rather than an estate.**

## The failure is almost never the trigger

Here is the part the category does not advertise.

**Failure one: the payload goes stale and the switch does not know.** A switch delivers whatever you loaded into it on the day you loaded it. Rotate a password six months later and the envelope still contains the old one. **The switch fires perfectly and delivers nothing usable,** and because it fires correctly, nothing in the system tells you it failed. This is the single most common way these setups die, and it is silent.

**Failure two: somebody else can disarm it without telling you.** Bitwarden's emergency access, which is a dead man's switch in all but name, has a documented behaviour worth sitting with: **if your trusted contact deletes their own Bitwarden account, they are removed as your contact and have to be re-invited.** Your arrangement can be quietly undone by another person's unrelated housekeeping. **Nothing about your own setup changes, and nothing warns you.**

**Failure three: the thing it unlocks was never yours to pass on.** A credential is not ownership. Handing someone a password is not the same as transferring an account, and many terms of service prohibit exactly that. Where real assets are involved, the legal route and the access route are separate problems, which is the point we made in [what a small estate affidavit is, and when it beats probate](/blog/small-estate-affidavit-vs-probate).

**Failure four: it was never tested.** A switch you have never let run to completion is a guess. The only honest test is to set a short interval, deliberately miss the check-ins, and see what your recipient actually receives.

## The design that solves the staleness problem

**If the payload is credentials, do not ship a copy of them. Ship access to the live vault.** Password managers build this directly and it is structurally better than any envelope.

**Bitwarden's emergency access** lets you designate a trusted contact who requests access; **if you neither accept nor deny the request, access is granted automatically once the waiting period expires.** The contact can be on a free account even though the feature sits on a paid tier for the owner. **Sources disagree about the configurable range, one giving one hour to seven days and another giving immediate to thirty days, so check it in the app rather than trusting either number here.** **Proton** added a comparable feature: **up to five trusted individuals, each needing their own Proton account, with a custom waiting period.**

**Why this beats a sealed envelope: the vault is live.** Rotate a password tomorrow and your contact still gets the current one, because they are getting the vault rather than a snapshot of it. **Failure one disappears entirely.** Failure two does not: the contact still has to have an account and still has to act.

## What to actually do, in order

**Write the inventory first.** A plain list of what exists and roughly where, containing no secrets at all. **This is the step people skip and it is the one that costs nothing.** A switch that fires into a vacuum is useless, because nobody knew to look.

**Pick the error you prefer.** Timer if your people are unreliable and you would rather risk an early send. Verification or request-based if false alarms would be worse than a delay.

**Make the payload a pointer, not a copy.** Live vault access, not a text file of passwords.

**Set a calendar reminder to test it annually**, and actually let it fire once.

**And keep the legal authority separate from the access.** They are different mechanisms with different failure modes, which is the same lesson as [what belongs in a safe deposit box, and what does not](/blog/safe-deposit-box-after-death): the thing that proves who may act and the thing that lets them act are rarely the same object.

**On the platform-level versions of this idea,** Google, Apple, Meta and TikTok each ship something adjacent, and we took those apart separately in [what happens to your accounts when you die](/blog/platform-legacy-settings-explained). **The short version is that Google's Inactive Account Manager is the only one of the four that actually hands somebody your files, and that it fires on inactivity rather than on death.** That limitation is the whole subject of this article, stated by Google's own design.

## Where MySpawn sits

**Nothing on this page is something MySpawn does for you.** We do not operate a dead man's switch, we do not hold your passwords, and we have no check-in timer. **We store a physical DNA record** taken from hair and nail clippings at GenVault in New Jersey, an independent facility that is ISO 9001 and ISO 20387 certified, CAP accredited and FDA-registered, at ambient temperature, for **$99 a year, billed annually**, with the first 1,000 members locking the founding rate. No cloning, no gene editing, no service that creates a descendant.

**We are in this article for one reason: we are subject to failure one.** A record nobody knows about is functionally identical to a credential nobody can use. **The thing that makes our product work is not the storage. It is that somebody in your family knows it exists and knows who to contact**: which is also the thing we cannot do for you, and which is why the inventory step sits first on the list above.

## FAQ

### Is a dead man's switch legally binding?

No. It is a delivery mechanism, not an instrument. It can deliver a message, a location, or access, but it does not transfer ownership of anything and it does not substitute for a will or a trust. Treat it as plumbing attached to a plan, never as the plan.

### What interval should I choose?

There is no correct answer, only a trade. Published defaults cluster around 30 to 60 days for message-delivery services and hours to days for vault access, which tells you those two jobs are not the same job. Pick by asking which mistake you would rather make: sending early, or not sending at all.

### What happens if I am just on holiday?

With a timer-only service, the switch may fire. Several products address this with pause modes and grace periods, and verification models ask a human before releasing. If you travel off-grid regularly, a timer-only switch with a short interval is the wrong product for you.

### Can I put passwords in a dead man's switch?

You can, and it is the design most likely to fail silently, because the copy goes stale the moment you rotate anything. Prefer a password manager's emergency access, where your contact gets the live vault rather than a snapshot of it.

### How do I know it still works?

By testing it end to end at least once a year, with a short interval, and looking at what your recipient actually receives. A switch that has never run to completion is an assumption, not a system.

**If you are setting one of these up this month, do the free part first: write down what exists and who should know.** Then decide whether the biological record of your family belongs on that list alongside the accounts. [MySpawn is $99 a year, billed annually](https://myspawn.me), and the first 1,000 members lock the founding rate.

## SEO PACKAGE

- **Title tag:** Dead Man's Switch: How They Work, and How They Fail
- **Meta description:** The three release models, real check-in intervals, and the four ways a dead man's switch fails after the trigger works perfectly.
- **URL slug:** `dead-mans-switch-how-they-fail`
- **Primary keyword:** what is a dead man's switch
- **Secondary keywords:** dead man's switch check-in interval · dead man's switch for passwords · Bitwarden emergency access waiting period · best dead man's switch service · dead man's switch vs legacy contact · how to test a dead man's switch
- **Internal links:** [platform-legacy-settings-explained](/blog/platform-legacy-settings-explained) · [small-estate-affidavit-vs-probate](/blog/small-estate-affidavit-vs-probate) · [safe-deposit-box-after-death](/blog/safe-deposit-box-after-death)

### FAQPage JSON-LD

```json
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Is a dead man's switch legally binding?","acceptedAnswer":{"@type":"Answer","text":"No. It is a delivery mechanism, not a legal instrument. It can deliver a message, a location or access, but it transfers ownership of nothing and does not substitute for a will or trust. Treat it as plumbing attached to a plan."}},
{"@type":"Question","name":"What interval should I choose?","acceptedAnswer":{"@type":"Answer","text":"There is no correct answer, only a trade-off. Published defaults cluster around 30 to 60 days for message delivery and hours to days for vault access. Choose by deciding which mistake is worse for you: sending early, or not sending at all."}},
{"@type":"Question","name":"What happens if I am just on holiday?","acceptedAnswer":{"@type":"Answer","text":"With a timer-only service the switch may fire. Several products offer pause modes and grace periods, and verification models ask a human before releasing anything. If you travel off-grid regularly, a short-interval timer-only switch is the wrong product."}},
{"@type":"Question","name":"Can I put passwords in a dead man's switch?","acceptedAnswer":{"@type":"Answer","text":"You can, and it is the design most likely to fail silently, because a stored copy goes stale the moment you rotate a credential. Prefer a password manager's emergency access, where the contact receives the live vault rather than a snapshot."}},
{"@type":"Question","name":"How do I know it still works?","acceptedAnswer":{"@type":"Answer","text":"Test it end to end at least once a year with a short interval and look at what the recipient actually receives. A switch that has never run to completion is an assumption rather than a system."}}
]}
```

## SOURCES

1. **Release-model taxonomy (timer-only, human verification, request-based) and the named examples LastSend and AbsentKey.** **Grade: VENDOR-WRITTEN COMPARISONS published by companies competing in this category. The weakest class we use, and the article says so in its own epistemic note rather than only here.** The taxonomy is consistent across several independent vendors, which is why it is reported; the rankings inside those pages are not.
2. **deadmansswitch.net:** intervals from one day to years, default reminders at 30, 45 and 52 days, delivery at 60 days after the last check-in, free tier limited to one day after, operating since 2008. **Grade: the service's own description of itself, read via search index. Primary as to its own features, promotional as to everything else.**
3. **Mobile App Store listing** (one hour to seven days, later extended to 30 days) and **Lifechecker.app** (daily to monthly, grace periods, pause modes). **Grade: product listings via search index.**
4. **BusKill**, a hardware USB dead man's switch that locks or wipes a machine when the cable is pulled. **Grade: encyclopaedia entry via search index. Included to clarify the concept, not as a recommendation.**
5. **Bitwarden emergency access:** trusted contact requests access; if the owner neither accepts nor denies, access is granted automatically when the waiting period expires; the contact may hold a free account; **a contact who deletes their own Bitwarden account is removed and must be re-invited.** **Grade: Bitwarden help documentation plus third-party guides, via search index.** **SOURCE CONFLICT STATED IN THE ARTICLE RATHER THAN RESOLVED: one guide gives a one-hour-to-seven-day waiting-period range, another gives immediate to thirty days. Neither was verified and the article tells the reader to check in the app.**
6. **Proton emergency access:** up to five trusted individuals, each requiring a Proton account, custom waiting period. **Grade: coverage of a product announcement, via search index.**
7. **1Password's Emergency Kit was searched for and NOT found in the result set, so it is absent from this article rather than described from memory.**
