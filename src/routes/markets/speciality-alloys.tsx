import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/markets/speciality-alloys')({
  head: () => ({
    ...pageHead({
      path: "/markets/speciality-alloys",
      title: "Speciality Alloys | Manganese Metal Company",
      description: "High-purity selenium-free manganese for the speciality alloys.",
      image: "/assets/img/market-alloys.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Speciality Alloys", "description": "High-purity selenium-free manganese for the speciality alloys.", "url": `${SITE_URL}/markets/speciality-alloys`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Markets"}, {"@type": "ListItem", "position": 3, "name": "Speciality Alloys", "item": `${SITE_URL}/markets/speciality-alloys`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/market-alloys.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Markets
            </p>
            <h1>
              Speciality Alloys
            </h1>
            <p className="hero__sub">
              Vacuum-melted superalloys and speciality grades that cannot tolerate trace contamination.
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
              Speciality Alloys
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/market-alloys.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The application
              </p>
              <h2>
                Speciality Alloys
              </h2>
              <p className="lead">
                Vacuum induction melting exists to keep contamination out. Feeding it a manganese unit carrying selenium or an uncontrolled trace profile defeats the purpose of the process.
              </p>
              <p>
                Superalloys and speciality grades for aerospace, energy and medical applications are specified to trace-element limits that ordinary manganese cannot meet. Volatile and tramp elements behave unpredictably under vacuum and can compromise an entire heat.
              </p>
              <p>
                Our Low Oxygen and Low Hydrogen flakes are produced for these applications, and our selenium-free process means there is no selenium to declare, deviate on, or design around.
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
                  Suited to vacuum induction melting
                </li>
                <li>
                  Selenium-free by process design
                </li>
                <li>
                  Low Oxygen and Low Hydrogen flake available
                </li>
                <li>
                  Customer-specific analytical scope on agreement
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/products/electrolytic-manganese-metal-emm" className="btn btn--primary">
                  Low Oxygen Flake (LO)
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
              <img src="/assets/img/market-alloys.jpg" alt="" loading="lazy" />
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
