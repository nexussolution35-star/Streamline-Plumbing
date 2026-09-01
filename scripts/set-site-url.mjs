#!/usr/bin/env node
// Stamp the live origin into the prerendered export.
//
// The export ships root-relative canonical/og:url/JSON-LD values and a sitemap
// whose <loc> entries are paths. Search engines require absolute URLs in all of
// those, so run this once against the domain the site is deployed to:
//
//   node scripts/set-site-url.mjs https://streamlineplumbing.co.za
//
// Re-run it whenever the domain changes or the export is rebuilt: values already
// pointing at the given origin are left alone, and values carrying a different
// origin are moved onto the new one.

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const origin = process.argv[2]?.replace(/\/+$/, "");
if (!origin || !/^https?:\/\/[^/]+$/.test(origin)) {
  console.error("usage: node scripts/set-site-url.mjs https://example.com");
  process.exit(1);
}

const root = "streamline-plumbing-surge";

// A value is either a root-relative path ("/about-us") or an absolute URL this
// script stamped earlier; both are normalised onto the current origin. VALUE
// matches those two shapes only, so protocol-relative and off-site URLs — the
// Google Maps link in the footer, schema.org context URLs — are left alone.
const VALUE = String.raw`(?:https?:\/\/[^\/"'<\s]+)?\/(?!\/)`;
const rule = (before, after) =>
  new RegExp(`(${before})(${VALUE}[^"'<\\s]*)(${after})`, "g");

const abs = (value) => origin + value.replace(/^https?:\/\/[^/]+/, "");
const rules = [
  rule('<link[^>]*rel="canonical"[^>]*href="', '"'),
  rule('<meta[^>]*property="og:url"[^>]*content="', '"'),
  rule('"(?:url|image)":"', '"'), // JSON-LD
  rule("<loc>", "</loc>"), // sitemap.xml
  rule("Sitemap: ", ""), // robots.txt
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
  for (const re of rules) {
    after = after.replace(re, (match, head, value, tail) => {
      const stamped = head + abs(value) + tail;
      if (stamped !== match) changedValues++;
      return stamped;
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
    : `Nothing to change — every URL under ${root}/ already points at ${origin}.`,
);
