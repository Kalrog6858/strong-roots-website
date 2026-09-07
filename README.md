# Strong Roots Crisis Helpline — website

Confidential, culturally responsive phone support and community navigation for
African, Black and Caribbean communities in Ontario — and for anyone who needs
someone to talk to.

**Listen. Support. Empower. Together.**

---

## For reviewers

You're most likely here to look at the site itself rather than the code.

- **Live preview:** see the link in the repository's *About* section, or the
  **github-pages** deployment on the right-hand side of this page.
- Have a look on your phone as well as a computer — most people in crisis will
  reach this on a phone.

### Things we'd especially like your eyes on

1. **Tone.** Does it sound like somewhere you'd actually call? Anything that
   reads as cold, clinical, or preachy?
2. **The founder's letter** on the home and About pages, and the **Chief
   Program Officer's** sections. These are drafts written from our mission
   documents — the wording needs Rufael's and Kaleab's approval.
3. **The 24/7 claim.** We say the lines are open around the clock. Is that
   something we can stand behind from day one?
4. **What's missing.** Anything you'd expect to find on a crisis helpline's
   website that isn't here.

### Known gaps

- There is no privacy policy page yet.
- The domain is temporary; a `.ca` address is next.

---

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About Us | `about.html` |
| Our Services | `services.html` |
| Get Support | `get-help.html` |
| Community Survey | `survey.html` |
| Contact | `contact.html` |
| Not found | `404.html` |

## How it's built

Plain HTML, CSS and JavaScript. No build step, no framework, no dependencies —
open `index.html` in a browser and it runs.

Everything site-wide (phone numbers, email, hours, the menu, social media
links) is set once in the `SITE` object at the top of
[`assets/js/site.js`](assets/js/site.js), which renders the header, footer and
mobile call bar on every page. Colours are CSS custom properties at the top of
[`assets/css/styles.css`](assets/css/styles.css).

The community survey posts responses to a Google Apps Script endpoint that
writes into a private Google Sheet.

## Documentation

- [HOW-TO-EDIT.md](HOW-TO-EDIT.md) — making changes without knowing how to code
- [GO-LIVE-GUIDE.md](GO-LIVE-GUIDE.md) — publishing, and buying a `.ca` domain

## Crisis resources

This site is not a substitute for emergency services. In an emergency call
**911**. For urgent crisis support anywhere in Canada, call or text **988**.
