#!/usr/bin/env python3
"""Rebase the prerendered snapshot onto a sub-path.

The snapshot is captured for a site served from `/`, so every asset and route
URL in it is root-absolute (`/assets/...`, `/about-us`). GitHub Pages serves a
project repository from `/<repo>/`, so those URLs have to be rebased.

Run from the repository root on a freshly extracted snapshot:

    python3 tools/set-base-path.py /Streamline-Plumbing https://nexussolution35-star.github.io

What it changes:

* HTML  - every root-absolute `href`/`src`/`content`/`srcset` value gains the
          base prefix.
* HTML  - canonical, `og:url`, `og:image`, `twitter:image` and the JSON-LD
          block become fully absolute (search engines want absolute URLs).
* CSS   - root-absolute `url(...)` references gain the base prefix.
* JS    - asset string literals gain the base prefix, and the TanStack Router
          options get a `basepath`, so client-side links and route matching
          agree with the served path. The injected basepath derives itself from
          the entry script's own URL, so the bundle keeps working if the site
          later moves to a domain root.
* sitemap.xml / robots.txt - rewritten to absolute URLs under the site origin.
"""

import pathlib
import re
import sys

BASE = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else ""
ORIGIN = sys.argv[2].rstrip("/") if len(sys.argv) > 2 else ""
ROOT = pathlib.Path(__file__).resolve().parent.parent

SKIP_DIRS = {".git", "tools", ".github"}

# Derives the base path from the entry bundle's own URL at runtime.
BASEPATH_EXPR = (
    '(function(){try{var s=document.querySelector(\'script[src*="/assets/index-"]\');'
    "if(s){var p=new URL(s.src,location.href).pathname"
    '.replace(/\\/assets\\/[^\\/]*$/,"");if(p)return p}}catch(e){}return"/"})()'
)

ABSOLUTE_META = (
    ("canonical", re.compile(r'(<link[^>]*rel="canonical"[^>]*href=")(/[^"]*)')),
    ("og:url", re.compile(r'(<meta[^>]*property="og:url"[^>]*content=")(/[^"]*)')),
    ("og:image", re.compile(r'(<meta[^>]*property="og:image"[^>]*content=")(/[^"]*)')),
    ("twitter:image", re.compile(r'(<meta[^>]*name="twitter:image"[^>]*content=")(/[^"]*)')),
)


def walk(suffixes):
    for path in sorted(ROOT.rglob("*")):
        if not path.is_file() or path.suffix not in suffixes:
            continue
        if SKIP_DIRS & set(path.relative_to(ROOT).parts):
            continue
        yield path


def rebase_srcset(match):
    """Rebase the 2nd..nth candidate of a srcset.

    The first one is already handled by the generic `="/` rewrite, so this runs
    after it and skips anything that already carries the base prefix.
    """
    urls = []
    for candidate in match.group(1).split(","):
        candidate = candidate.strip()
        if (
            candidate.startswith("/")
            and not candidate.startswith("//")
            and not candidate.startswith(BASE + "/")
        ):
            candidate = BASE + candidate
        urls.append(candidate)
    return 'srcset="' + ", ".join(urls) + '"'


def rewrite_html(text):
    # JSON-LD carries bare paths as JSON values; make them absolute.
    def ld(match):
        body = re.sub(r'(:")(/(?!/)[^"]*)', lambda m: m.group(1) + ORIGIN + BASE + m.group(2), match.group(2))
        return match.group(1) + body + match.group(3)

    text = re.sub(
        r'(<script type="application/ld\+json">)(.*?)(</script>)', ld, text, flags=re.S
    )
    text = re.sub(r'="/(?!/)', '="' + BASE + "/", text)
    text = re.sub(r'srcset="([^"]*)"', rebase_srcset, text)
    # Inline styles carry image URLs the attribute rules above cannot see,
    # e.g. style="--photo:url('/assets/img/x.webp')".
    text = re.sub(r"url\((['\"]?)/(?!/)", lambda m: "url(" + m.group(1) + BASE + "/", text)
    # The serialized SSR manifest at the end of the document lists the entry and
    # preload bundles as plain JSON strings. Route ids in the same payload (e.g.
    # "/", "/about-us") must stay bare - the router matches them against the
    # pathname with the basepath already stripped - so only asset paths move.
    text = text.replace('"/assets/', '"' + BASE + "/assets/")
    for _name, pattern in ABSOLUTE_META:
        text = pattern.sub(lambda m: m.group(1) + ORIGIN + m.group(2), text)
    return text


def rewrite_css(text):
    return re.sub(r"url\((['\"]?)/(?!/)", lambda m: "url(" + m.group(1) + BASE + "/", text)


def rewrite_js(text):
    # Asset URLs appear either at the start of a string literal or as the
    # 2nd..nth candidate of a srcset packed into one literal ("... 400w, /assets/... 800w").
    text = re.sub(
        r"(['\"`]|,\s)/(assets|favicon)",
        lambda m: m.group(1) + BASE + "/" + m.group(2),
        text,
    )
    # The client head manager re-renders canonical/og:url/JSON-LD after
    # hydration and would otherwise replace the absolute URLs baked into the
    # prerendered HTML with bare paths, which resolve to the wrong origin once
    # the site is served from a sub-path.
    if ORIGIN:
        site = ORIGIN + BASE
        text = re.sub(r"(rel:`canonical`,href:`)/", r"\g<1>" + site + "/", text)
        text = re.sub(r"(og:url`,content:`)/", r"\g<1>" + site + "/", text)
        text = re.sub(r'("url":")/', r'\g<1>' + site + "/", text)

    # Page content ships as raw HTML strings rendered with dangerouslySetInnerHTML,
    # so its anchors are real <a href="/..."> elements rather than router Links and
    # need the base prefix. Route definitions use backticks (path:`/about-us`) and
    # are deliberately left bare - the router strips the basepath before matching.
    text = re.sub(r'href="/(?!/)', 'href="' + BASE + "/", text)

    # Vite's preload helper resolves __vite__mapDeps entries against the server
    # root ("/" + dep), so the chunk list needs the base folded in or every page
    # fires 404s for its modulepreload hints.
    def mapdeps(match):
        return match.group(1) + match.group(2).replace('"assets/', '"' + BASE.lstrip("/") + '/assets/')

    text = re.sub(r'(m\.f=)(\[[^\]]*\])', mapdeps, text)

    text, created = re.subn(
        r"\{routeTree:([A-Za-z0-9_$]+),context:",
        lambda m: "{basepath:" + BASEPATH_EXPR + ",routeTree:" + m.group(1) + ",context:",
        text,
    )
    # TanStack Start's client entry calls router.update({basepath: ``, ...})
    # during hydration, which would discard the basepath set at creation. Without
    # this second patch the router matches the served pathname against bare route
    # paths, finds nothing, and hydration dies on an invariant with a blank page.
    text, updated = re.subn(
        r"\.update\(\{basepath:``,",
        ".update({basepath:" + BASEPATH_EXPR + ",",
        text,
    )
    return text, created, updated


def main():
    if not BASE:
        sys.exit("usage: set-base-path.py /base-path [https://origin]")

    routers_created = 0
    routers_updated = 0
    for path in walk({".html"}):
        raw = path.read_bytes().decode("utf-8")
        path.write_bytes(rewrite_html(raw).encode("utf-8"))

    for path in walk({".css"}):
        raw = path.read_text(encoding="utf-8")
        path.write_text(rewrite_css(raw), encoding="utf-8")

    for path in walk({".js"}):
        raw = path.read_text(encoding="utf-8")
        out, created, updated = rewrite_js(raw)
        routers_created += created
        routers_updated += updated
        path.write_text(out, encoding="utf-8")

    sitemap = ROOT / "sitemap.xml"
    if sitemap.exists():
        text = sitemap.read_text(encoding="utf-8")
        text = re.sub(
            r"(<loc>)(/[^<]*)", lambda m: m.group(1) + ORIGIN + BASE + m.group(2), text
        )
        sitemap.write_text(text, encoding="utf-8")

    robots = ROOT / "robots.txt"
    if robots.exists():
        text = robots.read_text(encoding="utf-8")
        text = text.replace("Sitemap: /sitemap.xml", f"Sitemap: {ORIGIN}{BASE}/sitemap.xml")
        robots.write_text(text, encoding="utf-8")

    if (routers_created, routers_updated) != (1, 1):
        sys.exit(
            f"expected one createRouter and one router.update basepath patch, made "
            f"{routers_created} and {routers_updated} - the bundle shape changed, "
            "check tools/set-base-path.py"
        )
    print(f"rebased onto {BASE} (origin {ORIGIN or 'unset'})")


if __name__ == "__main__":
    main()
