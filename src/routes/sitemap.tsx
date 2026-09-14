import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../site'

export const Route = createFileRoute('/sitemap')({
  head: () => ({
    ...pageHead({
      path: "/sitemap",
      title: "Sitemap | Manganese Metal Company",
      description: "Every page on the Manganese Metal Company website.",
      image: "/assets/img/plant-wide.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Sitemap", "description": "Every page on the Manganese Metal Company website.", "url": `${SITE_URL}/sitemap`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Sitemap", "item": `${SITE_URL}/sitemap`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/plant-wide.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Navigation
            </p>
            <h1>
              Sitemap
            </h1>
            <p className="hero__sub">
              Every page on this website.
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
              Sitemap
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            <div data-reveal="">
              <h3>
                About us
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/">
                    About us overview
                  </Link>
                </li>
                <li>
                  <Link to="/home/ownership">
                    Ownership
                  </Link>
                </li>
                <li>
                  <Link to="/home/history">
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/home/our-purpose">
                    Our Purpose
                  </Link>
                </li>
                <li>
                  <Link to="/home/our-behaviours">
                    Our Behaviours
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>
                What we do
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/what-we-do/electrolytic-manganese-metal-emm-refinery">
                    EMM Refinery
                  </Link>
                </li>
                <li>
                  <Link to="/what-we-do/hpmsm-project">
                    HP MSM Plant
                  </Link>
                </li>
                <li>
                  <Link to="/what-we-do/mmc-combined-operations">
                    Combined Operations
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>
                Products
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/products/electrolytic-manganese-metal-emm">
                    Electrolytic Manganese Metal (EMM)
                  </Link>
                </li>
                <li>
                  <Link to="/products/high-purity-manganese-sulphate-monohydrate-hp-msm">
                    High Purity Manganese Sulphate (HP MSM)
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>
                Markets
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/markets/lithium-ion-batteries">
                    Lithium-ion Batteries
                  </Link>
                </li>
                <li>
                  <Link to="/markets/steel-industry">
                    Steel Industry
                  </Link>
                </li>
                <li>
                  <Link to="/markets/aluminium-industry">
                    Aluminium Industry
                  </Link>
                </li>
                <li>
                  <Link to="/markets/welding-rod-cored-wire-industry">
                    Welding Rod & Cored-wire
                  </Link>
                </li>
                <li>
                  <Link to="/markets/speciality-alloys">
                    Speciality Alloys
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>
                Sustainability
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/sustainability/our-esg-vision">
                    Our ESG Vision
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability/our-esg-vision/environmental">
                    Environmental
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability/our-esg-vision/social">
                    Social
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability/our-esg-vision/governance-and-ethics">
                    Governance & Ethics
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>
                Global reach
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/global-reach">
                    Global reach overview
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>
                Contact
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/contact-us">
                    Contact overview
                  </Link>
                </li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>
                Resources
              </h3>
              <ul className="checks">
                <li>
                  <Link to="/downloads">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
