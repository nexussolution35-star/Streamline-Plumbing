#!/usr/bin/env node
// Stamp the live origin into the prerendered export.
//
// The export ships root-relative canonical/og:url/JSON-LD values and a sitemap
// whose <loc> entries are paths. Search engines require absolute URLs in all of
// those, so run this once against the domain the site is deployed to:
//
//   node scripts/set-site-url.mjs https://streamlineplumbing.co.za
//
// It is idempotent — values already absolute are left alone — so it is safe to
// re-run after replacing the export with a fresh build.

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const origin = process.argv[2]?.replace(/\/+$/, "");
if (!origin || !/^https?:\/\/[^/]+$/.test(origin)) {
  console.error("usage: node scripts/set-site-url.mjs https://example.com");
  process.exit(1);
}

const root = "streamline-plumbing-surge";

// Only rewrite values that are root-relative paths: a leading "/" not followed
// by another "/" (which would be a protocol-relative URL already pointing out).
const abs = (path) => origin + (path === "/" ? "/" : path);
const rules = [
  [/(<link[^>]*rel="canonical"[^>]*href=")(\/(?!\/)[^"]*)(")/g],
  [/(<meta[^>]*property="og:url"[^>]*content=")(\/(?!\/)[^"]*)(")/g],
  [/("(?:url|image)":")(\/(?!\/)[^"]*)(")/g], // JSON-LD
  [/(<loc>)(\/(?!\/)[^<]*)(<\/loc>)/g], // sitemap.xml
  [/(Sitemap: )(\/(?!\/)\S*)()/g], // robots.txt
];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

let changedFiles = 0;
let changedValues = 0;
for (const path of walk(root)) {
  if (!/\.(html|xml|txt)$/.test(path)) continue;
  const before = readFileSync(path, "utf8");
  let after = before;
  for (const [re] of rules) {
    after = after.replace(re, (_m, head, path, tail) => {
      changedValues++;
      return head + abs(path) + tail;
    });
  }
  if (after !== before) {
    writeFileSync(path, after);
    changedFiles++;
  }
}

console.log(
  changedValues
    ? `Stamped ${origin} into ${changedValues} value(s) across ${changedFiles} file(s).`
    : `Nothing to change — no root-relative URLs left under ${root}/.`,
);
