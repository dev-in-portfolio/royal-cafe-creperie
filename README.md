# Royal Cafe & Creperie — Official Client Website

This is the dedicated production repository for **Royal Cafe & Creperie** (`ROYAL CAFE AND CREPERIE LLC`), located in historic Downtown Matthews, North Carolina.

## Business Facts & Verified Operational Profile

- **Legal Entity:** ROYAL CAFE AND CREPERIE LLC
- **Public Name:** Royal Cafe & Creperie
- **Address:** 131 Matthews Station Street, Suite 1-E, Matthews, NC 28105
- **Phone:** (980) 701-0566
- **Hours:** Monday – Sunday: 9:00 AM – 3:00 PM
- **Client / Owner:** Alexis Mizrahi-Botero
- **Online Ordering:** [Smart Online Order Portal](https://royalcreperie.smartonlineorder.com)
- **Live Production / Staging Deployment:** [https://royal-cafe-creperie.netlify.app](https://royal-cafe-creperie.netlify.app)
- **Production Custom Domain (Pending Cutover):** `royalcreperie.com`

---

## Site Architecture

```text
royal-cafe-creperie/
├── index.html          # Homepage with conversion CTAs and core offerings
├── menu.html           # Verified HTML menu snapshot with Smart Online Order CTAs
├── about.html          # Verified family, ownership, and service facts
├── contact.html        # Verified hours, address, maps, and real Netlify contact form
├── thank-you.html      # Form submission confirmation page
├── 404.html            # Custom on-brand 404 error page
├── assets/
│   ├── css/
│   │   └── styles.css  # Warm Burgundy & Amber Gold responsive design system
│   ├── icons.svg        # Local accessible SVG icon sprite
│   ├── js/
│   │   └── site.js     # Centralized business config and navigation interactions
│   └── images/
│       ├── favicon.svg # Vector brand mark favicon
│       ├── hero.jpg    # Original site hero asset retained for compatibility
│       └── client/     # Optimized client-supplied WebP/JPEG photography and menu visual
├── netlify.toml        # Build rules, security headers, and legacy Weebly 301 redirects
├── netlify/edge-functions/demo-noindex.js # Demo-host-only noindex response header
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # XML sitemap
└── README.md           # Repository documentation
```

---

## Legacy URL 301 Redirects

To prevent broken links and preserve SEO rankings from the legacy Weebly website, the following 301 redirects are configured in `netlify.toml`:

- `/menu.html` → `/menu.html`
- `/about-us.html` → `/about.html`
- `/contact-info-and-hours.html` → `/contact.html`
- `/services.html` → `/contact.html`

---

## Netlify Forms & Ordering Configuration

1. **Food Orders:** Routed directly to the client's live `Smart Online Order` portal (`https://royalcreperie.smartonlineorder.com`) for immediate kitchen ticket printing and front counter pickup.
2. **Contact & Inquiries:** Handled by native Netlify Forms with honeypot spam protection (`bot-field`). Submissions redirect to `/thank-you.html`.

## Client Media & Social Links

- Client-supplied photography is optimized under `assets/images/client/` and used across the homepage, menu, about, and contact pages with semantic alt text and responsive loading behavior.
- The supplied no-price to-go menu visual is presented as a reference; Smart Online Order remains the source of live pricing, availability, and ordering.
- Instagram is linked at [@royalcrepes](https://www.instagram.com/royalcrepes) through a profile-forward “Latest on Instagram” section. A live feed is not embedded because client/API credentials were not supplied.
- The Edge Function adds `X-Robots-Tag: noindex, nofollow` only on `*.netlify.app` demo hosts; future custom-domain production hosts are not intentionally noindexed.

## Menu Snapshot & Interface

- `menu.html` contains the current implementation-time Smart Online Order category and item snapshot without prices; the live portal remains authoritative for current pricing, modifiers, availability, and checkout.
- Category navigation is anchored for mobile and desktop, with a mobile-only sticky ordering shortcut.
- Interface controls and social links use the local SVG sprite rather than emoji or text glyphs.
