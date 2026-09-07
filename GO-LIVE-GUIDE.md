# Putting Strong Roots online, on a .ca address

Two separate things happen here, and it helps to keep them apart in your head:

1. **Hosting** — a company puts your files on the internet. *(Free.)*
2. **The domain name** — you rent `strongroots.ca` and point it at the hosting.
   *(About $20–25 CAD a year.)*

Do them in that order. Your site will be live and working within about
15 minutes, on a temporary address, before you spend a cent.

---

# PART 1 — Get the site online today (free, ~10 minutes)

We'll use **Netlify**. It's free, it's fast, and updating the site later is
literally dragging a folder onto a web page.

**Step 1.** Go to <https://app.netlify.com/signup> and create a free account.
Sign up with the Strong Roots Gmail address so the account belongs to the
organisation, not to a personal address.

**Step 2.** Once you're signed in, go to <https://app.netlify.com/drop>.

**Step 3.** Open your file explorer and find the folder
`Desktop\strong-roots-website`.

**Step 4.** Drag the **whole folder** onto the dashed box on the Netlify page
and let go.

Wait about 20 seconds. Netlify gives you a live address like
`https://sparkling-otter-4f2a91.netlify.app`.

**Your website is now on the internet.** Open that link on your phone and check
it. Tap the phone numbers — they should start a call.

**Step 5.** Give it a better temporary name. In Netlify click
**Site configuration → Change site name** and enter `strongroots`.
Your address becomes `https://strongroots.netlify.app`.

You can share that link right away — with funders, on flyers, anywhere — while
you sort out the .ca name.

### How to update the site later

Make your edits, then go to your site in Netlify → **Deploys** tab → drag the
folder onto the box marked *"Drag and drop your site output folder here"*.
The new version goes live in about 20 seconds. The address never changes.

> Always drag the **folder**, not the files inside it.

---

# PART 2 — Get your .ca domain (~$20–25 CAD/year)

## Before you start: the Canadian requirement

`.ca` domains are run by CIRA and are **only** available to people and
organisations with a Canadian connection — a Canadian citizen, permanent
resident, or a business or non-profit registered in Canada. Strong Roots
qualifies. You'll just tick a box confirming it during checkout.

## Which registrar

Any of these work. Pick one:

| Registrar | Roughly | Notes |
| --- | --- | --- |
| **Rebel.ca** | ~$20/yr | Canadian company, .ca is their specialty |
| **Namecheap** | ~$20/yr | Easy interface, free privacy protection |
| **Cloudflare** | ~$15/yr | Cheapest, but the dashboard is more technical |

I'd suggest **Rebel.ca** or **Namecheap** for a first domain.

## Step 1 — Check what's available

Search for the name you want. Try in this order:

- `strongroots.ca`
- `strongrootshelpline.ca`
- `strongrootscrisis.ca`
- `strongrootssupport.ca`

Buy the plain `.ca`. You don't need `.com`, `.net` or `.org` as well right now.

## Step 2 — Buy it

At checkout:

- **Turn ON** WHOIS/domain privacy if it's offered free. It hides your home
  address from public lookup.
- **Turn OFF** any extras they try to upsell — hosting, email hosting, SSL
  certificates, website builders. You don't need any of them. Netlify gives you
  hosting and the security certificate for free.
- Register for **2 years** if you can. It's one less thing to forget.
- Use the Strong Roots Gmail address, and **turn on auto-renew**. A crisis line
  whose website vanishes because a renewal was missed is a bad day.

## Step 3 — Tell Netlify about your domain

1. In Netlify, open your site → **Domain management** → **Add a domain**.
2. Type `strongroots.ca` (use whatever you actually bought) → **Verify** → **Add**.
3. Netlify now shows you a list of **nameservers**. They look like this:

   ```
   dns1.p05.nsone.net
   dns2.p05.nsone.net
   dns3.p05.nsone.net
   dns4.p05.nsone.net
   ```

   Leave this page open — you need to copy these.

## Step 4 — Point the domain at Netlify

1. Log in to the registrar where you bought the domain.
2. Find your domain → look for **Nameservers**, **DNS**, or **Custom DNS**.
3. Choose the option for **custom nameservers**.
4. Delete what's there and paste in the four Netlify nameservers, one per line.
5. Save.

## Step 5 — Wait

Changes spread across the internet in anywhere from 30 minutes to 24 hours.
Usually it's about an hour. You don't have to do anything while you wait.

## Step 6 — Turn on HTTPS

Once Netlify shows your domain as **Netlify DNS ✓**, go to
**Domain management → HTTPS** and click **Verify DNS configuration**, then
**Provision certificate**. It's free and automatic.

When it's done, `https://strongroots.ca` loads your site with a padlock in the
address bar. **Do not skip this** — people are typing sensitive things into your
survey, and the padlock is what tells them the connection is private.

## Step 7 — Update the site with the real address, and let Google in

Two files to edit in your website folder:

1. **`robots.txt`** — search engines are currently **blocked**, on purpose,
   because the site is sitting on a temporary GitHub address while Rufael
   reviews it. The file has instructions inside it: delete two lines, uncomment
   three. Do this only once `strongroots.ca` actually works.
2. **`sitemap.xml`** — replace `https://strongroots.ca` with your real domain
   if it turned out to be different.

Then publish again.

> **Why blocking matters.** If Google indexes the temporary GitHub address
> first, that page competes with your real `.ca` domain in search results, and
> it puts wording nobody has approved yet in front of the public. Keep it
> blocked until launch day.

---

# PART 3 — A professional email address (optional, ~$8/month)

Right now you're using `Strongrootshelps@gmail.com`. That works, but
`hello@strongroots.ca` or `support@strongroots.ca` looks considerably more
credible to funders and partner agencies.

Once you own the domain, sign up for **Google Workspace**
(<https://workspace.google.com>) at about $8.40 CAD per user per month. It walks
you through connecting your domain, and you get the familiar Gmail interface
with your own address.

When you do, change the email in `assets/js/site.js`:

```js
email: "hello@strongroots.ca",
```

Re-drag the folder to Netlify and every page updates.

---

# PART 4 — Social media, when you're ready

Grab the same handle everywhere so people can find you:
**@strongrootshelpline** (or whatever is free on all four).

- Instagram — <https://instagram.com>
- Facebook — create a **Page**, not a personal profile
- LinkedIn — create a **Company Page**
- TikTok — <https://tiktok.com>

Use `assets/img/logo-mark.png` as the profile picture on all of them (it's the
tree with a transparent background, so it looks clean in a circle), and
`assets/img/rufael-square.jpg` for Rufael's personal LinkedIn.

Then add each link to `assets/js/site.js` as described in **HOW-TO-EDIT.md**
and re-publish. The icons appear in the footer automatically.

---

# Quick reference

| Task | Where |
| --- | --- |
| Update the live site | Netlify → Deploys → drag the folder |
| Change phone / email / hours | `assets/js/site.js` |
| Add a social media link | `assets/js/site.js` |
| Renew the domain | Your registrar (turn on auto-renew!) |
| See survey answers | Your Google Sheet |

---

# A few things worth doing before you promote the site widely

1. **Test the phone numbers.** Tap them on a real phone from a real browser and
   confirm they ring the right line.
2. **Read the founder's letter.** I wrote it in Rufael's voice based on your
   mission document. It's attributed to a real person, so he should read every
   word and change anything that doesn't sound like him.
3. **Decide what "24/7" means in practice.** The site says the lines are open
   around the clock. Make sure someone actually answers, or soften the wording
   until you're staffed for it — for a crisis line, an unanswered promise is
   worse than a smaller one.
4. **Write a privacy note.** Even a short page saying what you do and don't
   record from calls and surveys builds trust, and funders often ask for it.
