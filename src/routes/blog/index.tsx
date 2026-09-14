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
            <div className="form__demo" style={{ marginBottom: '2rem' }}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="10" cy="10" r="8"></circle>
                <path d="M10 9v5M10 6.2v.1"></path>
              </svg>
              <span>
                <strong>Placeholder articles.</strong> The index, article layout and schema are built and
                working. The three entries below are structural stand-ins with no technical content and
                must be replaced with real articles before launch.
              </span>
            </div>
            <div className="picker__list">
              {POSTS.map((p, i) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="picker__opt">
                  <i>{String(i + 1).padStart(2, '0')}</i>
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
