/* ==========================================================================
   STRONG ROOTS CRISIS HELPLINE — site settings
   ==========================================================================

   THIS IS THE ONLY FILE YOU NEED TO EDIT FOR:
     - phone numbers
     - email address
     - hours
     - Instagram / Facebook / LinkedIn / TikTok links
     - the menu at the top of every page

   Change something here once and it updates on EVERY page of the website.
   Only change the text inside the "quote marks". Keep the commas.
   ========================================================================== */

var SITE = {

  /* ---- the basics ------------------------------------------------------ */
  name:     "Strong Roots",
  nameSub:  "Crisis Helpline",
  fullName: "Strong Roots Crisis Helpline",
  tagline:  "Listen. Support. Empower. Together.",
  hours:    "Open 24 hours a day, 7 days a week",
  serving:  "Serving Ontario, Canada",

  /* ---- phone numbers ---------------------------------------------------
     "label"  is the small grey text above the number.
     "number" is what people see.
     "dial"   is what actually gets dialled — digits only, starting with +1.
     To add a third number, copy one { ... } block and add a comma before it.
     ---------------------------------------------------------------------- */
  phones: [
    { label: "Main line",   number: "437-254-5863", dial: "+14372545863" },
    { label: "Second line", number: "647-572-4069", dial: "+16475724069" }
  ],

  /* ---- email ----------------------------------------------------------- */
  email: "Strongrootshelps@gmail.com",

  /* ---- social media ----------------------------------------------------
     LEAVE THE QUOTE MARKS EMPTY ("") UNTIL YOU HAVE THE ACCOUNT.
     An empty one is simply hidden from the website.
     When your Instagram is ready, paste the full link, for example:
        instagram: "https://www.instagram.com/strongrootshelpline",
     ---------------------------------------------------------------------- */
  social: {
    instagram: "",
    facebook:  "",
    linkedin:  "",
    tiktok:    "",
    youtube:   "",
    x:         ""
  },

  /* ---- the menu at the top of every page -------------------------------
     To add a page later: create the .html file, then copy a line below,
     change the text and the file name, and add a comma at the end.
     ---------------------------------------------------------------------- */
  nav: [
    { label: "Home",        href: "index.html"    },
    { label: "About Us",    href: "about.html"    },
    { label: "Our Services", href: "services.html" },
    { label: "Get Support", href: "get-help.html" },
    { label: "Community Survey", href: "survey.html" },
    { label: "Contact",     href: "contact.html"  }
  ],

  /* ---- outside crisis lines shown on the site --------------------------- */
  resources: [
    { num: "9-8-8",          name: "Suicide Crisis Helpline",  note: "Call or text 988 — free, 24/7, across Canada" },
    { num: "1-833-294-8650", name: "Black Youth Helpline",     note: "Culturally focused support for Black youth and families" },
    { num: "2-1-1",          name: "211 Ontario",              note: "Community, social and government services — 24/7, 150+ languages" },
    { num: "1-866-531-2600", name: "ConnexOntario",            note: "Free 24/7 information on mental health and addiction services" }
  ]
};

/* ==========================================================================
   ↓↓↓  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE  ↓↓↓
   This part builds the top menu, the footer and the phone bar on every page.
   ========================================================================== */

(function () {
  "use strict";

  var ICON = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
    mail:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    facebook:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>',
    linkedin:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18.3H5.6V9.7h2.7v8.6ZM7 8.5a1.6 1.6 0 1 1 0-3.1 1.6 1.6 0 0 1 0 3.1Zm11.4 9.8h-2.7v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.7V9.7h2.6v1.2a2.9 2.9 0 0 1 2.6-1.4c2.7 0 3.2 1.8 3.2 4.1v4.7Z"/></svg>',
    tiktok:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8a4.8 4.8 0 0 1-1.1-3.1h-3v12.4a2.5 2.5 0 1 1-1.8-2.4V9.6a5.6 5.6 0 1 0 4.8 5.5V9.3a7.8 7.8 0 0 0 4.5 1.4V7.6a4.8 4.8 0 0 1-3.4-1.8Z"/></svg>',
    youtube:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2 28 28 0 0 0 1 12a28 28 0 0 0 .5 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 23 12a28 28 0 0 0-.5-4.8ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z"/></svg>',
    x:         '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L4.9 21H1.8l7.3-8.3L1.5 3h6.4l4.4 5.9L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z"/></svg>'
  };

  var SOCIAL_LABEL = {
    instagram: "Instagram", facebook: "Facebook", linkedin: "LinkedIn",
    tiktok: "TikTok", youtube: "YouTube", x: "X"
  };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* which page are we on? */
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";

  function navHTML(cls) {
    return SITE.nav.map(function (item) {
      var active = item.href.toLowerCase() === here ? ' class="is-active"' : "";
      return '<a href="' + esc(item.href) + '"' + active + '>' + esc(item.label) + "</a>";
    }).join("");
  }

  function socialHTML() {
    var out = "";
    for (var key in SITE.social) {
      var url = (SITE.social[key] || "").trim();
      if (!url || !ICON[key]) continue;
      out += '<a href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' +
             esc(SITE.fullName + " on " + (SOCIAL_LABEL[key] || key)) + '">' + ICON[key] + "</a>";
    }
    return out ? '<div class="socials">' + out + "</div>" : "";
  }

  var firstPhone = SITE.phones[0] || { number: "", dial: "" };

  /* ---------------------------------------------------------------- header */
  function buildHeader() {
    var host = document.querySelector("[data-site-header]");
    if (!host) return;
    host.className = "site-header";
    host.innerHTML =
      '<div class="wrap"><div class="nav">' +
        '<a class="brand" href="index.html" aria-label="' + esc(SITE.fullName) + ' — home">' +
          '<img class="brand-mark" src="assets/img/logo-mark.png" alt="" width="46" height="46">' +
          '<span class="brand-text">' +
            '<span class="brand-name">' + esc(SITE.name) + "</span>" +
            '<span class="brand-sub">' + esc(SITE.nameSub) + "</span>" +
          "</span>" +
        "</a>" +
        '<nav class="nav-links" aria-label="Main menu">' + navHTML() + "</nav>" +
        '<div class="nav-actions">' +
          '<a class="btn btn-call" href="tel:' + esc(firstPhone.dial) + '">' + ICON.phone +
            '<span class="nav-call-label">' + esc(firstPhone.number) + "</span></a>" +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open menu">' +
            "<span></span><span></span><span></span></button>" +
        "</div>" +
      "</div></div>" +
      '<nav class="mobile-menu" id="mobileMenu" aria-label="Mobile menu">' + navHTML() + "</nav>";

    var btn = host.querySelector(".nav-toggle");
    var menu = host.querySelector("#mobileMenu");
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      btn.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      menu.classList.toggle("is-open", !open);
    });

    var onScroll = function () { host.classList.toggle("is-stuck", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------- footer */
  function buildFooter() {
    var host = document.querySelector("[data-site-footer]");
    if (!host) return;

    var phoneLinks = SITE.phones.map(function (p) {
      return '<a href="tel:' + esc(p.dial) + '">' + ICON.phone + esc(p.number) + "</a>";
    }).join("");

    host.className = "site-footer";
    host.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-top">' +

          "<div>" +
            '<div class="footer-brand">' +
              '<img src="assets/img/logo-mark.png" alt="" width="52" height="52">' +
              '<span class="brand-text">' +
                '<span class="brand-name">' + esc(SITE.name) + "</span>" +
                '<span class="brand-sub">' + esc(SITE.nameSub) + "</span>" +
              "</span>" +
            "</div>" +
            "<p>Confidential, culturally responsive phone support and community navigation for African, Black and Caribbean communities — and for anyone who needs someone to talk to.</p>" +
            socialHTML() +
          "</div>" +

          "<div>" +
            '<p class="footer-title">Explore</p>' +
            '<div class="footer-links">' + navHTML() + "</div>" +
          "</div>" +

          "<div>" +
            '<p class="footer-title">Reach us any time</p>' +
            '<div class="footer-contact">' +
              phoneLinks +
              '<a href="mailto:' + esc(SITE.email) + '">' + ICON.mail + esc(SITE.email) + "</a>" +
              "<span style=\"display:flex;align-items:center;gap:11px;font-size:15px\">" + ICON.clock + esc(SITE.hours) + "</span>" +
              "<span style=\"display:flex;align-items:center;gap:11px;font-size:15px\">" + ICON.pin + esc(SITE.serving) + "</span>" +
            "</div>" +
          "</div>" +

        "</div>" +

        '<div class="footer-bottom">' +
          "<span>© <span data-year></span> " + esc(SITE.fullName) + ". " + esc(SITE.tagline) + "</span>" +
          "<span>In an emergency, call 911. For crisis support any time, call or text 988.</span>" +
        "</div>" +
      "</div>";
  }

  /* ------------------------------------------------- sticky mobile buttons */
  function buildCallBar() {
    if (document.body.hasAttribute("data-no-call-bar")) return;
    var bar = document.createElement("div");
    bar.className = "call-bar";
    bar.innerHTML =
      '<a class="btn btn-call" href="tel:' + esc(firstPhone.dial) + '">' + ICON.phone + "Call now</a>" +
      '<a class="btn btn-ghost" href="mailto:' + esc(SITE.email) + '">' + ICON.mail + "Email</a>";
    document.body.appendChild(bar);
    document.body.classList.add("has-call-bar");
  }

  /* --------------------------------------------------- fill-in-the-blanks */
  function fillTokens() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
    document.querySelectorAll("[data-phone-list]").forEach(function (el) {
      el.innerHTML = SITE.phones.map(function (p) {
        return '<a class="phone-item" href="tel:' + esc(p.dial) + '">' +
                 '<span class="phone-icon">' + ICON.phone + "</span>" +
                 '<span class="phone-meta">' +
                   '<span class="phone-label">' + esc(p.label) + "</span>" +
                   '<span class="phone-number">' + esc(p.number) + "</span>" +
                 "</span></a>";
      }).join("");
    });
    document.querySelectorAll("[data-email-link]").forEach(function (el) {
      el.setAttribute("href", "mailto:" + SITE.email);
      if (!el.textContent.trim()) el.textContent = SITE.email;
    });
    document.querySelectorAll("[data-phone-link]").forEach(function (el) {
      el.setAttribute("href", "tel:" + firstPhone.dial);
      if (!el.textContent.trim()) el.textContent = firstPhone.number;
    });
    document.querySelectorAll("[data-hours]").forEach(function (el) { el.textContent = SITE.hours; });
    document.querySelectorAll("[data-resources]").forEach(function (el) {
      el.innerHTML = SITE.resources.map(function (r) {
        return '<div class="resource"><span class="resource-num">' + esc(r.num) + "</span>" +
               "<span><b>" + esc(r.name) + "</b><span>" + esc(r.note) + "</span></span></div>";
      }).join("");
    });
  }

  /* --------------------------------------------------------- scroll reveal */
  function reveals() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  }

  function init() {
    buildHeader();
    buildFooter();
    fillTokens();
    buildCallBar();
    reveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
