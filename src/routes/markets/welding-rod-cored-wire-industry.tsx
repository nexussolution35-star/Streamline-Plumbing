import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/markets/welding-rod-cored-wire-industry')({
  head: () => ({
    ...pageHead({
      path: "/markets/welding-rod-cored-wire-industry",
      title: "Welding Rod &amp; Cored-wire Industry | Manganese Metal Company",
      description: "High-purity selenium-free manganese for the welding rod and cored-wire industry.",
      image: "/assets/img/market-welding.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Welding Rod &amp; Cored-wire Industry", "description": "High-purity selenium-free manganese for the welding rod and cored-wire industry.", "url": `${SITE_URL}/markets/welding-rod-cored-wire-industry`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Markets"}, {"@type": "ListItem", "position": 3, "name": "Welding Rod & Cored-wire Industry", "item": `${SITE_URL}/markets/welding-rod-cored-wire-industry`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/market-welding.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Markets
            </p>
            <h1>
              Welding Rod & Cored-wire Industry
            </h1>
            <p className="hero__sub">
              Low-hydrogen and low-oxygen grades for consumables where weld integrity is non-negotiable.
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
              Welding Rod & Cored-wire Industry
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/market-welding.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The application
              </p>
              <h2>
                Welding Rod & Cored-wire Industry
              </h2>
              <p className="lead">
                A welding consumable carries its impurities straight into the weld pool. In pipeline, pressure-vessel and structural work, that makes the purity of the manganese addition a structural question rather than a metallurgical nicety.
              </p>
              <p>
                Hydrogen is the specific enemy. Dissolved hydrogen introduced through a consumable is a recognised cause of cold cracking in high-strength welds — which is why low-hydrogen practice governs how consumables are made, stored and handled.
              </p>
              <p>
                Our Low Hydrogen (LH) flake is produced for exactly this duty, with Low Oxygen (LO) flake available where the oxygen profile is the controlling variable. Both carry the same selenium-free 99.9% assay as the rest of our range.
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
                  Low Hydrogen (LH) flake for low-hydrogen practice
                </li>
                <li>
                  Low Oxygen (LO) flake where oxygen governs
                </li>
                <li>
                  Selenium-free, 99.9% manganese
                </li>
                <li>
                  Consistent lot-to-lot chemistry for consumable formulation
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/products/electrolytic-manganese-metal-emm" className="btn btn--primary">
                  Low Hydrogen & Low Oxygen Flake
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
              <img src="/assets/img/market-welding.jpg" alt="" loading="lazy" />
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
          </div>
        </div>
      </section>
    </>
  )
}
