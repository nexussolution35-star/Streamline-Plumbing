import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { pageHead, ld, SITE_URL, ORGANISATION } from '../site'

export const Route = createFileRoute('/')({
  head: () => ({
    ...pageHead({
      path: "/",
      title: "High-Purity Electrolytic Manganese Metal | Manganese Metal Company",
      description: "Manganese Metal Company refines 99.9% selenium-free electrolytic manganese metal in Mbombela, South Africa, supplying battery, steel, aluminium, welding and speciality alloy customers in 20 countries.",
      image: "/assets/img/hero-refinery.jpg",
    }),
    scripts: [...ld(ORGANISATION), ...ld({"@context": "https://schema.org", "@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`, "description": "Manganese Metal Company refines 99.9% selenium-free electrolytic manganese metal in Mbombela, South Africa, supplying battery, steel, aluminium, welding and speciality alloy customers in 20 countries.", "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How pure is MMC's manganese?", "acceptedAnswer": {"@type": "Answer", "text": "Our electrolytic manganese metal assays at 99.9% manganese, with a tightly controlled trace-element profile certified for every production lot."}}, {"@type": "Question", "name": "What does “selenium-free” actually mean?", "acceptedAnswer": {"@type": "Answer", "text": "Conventional electrolytic manganese production uses selenium as a process additive, which leaves residual traces in the finished metal. We never introduce it, so there is none to remove downstream and none to declare."}}, {"@type": "Question", "name": "Which grades do you produce?", "acceptedAnswer": {"@type": "Answer", "text": "Five: Low Hydrogen Flake (LH), Low Oxygen Flake (LO), Stabilised Powder (SP), Unstabilised Powder (UP) and Manganese Aluminium Briquettes (Mn/Al). All share the same assay; they differ in physical form and finishing."}}, {"@type": "Question", "name": "Do you supply battery-grade material?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our High Purity Manganese Sulphate Monohydrate is produced from our own 99.9% metal rather than from ore, starting at 6,000 tonnes per annum with a route to 30,000."}}, {"@type": "Question", "name": "Where do you ship?", "acceptedAnswer": {"@type": "Answer", "text": "Twenty countries across four continents, from our single site in Mbombela, South Africa."}}, {"@type": "Question", "name": "What documentation comes with an order?", "acceptedAnswer": {"@type": "Answer", "text": "A certificate of analysis per lot giving the manganese assay and trace-element profile, a selenium-free declaration, lot traceability and the export documentation for your destination."}}, {"@type": "Question", "name": "Can we audit the operation or request qualification samples?", "acceptedAnswer": {"@type": "Answer", "text": "Both. Customer and third-party audit is a normal part of qualification, and sample quantities for qualification programmes are arranged case by case."}}]})],
  }),
  component: Page,
})


/** Buyer's process -> the grade that suits it. All drawn from MMC's published range. */
const GRADES = [
  {
    process: 'Vacuum induction melting',
    grade: 'Low Oxygen Flake',
    code: 'LO',
    why: 'Vacuum melting exists to keep contamination out. A controlled oxygen profile and no selenium means nothing volatile is introduced with the manganese unit.',
    form: 'Flake',
    sector: 'Superalloys, aerospace, medical',
    to: '/services',
  },
  {
    process: 'Welding consumable manufacture',
    grade: 'Low Hydrogen Flake',
    code: 'LH',
    why: 'Dissolved hydrogen carried in through a consumable is a recognised cause of cold cracking. LH flake is produced for low-hydrogen practice.',
    form: 'Flake',
    sector: 'Welding rod, cored wire',
    to: '/services',
  },
  {
    process: 'Cathode precursor manufacture',
    grade: 'High Purity Manganese Sulphate Monohydrate',
    code: 'HP MSM',
    why: 'Produced from our own 99.9% metal rather than from ore, so ore-borne impurity classes never enter the chemistry.',
    form: 'Crystalline sulphate',
    sector: 'Lithium-ion batteries',
    to: '/services',
  },
  {
    process: 'Aluminium melt addition',
    grade: 'Manganese Aluminium Briquettes',
    code: 'Mn/Al',
    why: 'Compacted for controlled dissolution and high recovery, so can body stock hits its target chemistry predictably rather than probabilistically.',
    form: 'Briquette',
    sector: 'Beverage can body stock',
    to: '/services',
  },
  {
    process: 'High-specification steelmaking',
    grade: 'Low Hydrogen Flake',
    code: 'LH',
    why: 'Adds manganese without the residual elements that accompany a ferroalloy addition, giving precise control over final chemistry.',
    form: 'Flake',
    sector: 'Electrical and high-spec steels',
    to: '/services',
  },
  {
    process: 'Powder-fed processes',
    grade: 'Stabilised Powder',
    code: 'SP',
    why: 'Surface-stabilised for safer handling and storage where the downstream process needs manganese delivered as a powder.',
    form: 'Powder',
    sector: 'Speciality alloys, chemical',
    to: '/services',
  },
]

function GradePicker() {
  const [i, setI] = useState(0)
  const g = GRADES[i]
  return (
    <div className="picker">
      <div>
        <p className="doc__lead" style={{ marginBottom: '1.5rem' }}>
          Tell us how the manganese enters your process and the right grade follows from it.
        </p>
        <div className="picker__list" role="listbox" aria-label="Select your process">
          {GRADES.map((o, n) => (
            <button
              key={o.process}
              type="button"
              role="option"
              aria-selected={n === i}
              className="picker__opt"
              onClick={() => setI(n)}
            >
              <i>{String(n + 1).padStart(2, '0')}</i>
              {o.process}
            </button>
          ))}
        </div>
      </div>
      <div className="picker__out picker__out--anim" key={i} aria-live="polite">
        <p className="picker__code">Recommended grade &middot; {g.code}</p>
        <p className="picker__grade">{g.grade}</p>
        <p className="picker__why">{g.why}</p>
        <dl className="picker__specs">
          <div className="picker__spec"><dt>Physical form</dt><dd>{g.form}</dd></div>
          <div className="picker__spec"><dt>Assay</dt><dd>99.9% manganese, selenium-free</dd></div>
          <div className="picker__spec"><dt>Typical sector</dt><dd>{g.sector}</dd></div>
          <div className="picker__spec"><dt>Ships with</dt><dd>Certificate of analysis per lot</dd></div>
        </dl>
        <div className="btn-row">
          <Link to={g.to} className="btn btn--ghost">
            Full specification
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 8h11M9 4l4 4-4 4"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

const STEPS = [
  ['Leach', 'Manganese is taken into solution — the first separation from everything that arrived with the ore.'],
  ['Purify', 'The solution is purified to strip trace metals before it ever reaches the cellhouse.'],
  ['Electrowin', 'Purified electrolyte feeds the cells and manganese deposits onto cathodes. No selenium additive, at any point.'],
  ['Strip & finish', 'Cathodes are stripped and processed into flake, powder or briquette according to the grade ordered.'],
  ['Certify & despatch', 'Each lot is analysed and certified, then packed for export to your handling specification.'],
]

/** The cathode plate fills as the process section scrolls — deposition, literally. */
function Deposition() {
  const host = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setPct(100); return }
    let tick = false
    const on = () => {
      if (tick) return
      tick = true
      requestAnimationFrame(() => {
        const el = host.current
        if (el) {
          const r = el.getBoundingClientRect()
          const vh = window.innerHeight
          // start once the block reaches 80% down the viewport, finish as its
          // bottom clears 30% up - a smooth ramp across the section's travel
          // travel is floored at 0.6vh so a short section still ramps smoothly
          // instead of snapping from 0 to 100
          const done = vh * 0.85 - r.top
          const travel = Math.max(r.height - vh * 0.4, vh * 0.6)
          const p = done / travel
          setPct(Math.round(Math.min(Math.max(p, 0), 1) * 100))
        }
        tick = false
      })
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  return (
    <div className="dep" ref={host}>
      <div className="dep__steps">
        {STEPS.map(([t, d], n) => (
          <div className="dep__step" key={t}>
            <b>{String(n + 1).padStart(2, '0')}</b>
            <div><h3>{t}</h3><p>{d}</p></div>
          </div>
        ))}
      </div>
      <div className="plate" aria-hidden="true">
        <span className="plate__pct">{String(pct).padStart(3, '0')}%</span>
        {[20, 40, 60, 80].map((y) => (
          <span className="plate__tick" key={y} style={{ bottom: `${y}%` }} />
        ))}
        <span className="plate__fill" style={{ height: `${pct}%` }}>
          <span className="plate__grain" />
        </span>
        <span className="plate__cap">Cathode deposition</span>
      </div>
    </div>
  )
}

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
              <Link to="/services" className="btn btn--light">
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
              <h2>Request a specification</h2>
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

      {/* §01 — the assay. The product defined by what is not in it. */}
      <section className="doc">
        <div className="container doc__grid doc__grid--wide">
          <p className="doc__rail"><b>01</b>Assay</p>
          <div>
            <h2 className="doc__head lines" data-reveal="">
              <span><i>The product is</i></span>
              <span><i>what is absent</i></span>
            </h2>
            <p className="doc__lead">
              Every buyer decision here is made on a column of numbers. Manganese declared, selenium
              never introduced, everything else held under a tenth of one percent.
            </p>
            <hr className="hair hair--plum" data-reveal="" />
            <p className="figure-xl">99.9<sup>%</sup></p>
            <p className="figure-xl__cap">Manganese, every lot, since 1974</p>
          </div>
          <div>
            <div className="assay">
              <div className="assay__row assay__row--hero" data-reveal="">
                <span className="assay__sym">Mn</span>
                <span className="assay__name">Manganese</span>
                <span className="assay__val">99.9%</span>
              </div>
              <div className="assay__row assay__row--absent" data-reveal="" data-reveal-delay="1">
                <span className="assay__sym">Se</span>
                <span className="assay__name">Selenium &mdash; never introduced</span>
                <span className="assay__val">absent</span>
              </div>
              <div className="assay__row" data-reveal="" data-reveal-delay="2">
                <span className="assay__sym">&Sigma;</span>
                <span className="assay__name">All other elements, combined</span>
                <span className="assay__val">&le; 0.1%</span>
              </div>
            </div>
            <p className="assay__foot">
              The full trace-element profile is issued per production lot on the certificate of
              analysis, with the analytical scope your qualification programme requires.
            </p>
          </div>
        </div>
      </section>

      {/* §02 — who we are */}
      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>02</b>Refinery</p>
          <div className="slab">
            <div>
              <h2 className="doc__head">One site. One metal. Fifty years.</h2>
              <div className="doc__body">
                <p>
                  Manganese Metal Company has refined electrolytic manganese at Mbombela since 1974.
                  Staying in one place, refining one metal, is what let the process knowledge compound
                  &mdash; most consequentially into taking selenium out of the route entirely.
                </p>
                <p>
                  Conventional production uses selenium as a process additive and accepts the residual
                  traces that follow the metal into the customer&rsquo;s furnace. We do not use it, so
                  there is none to remove downstream and none to declare.
                </p>
              </div>
              <hr className="hair" data-reveal="" />
              <div className="btn-row" style={{ marginTop: 0 }}>
                <Link to="/about" className="btn btn--ghost">
                  Our history
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <figure className="slab__img" data-reveal="" style={{ margin: 0 }}>
              <img src="/assets/img/plant-wide.jpg" alt="The MMC electrolytic manganese refinery at Mbombela" loading="lazy" />
              <figcaption className="slab__tag">Mbombela, Mpumalanga</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* §03 — grade selector */}
      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>03</b>Select</p>
          <div>
            <h2 className="doc__head">Which grade does your process need?</h2>
            <hr className="hair" data-reveal="" />
            <GradePicker />
          </div>
        </div>
      </section>

      {/* §04 — deposition */}
      <section className="doc doc--dark">
        <div className="container doc__grid">
          <p className="doc__rail"><b>04</b>Process</p>
          <div>
            <h2 className="doc__head">Ore to certified grade, in five steps</h2>
            <p className="doc__lead" style={{ marginBottom: '2.5rem' }}>
              The selenium-free electrolytic route, start to finish, on one site.
            </p>
            <Deposition />
          </div>
        </div>
      </section>

      {/* §05 — markets, as an index rather than a card grid */}
      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>05</b>Markets</p>
          <div>
            <h2 className="doc__head">Where the metal ends up</h2>
            <div className="picker__list" style={{ marginTop: '2rem' }}>
              <Link to="/services" className="picker__opt picker__opt--desc">
                <i>01</i>
                <span><strong>Lithium-ion batteries</strong><em>Manganese-rich cathode chemistry offers lower cost and better thermal margin — but only where the manganese unit is clean enough not to seed side reactions.</em></span>
              </Link>
              <Link to="/services" className="picker__opt picker__opt--desc">
                <i>02</i>
                <span><strong>Steel</strong><em>Most manganese in steelmaking arrives as ferroalloy. High-purity metal is for the grades where the residual elements that come with it are not acceptable.</em></span>
              </Link>
              <Link to="/services" className="picker__opt picker__opt--desc">
                <i>03</i>
                <span><strong>Aluminium</strong><em>Can body stock depends on manganese for the balance of strength and formability that lets a sheet be drawn thin at speed without tearing.</em></span>
              </Link>
              <Link to="/services" className="picker__opt picker__opt--desc">
                <i>04</i>
                <span><strong>Welding rod &amp; cored wire</strong><em>A consumable carries its impurities straight into the weld pool, which makes purity a structural question in pipeline and pressure-vessel work.</em></span>
              </Link>
              <Link to="/services" className="picker__opt picker__opt--desc">
                <i>05</i>
                <span><strong>Speciality alloys</strong><em>Vacuum melting exists to keep contamination out. Feeding it a manganese unit carrying selenium defeats the point of the process.</em></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* §06 — reach */}
      <section className="doc">
        <div className="container doc__grid doc__grid--wide">
          <p className="doc__rail"><b>06</b>Reach</p>
          <div>
            <h2 className="doc__head">Twenty countries, one refinery</h2>
            <p className="doc__lead">
              High-purity manganese production is unusually concentrated in one region. We are the
              qualified alternative outside it &mdash; not the largest producer, and not trying to be.
            </p>
            <div className="btn-row">
              <Link to="/services" className="btn btn--ghost">
                Where we ship
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <div className="assay">
              <div className="assay__row" data-reveal=""><span className="assay__sym">20</span><span className="assay__name">Countries served</span><span className="assay__val">4 continents</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="1"><span className="assay__sym">28k</span><span className="assay__name">Tonnes EMM capacity</span><span className="assay__val">per annum</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="2"><span className="assay__sym">05</span><span className="assay__name">EMM grades produced</span><span className="assay__val">flake, powder, briquette</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="3"><span className="assay__sym">1974</span><span className="assay__name">Refining since</span><span className="assay__val">one site</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">Common questions</p>
            <h2>What buyers ask first</h2>
          </div>
          <div className="acc" data-reveal="">
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>How pure is MMC's manganese?</span><span className="acc__icon"></span>
              </button>
              <div className="acc__panel"><div>Our electrolytic manganese metal assays at 99.9% manganese, with a tightly controlled trace-element profile certified for every production lot.</div></div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>What does &ldquo;selenium-free&rdquo; actually mean?</span><span className="acc__icon"></span>
              </button>
              <div className="acc__panel"><div>Conventional electrolytic manganese production uses selenium as a process additive, which leaves residual traces in the finished metal. We never introduce it, so there is none to remove downstream and none to declare.</div></div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>Which grades do you produce?</span><span className="acc__icon"></span>
              </button>
              <div className="acc__panel"><div>Five: Low Hydrogen Flake (LH), Low Oxygen Flake (LO), Stabilised Powder (SP), Unstabilised Powder (UP) and Manganese Aluminium Briquettes (Mn/Al). All share the same assay; they differ in physical form and finishing.</div></div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>Do you supply battery-grade material?</span><span className="acc__icon"></span>
              </button>
              <div className="acc__panel"><div>Yes. Our High Purity Manganese Sulphate Monohydrate is produced from our own 99.9% metal rather than from ore, starting at 6,000 tonnes per annum with a route to 30,000.</div></div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>Where do you ship?</span><span className="acc__icon"></span>
              </button>
              <div className="acc__panel"><div>Twenty countries across four continents, from our single site in Mbombela, South Africa.</div></div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>What documentation comes with an order?</span><span className="acc__icon"></span>
              </button>
              <div className="acc__panel"><div>A certificate of analysis per lot giving the manganese assay and trace-element profile, a selenium-free declaration, lot traceability and the export documentation for your destination.</div></div>
            </div>
            <div className="acc__item">
              <button className="acc__head" aria-expanded="false">
                <span>Can we audit the operation or request qualification samples?</span><span className="acc__icon"></span>
              </button>
              <div className="acc__panel"><div>Both. Customer and third-party audit is a normal part of qualification, and sample quantities for qualification programmes are arranged case by case.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* §08 — ESG */}
      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>08</b>ESG</p>
          <div className="slab slab--flip">
            <div>
              <h2 className="doc__head">Responsible refining is a licence to operate</h2>
              <div className="doc__body">
                <p>
                  Manganese goes into the batteries, the lightweight alloys and the steel that
                  decarbonisation runs on. Producing it responsibly is part of the same job, not a
                  programme running alongside it.
                </p>
              </div>
              <hr className="hair" data-reveal="" />
              <div className="btn-row" style={{ marginTop: 0 }}>
                <Link to="/about" className="btn btn--ghost">
                  Our ESG vision
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <figure className="slab__img" data-reveal="" style={{ margin: 0 }}>
              <img src="/assets/img/site-aerial.jpg" alt="Aerial view of the MMC site and the land around it" loading="lazy" />
              <figcaption className="slab__tag">Site &amp; surrounds</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
