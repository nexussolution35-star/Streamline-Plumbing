# Streamline Plumbing — website

A single-file, dependency-free marketing site for a plumbing contractor.
Everything lives in `index.html`: markup, styles and behaviour. There is no
build step, no framework and no package install.

## Run it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy

Because it's one static file, any static host works. For GitHub Pages:
**Settings → Pages → Deploy from a branch**, pick the branch and the root
folder. The site is live at the Pages URL within a minute or two.

## What's on the page

| Section | Anchor | Notes |
| --- | --- | --- |
| Hero | `#top` | Headline, dual CTA, animated riser schematic (inline SVG) |
| Spec strip | — | Licensing, pricing, availability, warranty |
| Services | `#services` | Six services with scope tags and typical turnaround |
| How we work | `#process` | Three ordered steps — triage, diagnose, flat price |
| Service area | `#area` | Neighbourhood list plus out-of-area policy |
| FAQ | `#faq` | Six `<details>` accordions |
| Request a visit | `#request` | Validated booking form |
| Emergency rail | — | Persistent phone band above the footer |

## Placeholders to replace before going live

These are stand-in values, not real business details. Search `index.html`
for each and swap it:

- **Phone** — `(555) 010-7726` and the `tel:+15550107726` links (7 places).
  `555-01xx` is the reserved fictional range, so it dials nowhere.
- **Email** — `dispatch@streamlineplumbing.example`
- **Service area** — the ten neighbourhood names in `#area`, and the
  25-mile trip-charge radius in the callout beside them.
- **Hours** — the footer hours list.
- **Turnaround times** — the `service__when` values (`Same day`, `1–2 days`…).
- **Warranty term** — "2 years on all workmanship" in the spec strip and footer.

No licence or registration number is printed anywhere on the page, only the
phrase "licensed, bonded and insured". If you want to display your licence
number, add it to the spec strip and the footer base — don't ship the claim
without the number if your state requires it shown.

## Wiring up the form

The form validates in the browser and then renders a confirmation receipt.
**It does not send anything anywhere** — nothing is transmitted or stored.

In `index.html`, the submit handler builds a `data` object
(`name`, `phone`, `address`, `job`, `urgency`, `detail`) and immediately
renders the receipt. To make it deliver, `POST` that object to your booking
endpoint or form service and render the receipt in the success branch:

```js
const res = await fetch('https://your-endpoint.example/requests', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
if (!res.ok) throw new Error('Request failed');
```

Keep an error path that tells the visitor to phone instead — a booking form
that fails silently costs you the job.

## Design notes

- **Palette** — galvanised zinc ground, blue-slate ink, copper accent,
  verdigris for secondary marks. Defined once as custom properties.
- **Type** — Archivo at 78% width for condensed display, Public Sans for
  body, IBM Plex Mono for spec labels. Loaded from Google Fonts with real
  fallback stacks, so the page holds up if the fonts don't load.
- **Themes** — light, dark, and the unstamped system default are all
  handled at token level. A toggle in the header overrides the OS setting
  and persists to `localStorage`.
- **Motion** — pipe-flow animation and scroll reveals both stop under
  `prefers-reduced-motion: reduce`.
- **Accessibility** — skip link, visible focus rings, labelled form fields
  with inline errors, `role="radiogroup"` on the urgency picker, and a
  described hero schematic.
