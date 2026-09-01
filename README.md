# Streamline Plumbing

Marketing site for Streamline Plumbing — plumbing and maintenance across
Nelspruit and White River, Mpumalanga.

Built with TanStack Start (React 19, Vite, Tailwind) and originally scaffolded in
[Lovable](https://lovable.dev/projects/c78a1871-1152-4a30-8dac-2393258ed53b).

## Layout

| Path | What it is |
| --- | --- |
| `src/routes/` | One route per page — home, about, services, per-area landing pages, gallery, blog, contact, schedule |
| `src/components/ui/` | shadcn/ui primitives |
| `public/` | Favicons, `robots.txt`, images and fonts served as-is |
| `streamline-plumbing-surge/` | **The prerendered export that gets deployed** — one HTML file per route plus hashed assets |
| `remotion/` | Remotion project for the showreel video |
| `scripts/set-site-url.mjs` | Stamps the live origin into the export's canonical, `og:url`, JSON-LD and sitemap URLs |

## Develop

```sh
bun install
bun run dev        # http://localhost:5173
bun run lint
bun run build
```

## Deploy

Live at **https://streamline-plumbing.surge.sh**.

The committed export in `streamline-plumbing-surge/` is what ships, so a deploy is
an upload rather than a build — `surge ./streamline-plumbing-surge` on its own
redeploys to that domain, since it is pinned in the export's `CNAME`. For a
different domain:

```sh
node scripts/set-site-url.mjs https://your-domain.co.za   # once per domain
surge ./streamline-plumbing-surge your-domain.co.za
```

Netlify and Cloudflare Pages configs are included too. See **[DEPLOY.md](DEPLOY.md)**
for all three, the CI workflow, and the checks to run before pointing a domain at
it — in particular, **the enquiry forms are placeholders and do not submit
anywhere yet**.
