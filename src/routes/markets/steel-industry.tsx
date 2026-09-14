import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/markets/steel-industry')({
  head: () => ({
    ...pageHead({
      path: "/markets/steel-industry",
      title: "Steel Industry | Manganese Metal Company",
      description: "High-purity selenium-free manganese for the steel industry.",
      image: "/assets/img/market-steel.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Steel Industry", "description": "High-purity selenium-free manganese for the steel industry.", "url": `${SITE_URL}/markets/steel-industry`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Markets"}, {"@type": "ListItem", "position": 3, "name": "Steel Industry", "item": `${SITE_URL}/markets/steel-industry`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/market-steel.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Markets
            </p>
            <h1>
              Steel Industry
            </h1>
            <p className="hero__sub">
              Precise manganese additions for steels where residual impurities are not acceptable.
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
              Markets
            </li>
            <li aria-current="page">
              Steel Industry
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/market-steel.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The application
              </p>
              <h2>
                Steel Industry
              </h2>
              <p className="lead">
                Manganese is indispensable in steelmaking — it deoxidises, it captures sulphur, and it delivers hardenability and strength. Most of that work is done by ferroalloys. High-purity metal is for the steels where ferroalloys will not do.
              </p>
              <p>
                In high-specification and electrical steels, the residual elements that accompany a ferroalloy addition can be as consequential as the manganese itself. Electrolytic manganese metal allows the manganese to be added without them, giving precise control over final chemistry.
              </p>
              <p>
                Our metal is used where the grade is tightly specified, the tolerance for tramp elements is low, and the cost of an out-of-specification heat is measured in far more than the price of the addition.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--sidebar">
            <div>
              <div className="section-head" data-reveal="">
                <p className="eyebrow">
                  What we supply
                </p>
                <h2>
                  Grades for this market
                </h2>
              </div>
              <ul className="checks">
                <li>
                  99.9% manganese with a controlled trace profile
                </li>
                <li>
                  No selenium carry-over into the melt
                </li>
                <li>
                  Flake and briquette forms for melt-shop handling
                </li>
                <li>
                  Certificate of analysis with every lot
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/products/electrolytic-manganese-metal-emm" className="btn btn--primary">
                  Electrolytic Manganese Metal (EMM)
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
                <Link to="/contact-us" className="btn btn--ghost">
                  Enquire
                </Link>
              </div>
            </div>
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/steel-rolls.jpg" alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Other markets
            </p>
            <h2>
              Where else our manganese goes
            </h2>
          </div>
          <div className="grid grid--3">
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <span className="card__tag">
                  Energy
                </span>
                <img src="/assets/img/market-batteries.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Lithium-ion Batteries
                </h3>
                <p>
                  High-purity manganese raises the capacity, cycle life and thermal stability of cathode active material.
                </p>
                <Link to="/markets/lithium-ion-batteries" className="card__link">
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
                  Packaging
                </span>
                <img src="/assets/img/market-aluminium.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Aluminium Industry
                </h3>
                <p>
                  Manganese gives beverage can body stock the strength and formability that thin-wall drawing demands.
                </p>
                <Link to="/markets/aluminium-industry" className="card__link">
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
                  Consumables
                </span>
                <img src="/assets/img/market-welding.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Welding Rod & Cored-wire
                </h3>
                <p>
                  Low-hydrogen, low-oxygen grades for welding consumables where weld integrity is non-negotiable.
                </p>
                <Link to="/markets/welding-rod-cored-wire-industry" className="card__link">
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
