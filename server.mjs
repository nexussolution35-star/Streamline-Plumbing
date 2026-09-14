/**
 * Minimal Node host for the TanStack Start build.
 * Serves dist/client as static files, then hands everything else to the SSR handler.
 */
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import handler from './dist/server/server.js'

const CLIENT = join(process.cwd(), 'dist/client')
const PORT = Number(process.env.PORT || 3000)
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4', '.pdf': 'application/pdf',
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`)
    // 1. static assets straight off disk
    const rel = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '')
    const file = join(CLIENT, rel)
    if (rel !== '/' && file.startsWith(CLIENT) && existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, {
        'content-type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream',
        'cache-control': rel.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600',
      })
      createReadStream(file).pipe(res)
      return
    }
    // 2. everything else is server-rendered
    const body = ['GET', 'HEAD'].includes(req.method || 'GET')
      ? undefined
      : await new Promise((resolve) => {
          const chunks = []
          req.on('data', (c) => chunks.push(c))
          req.on('end', () => resolve(Buffer.concat(chunks)))
        })
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body,
      duplex: body ? 'half' : undefined,
    })
    const response = await handler.fetch(request)
    res.writeHead(response.status, Object.fromEntries(response.headers))
    if (response.body) {
      const reader = response.body.getReader()
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        res.write(value)
      }
    }
    res.end()
  } catch (err) {
    console.error(err)
    res.writeHead(500, { 'content-type': 'text/plain' })
    res.end('Internal Server Error')
  }
}).listen(PORT, () => console.log(`MMC site listening on http://localhost:${PORT}`))
