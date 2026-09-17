import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../site'

export const Route = createFileRoute('/contact-us')({
  head: () => ({
    ...pageHead({
      path: "/contact-us",
      title: "Contact Us | Manganese Metal Company",
      description: "Contact Manganese Metal Company for specification data, quotations and technical support.",
      image: "/assets/img/contact.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "ContactPage", "name": "Contact Us", "description": "Contact Manganese Metal Company for specification data, quotations and technical support.", "url": `${SITE_URL}/contact-us`, "mainEntity": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`, "telephone": "+27137594600", "address": {"@type": "PostalAddress", "streetAddress": "Fairbairn Street, Rocky Drift", "addressLocality": "Mbombela", "postalCode": "1200", "addressRegion": "Mpumalanga", "addressCountry": "ZA"}}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact-us`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/contact.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Contact
            </p>
            <h1>
              Talk to our team
            </h1>
            <p className="hero__sub">
              Technical questions, specification data, quotations and qualification programmes — start here.
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
              Contact
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
                  Enquiries
                </p>
                <h2>
                  Tell us what you need
                </h2>
                <p className="lead">
                  The more you can tell us about grade, volume and application, the more useful our first reply will be.
                </p>
              </div>
              <form className="form" data-demo="" noValidate="">
                <h3 style={{ marginBottom: "1.25rem" }}>
                  Send an enquiry
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
                        General enquiry
                      </option>
                      <option>
                        EMM — request a quotation
                      </option>
                      <option>
                        HP MSM — request a quotation
                      </option>
                      <option>
                        Technical / specification data
                      </option>
                      <option>
                        Logistics & delivery
                      </option>
                      <option>
                        Careers
                      </option>
                      <option>
                        Media
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
            <div data-reveal="" data-reveal-delay="1">
              <div className="tile" style={{ marginBottom: "1.25rem" }}>
                <p className="tile__role">
                  Switchboard
                </p>
                <h3>
                  General enquiries
                </h3>
                <p>
                  Our switchboard will direct you to the right commercial, technical or administrative contact.
                </p>
                <a href="tel:+27137594600">
                  +27 (0)13 759 4600
                </a>
              </div>
              <div className="tile" style={{ marginBottom: "1.25rem" }}>
                <p className="tile__role">
                  Human Resources
                </p>
                <h3>
                  People & careers
                </h3>
                <p>
                  Recruitment, employment enquiries and HR matters.
                </p>
                <a href="tel:+27137594823">
                  +27 (0)13 759 4823
                </a>
              </div>
              <div className="tile">
                <p className="tile__role">
                  Visit us
                </p>
                <h3>
                  Refinery & head office
                </h3>
                <address className="footer__addr" style={{ color: "var(--ink-500)", fontSize: "var(--fs-sm)" }}>
                  Fairbairn Street, Rocky Drift, Mbombela 1200, Mpumalanga, South Africa
                </address>
                <p style={{ marginTop: ".75rem", fontSize: "var(--fs-xs)", color: "var(--steel-600)" }}>
                  Site visits are by prior arrangement only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Common questions
            </p>
            <h2>
              Before you write
            </h2>
          </div>
          <div className="acc" data-reveal="">
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>
                  Can I request a sample for qualification?
                </span>
                <span className="acc__icon"></span>
              </button>
              <div className="acc__panel">
                <div>
                  Yes. Sample quantities for qualification programmes are arranged case by case — tell us the grade, the intended application and the analytical scope your programme requires.
                </div>
              </div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>
                  What documentation comes with a consignment?
                </span>
                <span className="acc__icon"></span>
              </button>
              <div className="acc__panel">
                <div>
                  Every consignment is accompanied by a certificate of analysis for the production lot, giving the manganese assay and trace-element profile, together with the export documentation required for your destination.
                </div>
              </div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>
                  Which grade is right for my process?
                </span>
                <span className="acc__icon"></span>
              </button>
              <div className="acc__panel">
                <div>
                  That depends on physical form and how the manganese is introduced into your process. Describe the application and our technical team will recommend a grade — there is no charge for that conversation.
                </div>
              </div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>
                  Do you supply outside the countries you currently serve?
                </span>
                <span className="acc__icon"></span>
              </button>
              <div className="acc__panel">
                <div>
                  We ship to twenty countries today and are open to enquiries from others. Delivery terms, documentation and logistics are settled as part of the supply agreement.
                </div>
              </div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>
                  Can we audit your operation?
                </span>
                <span className="acc__icon"></span>
              </button>
              <div className="acc__panel">
                <div>
                  Yes. We support customer and third-party audit as a normal part of qualification. Arrange it through the switchboard or the enquiry form.
                </div>
              </div>
            </div>
          </div>
          <figure className="band-img" data-reveal="" style={{ marginTop: '2.5rem' }}>
            <img src="/assets/img/contact.jpg" alt="The approach to the Manganese Metal Company offices at Mbombela" loading="lazy" />
            <figcaption>Fairbairn Street, Rocky Drift, Mbombela</figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
