# How to change things on your website

You do not need to know how to code. Almost everything you'll want to change
lives in **one file**, and the rest is plain English inside the page files.

Open files with **Notepad** (right-click the file → Open with → Notepad),
or better, download the free **Visual Studio Code** editor — it colours the
text so it's easier to see what you're doing.

**Golden rule:** only change the words *between the quote marks* or *between
the `>` and `<` symbols*. Leave the symbols themselves alone.

---

## The one file that controls the whole site

`assets/js/site.js`

Open it. The top section is a settings list. Change something there once and it
updates on **every page** — the menu, the footer, the phone buttons, everything.

### Change a phone number

Find this near the top:

```js
phones: [
  { label: "Main line",   number: "437-254-5863", dial: "+14372545863" },
  { label: "Second line", number: "647-572-4069", dial: "+16475724069" }
],
```

- `number` is what people **see**.
- `dial` is what actually **gets dialled** when someone taps it on a phone.
  Always write it as `+1` followed by the 10 digits, no spaces or dashes.

To add a third line, copy one whole `{ ... }` line, paste it underneath, and put
a comma at the end of the line above it.

### Change the email address

```js
email: "Strongrootshelps@gmail.com",
```

### Change the hours

```js
hours: "Open 24 hours a day, 7 days a week",
```

---

## Adding your Instagram, Facebook, LinkedIn and TikTok

This is already built in and waiting. In `assets/js/site.js` find:

```js
social: {
  instagram: "",
  facebook:  "",
  linkedin:  "",
  tiktok:    "",
  youtube:   "",
  x:         ""
},
```

When your Instagram account is ready, paste the full link between the quote
marks:

```js
instagram: "https://www.instagram.com/strongrootshelpline",
```

Save the file. That's it — the Instagram icon now appears in the footer of
every page, correctly styled, with the right link.

**Any social account left empty (`""`) is simply hidden.** So you can add them
one at a time as you create them. Nothing else needs to change.

---

## Changing the words on a page

Each page is its own file:

| What you want to change | Open this file |
| --- | --- |
| The front page | `index.html` |
| Mission, vision, founder's letter | `about.html` |
| The list of services | `services.html` |
| "Get Support" page | `get-help.html` |
| Contact page | `contact.html` |
| The community survey | `survey.html` |

Inside, the text you can safely edit sits between tags like this:

```html
<h2>Support that meets you where you are</h2>
<p>Whatever brought you to the phone, you can start anywhere.</p>
```

Change `Support that meets you where you are` to whatever you want. Leave the
`<h2>` and `</h2>` alone.

Every section has a comment above it in capital letters, like
`<!-- ===== SERVICES ===== -->`, so you can find your way around.

---

## Changing a photo

All pictures live in `assets/img/`.

To replace the founder photo, save your new picture as
`assets/img/rufael-portrait.jpg` (same name, replacing the old one). The
website will pick it up automatically.

Files already there:

| File | What it is |
| --- | --- |
| `rufael-portrait.jpg` | The retouched founder photo on the deep indigo background |
| `rufael-portrait-light.jpg` | The same photo on a light grey background |
| `rufael-cutout.png` | The photo with **no background at all** — useful for posters and social posts |
| `rufael-square.jpg` | Square crop, good for Instagram or LinkedIn profile pictures |
| `logo-mark.png` | Just the tree, transparent background |
| `logo-full.png` | The full logo with the words, transparent background |

**To use the light version instead**, open `index.html`, find
`rufael-portrait.jpg` and change it to `rufael-portrait-light.jpg`.
Do the same in `about.html`.

---

## Changing the colours

Open `assets/css/styles.css`. The very top has a list like this:

```css
--ink: #12103A;      /* deep indigo — dark sections and headings */
--violet: #5B4BE8;   /* main action colour */
--coral: #FF6A4D;    /* "call now" colour */
--gold: #E8A93A;     /* small accents, echoes the logo */
```

Change a colour code there and it updates everywhere on the site.
You can pick new colour codes at <https://coolors.co>.

---

## Adding a whole new page

1. Copy `contact.html` and rename the copy, e.g. `donate.html`.
2. Open it and change the title, heading and text.
3. Open `assets/js/site.js` and add it to the menu:

```js
nav: [
  { label: "Home",             href: "index.html"    },
  { label: "About Us",         href: "about.html"    },
  { label: "Our Services",     href: "services.html" },
  { label: "Get Support",      href: "get-help.html" },
  { label: "Community Survey", href: "survey.html"   },
  { label: "Contact",          href: "contact.html"  },
  { label: "Donate",           href: "donate.html"   }
]
```

Note the comma at the end of every line **except the last one**.

The new page now appears in the menu on every page, and in the footer, with
the correct highlighting. You never have to edit the menu in seven places.

---

## Seeing your changes before you publish

Double-click `index.html` and it opens in your browser. Make a change, save the
file, and press **F5** in the browser to see it.

If something looks broken, press **Ctrl+Z** in your editor to undo, and save
again.

---

## Where the survey answers go

The community survey still sends answers to the same Google Sheet you set up
before. The link is near the bottom of `survey.html`:

```js
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfyc.../exec";
```

You only need to touch that if you ever rebuild the Google Apps Script.

---

## Later on: client accounts

When you're ready for clients to create accounts and log in, that needs more
than plain web pages — it needs a database and secure sign-in, plus a privacy
policy and a plan for storing personal information safely. That's a real
project, not a quick add-on, so plan for it properly when the time comes.
The site is built so it can be added later without starting over.
