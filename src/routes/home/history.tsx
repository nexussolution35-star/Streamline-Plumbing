import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/home/history')({
  head: () => ({
    ...pageHead({
      path: "/home/history",
      title: "History | Manganese Metal Company",
      description: "Five decades of electrolytic manganese refining at Mbombela, South Africa.",
      image: "/assets/img/operations.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "History", "description": "Five decades of electrolytic manganese refining at Mbombela, South Africa.", "url": `${SITE_URL}/home/history`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "About us", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 3, "name": "History", "item": `${SITE_URL}/home/history`}]})],
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
              About us
            </p>
            <h1>
              History
            </h1>
            <p className="hero__sub">
              Five decades of refining manganese on one site — and the process decisions that made our metal different.
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
              History
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">
              Since 1974
            </p>
            <h2>
              A single site, continuously refined
            </h2>
            <p className="lead">
              Manganese Metal Company has operated from Mbombela since 1974. Staying in one place, refining
  one metal, is what allowed the process knowledge to compound — most significantly into the removal of
  selenium from electrolytic manganese production.
            </p>
          </div>
          <ol className="timeline" data-reveal="">
            <li>
              <time>
                1974
              </time>
              <h3>
                The refinery is commissioned
              </h3>
              <p>
                Electrolytic manganese metal production
      begins at Mbombela in Mpumalanga, South Africa, on the site the company still operates today.
              </p>
            </li>
            <li>
              <time>
                1980s
              </time>
              <h3>
                Capacity and export growth
              </h3>
              <p>
                Production capacity expands and the
      customer base broadens beyond southern Africa into international metallurgical markets.
              </p>
            </li>
            <li>
              <time>
                1990s
              </time>
              <h3>
                Quality systems mature
              </h3>
              <p>
                Formal quality management and consistent
      lot-to-lot control turn MMC from a commodity supplier into a qualified source for specification-driven buyers.
              </p>
            </li>
            <li>
              <time>
                2000s
              </time>
              <h3>
                The selenium-free process
              </h3>
              <p>
                MMC develops and commercialises an
      electrolytic route that eliminates selenium entirely — the process decision that defines the
      company’s position today.
              </p>
            </li>
            <li>
              <time>
                2010s
              </time>
              <h3>
                High-purity markets open up
              </h3>
              <p>
                Demand from vacuum-melted alloys,
      precision welding consumables and early battery-materials customers pulls MMC further up the purity curve.
              </p>
            </li>
            <li>
              <time>
                2020s
              </time>
              <h3>
                Into battery materials
              </h3>
              <p>
                The High-Purity Manganese Sulphate Monohydrate
      plant extends the flowsheet from metal into the battery precursor chain, using MMC’s own metal as feedstock.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="section band">
        <div className="band__media">
          <img src="/assets/img/site-aerial.jpg" alt="" loading="lazy" />
        </div>
        <div className="container">
          <div style={{ maxWidth: "42rem" }}>
            <p className="eyebrow">
              Fifty years on
            </p>
            <h2>
              Specialists, not generalists
            </h2>
            <p className="lead">
              One metal. One site. Five decades. That focus is why customers with the tightest
  specifications keep coming back to a refinery at the edge of a small South African city.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
