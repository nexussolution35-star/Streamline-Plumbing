import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../site'

export const Route = createFileRoute('/services')({
  head: () => ({
    ...pageHead({
      path: '/services',
      title: 'Products & Capability | Manganese Metal Company',
      description:
        'Five grades of 99.9% selenium-free electrolytic manganese metal plus battery-grade HP MSM, the refining process behind them, and the industries they serve.',
      image: '/assets/img/grade-lh.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Products and capability',
        url: `${SITE_URL}/services`,
        description:
          'Electrolytic manganese metal in five grades and high purity manganese sulphate monohydrate, refined selenium-free at Mbombela, South Africa.',
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ])),
    ],
  }),
  component: Page,
})

const GRADES: [string, string, string, string][] = [
  ['Low Hydrogen Flake', 'LH', 'Flake', 'Welding consumables and speciality alloys, where dissolved hydrogen would compromise the weld or the melt.'],
  ['Low Oxygen Flake', 'LO', 'Flake', 'Vacuum-melted and high-integrity alloy production, where the oxygen profile is the controlling variable.'],
  ['Stabilised Powder', 'SP', 'Powder', 'Powder-fed processes needing a surface-stabilised material for safer handling and storage.'],
  ['Unstabilised Powder', 'UP', 'Powder', 'Processes that require an untreated surface on the manganese unit.'],
  ['Manganese Aluminium Briquettes', 'Mn/Al', 'Briquette', 'Controlled, high-recovery addition into aluminium melts — notably can body stock.'],
]

const MARKETS: [string, string, string][] = [
  ['Lithium-ion batteries', 'market-batteries.jpg', 'High-purity manganese raises capacity, cycle life and thermal stability in cathode active material.'],
  ['Steel', 'market-steel.jpg', 'Precise manganese additions without the residual elements that compromise high-specification steels.'],
  ['Aluminium', 'market-aluminium.jpg', 'Strength and formability for beverage can body stock that must survive thin-wall drawing.'],
  ['Welding rod & cored wire', 'market-welding.jpg', 'Low-hydrogen and low-oxygen grades where weld integrity is structural, not cosmetic.'],
  ['Speciality alloys', 'market-alloys.jpg', 'Vacuum-melted superalloys that cannot tolerate selenium or trace contamination.'],
]

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/grade-lh.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Products &amp; capability</p>
            <h1>One metal, specified six ways</h1>
            <p className="hero__sub">
              Five grades of electrolytic manganese metal and one battery-grade sulphate — all off the
              same selenium-free route, all assaying 99.9% manganese.
            </p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>01</b>Grades</p>
          <div>
            <h2 className="doc__head">Electrolytic Manganese Metal</h2>
            <p className="doc__lead">
              All five share the same assay. What differs is physical form and the finishing treatment
              applied afterwards — because the right form is process-specific.
            </p>
            <hr className="hair hair--plum" data-reveal="" />
            <div className="assay">
              {GRADES.map(([name, code, form, use], i) => (
                <div className="assay__row" data-reveal="" data-reveal-delay={String(i % 4)} key={code + name}
                     style={{ gridTemplateColumns: '5.5rem 1fr auto' }}>
                  <span className="assay__sym">{code}</span>
                  <span className="assay__name"><strong style={{ color: 'var(--ink)' }}>{name}</strong><br />{use}</span>
                  <span className="assay__val">{form}</span>
                </div>
              ))}
            </div>
            <p className="assay__foot">
              Full chemical and physical specifications, trace-element limits and packaging options are
              issued on request and with every consignment.
            </p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>02</b>HP MSM</p>
          <div className="slab">
            <div>
              <h2 className="doc__head">High Purity Manganese Sulphate Monohydrate</h2>
              <div className="doc__body">
                <p>
                  HP MSM is the form in which manganese enters cathode precursor manufacture, and its
                  impurity profile propagates straight into cell performance.
                </p>
                <p>
                  We produce it from our own 99.9% metal rather than from ore or a traded intermediate.
                  Starting that clean eliminates whole contaminant classes before the first reaction and
                  gives an unusually short, auditable chain of custody. Capacity scales with
                  qualification, from an initial 6,000 tonnes per annum toward 30,000.
                </p>
              </div>
            </div>
            <figure className="slab__img" data-reveal="" style={{ margin: 0 }}>
              <img src="/assets/img/mtx-plant.jpg" alt="The high purity manganese sulphate plant alongside the MMC refinery" loading="lazy" />
              <figcaption className="slab__tag">HP MSM plant</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="doc doc--dark">
        <div className="container doc__grid doc__grid--wide">
          <p className="doc__rail"><b>03</b>Process</p>
          <div>
            <h2 className="doc__head">Refining without selenium</h2>
            <p className="doc__lead">
              Electrolytic manganese is won from solution onto cathodes. Conventional practice adds
              selenium to improve current efficiency, and accepts what it leaves behind.
            </p>
            <div className="doc__body" style={{ color: 'var(--steel-200)' }}>
              <p>
                Our electrolyte chemistry and cell conditions were reworked to reach the same deposition
                performance without it. For a battery-materials customer or a vacuum-melting alloy
                producer, that is the difference between metal they can qualify and metal they cannot.
              </p>
            </div>
          </div>
          <div>
            <div className="assay">
              {[['Leach', 'Manganese into solution'], ['Purify', 'Trace metals stripped'],
                ['Electrowin', 'Deposition, selenium-free'], ['Finish', 'Flake, powder or briquette'],
                ['Certify', 'Analysed lot by lot']].map(([a, b], i) => (
                <div className="assay__row" data-reveal="" data-reveal-delay={String(i % 4)} key={a}>
                  <span className="assay__sym">{String(i + 1).padStart(2, '0')}</span>
                  <span className="assay__name">{a}</span>
                  <span className="assay__val">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>04</b>Markets</p>
          <div>
            <h2 className="doc__head">Where the metal ends up</h2>
            <div className="slab" style={{ marginTop: '2.5rem', gridTemplateColumns: '1fr' }}>
              {MARKETS.map(([name, img, body], i) => (
                <div className="dep__step" key={name} style={{ gridTemplateColumns: '3.2rem 1fr' }}>
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  <div><h3>{name}</h3><p>{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid doc__grid--wide">
          <p className="doc__rail"><b>05</b>Supply</p>
          <div>
            <h2 className="doc__head">Twenty countries, one refinery</h2>
            <p className="doc__lead">
              High-purity manganese production is unusually concentrated in one region. We are the
              qualified alternative outside it.
            </p>
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
            <div className="assay">
              <div className="assay__row" data-reveal=""><span className="assay__sym">CoA</span><span className="assay__name">Certificate of analysis</span><span className="assay__val">every lot</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="1"><span className="assay__sym">Se</span><span className="assay__name">Selenium declaration</span><span className="assay__val">absent</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="2"><span className="assay__sym">Q</span><span className="assay__name">Qualification samples</span><span className="assay__val">on request</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="3"><span className="assay__sym">A</span><span className="assay__name">Customer &amp; third-party audit</span><span className="assay__val">supported</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
