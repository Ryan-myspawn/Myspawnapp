# What Can Actually Leave Your Account? The Export Question Almost Nobody Asks

**Short answer: less than the law promises, and in a worse shape than you expect. US law now says a company must hand your data back in a commonly used, machine-readable format you can move elsewhere "without hindrance," and at least one state requires the company to transfer it directly to a competitor if you ask. What actually arrives is a stack of zip files, a download link that expires, and your photo dates stored beside your photos instead of inside them. This article covers what each major export really contains, what the law actually requires, and why one of the world's largest research institutions spent this year rebuilding itself to make export harder.**

Most digital-legacy advice stops at one question: who can get into your account. That is half of it. The other half is what can come out, in what condition, and who is allowed to take it.

## The right is stronger than most people realize

Under the **California Privacy Rights Act**, in effect since **1 January 2023**, a business responding to your request must provide your personal information in a format that is **easily understandable** and, where delivered electronically, **"portable and, to the extent technically feasible, in a readily useable format"** that lets you transmit it to another entity **"without hindrance."**

The CPRA also went further than the original CCPA in a way that matters and is rarely mentioned: **the business must transfer that information directly to another entity at your request.** Not just hand you a file. Send it on.

So the standard is not "we gave you something." The standard is **useable, movable, and on request, moved for you.**

Hold that sentence in mind while you look at what actually turns up.

## What actually comes out

### Google Takeout

Takeout is the most complete of the three and also the best illustration of the gap.

What works: your albums arrive as **separate named folders**, organized the way you organized them.

What to expect anyway:

- **Your photo metadata is not in your photos.** Dates, GPS coordinates and descriptions are stripped into a **companion `.json` file** sitting next to each image. The photo file itself may no longer carry its EXIF date. If you import that folder somewhere else, your library can land with every picture dated the day you exported it.
- **Shared albums are silently skipped.** Takeout exports what you uploaded. Albums shared with you are not included and you are not warned.
- **It arrives in pieces.** A 100GB library produces roughly **19 zip files**, simultaneous downloads are limited, and **the links expire after one week.**
- **It is bigger than your library.** Expect **1.5 to 2 times** the storage figure Google shows you, because a photo in "Vacation 2022" and in "Photos from 2022" is exported twice.

### Apple

Apple's export lives at **privacy.apple.com** and arrives as CSV files, JSON files and media attachments sorted into folders by service.

- It includes things like **contacts, calendar, music preferences and past repair records.**
- **It does not include your iCloud Photos library or your Drive files.** Those need a separate iCloud download, which is a different process most people never learn exists.
- **Messages come through as limited metadata, not as your actual conversations.**
- It takes **three to seven days** to prepare, and the **download links stay live for 14 days.**

### Meta

Meta consolidated this into **Accounts Center**, where you can request a download covering **Instagram and Facebook together** or either one alone.

Meta also runs **Transfer Your Information**, which sends your Instagram photos and videos **directly to another service** such as Google Photos. That is the strong form of portability the CPRA describes, working in practice, and it is worth knowing it exists because it is the closest thing to what the law actually asks for.

## The same mechanism, seen from the other side

Here is the part that reframes the whole question, and it happened this year.

**UK Biobank**, one of the most-used health research resources in the world, discovered in **April 2026** that deidentified participant-level data **which had already been exported from its Research Analysis Platform** was being offered for sale online. It **paused researcher access entirely.** The platform stayed closed for close to five months.

Look at what it decided the fix was. Not a stronger front door.

- On reopening, phased from **September 2026**, researchers can go in and compute and **download nothing at all.**
- A **manual Output Checking System** with limited capacity arrives **later in 2026**.
- An **automated** one is targeted for **early 2027**.
- An **airlock** is being rolled out alongside the reopening.
- Applications for new projects are suspended until **late 2026**, every existing project was **extended by six months**, and a **£200,000 independent security review** was commissioned and its recommendations accepted.

*(Epistemic note: the reopening mechanics above come from UK Biobank's own published material. A widely repeated figure of roughly 500,000 affected participants comes from security-press reporting rather than the institution, and how the data got out has not been established publicly, so this article does not assert it.)*

**So export is a right when it is your data leaving a company, and export is the risk when it is other people's data leaving an institution.** Same mechanism. Opposite valence. And the question is identical in both directions: **what can leave, in what form, and who checks.**

Worth saying plainly: UK Biobank disclosed, paused rather than carrying on, commissioned an independent review, accepted it, compensated every affected project with six months, and published a staged plan with dates. That is a good response to a bad year.

## Why this matters for anything you are keeping long-term

If you are storing something because it needs to outlive a company, "can my family get in" is the question everyone asks and the easy one to answer. We covered the access side in [What Happens to Your Accounts When You Die](/blog/platform-legacy-settings-explained), and the ownership side in [Who Owns Your Data If the Company Is Acquired](/blog/data-ownership-after-acquisition).

The export side is the one with no marketing page anywhere, because a company that answers it honestly is describing how you would leave.

MySpawn stores a DNA record, and the same standard should be pointed at us: not only who can reach it, but what can be taken out, by whom, and whether there is a record that it happened. We would rather be asked that early than late.

## How to test your own export, in about an hour

1. **Request one now, on a normal day.** Not during an emergency, not after a death. The point is to find out what arrives while it costs you nothing.
2. **Open the archive and look at a photo's date.** If the date lives in a sidecar file rather than in the image, you have a metadata job ahead of you, and you want to know that before someone else inherits it.
3. **Count what is missing.** Shared albums, messages, anything in a different product under the same login. Write the gaps down.
4. **Check the expiry.** A link that dies in seven or fourteen days is not an archive. **Download it, then store it somewhere you control.**
5. **Ask for the transfer, not just the file**, where it is offered. Direct transfer is the version of this right that actually works.
6. **Do the same for anything held on your behalf**, including us. If a company cannot tell you what can leave, that is an answer.

For the physical half of a family archive, and the separate law that governs it, see [Who Ends Up With the Family Archive](/blog/who-keeps-the-family-archive).

## Frequently asked questions

### Does the law require companies to give me my data in a useful format?

Under the CPRA, yes in principle. Electronically delivered information must be **portable and, to the extent technically feasible, in a readily useable format** that lets you transmit it to another entity **without hindrance**, and the business must also **transfer it directly to another entity at your request**. In practice "technically feasible" carries a lot of weight, which is why real exports vary so much.

### Why do my Google Photos lose their dates when I export them?

Because Takeout writes the dates, GPS coordinates and descriptions into a **companion `.json` file** next to each image rather than leaving them in the photo's EXIF data. The information is not lost, but it is not inside the file either, so anything you import the folder into may date every picture to the export day until the metadata is written back.

### Does Google Takeout include albums other people shared with me?

**No.** Takeout exports photos you uploaded. **Shared albums are skipped and you are not warned.** If a shared album matters to you, save those images into your own library before you export.

### Does Apple's privacy export include my iCloud photos?

**No.** The privacy.apple.com archive covers account data such as contacts, calendar and repair history, and gives **limited metadata rather than full messages**. Your **iCloud Photos library and Drive files need a separate download**. Archives take three to seven days to prepare and links stay live for 14 days.

### How long do I have to download an export before the link expires?

It varies by company and it is shorter than people expect. **Google's links expire after about one week; Apple's stay live for 14 days.** Treat an export link as a short-lived door, not as storage.

---

**MySpawn stores one thing: a DNA record, for $99 a year, held by an independent accredited biorepository. It is storage, not interpretation, and not a promise about anyone's descendants. If you are thinking about what survives you in a form someone can actually reach, [start here](/blog/how-to-preserve-your-dna).**

---

## SEO PACKAGE

- **Title tag (37 chars):** What Can Actually Leave Your Account?
- **Meta description (149 chars):** US law says your data must come back useable and movable. Here is what Google, Apple and Meta exports really contain, and what expires when.
- **URL slug:** `what-can-leave-your-account`
- **Primary keyword:** what does google takeout actually include
- **Secondary keywords:** data portability rights CPRA, Google Takeout shared albums missing, Google Takeout photos lose date, Apple privacy export iCloud photos, download your information Meta, export link expiry
- **Internal links:** `/blog/platform-legacy-settings-explained`, `/blog/data-ownership-after-acquisition`, `/blog/who-keeps-the-family-archive`, `/blog/how-to-preserve-your-dna`
- **Word count (body, excluding SEO package):** 1,643, measured

### FAQPage JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Does the law require companies to give me my data in a useful format?","acceptedAnswer":{"@type":"Answer","text":"Under the CPRA, yes in principle. Electronically delivered information must be portable and, to the extent technically feasible, in a readily useable format that lets you transmit it to another entity without hindrance, and the business must also transfer it directly to another entity at your request. In practice the phrase technically feasible carries a lot of weight, which is why real exports vary."}},
    {"@type":"Question","name":"Why do my Google Photos lose their dates when I export them?","acceptedAnswer":{"@type":"Answer","text":"Google Takeout writes dates, GPS coordinates and descriptions into a companion JSON file next to each image rather than leaving them in the photo's EXIF data. The information is not lost, but it is not inside the file either, so anything you import the folder into may date every picture to the export day until the metadata is written back."}},
    {"@type":"Question","name":"Does Google Takeout include albums other people shared with me?","acceptedAnswer":{"@type":"Answer","text":"No. Takeout exports photos you uploaded. Shared albums are skipped and you are not warned. Save shared images into your own library before exporting."}},
    {"@type":"Question","name":"Does Apple's privacy export include my iCloud photos?","acceptedAnswer":{"@type":"Answer","text":"No. The privacy.apple.com archive covers account data such as contacts, calendar and repair history, and provides limited metadata rather than full messages. Your iCloud Photos library and Drive files require a separate download. Archives take three to seven days to prepare and links stay live for 14 days."}},
    {"@type":"Question","name":"How long do I have to download an export before the link expires?","acceptedAnswer":{"@type":"Answer","text":"It varies and it is shorter than people expect. Google's links expire after about one week and Apple's stay live for 14 days. Treat an export link as a short-lived door rather than as storage."}}
  ]
}
```

## SOURCES

1. **California Privacy Rights Act (CPRA)**, in effect **1 January 2023**: electronic disclosures must be portable and, to the extent technically feasible, in a readily useable format transmittable to another entity without hindrance; **expanded beyond CCPA to require direct transfer to another entity on request.** **Statutory and practitioner analysis (IAPP, Bloomberg Law).**
2. **Google Takeout behavior:** album folders preserved; per-file companion `.json` carrying dates, GPS and descriptions rather than in-file EXIF; **shared albums skipped**; large exports split (roughly 19 archives for 100GB) with **links expiring after about one week**; duplication across year and album folders; **expect 1.5 to 2x the reported library size.** **Documented behavior, practitioner and institutional IT sources.**
3. **Apple, privacy.apple.com:** CSV, JSON and media attachments by service category; contacts, calendar, music preferences and repair records; **iCloud Photos and Drive excluded, separate download required**; **limited message metadata rather than full messages**; **three to seven days to prepare, links live 14 days.** **Vendor process documentation and practitioner guides.**
4. **Meta:** Accounts Center download covering Instagram and Facebook jointly or separately; **Transfer Your Information** supports direct transfer of Instagram photos and videos to another service. **Vendor announcement and coverage.**
5. **UK Biobank, April 2026 onward:** deidentified participant-level data already exported from the Research Analysis Platform found offered for sale; researcher access paused; platform closed close to five months; **phased reopening from September 2026 with no downloads at reopening**; **manual Output Checking System later in 2026**, **automated targeted early 2027**; airlock rolled out with reopening; new project applications suspended until late 2026; **all projects extended by six months**; **£200,000 independent security review** commissioned and accepted. **Institutional primary material plus contemporaneous trade coverage.**

**Verification notes.** The widely quoted figure of **roughly 500,000 affected UK Biobank participants is security-press reporting, not an institutional statement, and is deliberately excluded from the body.** **How the data got out has not been publicly established and this article asserts no mechanism.** Export behaviors at all three consumer platforms change without notice: **re-verify before publication**, because this is exactly the category of fact that goes stale quietly.
