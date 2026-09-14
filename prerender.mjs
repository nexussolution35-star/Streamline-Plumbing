/**
 * Prerender every route to static HTML for static hosts (Surge, S3, Netlify drop).
 * Calls the built SSR handler directly - no server process needed.
 * Routes come from public/sitemap.xml so there is one source of truth.
 *
 *   npm run build && npm run prerender   ->  deploy/
 */
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import handler from './dist/server/server.js'

const OUT = 'deploy'
const SITE = 'https://www.mmc.co.za'

const routes = [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((m) => m[1].replace(SITE, '') || '/')

mkdirSync(OUT, { recursive: true })
// hashed JS/CSS bundles + everything from public/ (assets, sitemap.xml, robots.txt, favicons)
cpSync('dist/client', OUT, { recursive: true })

const render = async (path) => {
  const res = await handler.fetch(new Request(`${SITE}${path}`))
  return { status: res.status, html: await res.text() }
}

let bytes = 0
for (const route of routes) {
  const { status, html } = await render(route)
  if (status !== 200) throw new Error(`${route} returned ${status} - aborting prerender`)
  // flat "<path>.html" so static hosts resolve the extensionless URL with no
  // trailing-slash redirect, keeping the served URL identical to the canonical
  const rel = route === '/' ? 'index.html' : `${route.slice(1)}.html`
  const dest = join(OUT, rel)
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, html)
  bytes += html.length
  console.log(`  ${String(html.length).padStart(7)}B  ${rel}`)
}

// a real rendered 404, never a copy of the homepage (that would be a soft 404)
const nf = await render('/__not-found__')
if (nf.status !== 404) throw new Error(`expected 404, got ${nf.status}`)
writeFileSync(join(OUT, '404.html'), nf.html)

console.log(`\nprerendered ${routes.length} routes (${(bytes / 1024).toFixed(0)} KB) + 404.html -> ${OUT}/`)
