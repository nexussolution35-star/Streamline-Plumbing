import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../../site'

export const Route = createFileRoute('/sustainability/our-esg-vision/environmental')({
  head: () => ({
    ...pageHead({
      path: "/sustainability/our-esg-vision/environmental",
      title: "Environmental responsibility | Manganese Metal Company",
      description: "Environmental responsibility at Manganese Metal Company.",
      image: "/assets/img/site-aerial.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Environmental responsibility", "description": "Environmental responsibility at Manganese Metal Company.", "url": `${SITE_URL}/sustainability/our-esg-vision/environmental`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Sustainability"}, {"@type": "ListItem", "position": 3, "name": "Our ESG Vision", "item": `${SITE_URL}/sustainability/our-esg-vision`}, {"@type": "ListItem", "position": 4, "name": "Environmental", "item": `${SITE_URL}/sustainability/our-esg-vision/environmental`}]})],
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
              Environmental responsibility
            </h1>
            <p className="hero__sub">
              Water, energy, emissions and land — managed as operating parameters, not as a reporting exercise.
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
              Environmental
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/site-aerial.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Commitment
              </p>
              <h2>
                Environmental responsibility
              </h2>
              <p className="lead">
                A hydrometallurgical refinery is a significant user of water and electricity and a producer of process residues. Managing those responsibly is an operating discipline.
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
                Water stewardship
              </h3>
              <p>
                Water is the resource that matters most in Mpumalanga. We manage consumption, recycle process water where the chemistry allows and control the quality of what leaves the site, because the catchment we draw from is shared with agriculture and with the communities around us.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Energy and emissions
              </h3>
              <p>
                Electrowinning is electricity-intensive by nature. We track consumption per tonne as an operating metric and pursue efficiency in the cellhouse and utilities, where the largest share of demand sits.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Residues and waste
              </h3>
              <p>
                Process residues are characterised, stored and disposed of under permit. Where a residue stream can be recovered or re-used rather than disposed of, that is the preferred route.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Land and closure
              </h3>
              <p>
                We hold the land we occupy against an eventual closure standard, with rehabilitation planned as part of operating the site rather than deferred to the end of its life.
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
                Site, fully permitted
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="2">
              <b data-count="100" data-suffix="%">
                0
              </b>
              <span>
                Residues under permit
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="3">
              <b data-count="50" data-suffix="+">
                0
              </b>
              <span>
                Years of site stewardship
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="4">
              <b data-count="0">
                0
              </b>
              <span>
                Tolerance for uncontrolled discharge
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
