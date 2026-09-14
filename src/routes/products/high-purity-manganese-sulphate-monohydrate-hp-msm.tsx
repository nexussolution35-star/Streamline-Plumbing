import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/products/high-purity-manganese-sulphate-monohydrate-hp-msm')({
  head: () => ({
    ...pageHead({
      path: "/products/high-purity-manganese-sulphate-monohydrate-hp-msm",
      title: "High Purity Manganese Sulphate Monohydrate (HP MSM) | Manganese Metal Company",
      description: "Battery-grade high-purity manganese sulphate monohydrate produced from MMC's own selenium-free 99.9% manganese metal.",
      image: "/assets/img/mtx-plant.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "Product", "name": "High Purity Manganese Sulphate Monohydrate (HP MSM)", "description": "Battery-grade high-purity manganese sulphate monohydrate produced from MMC's own selenium-free 99.9% manganese metal.", "url": `${SITE_URL}/products/high-purity-manganese-sulphate-monohydrate-hp-msm`, "image": `${SITE_URL}/assets/img/mtx-plant.jpg`, "category": "Electrolytic manganese", "brand": {"@type": "Brand", "name": "Manganese Metal Company"}, "manufacturer": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Products"}, {"@type": "ListItem", "position": 3, "name": "HP MSM", "item": `${SITE_URL}/products/high-purity-manganese-sulphate-monohydrate-hp-msm`}]})],
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
              Products
            </p>
            <h1>
              High Purity Manganese Sulphate Monohydrate
            </h1>
            <p className="hero__sub">
              Battery-grade HP MSM produced directly from our own 99.9% selenium-free manganese metal.
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
              Products
            </li>
            <li aria-current="page">
              HP MSM
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                The product
              </p>
              <h2>
                Battery-grade manganese units, from metal
              </h2>
              <p className="lead">
                High Purity Manganese Sulphate Monohydrate is the form in which manganese enters cathode
  precursor manufacture. Its impurity profile propagates directly into cell performance.
              </p>
              <p>
                We produce HP MSM from our own high-purity metal rather than from ore or a traded intermediate. Starting
  from selenium-free 99.9% manganese eliminates contaminant classes at source instead of chasing them through
  the chemistry, and it gives customers an unusually short, auditable chain of custody.
              </p>
              <p>
                Production scales with qualification — from an initial 6,000 tonnes per annum toward 30,000 tonnes
  per annum as cathode demand develops.
              </p>
            </div>
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/market-batteries.jpg" alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
      <section className="section section--ink">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Why the feedstock matters
            </p>
            <h2>
              Purity decided before the first reaction
            </h2>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Selenium-free origin
              </h3>
              <p>
                No selenium is introduced anywhere in the upstream refining process.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Metal-based route
              </h3>
              <p>
                Sulphate made from qualified metal, avoiding ore-borne impurity carry-over.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Single-site custody
              </h3>
              <p>
                Refinery and sulphate plant on one site, under one quality system.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Regional diversification
              </h3>
              <p>
                A battery-grade manganese source outside the dominant producing region.
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
                  Specification & qualification
                </p>
                <h2>
                  Working with cathode producers
                </h2>
              </div>
              <p>
                Qualification programmes for battery materials are detailed and long-running. We support them with
  lot-level certificates of analysis, retained samples, customer-specific analytical scopes where required,
  and direct access to the technical team responsible for the process.
              </p>
              <p>
                Detailed chemical specifications, packaging configurations and sample quantities are issued on request.
              </p>
              <ul className="checks">
                <li>
                  Certificate of analysis per lot
                </li>
                <li>
                  Retained samples for qualification
                </li>
                <li>
                  Customer-specific analytical scope on agreement
                </li>
                <li>
                  Technical support through qualification
                </li>
              </ul>
            </div>
            <div>
              <form className="form" data-demo="" noValidate="">
                <h3 style={{ marginBottom: "1.25rem" }}>
                  Request HP MSM data or samples
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
                        HP MSM — request a quotation
                      </option>
                      <option>
                        HP MSM — request specification data
                      </option>
                      <option>
                        Qualification samples
                      </option>
                      <option>
                        Volume & scale-up discussion
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
