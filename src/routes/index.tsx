import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, ORGANISATION } from '../site'

export const Route = createFileRoute('/')({
  head: () => ({
    ...pageHead({
      path: "/",
      title: "High-Purity Electrolytic Manganese Metal | Manganese Metal Company",
      description: "Manganese Metal Company refines 99.9% selenium-free electrolytic manganese metal in Mbombela, South Africa, supplying battery, steel, aluminium, welding and speciality alloy customers in 20 countries.",
      image: "/assets/img/hero-refinery.jpg",
    }),
    scripts: [...ld(ORGANISATION), ...ld({"@context": "https://schema.org", "@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`, "description": "Manganese Metal Company refines 99.9% selenium-free electrolytic manganese metal in Mbombela, South Africa, supplying battery, steel, aluminium, welding and speciality alloy customers in 20 countries.", "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--form">
        <div className="hero__media">
          <img src="/assets/img/hero-refinery.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__grid">
          <div className="hero__content">
            <p className="eyebrow">
              Selenium-free manganese since 1974
            </p>
            <h1 className="display">
              Refining the world’s purest
              <br />
              electrolytic manganese
            </h1>
            <p className="hero__sub">
              From a single site in Mbombela, South Africa, we refine 99.9% selenium-free electrolytic manganese metal and ship it to customers across twenty countries — the only producer of its kind outside China.
            </p>
            <div className="btn-row">
              <Link to="/products/electrolytic-manganese-metal-emm" className="btn btn--light">
                Explore our products
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </Link>
              <Link to="/contact-us" className="btn btn--outline-light">
                Talk to our team
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="hero__form" data-reveal="" data-reveal-delay="1">
            <form className="form" data-demo="" noValidate>
              <h3>Request a specification</h3>
              <p className="form__intro">
                Tell us the grade and volume you need and we&rsquo;ll come back with availability and technical data.
              </p>
              <div className="form__grid form__grid--2">
                <div className="field">
                  <label htmlFor="hero-name">Full name <span className="req">*</span></label>
                  <input id="hero-name" name="name" type="text" placeholder="Your full name" autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="hero-company">Company <span className="req">*</span></label>
                  <input id="hero-company" name="company" type="text" placeholder="Company name" autoComplete="organization" />
                </div>
                <div className="field field--full">
                  <label htmlFor="hero-email">Email <span className="req">*</span></label>
                  <input id="hero-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
                </div>
                <div className="field field--full">
                  <label htmlFor="hero-message">What do you need? <span className="req">*</span></label>
                  <textarea id="hero-message" name="message" placeholder="Grade, indicative volume and delivery country."></textarea>
                </div>
              </div>
              <button className="btn btn--primary" type="submit">
                Send enquiry
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </button>
              <div className="form__demo">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="10" cy="10" r="8"></circle>
                  <path d="M10 9v5M10 6.2v.1"></path>
                </svg>
                <span><strong>Placeholder form.</strong> UI only &mdash; nothing is submitted, stored or sent.</span>
              </div>
            </form>
          </div>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <b data-count="99.9" data-suffix="%" data-decimals="1">
                0
              </b>
              <span>
                Manganese purity
              </span>
            </div>
            <div className="hero__stat">
              <b data-count="28000" data-suffix="t">
                0
              </b>
              <span>
                Annual capacity
              </span>
            </div>
            <div className="hero__stat">
              <b data-count="20">
                0
              </b>
              <span>
                Countries served
              </span>
            </div>
            <div className="hero__stat">
              <b data-count="50" data-suffix="+">
                0
              </b>
              <span>
                Years refining
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <figure className="figure figure--stack" data-reveal="">
              <img src="/assets/img/plant-wide.jpg" alt="" loading="lazy" />
            </figure>
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Who we are
              </p>
              <h2>
                A single-site refiner with a global customer base
              </h2>
              <p className="lead">
                Manganese Metal Company has refined electrolytic manganese metal at Mbombela since 1974.
  Five decades on one site has made us specialists rather than generalists — one metal, refined
  to a consistency that high-specification industries can build a process around.
              </p>
              <p>
                Our selenium-free electrolytic route sets us apart. Conventional EMM production uses selenium as a
  process additive, leaving residual traces that are unacceptable in battery chemistry, vacuum-melted
  superalloys and premium welding consumables. We removed selenium from the process entirely.
              </p>
              <ul className="checks">
                <li>
                  The only selenium-free EMM refinery outside China
                </li>
                <li>
                  Consistent 99.9% purity, lot after lot
                </li>
                <li>
                  Supply security for customers diversifying away from single-region sourcing
                </li>
              </ul>
              <div className="btn-row">
                <Link to="/home/history" className="btn btn--ghost">
                  Our history
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              What we supply
            </p>
            <h2>
              Two products, one flowsheet
            </h2>
            <p className="lead">
              High-purity metal for metallurgy, and battery-grade sulphate produced from that same metal.
            </p>
          </div>
          <div className="grid grid--2">
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <span className="card__tag">
                  Five grades
                </span>
                <img src="/assets/img/grade-lh.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Electrolytic Manganese Metal (EMM)
                </h3>
                <p>
                  99.9% pure, selenium-free manganese in flake, powder and briquette form for metallurgical and chemical use.
                </p>
                <Link to="/products/electrolytic-manganese-metal-emm" className="card__link">
                  View grades
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="2">
              <div className="card__media">
                <span className="card__tag">
                  Battery grade
                </span>
                <img src="/assets/img/mtx-plant.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  High Purity Manganese Sulphate Monohydrate
                </h3>
                <p>
                  Battery-grade HP MSM produced directly from our own high-purity metal for cathode precursor manufacture.
                </p>
                <Link to="/products/high-purity-manganese-sulphate-monohydrate-hp-msm" className="card__link">
                  View specification
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="band__media">
          <img src="/assets/img/selenium-free-process.jpg" alt="" loading="lazy" />
        </div>
        <div className="container">
          <div style={{ maxWidth: "44rem" }}>
            <p className="eyebrow">
              The difference
            </p>
            <h2>
              We took selenium out of manganese refining
            </h2>
            <p className="lead">
              Selenium is the conventional shortcut in electrolytic manganese production. It is also a
    contaminant that follows the metal all the way into the customer’s furnace or cathode.
            </p>
            <p style={{ color: "rgba(255,255,255,.82)" }}>
              Our process achieves the same electrolytic efficiency without it.
    For customers in battery materials, aerospace alloys and precision welding, that single process decision
    is the reason they qualify our metal in the first place.
            </p>
            <div className="btn-row">
              <Link to="/what-we-do/electrolytic-manganese-metal-emm-refinery" className="btn btn--light">
                How the refinery works
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Markets
            </p>
            <h2>
              Where our manganese ends up
            </h2>
            <p className="lead">
              Five industries rely on the purity and consistency of our metal.
            </p>
          </div>
          <div className="grid grid--3">
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <span className="card__tag">
                  Energy
                </span>
                <img src="/assets/img/market-batteries.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Lithium-ion Batteries
                </h3>
                <p>
                  High-purity manganese raises the capacity, cycle life and thermal stability of cathode active material.
                </p>
                <Link to="/markets/lithium-ion-batteries" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="2">
              <div className="card__media">
                <span className="card__tag">
                  Metallurgy
                </span>
                <img src="/assets/img/market-steel.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Steel Industry
                </h3>
                <p>
                  Precise manganese additions without the residual impurities that compromise high-specification steels.
                </p>
                <Link to="/markets/steel-industry" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="3">
              <div className="card__media">
                <span className="card__tag">
                  Packaging
                </span>
                <img src="/assets/img/market-aluminium.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Aluminium Industry
                </h3>
                <p>
                  Manganese gives beverage can body stock the strength and formability that thin-wall drawing demands.
                </p>
                <Link to="/markets/aluminium-industry" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="4">
              <div className="card__media">
                <span className="card__tag">
                  Consumables
                </span>
                <img src="/assets/img/market-welding.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Welding Rod & Cored-wire
                </h3>
                <p>
                  Low-hydrogen, low-oxygen grades for welding consumables where weld integrity is non-negotiable.
                </p>
                <Link to="/markets/welding-rod-cored-wire-industry" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__media">
                <span className="card__tag">
                  Advanced
                </span>
                <img src="/assets/img/market-alloys.jpg" alt="" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>
                  Speciality Alloys
                </h3>
                <p>
                  Vacuum-melted superalloys and speciality grades that cannot tolerate selenium or trace contamination.
                </p>
                <Link to="/markets/speciality-alloys" className="card__link">
                  Read more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--ink">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Why customers qualify us
            </p>
            <h2>
              Built for specifications that leave no margin
            </h2>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Purity you can plan around
              </h3>
              <p>
                99.9% manganese with a tightly controlled trace-element profile, so your process window stays where you set it.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Selenium-free by design
              </h3>
              <p>
                Not scrubbed out downstream — never introduced. The cleanest possible starting point for sensitive chemistry.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Supply diversification
              </h3>
              <p>
                A qualified, audited source of high-purity manganese outside the dominant production region.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Integrated flowsheet
              </h3>
              <p>
                Metal and sulphate from one operation, one quality system, one point of accountability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Our operation in numbers
            </p>
            <h2></h2>
          </div>
          <div className="stats">
            <div className="stat" data-reveal="" data-reveal-delay="1">
              <b data-count="1974">
                0
              </b>
              <span>
                Refining since
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="2">
              <b data-count="28000" data-suffix="t">
                0
              </b>
              <span>
                Tonnes EMM capacity
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="3">
              <b data-count="5">
                0
              </b>
              <span>
                EMM grades produced
              </span>
            </div>
            <div className="stat" data-reveal="" data-reveal-delay="4">
              <b data-count="20">
                0
              </b>
              <span>
                Export destinations
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid--split">
            <div data-reveal="" data-reveal-delay="1">
              <p className="eyebrow">
                Sustainability
              </p>
              <h2>
                Responsible refining is a licence to operate
              </h2>
              <p className="lead">
                Manganese is essential to decarbonisation — it goes into the batteries, the lightweight
  alloys and the steel that the energy transition depends on. Producing it responsibly is part of the same job.
              </p>
              <p>
                Our ESG framework covers environmental stewardship at the Mbombela site, the safety and development of our
  people, and the governance that holds both to account.
              </p>
              <div className="btn-row">
                <Link to="/sustainability/our-esg-vision" className="btn btn--ghost">
                  Our ESG vision
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <figure className="figure figure--framed" data-reveal="">
              <img src="/assets/img/esg-diagram.png" alt="" loading="lazy" />
              <figcaption>
                Our sustainability framework at a glance.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
