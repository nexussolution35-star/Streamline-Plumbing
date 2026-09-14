import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/what-we-do/mmc-combined-operations')({
  head: () => ({
    ...pageHead({
      path: "/what-we-do/mmc-combined-operations",
      title: "MMC Combined Operations | Manganese Metal Company",
      description: "How MMC's refinery and HP MSM plant operate as a single integrated flowsheet.",
      image: "/assets/img/site-aerial.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "MMC Combined Operations", "description": "How MMC's refinery and HP MSM plant operate as a single integrated flowsheet.", "url": `${SITE_URL}/what-we-do/mmc-combined-operations`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "What we do"}, {"@type": "ListItem", "position": 3, "name": "Combined Operations", "item": `${SITE_URL}/what-we-do/mmc-combined-operations`}]})],
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
              What we do
            </p>
            <h1>
              MMC Combined Operations
            </h1>
            <p className="hero__sub">
              One site, one quality system, two product streams that share the same high-purity origin.
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
              Combined Operations
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--sidebar">
            <div>
              <div className="section-head" data-reveal="">
                <p className="eyebrow">
                  Integrated flowsheet
                </p>
                <h2>
                  Metal and sulphate from one operation
                </h2>
                <p className="lead">
                  The refinery and the sulphate plant are not neighbours. They are one flowsheet.
                </p>
              </div>
              <p>
                Manganese enters the site once and leaves as either high-purity metal or battery-grade sulphate.
  The sulphate plant draws its feedstock from the refinery next door, so the purity achieved in the
  cellhouse is carried directly into the chemical product without an intervening market, transport leg or
  repackaging step.
              </p>
              <p>
                For customers, the practical consequence is singular accountability. One laboratory certifies both
  products. One technical team answers questions about either. One audit covers the whole chain.
              </p>
              <ul className="checks">
                <li>
                  Shared laboratory and quality system
                </li>
                <li>
                  Shared utilities and site services
                </li>
                <li>
                  Single chain of custody from ore to product
                </li>
                <li>
                  One technical and commercial point of contact
                </li>
              </ul>
            </div>
            <figure className="figure figure--framed" data-reveal="">
              <img src="/assets/img/process-combined.png" alt="Combined process diagram" loading="lazy" />
              <figcaption>
                Combined operations flow: refinery and HP MSM plant.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section section--ink">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              What integration buys you
            </p>
            <h2>
              Four practical advantages
            </h2>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Purity carried through
              </h3>
              <p>
                Sulphate made from qualified 99.9% metal, not from ore or a traded intermediate.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                One quality system
              </h3>
              <p>
                The same laboratory, the same standards and the same certification discipline for both products.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Auditable chain
              </h3>
              <p>
                A short, documented custody chain that stands up to customer and regulatory audit.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Commercial simplicity
              </h3>
              <p>
                Buy metal, sulphate or both under one relationship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
