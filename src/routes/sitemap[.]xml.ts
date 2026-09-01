import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0" },
          { path: "/about-us", changefreq: "monthly", priority: "0.8" },
          { path: "/areas/nelspruit", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/nelspruit-insurance-claims", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/nelspruit-maintenance", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/nelspruit-new-installations", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/nelspruit-relocations", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/nelspruit-replacements", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/white-river", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/white-river-insurance-claims", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/white-river-maintenance", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/white-river-new-installations", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/white-river-relocations", changefreq: "monthly", priority: "0.6" },
          { path: "/areas/white-river-replacements", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "monthly", priority: "0.8" },
          { path: "/contact-us", changefreq: "monthly", priority: "0.8" },
          { path: "/gallery", changefreq: "monthly", priority: "0.8" },
          { path: "/schedule-now", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/services/insurance-claims", changefreq: "monthly", priority: "0.6" },
          { path: "/services/maintenance", changefreq: "monthly", priority: "0.6" },
          { path: "/services/new-installations", changefreq: "monthly", priority: "0.6" },
          { path: "/services/relocations", changefreq: "monthly", priority: "0.6" },
          { path: "/services/replacements", changefreq: "monthly", priority: "0.6" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
