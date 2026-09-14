import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/markets/aluminium-industry')({
  head: () => ({
    ...pageHead({
      path: "/markets/aluminium-industry",
      title: "Aluminium Industry | Manganese Metal Company",
      description: "High-purity selenium-free manganese for the aluminium industry.",
      image: "/assets/img/market-aluminium.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Aluminium Industry", "description": "High-purity selenium-free manganese for the aluminium industry.", "url": `${SITE_URL}/markets/aluminium-industry`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Markets"}, {"@type": "ListItem", "position": 3, "name": "Aluminium Industry", "item": `${SITE_URL}/markets/aluminium-industry`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/market-aluminium.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Markets
            </p>
            <h1>
              Aluminium Industry
            </h1>
            <p className="hero__sub">
              Manganese for beverage can body stock and wrought alloys that must draw without tearing.
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
              Aluminium Industry
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/market-aluminium.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The application
              </p>
              <h2>
                Aluminium Industry
              </h2>
              <p className="lead">
                The aluminium beverage can is one of the most demanding forming operations in volume manufacturing. Manganese is what makes the alloy strong enough to hold pressure and ductile enough to survive the draw.
              </p>
              <p>
                Can body stock alloys depend on manganese for the balance of strength and formability that lets a sheet be drawn into a thin-walled can at high speed without tearing. The consistency of the manganese addition directly affects how stable that operation is.
              </p>
              <p>
                Our Manganese Aluminium briquettes are engineered specifically for melt addition — compacted for controlled dissolution and high recovery, so the alloy hits its target chemistry predictably rather than probabilistically.
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
                  Mn/Al briquettes engineered for melt addition
                </li>
                <li>
                  High, repeatable recovery
                </li>
                <li>
                  Consistent chemistry for stable forming windows
                </li>
                <li>
                  Packaging suited to melt-shop handling
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/products/electrolytic-manganese-metal-emm" className="btn btn--primary">
                  Manganese Aluminium Briquettes (Mn/Al)
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
              <img src="/assets/img/market-aluminium.jpg" alt="" loading="lazy" />
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
                  Metallurgy
                </span>
                <img src="/assets/img/market-steel.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Steel Industry
                </h3>
                <p>
                  Precise manganese additions without the residual impurities that compromise high-specification steels.
                </p>
                <Link to="/markets/steel-industry" className="card__link">
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
