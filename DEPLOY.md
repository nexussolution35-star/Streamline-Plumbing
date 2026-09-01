# Deploying Streamline Plumbing

The live site is the prerendered export in **`streamline-plumbing-surge/`** — one
real HTML file per route plus hashed assets. It is committed, so publishing is an
upload, not a build. The React source in `src/` is what you edit; the export is
what you ship.

Every host below serves the same folder. Pick one.

## Before the first deploy: stamp the domain

The export ships root-relative `<link rel="canonical">`, `og:url`, JSON-LD `url`
and `<loc>` values. Search engines need absolute URLs, so run this once against
the domain you are deploying to:

```sh
node scripts/set-site-url.mjs https://streamlineplumbing.co.za
```

It is idempotent, and the Surge workflow runs it automatically. Commit the result
if you deploy by hand.

## Surge

The folder is named for it, and `200.html` is already the SPA fallback Surge
expects.

```sh
npm i -g surge
surge login                                    # once
surge ./streamline-plumbing-surge streamlineplumbing.co.za
```

For a custom domain, also point a DNS A record at `45.55.110.124` and a CNAME for
`www` at `na-west1.surge.sh`.

To deploy from CI instead, run `surge token`, then add to this repository:

| Kind | Name | Value |
| --- | --- | --- |
| Secret | `SURGE_LOGIN` | the Surge account email |
| Secret | `SURGE_TOKEN` | output of `surge token` |
| Variable | `SURGE_DOMAIN` | e.g. `streamlineplumbing.co.za` |

Then run **Actions → Deploy to Surge → Run workflow**. It also fires on pushes to
`main` that touch the export.

## Netlify

`netlify.toml` already sets the publish directory and declares no build command.

```sh
npm i -g netlify-cli
netlify deploy --prod --dir streamline-plumbing-surge
```

Or connect the repo in the Netlify dashboard — it will read `netlify.toml`.
Leave the build command empty; there is nothing to build.

## Cloudflare Pages

```sh
npm i -g wrangler
wrangler pages deploy streamline-plumbing-surge --project-name streamline-plumbing
```

In the dashboard, set the build output directory to `streamline-plumbing-surge`
and leave the build command empty.

## What the config files do

| File | Host | Purpose |
| --- | --- | --- |
| `streamline-plumbing-surge/_redirects` | Netlify, Cloudflare | Falls unknown paths back to `200.html` so client-side routes resolve. Existing files always win, so the prerendered pages are served as-is. |
| `streamline-plumbing-surge/_headers` | Netlify, Cloudflare | Caches `/assets/*` for a year — safe, the filenames are content-hashed. |
| `streamline-plumbing-surge/200.html` | Surge | Surge's own SPA fallback. |
| `netlify.toml` | Netlify | Publish directory, no build command. |

Surge ignores `_redirects` and `_headers`; the others ignore `200.html`. Keeping
all four means the same folder deploys anywhere.

## Rebuilding the export

The export was generated from this source with a prerender pass. To regenerate:

```sh
bun install
bun run build
```

Then replace `streamline-plumbing-surge/` with the prerendered output, re-run
`scripts/set-site-url.mjs`, and commit. Copy `_headers`, `_redirects` and
`200.html` across if the build does not emit them — `public/_headers` and
`public/_redirects` exist so a Vite build carries them through automatically.

## Before going live

**The forms do not work.** The "Schedule an appointment" block on the home page,
`/contact-us` and `/schedule-now` render inputs but there is no `<form>` element
anywhere on the site, the submit buttons are `type="button"` with no handler, and
each card prints "Placeholder form — submissions are not sent from this preview."
The CAPTCHA is a grey box, not a widget. A visitor who fills one in gets no
feedback and you get no lead.

Deploying is safe — the phone number and email in the header, footer and
emergency callouts are real `tel:`/`mailto:` links and work fine — but fix the
forms before you advertise the URL, or the site quietly loses every enquiry that
does not phone. Wiring them up means a `<form>` with a real submit handler
posting to a form service or a TanStack server function, plus a visible success
and error state; the error path should tell the visitor to phone instead.

Also confirm before launch:

- **Contact details** — the site advertises `082 900 3389` and
  `info@streamlineplumbing.co.za` in several places. Check both are current.
- **`robots.txt`** — allows everything and points at the sitemap. Correct for
  production, wrong for a staging URL; block staging deploys if you make one.
