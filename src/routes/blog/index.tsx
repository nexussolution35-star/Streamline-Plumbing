import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../../site'
import { POSTS } from '../../posts'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    ...pageHead({
      path: '/blog',
      title: 'Notes | Manganese Metal Company',
      description:
        'Technical notes on high-purity manganese: grade selection, selenium-free refining and what the certificate of analysis actually tells a buyer.',
      image: '/assets/img/selenium-free-process.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Manganese Metal Company notes',
        url: `${SITE_URL}/blog`,
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ])),
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/selenium-free-process.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Notes</p>
            <h1>Technical notes for manganese buyers</h1>
            <p className="hero__sub">
              Short pieces on grade selection, refining practice and reading a certificate of analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>01</b>Index</p>
          <div>
            <div className="picker__list">
              {POSTS.map((p, i) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="picker__opt picker__opt--desc">
                  <i>{String(i + 1).padStart(2, '0')}</i>
                  <span><strong>{p.title}</strong><em>{p.standfirst}</em></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
