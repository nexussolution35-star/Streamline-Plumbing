import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../../site'

export const Route = createFileRoute('/blog/reading-a-certificate-of-analysis')({
  head: () => ({
    ...pageHead({
      path: '/blog/reading-a-certificate-of-analysis',
      title: 'How to read a certificate of analysis | Manganese Metal Company',
      description: 'What the assay, the trace-element profile and the lot number actually tell you before you qualify a supplier.',
      image: '/assets/img/selenium-free-process.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to read a certificate of analysis',
        description: 'What the assay, the trace-element profile and the lot number actually tell you before you qualify a supplier.',
        url: `${SITE_URL}/blog/reading-a-certificate-of-analysis`,
        publisher: { '@type': 'Organization', name: 'Manganese Metal Company', url: `${SITE_URL}/` },
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'How to read a certificate of analysis', path: '/blog/reading-a-certificate-of-analysis' },
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
            <p className="eyebrow">Quality</p>
            <h1>How to read a certificate of analysis</h1>
            <p className="hero__sub">What the assay, the trace-element profile and the lot number actually tell you before you qualify a supplier.</p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>01</b>Quality</p>
          <div className="doc__body">

            <p className="doc__lead">
              A certificate of analysis is the document a buyer actually purchases against. The
              marketing claim is the assay; the certificate is the evidence. Here is what each part of
              it is telling you.
            </p>
            <figure className="art-fig" data-reveal="">
              <img src="/assets/img/grade-lo.jpg" alt="Every lot is analysed and certified before it is packed for export." loading="lazy" />
              <figcaption>Every lot is analysed and certified before it is packed for export.</figcaption>
            </figure>
            <hr className="hair" data-reveal="" />
            <h2>What the document is for</h2>
            <p>
              A certificate of analysis records what was measured in a specific production lot, not
              what the producer generally achieves. That distinction matters. A supplier quoting a
              typical assay is describing an average; a certificate is describing the material on your
              pallet. Incoming inspection should always be reconciling against the second.
            </p>
            <h2>The assay line</h2>
            <p>
              The headline figure states the manganese content. Ours is 99.9%, and it is the number
              most buyers quote back to us. On its own, though, it is the least informative line on the
              page. Two suppliers can both declare 99.9% manganese while the remaining tenth of a
              percent behaves completely differently in your process.
            </p>
            <h2>The trace-element profile</h2>
            <p>
              This is the part that decides whether the material is usable. The profile lists the
              elements measured in the balance, and it is where a process engineer should be looking
              first. What matters is not only the magnitude of each value but which elements were
              measured at all &mdash; an element absent from the scope is not an element proven absent
              from the metal.
            </p>
            <p>
              If your qualification programme cares about a specific contaminant, confirm it appears in
              the analytical scope before you qualify the supply, not after a heat goes out of
              specification.
            </p>
            <h2>Declarations</h2>
            <p>
              Some statements on a certificate are declarations rather than measurements. Our
              selenium-free declaration is one: selenium is never introduced into our electrolytic
              route, so there is no process step at which it could enter the metal. That is a different
              claim from a measured value below a detection limit, and it is worth understanding which
              kind of statement you are relying on.
            </p>
            <h2>Lot traceability</h2>
            <p>
              The lot number ties the certificate to a defined quantity of production. It is what makes
              an investigation possible if something downstream goes wrong: without it, a problem can
              only be described, not traced. Retained samples serve the same purpose from the
              supplier&rsquo;s side, and are worth agreeing at the point of qualification.
            </p>
            <h2>What to ask for</h2>
            <p>
              Beyond the standard document, it is reasonable to request a wider analytical scope,
              tighter limits on named elements, retained samples, or the right to audit the quality
              system that produces the certificate. We treat all four as a normal part of
              qualification rather than an exception.
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
