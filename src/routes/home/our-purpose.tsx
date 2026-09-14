import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/home/our-purpose')({
  head: () => ({
    ...pageHead({
      path: "/home/our-purpose",
      title: "Our Purpose | Manganese Metal Company",
      description: "Why Manganese Metal Company refines high-purity manganese, and what follows from it.",
      image: "/assets/img/site-aerial.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Our Purpose", "description": "Why Manganese Metal Company refines high-purity manganese, and what follows from it.", "url": `${SITE_URL}/home/our-purpose`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "About us", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 3, "name": "Our Purpose", "item": `${SITE_URL}/home/our-purpose`}]})],
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
              About us
            </p>
            <h1>
              Our Purpose
            </h1>
            <p className="hero__sub">
              Why a manganese refinery in Mpumalanga matters to the energy transition.
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
              Our Purpose
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Our purpose
              </p>
              <h2>
                To make the purest manganese available to the industries that need it most
              </h2>
              <p className="lead">
                Manganese is one of the quiet essentials of modern industry. It hardens steel, it makes
  aluminium formable, and it is increasingly central to the cathode chemistry inside lithium-ion batteries.
              </p>
              <p>
                The world does not lack manganese. What it lacks is manganese pure enough, consistent enough and free
  enough of selenium to be used where contamination is not an option — produced somewhere other than a
  single concentrated region.
              </p>
              <p>
                That is the gap we exist to fill. Every process decision at Mbombela is measured against it.
              </p>
            </div>
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/market-batteries.jpg" alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              What follows from it
            </p>
            <h2>
              Purpose expressed as practice
            </h2>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Purity first
              </h3>
              <p>
                Where purity and throughput conflict, purity wins. It is the reason customers qualify us.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Supply where it is scarce
              </h3>
              <p>
                A credible high-purity source outside the dominant production region.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Responsible production
              </h3>
              <p>
                Manganese for the energy transition has to be produced to standards the transition would recognise.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Local value
              </h3>
              <p>
                A skilled industrial employer and long-term investor in the Mbombela region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
