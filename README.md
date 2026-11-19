# Natal de Sorrisos campaign site

One-page static site for the Casa Aura + Brown Umeed Christmas gift drive. No build step, no server. Everything the team edits lives in `data.js`.

```
index.html     page structure, tree artwork, gift illustrations
styles.css     styling
app.js         logic (languages, live exchange rate, popovers, status updates)
data.js        EDIT THIS: payment handles, form link, status sheet link, gifts
assets/        logos, photos, favicon
.nojekyll      tells GitHub Pages to serve the files as they are
```

## 1. Hosting (GitHub Pages)

The site lives in the repository `mspancho/natal-de-sorrisos` and is served at
`https://mspancho.github.io/natal-de-sorrisos/`.

Deployment is automatic. The workflow in `.github/workflows/pages.yml` runs on every push to `main`, turns Pages on the first time, and publishes the files. A push shows up on the live site after about a minute (watch the **Actions** tab if you are curious).

If the first workflow run ever fails with a permissions message, open **Settings → Pages** once, set **Source** to **GitHub Actions**, and re-run the workflow from the Actions tab.

Every later change is the same loop: edit a file (usually `data.js`), commit, push, wait a minute.

## 2. Payments (already filled in)

In `data.js`:

```js
venmo: { username: "brown_umeed" },
zelle: { recipient: "7862662630", display: "786-266-2630", accountName: "Brown Umeed", qrImage: "" },
```

Venmo buttons open `https://venmo.com/brown_umeed?txn=pay&amount=25&note=Natal de Sorrisos #04` with the amount and note filled in. Zelle has no web link, so the Zelle button shows the number and the note with copy buttons. If you export the Zelle QR code from the bank app, save the image as `assets/zelle-qr.png` and set `qrImage: "assets/zelle-qr.png"`.

## 3. The confirmation form (Google Forms)

The form does two jobs: the donor tells you which gift they covered, and chooses whether to stay anonymous or share their details with the family.

### Create the form

Make a new Google Form with these questions, in this order (the order matters for the formulas below):

1. **Which gift did you cover?** Dropdown, required. Paste these ten options exactly:
   ```
   01 - Mix Ball dump truck
   02 - Miyo baby doll with sounds and accessories
   03 - Classic 1601 play kitchen
   04 - Hot Wheels City garage (HDR28)
   05 - Barbie Fashionistas doll (HYT88)
   06 - LEGO City tractor, 204 pieces (60498)
   07 - RX 100 XXVI futsal ball
   08 - Bluetooth headphones (TAH1108BK/55)
   09 - Pitt hand-lettering pen set, 6 pens
   10 - Jenga wooden stacking game
   ```
2. **Amount sent (US$)** Short answer.
3. **How did you pay?** Multiple choice: Venmo, Zelle.
4. **Would you like to stay anonymous?** Multiple choice, required:
   - Keep me anonymous
   - You may share my name and message with the family
5. **Your name** Short answer (optional, used only if they chose to share).
6. **Email** Short answer (optional, for a thank-you and an update after the celebration).
7. **A message for the child or family** Paragraph (optional).

If you later rename a gift in `data.js`, keep the form option in sync, or set `formLabel: "exact option text"` on that gift so the pre-fill still matches.

### Connect the form to the site

1. Click **Send**, copy the link, and paste the part before `?` into `form.url` in `data.js` (it ends in `/viewform`).
2. Recommended: in the form editor, open the three-dot menu → **Get pre-filled link**. Pick any gift in question 1, type any number in question 2, and click **Get link**. The link contains `entry.123456789=01+-+Mix...` and `entry.987654321=26`. Copy the two `entry.` ids into `form.giftEntry` and `form.amountEntry`. The site then opens the form with the right gift already selected.

## 4. Lighting up ornaments automatically (Google Sheets)

Donor names and emails must stay private, so the site never reads the responses tab. Instead, a small **Status** tab publishes only two numbers per gift.

1. In the form, open **Responses → Link to Sheets**. A spreadsheet appears with a tab called `Form Responses 1` (question 1 lands in column B).
2. Add a new tab named `Status`. Fill in:

   | A | B | C |
   |---|---|---|
   | gift_id | claimed | quantity |
   | 01 | `=COUNTIF('Form Responses 1'!$B:$B, TEXT(A2,"00")&" - *")` | 1 |
   | 02 | (drag the formula down) | 1 |
   | … through 10 | | |

   `claimed` counts confirmations for that gift. `quantity` is how many of that gift Casa Aura would like. An ornament lights up when `claimed >= quantity`.
   Prefer to light ornaments only after the money has actually arrived? Replace the formula in column B with numbers you type by hand after checking Venmo and Zelle.
3. **File → Share → Publish to web**. In the first dropdown choose the `Status` tab (not "Entire document"), in the second choose **Comma-separated values (.csv)**, keep "Automatically republish when changes are made" on, and click **Publish**. Copy the link.
4. Paste the link into `statusCsvUrl` in `data.js`.

The site re-reads the sheet every 60 seconds while the page is open. Google can take up to five minutes to republish after a new response, so an ornament may light up a few minutes after someone submits the form.

Until `statusCsvUrl` is set, the site uses the `claimed` numbers written in `data.js`, which you can also edit by hand.

## 5. Editing gifts

Each gift in `data.js` has:

```js
{
  id: "04",                                  // used in payment notes: "Natal de Sorrisos #04"
  name: { en: "...", pt: "...", es: "..." },
  brand: "Mattel",
  ageMin: 4, ageMax: 8,
  priceBrl: 139.90,                          // price in reais; dollars are computed live
  store: "Ri Happy", url: "https://...",     // link under the gift
  illustration: "garage",                    // truck, doll, kitchen, garage, dress, tractor, ball, headphones, pens, blocks
  image: "",                                 // optional photo, e.g. "assets/gifts/04.jpg" (square works best)
  quantity: 1,
  claimed: 0
}
```

The ten ornament positions on the tree are fixed (rows of 1, 2, 3, and 4). If you add more than ten gifts, the extras share the last position, so keep the list at ten or ask for a bigger tree.

Store photos from the retailers are not included because they belong to the stores. If Casa Aura photographs the gifts, or a retailer gives permission, drop the photo in `assets/gifts/` and set `image`.

## 6. Other settings

- `defaultLanguage`: `"auto"` follows the visitor's browser (English, Portuguese, or Spanish). Use `"en"`, `"pt"`, or `"es"` to force one.
- `fx.brlPerUsd`: fallback exchange rate, used only if the live rate (frankfurter.app, then open.er-api.com) cannot be fetched. Dollar amounts are rounded up to the next whole dollar.
- `pricesCheckedOn`: date shown in the fine print.
- `contact` and `casaAura`: emails and links used in the footer and partner cards.

## Checking everything before launch

1. Open the site on a phone and a laptop. Hover (or tap) a few ornaments, click Venmo once to see the amount and note arrive in the app, and cancel.
2. Submit a test response in the form for gift 10, wait a few minutes, and confirm ornament 10 lights up. Delete the test row from `Form Responses 1` afterwards.
3. Switch between EN, PT, and ES with the buttons in the header.
