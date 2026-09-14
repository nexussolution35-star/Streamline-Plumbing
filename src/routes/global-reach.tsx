import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../site'

export const Route = createFileRoute('/global-reach')({
  head: () => ({
    ...pageHead({
      path: "/global-reach",
      title: "Global Reach | Manganese Metal Company",
      description: "MMC supplies high-purity selenium-free manganese to customers in 20 countries across four continents.",
      image: "/assets/img/site-aerial.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Global Reach", "description": "MMC supplies high-purity selenium-free manganese to customers in 20 countries across four continents.", "url": `${SITE_URL}/global-reach`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Global reach", "item": `${SITE_URL}/global-reach`}]})],
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
              Global reach
            </p>
            <h1>
              Twenty countries, one refinery
            </h1>
            <p className="hero__sub">
              High-purity manganese shipped from Mbombela to specification-driven customers across four continents.
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
              Global reach
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/plant-wide.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Where we ship
              </p>
              <h2>
                A single source, deliberately spread
              </h2>
              <p className="lead">
                Our customers are concentrated not by geography but by requirement: they need manganese
  pure enough that its origin becomes a strategic question.
              </p>
              <p>
                High-purity manganese production is unusually concentrated in one region. For a battery producer in
  Europe, an alloy house in North America or a steelmaker in Asia, holding a qualified alternative source is
  increasingly a procurement requirement rather than a preference.
              </p>
              <p>
                That is the role we play. We are not the largest producer of manganese in the world, and we are not
  trying to be. We are a qualified, audited, selenium-free source outside the dominant producing region.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Regions served
            </p>
            <h2>
              Four continents
            </h2>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Europe
              </h3>
              <p>
                Battery materials, speciality alloys and high-specification steel producers.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                North America
              </h3>
              <p>
                Alloy houses, welding consumable manufacturers and emerging battery supply chains.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Asia-Pacific
              </h3>
              <p>
                Steel, aluminium and cathode material customers across established industrial markets.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Africa & Middle East
              </h3>
              <p>
                Regional metallurgical customers and our domestic South African base.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--ink section--tight">
        <div className="container">
          <div className="stats">
            <div className="stat" data-reveal="" data-reveal-delay="1">
              <b data-count="20">
                0
              </b>
              <span>
                Countries served
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="2">
              <b data-count="4">
                0
              </b>
              <span>
                Continents
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="3">
              <b data-count="28000" data-suffix="t">
                0
              </b>
              <span>
                Tonnes annual capacity
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="4">
              <b data-count="50" data-suffix="+">
                0
              </b>
              <span>
                Years exporting
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
                  Logistics
                </p>
                <h2>
                  Getting the metal to you
                </h2>
              </div>
              <p>
                Consignments are packed to suit your handling and storage requirements and shipped from South Africa
  under agreed Incoterms. Packaging configuration, documentation requirements and delivery scheduling are
  settled as part of the supply agreement.
              </p>
              <ul className="checks">
                <li>
                  Packaging configured to your handling requirements
                </li>
                <li>
                  Certificates of analysis and export documentation with every consignment
                </li>
                <li>
                  Delivery scheduling agreed against your production plan
                </li>
                <li>
                  Direct contact with commercial and technical teams
                </li>
              </ul>
            </div>
            <div>
              <form className="form" data-demo="" noValidate="">
                <h3 style={{ marginBottom: "1.25rem" }}>
                  Discuss supply to your market
                </h3>
                <div className="form__demo">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="10" cy="10" r="8"></circle>
                    <path d="M10 9v5M10 6.2v.1"></path>
                  </svg>
                  <span>
                    <strong>
                      Placeholder form.
                    </strong>
                    This is UI only — it is not
    connected to a backend and nothing is submitted, stored or sent.
                  </span>
                </div>
                <div className="form__grid form__grid--2">
                  <div className="field">
                    <label htmlFor="f-name">
                      Full name
                      <span className="req">
                        *
                      </span>
                    </label>
                    <input id="f-name" name="name" type="text" placeholder="Your full name" autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-company">
                      Company
                      <span className="req">
                        *
                      </span>
                    </label>
                    <input id="f-company" name="company" type="text" placeholder="Company name" autoComplete="organization" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">
                      Email
                      <span className="req">
                        *
                      </span>
                    </label>
                    <input id="f-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">
                      Telephone
                    </label>
                    <input id="f-phone" name="phone" type="tel" placeholder="Including country code" autoComplete="tel" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-country">
                      Country
                    </label>
                    <input id="f-country" name="country" type="text" placeholder="Delivery country" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-subject">
                      Enquiry type
                    </label>
                    <select id="f-subject" name="subject">
                      <option>
                        New supply enquiry
                      </option>
                      <option>
                        Delivery & logistics
                      </option>
                      <option>
                        Documentation requirements
                      </option>
                      <option>
                        Qualification programme
                      </option>
                    </select>
                  </div>
                  <div className="field field--full">
                    <label htmlFor="f-vol">
                      Grade & indicative volume
                    </label>
                    <input id="f-vol" name="volume" type="text" placeholder="e.g. Low Hydrogen Flake, 120 t per annum" />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="f-msg">
                      Message
                      <span className="req">
                        *
                      </span>
                    </label>
                    <textarea id="f-msg" name="message" placeholder="Tell us about your application, specification and required delivery window."></textarea>
                  </div>
                </div>
                <button className="btn btn--primary" type="submit">
                  Send enquiry
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </button>
                <p className="form__note">
                  Required fields are marked
                  <span className="req">
                    *
                  </span>
                  . We use enquiry details only to
    respond to your request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
