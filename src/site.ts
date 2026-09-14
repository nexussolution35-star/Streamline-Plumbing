/** Production origin used to build self-referencing absolute canonicals. */
export const SITE_URL = 'https://www.mmc.co.za'
export const SITE_NAME = 'Manganese Metal Company'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/hero-refinery.jpg`

type Meta = Record<string, string>

/** Builds the full per-route head: unique title/description/canonical/OG/Twitter. */
export function pageHead(opts: {
  path: string
  title: string
  description: string
  image?: string
}) {
  const canonical = `${SITE_URL}${opts.path}`
  const image = opts.image ? `${SITE_URL}${opts.image}` : DEFAULT_OG_IMAGE
  const meta: Meta[] = [
    { title: opts.title },
    { name: 'description', content: opts.description },
    { property: 'og:title', content: opts.title },
    { property: 'og:description', content: opts.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: image },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'en_ZA' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: opts.title },
    { name: 'twitter:description', content: opts.description },
    { name: 'twitter:image', content: image },
  ]
  return { meta, links: [{ rel: 'canonical', href: canonical }] }
}

/** JSON-LD emitted as a real <script> in the SSR'd head. */
export function ld(schema: unknown) {
  return [{ type: 'application/ld+json', children: JSON.stringify(schema) }]
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  }
}

export const ORGANISATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/logo.png`,
  description:
    'A world-class refiner of 99.9% selenium-free electrolytic manganese metal, operating from Mbombela, South Africa since 1974.',
  foundingDate: '1974',
  telephone: '+27137594600',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fairbairn Street, Rocky Drift',
    addressLocality: 'Mbombela',
    postalCode: '1200',
    addressRegion: 'Mpumalanga',
    addressCountry: 'ZA',
  },
}
