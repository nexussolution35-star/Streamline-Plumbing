import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../../site'

export const Route = createFileRoute('/blog/why-selenium-free-matters')({
  head: () => ({
    ...pageHead({
      path: '/blog/why-selenium-free-matters',
      title: 'Why selenium-free matters downstream | Manganese Metal Company',
      description: 'Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.',
      image: '/assets/img/selenium-free-process.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Why selenium-free matters downstream',
        description: 'Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.',
        url: `${SITE_URL}/blog/why-selenium-free-matters`,
        publisher: { '@type': 'Organization', name: 'Manganese Metal Company', url: `${SITE_URL}/` },
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Why selenium-free matters downstream', path: '/blog/why-selenium-free-matters' },
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
            <p className="eyebrow">Process</p>
            <h1>Why selenium-free matters downstream</h1>
            <p className="hero__sub">Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.</p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>01</b>Process</p>
          <div className="doc__body">
            <div className="form__demo" style={{ marginBottom: '2rem' }}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="10" cy="10" r="8"></circle>
                <path d="M10 9v5M10 6.2v.1"></path>
              </svg>
              <span>
                <strong>Placeholder article.</strong> This page exists to prove the article layout,
                metadata and Article schema. It carries no technical content and must be replaced
                before launch &mdash; nothing here should be read as guidance.
              </span>
            </div>
            <p className="doc__lead">Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.</p>
            <hr className="hair" data-reveal="" />
            <p>
              Body copy to be supplied by Manganese Metal Company. The layout below the standfirst is
              a standard article measure: paragraphs, subheadings and pull quotes all inherit the
              site&rsquo;s document styling.
            </p>
            <div className="btn-row">
              <Link to="/blog" className="btn btn--ghost">
                All notes
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
