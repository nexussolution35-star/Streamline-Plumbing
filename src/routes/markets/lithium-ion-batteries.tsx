import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/markets/lithium-ion-batteries')({
  head: () => ({
    ...pageHead({
      path: "/markets/lithium-ion-batteries",
      title: "Lithium-ion Batteries | Manganese Metal Company",
      description: "High-purity selenium-free manganese for the lithium-ion batteries.",
      image: "/assets/img/market-batteries.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Lithium-ion Batteries", "description": "High-purity selenium-free manganese for the lithium-ion batteries.", "url": `${SITE_URL}/markets/lithium-ion-batteries`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Markets"}, {"@type": "ListItem", "position": 3, "name": "Lithium-ion Batteries", "item": `${SITE_URL}/markets/lithium-ion-batteries`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/market-batteries.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Markets
            </p>
            <h1>
              Lithium-ion Batteries
            </h1>
            <p className="hero__sub">
              High-purity manganese for cathode active material — capacity, cycle life and thermal stability.
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
              Lithium-ion Batteries
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/market-batteries.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The application
              </p>
              <h2>
                Lithium-ion Batteries
              </h2>
              <p className="lead">
                Manganese has moved from a supporting role in cathode chemistry to a central one. Manganese-rich formulations offer a route to lower cost and improved thermal stability, but only where the manganese unit is clean enough.
              </p>
              <p>
                Impurities in cathode material do not stay put. Trace contaminants introduced with the manganese can seed side reactions, accelerate capacity fade and undermine the thermal margin the chemistry was chosen for in the first place.
              </p>
              <p>
                Our selenium-free route removes one contaminant class outright, and producing HP MSM directly from our own 99.9% metal keeps the rest of the impurity profile tightly bounded. For cell and cathode producers building qualified supply chains outside the dominant producing region, that combination is difficult to source elsewhere.
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
                  Battery-grade HP MSM produced from our own metal
                </li>
                <li>
                  Selenium-free from the refinery onward
                </li>
                <li>
                  Lot-level certification for qualification programmes
                </li>
                <li>
                  Capacity scaling from 6,000 toward 30,000 tpa
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/products/high-purity-manganese-sulphate-monohydrate-hp-msm" className="btn btn--primary">
                  High Purity Manganese Sulphate Monohydrate
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
              <img src="/assets/img/cam-routes.png" alt="" loading="lazy" />
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
