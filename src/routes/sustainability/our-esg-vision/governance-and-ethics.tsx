import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../../site'

export const Route = createFileRoute('/sustainability/our-esg-vision/governance-and-ethics')({
  head: () => ({
    ...pageHead({
      path: "/sustainability/our-esg-vision/governance-and-ethics",
      title: "Governance and ethics | Manganese Metal Company",
      description: "Governance and ethics at Manganese Metal Company.",
      image: "/assets/img/operations.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Governance and ethics", "description": "Governance and ethics at Manganese Metal Company.", "url": `${SITE_URL}/sustainability/our-esg-vision/governance-and-ethics`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Sustainability"}, {"@type": "ListItem", "position": 3, "name": "Our ESG Vision", "item": `${SITE_URL}/sustainability/our-esg-vision`}, {"@type": "ListItem", "position": 4, "name": "Governance and Ethics", "item": `${SITE_URL}/sustainability/our-esg-vision/governance-and-ethics`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/operations.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Sustainability
            </p>
            <h1>
              Governance and ethics
            </h1>
            <p className="hero__sub">
              Board oversight, ethical conduct and compliance across every part of the business.
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
              Governance and Ethics
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/operations.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Commitment
              </p>
              <h2>
                Governance and ethics
              </h2>
              <p className="lead">
                Governance is what makes the rest of the framework credible. Commitments on environment and safety mean little without the structures that enforce them.
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
                Board oversight
              </h3>
              <p>
                The board sets strategy, approves major capital commitments and holds management accountable for operational, safety and environmental performance, supported by a defined delegation of authority.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Ethical conduct
              </h3>
              <p>
                We compete on the quality of our metal. Bribery, facilitation payments and anti-competitive conduct are prohibited without exception, for employees and for third parties acting on our behalf.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Compliance
              </h3>
              <p>
                The refinery operates under South African environmental, health, safety and labour legislation, and under the permit conditions attached to the site. Compliance is monitored and reported, not assumed.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Transparency
              </h3>
              <p>
                Customers qualifying our material are entitled to see how it is produced and governed. We support customer and third-party audit as a normal part of doing business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--ink section--tight">
        <div className="container">
          <div className="stats">
            <div className="stat" data-reveal="" data-reveal-delay="1">
              <b data-count="1">
                0
              </b>
              <span>
                Code of conduct
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="2">
              <b data-count="0">
                0
              </b>
              <span>
                Tolerance for bribery
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="3">
              <b data-count="100" data-suffix="%">
                0
              </b>
              <span>
                Operations under permit
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="4">
              <b data-count="4">
                0
              </b>
              <span>
                Governance pillars
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
                <img src="/assets/img/social-csi.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Social responsibility
                </h3>
                <p>
                  Safety, skills and a long-term relationship with the communities around Mbombela.
                </p>
                <Link to="/sustainability/our-esg-vision/social" className="card__link">
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
