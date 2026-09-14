import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/what-we-do/electrolytic-manganese-metal-emm-refinery')({
  head: () => ({
    ...pageHead({
      path: "/what-we-do/electrolytic-manganese-metal-emm-refinery",
      title: "EMM Refinery | Manganese Metal Company",
      description: "Inside the selenium-free electrolytic manganese refinery at Mbombela, South Africa.",
      image: "/assets/img/hero-refinery.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "EMM Refinery", "description": "Inside the selenium-free electrolytic manganese refinery at Mbombela, South Africa.", "url": `${SITE_URL}/what-we-do/electrolytic-manganese-metal-emm-refinery`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "What we do"}, {"@type": "ListItem", "position": 3, "name": "EMM Refinery", "item": `${SITE_URL}/what-we-do/electrolytic-manganese-metal-emm-refinery`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/hero-refinery.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              What we do
            </p>
            <h1>
              Electrolytic Manganese Metal Refinery
            </h1>
            <p className="hero__sub">
              The selenium-free electrolytic route that produces 99.9% manganese at Mbombela.
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
              What we do
            </li>
            <li aria-current="page">
              EMM Refinery
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/selenium-free-process.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The process
              </p>
              <h2>
                Refining without selenium
              </h2>
              <p className="lead">
                Electrolytic manganese is won from solution onto cathodes. Conventional practice adds
  selenium to the electrolyte to improve current efficiency and deposit quality — and accepts the
  residual selenium that carries through into the finished metal.
              </p>
              <p>
                Our refinery does not use it. The electrolyte chemistry and cell conditions were reworked to reach the
  same deposition performance without a selenium additive, which means there is no selenium to remove
  downstream and none to declare on the certificate of analysis.
              </p>
              <p>
                For a battery-materials customer or a vacuum-melting alloy producer, that is not a marketing distinction.
  It is the difference between metal they can qualify and metal they cannot.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Refinery flow
            </p>
            <h2>
              From ore to finished grade
            </h2>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Leach & purification
              </h3>
              <p>
                Manganese is taken into solution and the solution is purified to remove trace metals before it reaches the cells.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Electrowinning
              </h3>
              <p>
                Purified electrolyte is fed to the cellhouse, where manganese deposits onto cathodes — selenium-free.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Stripping & finishing
              </h3>
              <p>
                Cathodes are stripped, then processed into flake, powder or briquette according to grade.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Analysis & despatch
              </h3>
              <p>
                Every lot is analysed and certified before packing for export.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid--sidebar">
            <div>
              <div className="section-head" data-reveal="">
                <p className="eyebrow">
                  Quality control
                </p>
                <h2>
                  Certified, lot by lot
                </h2>
                <p className="lead">
                  Purity claims mean nothing without the analysis behind them.
                </p>
              </div>
              <p>
                Our laboratory analyses each production lot against the specification for its grade. Certificates of
  analysis accompany every consignment, giving the manganese assay and the trace-element profile your
  incoming inspection needs.
              </p>
              <p>
                Where a customer’s qualification programme requires additional elements, tighter limits or
  retained samples, we accommodate that as part of the supply agreement.
              </p>
              <ul className="checks">
                <li>
                  Certificate of analysis with every lot
                </li>
                <li>
                  Traceability from cell to consignment
                </li>
                <li>
                  Customer-specific analysis on agreement
                </li>
                <li>
                  Retained samples for qualification programmes
                </li>
              </ul>
            </div>
            <figure className="figure figure--framed" data-reveal="">
              <img src="/assets/img/process-combined.png" alt="MMC combined process flow" loading="lazy" />
              <figcaption>
                The combined manganese flowsheet at Mbombela.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="band__media">
          <img src="/assets/img/plant-wide.jpg" alt="" loading="lazy" />
        </div>
        <div className="container">
          <div style={{ maxWidth: "42rem" }}>
            <p className="eyebrow">
              Capacity
            </p>
            <h2>
              28,000 tonnes a year of high-purity manganese
            </h2>
            <p className="lead">
              Enough to supply specification-driven customers across twenty countries — and small
  enough that every lot still gets individual attention.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
