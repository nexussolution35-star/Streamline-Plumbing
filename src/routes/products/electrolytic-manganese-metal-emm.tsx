import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/products/electrolytic-manganese-metal-emm')({
  head: () => ({
    ...pageHead({
      path: "/products/electrolytic-manganese-metal-emm",
      title: "Electrolytic Manganese Metal (EMM) | Manganese Metal Company",
      description: "99.9% selenium-free electrolytic manganese metal in five grades: LH and LO flake, SP and UP powder, and Mn/Al briquettes.",
      image: "/assets/img/grade-lh.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "Product", "name": "Electrolytic Manganese Metal (EMM)", "description": "99.9% selenium-free electrolytic manganese metal in five grades: LH and LO flake, SP and UP powder, and Mn/Al briquettes.", "url": `${SITE_URL}/products/electrolytic-manganese-metal-emm`, "image": `${SITE_URL}/assets/img/grade-lh.jpg`, "category": "Electrolytic manganese", "brand": {"@type": "Brand", "name": "Manganese Metal Company"}, "manufacturer": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Products"}, {"@type": "ListItem", "position": 3, "name": "EMM", "item": `${SITE_URL}/products/electrolytic-manganese-metal-emm`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/grade-lh.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Products
            </p>
            <h1>
              Electrolytic Manganese Metal (EMM)
            </h1>
            <p className="hero__sub">
              99.9% pure, selenium-free manganese — supplied in five grades for metallurgical and chemical use.
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
              EMM
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
                The product
              </p>
              <h2>
                One metal, specified five ways
              </h2>
              <p className="lead">
                All five grades come off the same selenium-free electrolytic process and share the same
  99.9% manganese assay. What differs is physical form and the finishing treatment applied afterwards.
              </p>
              <p>
                That matters because the right form is process-specific. A vacuum-melting alloy producer and an
  aluminium can-stock mill both need our purity, but they need it delivered into the melt in completely
  different ways.
              </p>
              <p>
                If you are unsure which grade suits your process, our technical team will work through it with you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Grades
            </p>
            <h2>
              Five forms of high-purity manganese
            </h2>
            <p className="lead">
              Select by physical form and downstream handling requirement.
            </p>
          </div>
          <div className="grid grid--3">
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <span className="card__tag">
                  LH
                </span>
                <img src="/assets/img/grade-lh.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Low Hydrogen Flake (LH)
                </h3>
                <p>
                  Degassed flake for applications where dissolved hydrogen would compromise the melt — notably welding consumables and speciality alloys.
                </p>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="2">
              <div className="card__media">
                <span className="card__tag">
                  LO
                </span>
                <img src="/assets/img/grade-lo.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Low Oxygen Flake (LO)
                </h3>
                <p>
                  Flake with a controlled oxygen profile for vacuum-melted and high-integrity alloy production.
                </p>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="3">
              <div className="card__media">
                <span className="card__tag">
                  SP
                </span>
                <img src="/assets/img/grade-sp.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Stabilised Powder (SP)
                </h3>
                <p>
                  Surface-stabilised powder for safer handling and storage where powder feeding is required.
                </p>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="4">
              <div className="card__media">
                <span className="card__tag">
                  UP
                </span>
                <img src="/assets/img/grade-up.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Unstabilised Powder (UP)
                </h3>
                <p>
                  Untreated powder for customers whose downstream process requires an unmodified surface.
                </p>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <span className="card__tag">
                  Mn/Al
                </span>
                <img src="/assets/img/grade-mnal.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Manganese Aluminium Briquettes (Mn/Al)
                </h3>
                <p>
                  Compacted briquettes engineered for controlled, high-recovery addition into aluminium melts.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="table-wrap" data-reveal="">
            <table>
              <caption>
                Indicative grade summary
              </caption>
              <thead>
                <tr>
                  <th>
                    Grade
                  </th>
                  <th>
                    Code
                  </th>
                  <th>
                    Form
                  </th>
                  <th>
                    Typical application
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Low Hydrogen Flake
                  </td>
                  <td>
                    LH
                  </td>
                  <td>
                    Flake
                  </td>
                  <td>
                    Welding consumables, speciality alloys
                  </td>
                </tr>
                <tr>
                  <td>
                    Low Oxygen Flake
                  </td>
                  <td>
                    LO
                  </td>
                  <td>
                    Flake
                  </td>
                  <td>
                    Vacuum-melted and high-integrity alloys
                  </td>
                </tr>
                <tr>
                  <td>
                    Stabilised Powder
                  </td>
                  <td>
                    SP
                  </td>
                  <td>
                    Powder
                  </td>
                  <td>
                    Powder-fed processes requiring safe handling
                  </td>
                </tr>
                <tr>
                  <td>
                    Unstabilised Powder
                  </td>
                  <td>
                    UP
                  </td>
                  <td>
                    Powder
                  </td>
                  <td>
                    Processes requiring an untreated surface
                  </td>
                </tr>
                <tr>
                  <td>
                    Manganese Aluminium Briquettes
                  </td>
                  <td>
                    Mn/Al
                  </td>
                  <td>
                    Briquette
                  </td>
                  <td>
                    Aluminium melt addition
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="form__note" style={{ marginTop: "1rem" }}>
            Full chemical and physical specifications, including trace-element limits and packaging options, are issued on request and with every consignment.
          </p>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--sidebar">
            <div>
              <div className="section-head" data-reveal="">
                <p className="eyebrow">
                  Quality
                </p>
                <h2>
                  What arrives with your order
                </h2>
              </div>
              <ul className="checks">
                <li>
                  Certificate of analysis for every production lot
                </li>
                <li>
                  Manganese assay and full trace-element profile
                </li>
                <li>
                  Selenium-free declaration
                </li>
                <li>
                  Lot traceability to production
                </li>
                <li>
                  Packaging configured for your handling and storage
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/contact-us" className="btn btn--primary">
                  Request a specification
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <form className="form" data-demo="" noValidate="">
                <h3 style={{ marginBottom: "1.25rem" }}>
                  Request EMM data or a quotation
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
                        EMM — request a quotation
                      </option>
                      <option>
                        EMM — request specification data
                      </option>
                      <option>
                        Grade selection advice
                      </option>
                      <option>
                        Packaging & logistics
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
