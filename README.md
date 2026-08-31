# Streamline Plumbing — website

Static site for Streamline Plumbing (Nelspruit & White River, Mpumalanga),
deployed to GitHub Pages at
**https://nexussolution35-star.github.io/Streamline-Plumbing/**

The site is a prerendered snapshot of the TanStack Start app: one real HTML
file per route, hydrated in the browser by the bundles in `assets/`. There is
no build step in this repository — what is committed is what is served.

## Layout

| Path | What it is |
| --- | --- |
| `index.html`, `*/index.html` | One prerendered page per route (24 routes) |
| `assets/` | JS bundles, CSS, fonts, images, video |
| `200.html`, `404.html` | SPA fallback for unknown paths |
| `sitemap.xml`, `robots.txt` | Absolute URLs under the Pages origin |
| `_routes.json` | Manifest of captured routes (url, title, file, status) |
| `_headers` | Cache headers — used by Netlify/Cloudflare, ignored by Pages |
| `.nojekyll` | Stops Pages running Jekyll, which would drop `_`-prefixed files |
| `tools/set-base-path.py` | Rebases a fresh snapshot onto the Pages sub-path |

## Deploying

`.github/workflows/pages.yml` publishes the repository root to GitHub Pages on
every push to `claude/deploy-kgmcgc`, and can be run by hand from the Actions
tab.

The workflow enables Pages itself (`configure-pages` with `enablement: true`),
so Settings → Pages does not need touching. If that step is ever refused for
lack of permission, set Settings → Pages → Source → **GitHub Actions** by hand
and re-run the workflow.

## Refreshing the site from a new snapshot

The snapshot is captured for a site served from `/`, so every URL in it is
root-absolute (`/assets/…`, `/about-us`). GitHub Pages serves this repository
from `/Streamline-Plumbing/`, so a fresh capture has to be rebased before it
will work:

```sh
# replace the page/asset files with the new snapshot, then:
python3 tools/set-base-path.py /Streamline-Plumbing https://nexussolution35-star.github.io
cp 200.html 404.html
```

The script rewrites HTML attributes, inline-style `url(...)`, `srcset`
candidates, CSS, the serialized SSR manifest, the JS bundles' asset paths and
Vite's modulepreload manifest. It also patches two things that are easy to
miss:

- **Router basepath.** TanStack Start calls `router.update({basepath: ""})`
  during hydration, discarding any basepath set at router creation. Both call
  sites are patched. Without the second one the router matches
  `/Streamline-Plumbing/about-us` against bare route paths, finds nothing, and
  hydration dies on an invariant — leaving a blank page.
- **Canonical / og:url / JSON-LD.** The client head manager re-renders these
  after hydration and would replace the absolute URLs in the prerendered HTML
  with bare paths, which resolve against the wrong origin on a sub-path.

Route paths themselves (`path:`/`id:` in the bundles, and the route ids in the
SSR manifest) are deliberately left bare — the router strips the basepath
before matching, so prefixing them would break it.

The script fails loudly if the bundle shape changed and a patch did not apply.

### Moving to a custom domain

Re-run with the domain as the origin and `/` as the base, then add a `CNAME`
file and point DNS at GitHub:

```sh
python3 tools/set-base-path.py / https://streamlineplumbing.co.za
```

## Known gap in the capture

`assets/img/map-location-400.webp` — the `src` of the map image on
`/contact-us` and `/blog` — was missing from the snapshot. It has been
regenerated at 400×210 from `map-location-1200.webp` to match the `<img>`
dimensions. A future capture that includes the file will simply overwrite it.

## Contact details on the page

These are live business details, not placeholders: `082 900 3389`
(`tel:+27829003389`), `info@streamlineplumbing.co.za`, and the Instagram and
Google Maps links in the footer.
