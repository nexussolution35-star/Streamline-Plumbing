import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../../site'

export const Route = createFileRoute('/sustainability/our-esg-vision/social')({
  head: () => ({
    ...pageHead({
      path: "/sustainability/our-esg-vision/social",
      title: "Social responsibility | Manganese Metal Company",
      description: "Social responsibility at Manganese Metal Company.",
      image: "/assets/img/social-csi.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Social responsibility", "description": "Social responsibility at Manganese Metal Company.", "url": `${SITE_URL}/sustainability/our-esg-vision/social`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Sustainability"}, {"@type": "ListItem", "position": 3, "name": "Our ESG Vision", "item": `${SITE_URL}/sustainability/our-esg-vision`}, {"@type": "ListItem", "position": 4, "name": "Social", "item": `${SITE_URL}/sustainability/our-esg-vision/social`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/social-csi.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Sustainability
            </p>
            <h1>
              Social responsibility
            </h1>
            <p className="hero__sub">
              Safety, skills and a long-term relationship with the communities around Mbombela.
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
            <li>
              <Link to="/sustainability/our-esg-vision">
                Our ESG Vision
              </Link>
            </li>
            <li aria-current="page">
              Social
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/social-csi.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Commitment
              </p>
              <h2>
                Social responsibility
              </h2>
              <p className="lead">
                A refinery that has operated in one place for fifty years is not a visitor. Our workforce, and much of our supply chain, comes from the communities immediately around the site.
              </p>
              <div className="btn-row">
                <Link to="/sustainability/our-esg-vision" className="btn btn--ghost">
                  Full ESG framework
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              In practice
            </p>
            <h2>
              What this means on site
            </h2>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Safety above output
              </h3>
              <p>
                Nothing we produce justifies an injury. Safety performance is reviewed as rigorously as production, and the authority to stop unsafe work sits with the person closest to it.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Skills and development
              </h3>
              <p>
                High-purity refining needs metallurgists, chemists, electricians, instrument technicians and operators. We invest in training and development to build those skills locally rather than importing them.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Community partnership
              </h3>
              <p>
                Our community work focuses on education, local enterprise and youth development in the Mbombela area — sustained programmes built with local partners rather than one-off donations.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Local procurement
              </h3>
              <p>
                Where local suppliers can meet the standard, we prefer them. Industrial demand retained in the region is one of the most durable contributions the refinery makes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--ink section--tight">
        <div className="container">
          <div className="stats">
            <div className="stat" data-reveal="" data-reveal-delay="1">
              <b data-count="50" data-suffix="+">
                0
              </b>
              <span>
                Years in the community
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="2">
              <b data-count="1974">
                0
              </b>
              <span>
                Employing locally since
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="3">
              <b data-count="4">
                0
              </b>
              <span>
                Focus areas
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="4">
              <b data-count="0">
                0
              </b>
              <span>
                Acceptable injuries
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              More on sustainability
            </p>
            <h2>
              The other pillars
            </h2>
          </div>
          <div className="grid grid--2">
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <img src="/assets/img/site-aerial.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Environmental responsibility
                </h3>
                <p>
                  Water, energy, emissions and land — managed as operating parameters, not as a reporting exercise.
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
                <img src="/assets/img/operations.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Governance and ethics
                </h3>
                <p>
                  Board oversight, ethical conduct and compliance across every part of the business.
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
    </>
  )
}
