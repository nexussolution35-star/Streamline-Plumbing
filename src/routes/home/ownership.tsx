import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/home/ownership')({
  head: () => ({
    ...pageHead({
      path: "/home/ownership",
      title: "Ownership | Manganese Metal Company",
      description: "The corporate structure and shareholding behind Manganese Metal Company.",
      image: "/assets/img/ownership.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Ownership", "description": "The corporate structure and shareholding behind Manganese Metal Company.", "url": `${SITE_URL}/home/ownership`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "About us", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 3, "name": "Ownership", "item": `${SITE_URL}/home/ownership`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/ownership.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              About us
            </p>
            <h1>
              Ownership
            </h1>
            <p className="hero__sub">
              A stable shareholding structure that supports long-horizon investment in high-purity manganese refining.
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
            <li>
              <Link to="/">
                About us
              </Link>
            </li>
            <li aria-current="page">
              Ownership
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/ownership.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Corporate structure
              </p>
              <h2>
                Ownership built for the long term
              </h2>
              <p className="lead">
                Refining is a capital-intensive, long-cycle business. Qualifying a high-purity manganese
  supply into a battery or aerospace supply chain takes years — and the shareholder base has to be
  patient enough to support that horizon.
              </p>
              <p>
                Manganese Metal Company (Pty) Ltd is a South African registered company operating from its refinery in
  Mbombela, Mpumalanga. Our shareholding structure is designed to give customers confidence in continuity of
  supply and in the investment programme behind it, including the High-Purity Manganese Sulphate Monohydrate
  plant.
              </p>
              <p>
                Corporate governance, board composition and shareholder reporting are set out in our governance
  framework, alongside the ethics and compliance standards every part of the business works to.
              </p>
              <div className="btn-row">
                <Link to="/sustainability/our-esg-vision/governance-and-ethics" className="btn btn--ghost">
                  Governance & ethics
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
              What it means for customers
            </p>
            <h2>
              Continuity behind every contract
            </h2>
          </div>
          <div className="grid grid--3">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Investment horizon
              </h3>
              <p>
                Shareholder backing for multi-year capital projects rather than short-cycle returns.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Supply continuity
              </h3>
              <p>
                A stable corporate base behind long-term offtake and qualification agreements.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Governance
              </h3>
              <p>
                Board oversight, defined delegation of authority and transparent reporting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
