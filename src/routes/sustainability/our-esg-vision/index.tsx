import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../../site'

export const Route = createFileRoute('/sustainability/our-esg-vision/')({
  head: () => ({
    ...pageHead({
      path: "/sustainability/our-esg-vision",
      title: "Our ESG Vision | Manganese Metal Company",
      description: "MMC's environmental, social and governance framework.",
      image: "/assets/img/site-aerial.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Our ESG Vision", "description": "MMC's environmental, social and governance framework.", "url": `${SITE_URL}/sustainability/our-esg-vision`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Sustainability"}, {"@type": "ListItem", "position": 3, "name": "Our ESG Vision", "item": `${SITE_URL}/sustainability/our-esg-vision`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/site-aerial.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Sustainability
            </p>
            <h1>
              Our ESG Vision
            </h1>
            <p className="hero__sub">
              Manganese for the energy transition has to be produced to standards the transition would recognise.
            </p>
          </div>
        </div>
      </section>
      <nav className="crumb" aria-label="Breadcrumb">
        <div className="container">
          <ol>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li aria-current="page">
              Sustainability
            </li>
            <li aria-current="page">
              Our ESG Vision
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--framed" data-reveal="">
              <img src="/assets/img/esg-diagram.png" alt="" loading="lazy" />
              <figcaption>
                Our sustainability framework.
              </figcaption>
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Our framework
              </p>
              <h2>
                Three commitments, one licence to operate
              </h2>
              <p className="lead">
                Our ESG framework is organised around environmental stewardship, our responsibility to people
  and communities, and the governance that holds both to account.
              </p>
              <p>
                It is not a separate programme running alongside the refinery. Water, energy and emissions are operating
  parameters. Safety is a production condition. Governance decides what gets approved. Treating them as
  anything other than core operating concerns would make them ineffective.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              The three pillars
            </p>
            <h2>
              How the framework breaks down
            </h2>
          </div>
          <div className="grid grid--3">
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <span className="card__tag">
                  Environment
                </span>
                <img src="/assets/img/site-aerial.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Environmental responsibility
                </h3>
                <p>
                  Water stewardship, energy and emissions, waste and residue management, and rehabilitation of the land we occupy.
                </p>
                <Link to="/sustainability/our-esg-vision/environmental" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="2">
              <div className="card__media">
                <span className="card__tag">
                  Social
                </span>
                <img src="/assets/img/social-csi.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Social responsibility
                </h3>
                <p>
                  Safety, skills and development for our people, and long-term partnership with the communities around Mbombela.
                </p>
                <Link to="/sustainability/our-esg-vision/social" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="3">
              <div className="card__media">
                <span className="card__tag">
                  Governance
                </span>
                <img src="/assets/img/operations.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Governance and ethics
                </h3>
                <p>
                  Board oversight, ethical conduct, compliance and transparent reporting across the business.
                </p>
                <Link to="/sustainability/our-esg-vision/governance-and-ethics" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="band__media">
          <img src="/assets/img/market-batteries.jpg" alt="" loading="lazy" />
        </div>
        <div className="container">
          <div style={{ maxWidth: "44rem" }}>
            <p className="eyebrow">
              Why it matters
            </p>
            <h2>
              A material the transition depends on
            </h2>
            <p className="lead">
              Manganese goes into the batteries, the lightweight alloys and the steel that decarbonisation
  runs on. Producing it responsibly is not a side commitment — it is the point.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
