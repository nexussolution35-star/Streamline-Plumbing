import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/what-we-do/hpmsm-project')({
  head: () => ({
    ...pageHead({
      path: "/what-we-do/hpmsm-project",
      title: "HP MSM Plant | Manganese Metal Company",
      description: "MMC's high-purity manganese sulphate monohydrate plant for lithium-ion battery precursors.",
      image: "/assets/img/mtx-plant.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "HP MSM Plant", "description": "MMC's high-purity manganese sulphate monohydrate plant for lithium-ion battery precursors.", "url": `${SITE_URL}/what-we-do/hpmsm-project`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "What we do"}, {"@type": "ListItem", "position": 3, "name": "HP MSM Plant", "item": `${SITE_URL}/what-we-do/hpmsm-project`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/mtx-plant.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              What we do
            </p>
            <h1>
              High-Purity Manganese Sulphate Plant
            </h1>
            <p className="hero__sub">
              Extending the flowsheet from high-purity metal into the lithium-ion battery precursor chain.
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
              HP MSM Plant
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The project
              </p>
              <h2>
                From metal to battery-grade sulphate
              </h2>
              <p className="lead">
                Cathode active material producers need manganese delivered as a high-purity sulphate.
  The purity of that sulphate is limited by the purity of what goes into it.
              </p>
              <p>
                Our HP MSM plant starts from our own 99.9% selenium-free metal rather than from ore or an intermediate.
  Beginning with material this clean removes whole categories of impurity before the first reaction, and it
  shortens the path between our refinery and a qualified battery supply chain.
              </p>
              <p>
                The plant is designed to scale with customer qualification: an initial nameplate of 6,000 tonnes per
  annum with a route to 30,000 tonnes per annum as demand from cathode producers firms up.
              </p>
            </div>
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/mtx-plant.jpg" alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Capacity pathway
            </p>
            <h2>
              Scaling with the battery market
            </h2>
          </div>
          <div className="stats">
            <div className="stat" data-reveal="" data-reveal-delay="1">
              <b data-count="6000" data-suffix="t">
                0
              </b>
              <span>
                Initial nameplate (tpa)
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="2">
              <b data-count="30000" data-suffix="t">
                0
              </b>
              <span>
                Expansion target (tpa)
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="3">
              <b data-count="99.9" data-suffix="%" data-decimals="1">
                0
              </b>
              <span>
                Feedstock metal purity
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="4">
              <b data-count="1">
                0
              </b>
              <span>
                Integrated site
              </span>
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
                  Why it matters
                </p>
                <h2>
                  Three routes into cathode material
                </h2>
                <p className="lead">
                  Manganese can enter cathode active material by more than one path. Not all of them start this clean.
                </p>
              </div>
              <p>
                Producing sulphate from high-purity metal is the shortest route to a low-impurity precursor. It avoids
  carrying ore-borne contaminants through the chemistry and it gives cathode producers a single, auditable
  chain of custody from refinery to precursor.
              </p>
              <p>
                Combined with a selenium-free starting point, it makes MMC one of very few suppliers able to offer
  battery-grade manganese units from outside the dominant production region.
              </p>
              <div className="btn-row">
                <Link to="/markets/lithium-ion-batteries" className="btn btn--ghost">
                  Battery market
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <figure className="figure figure--framed" data-reveal="">
              <img src="/assets/img/cam-routes.png" alt="Routes for adding manganese into cathode active material" loading="lazy" />
              <figcaption>
                Routes for introducing manganese into cathode active material.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--framed" data-reveal="">
              <img src="/assets/img/hpmsm-flow.png" alt="HP MSM plant flow diagram" loading="lazy" />
              <figcaption>
                HP MSM plant process flow.
              </figcaption>
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Plant design
              </p>
              <h2>
                Built alongside the refinery
              </h2>
              <p className="lead">
                Co-locating the sulphate plant with the refinery removes a transport leg, a packaging step
  and a contamination opportunity.
              </p>
              <p>
                Shared utilities, a shared laboratory and a single quality system mean the metal and the sulphate are held
  to one standard, with one point of technical accountability for customers who buy both.
              </p>
              <div className="btn-row">
                <Link to="/what-we-do/mmc-combined-operations" className="btn btn--ghost">
                  Combined operations
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
