# Deploying Streamline Plumbing

The live site is the prerendered export in **`streamline-plumbing-surge/`** — one
real HTML file per route plus hashed assets. It is committed, so publishing is an
upload, not a build. The React source in `src/` is what you edit; the export is
what you ship.

Every host below serves the same folder. Pick one.

## Currently live

**https://streamline-plumbing.surge.sh** — deployed to Surge. The domain is pinned in
`streamline-plumbing-surge/CNAME`, so a bare `surge ./streamline-plumbing-surge`
redeploys to the same place.

Two things about that URL specifically:

- **It is not indexable.** Surge serves its own `User-agent: * / Disallow: /` on
  every `*.surge.sh` subdomain and ignores the `robots.txt` in the export. That
  is deliberate on Surge's part — preview subdomains stay out of search results.
  Indexing needs a custom domain.
- **Assets are not cached.** Surge ignores `_headers`, so `/assets/*` comes back
  `max-age=0, must-revalidate` instead of the year-long cache the file asks for.
  Netlify and Cloudflare Pages both honour it.

Neither affects whether the site works — all 24 routes serve, and the deployed
bytes match this repo.

## Before the first deploy: stamp the domain

The export ships root-relative `<link rel="canonical">`, `og:url`, JSON-LD `url`
and `<loc>` values. Search engines need absolute URLs, so run this once against
the domain you are deploying to:

```sh
node scripts/set-site-url.mjs https://streamlineplumbing.co.za
```

Re-run it any time the domain changes — it moves URLs from the old origin onto
the new one, and does nothing if they already match. The export in this repo is
currently stamped with the Surge URL above; switching to
`streamlineplumbing.co.za` means re-running it with that origin, redeploying, and
committing the result. The Surge workflow runs it automatically.

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

One host difference worth knowing: Surge 301s `/about-us` to `/about-us/`, while
Netlify and Cloudflare serve the un-slashed path directly. The canonical tags and
sitemap use the un-slashed form, so on Surge they point one redirect hop away from
the final URL. Search engines follow it, so this is a tidiness issue rather than a
broken one — but if you stay on Surge long term, it is worth emitting trailing
slashes.

## Editing the export by hand

The route chunks under `assets/` are content-hashed, and editing one in place
leaves its filename claiming a hash the contents no longer match. That is
harmless on Surge, which serves everything `max-age=0`, but on Netlify or
Cloudflare the year-long `immutable` cache means a returning visitor keeps the
old chunk indefinitely. So after hand-editing the export, rebuild before moving
to either of those hosts — a rebuild regenerates the hashes and the caches break
naturally.

Anything changed in the export must also be changed in `src/`, or the next
rebuild reintroduces it.

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
