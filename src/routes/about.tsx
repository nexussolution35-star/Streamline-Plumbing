import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../site'

export const Route = createFileRoute('/about')({
  head: () => ({
    ...pageHead({
      path: '/about',
      title: 'About MMC | Manganese Metal Company',
      description:
        'Manganese Metal Company has refined selenium-free electrolytic manganese at Mbombela, South Africa since 1974 — our ownership, history, purpose and the standards we hold to.',
      image: '/assets/img/plant-wide.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Manganese Metal Company',
        url: `${SITE_URL}/about`,
        description:
          'Ownership, history, purpose and operating standards of Manganese Metal Company, a selenium-free electrolytic manganese refiner in Mbombela, South Africa.',
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ])),
    ],
  }),
  component: Page,
})

const MILESTONES: [string, string, string][] = [
  ['1974', 'The refinery is commissioned', 'Electrolytic manganese production begins at Mbombela, on the site the company still operates today.'],
  ['1980s', 'Capacity and export growth', 'Production expands and the customer base broadens beyond southern Africa into international metallurgical markets.'],
  ['1990s', 'Quality systems mature', 'Formal quality management and consistent lot-to-lot control turn MMC into a qualified source for specification-driven buyers.'],
  ['2000s', 'The selenium-free process', 'MMC commercialises an electrolytic route that eliminates selenium entirely — the decision that defines the company today.'],
  ['2010s', 'High-purity markets open', 'Vacuum-melted alloys, precision welding consumables and early battery customers pull MMC further up the purity curve.'],
  ['2020s', 'Into battery materials', 'The HP MSM plant extends the flowsheet from metal into the battery precursor chain, using MMC’s own metal as feedstock.'],
]

const STANDARDS: [string, string][] = [
  ['Safety without exception', 'Nothing produced is worth an injury. The authority to stop unsafe work sits with the person closest to it.'],
  ['Precision as a habit', 'In high-purity refining, “close enough” is a defect. Measure it, record it, act on it.'],
  ['Straight answers', 'With customers, regulators and each other — particularly when the news is inconvenient.'],
  ['Ownership', 'The people closest to the process make the call, and are accountable for it.'],
]

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/plant-wide.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">About</p>
            <h1>Fifty years on one site, refining one metal</h1>
            <p className="hero__sub">
              Manganese Metal Company has produced electrolytic manganese at Mbombela, Mpumalanga since
              1974. That focus is the whole explanation for the purity.
            </p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid doc__grid--wide">
          <p className="doc__rail"><b>01</b>Company</p>
          <div>
            <h2 className="doc__head">Specialists, not generalists</h2>
            <div className="doc__body">
              <p>
                Staying in one place, refining one metal, is what allowed the process knowledge to
                compound — most consequentially into removing selenium from electrolytic manganese
                production entirely.
              </p>
              <p>
                Conventional practice uses selenium as a process additive and accepts the residual
                traces that follow the metal into the customer’s furnace or cathode. We never
                introduce it, so there is none to remove downstream and none to declare.
              </p>
            </div>
          </div>
          <div>
            <figure className="band-img" data-reveal="" style={{ margin: '0 0 1.75rem', aspectRatio: '4 / 3' }}>
              <img src="/assets/img/operations.jpg" alt="Refinery operations on the plant floor at Mbombela" loading="lazy" />
              <figcaption>Inside the refinery</figcaption>
            </figure>
            <div className="assay">
              <div className="assay__row" data-reveal=""><span className="assay__sym">1974</span><span className="assay__name">Refining since</span><span className="assay__val">one site</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="1"><span className="assay__sym">28k</span><span className="assay__name">Tonnes EMM capacity</span><span className="assay__val">per annum</span></div>
              <div className="assay__row" data-reveal="" data-reveal-delay="2"><span className="assay__sym">20</span><span className="assay__name">Countries served</span><span className="assay__val">4 continents</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>02</b>Ownership</p>
          <div className="slab">
            <div>
              <h2 className="doc__head">Ownership built for the long term</h2>
              <div className="doc__body">
                <p>
                  Refining is capital-intensive and long-cycle. Qualifying a high-purity manganese
                  supply into a battery or aerospace chain takes years, and the shareholder base has to
                  be patient enough to support that horizon.
                </p>
                <p>
                  Manganese Metal Company (Pty) Ltd is a South African registered company operating
                  from its refinery in Mbombela. The structure is designed to give customers confidence
                  in continuity of supply and in the investment programme behind it.
                </p>
              </div>
            </div>
            <figure className="slab__img" data-reveal="" style={{ margin: 0 }}>
              <img src="/assets/img/ownership.jpg" alt="MMC corporate and operational leadership at the Mbombela refinery" loading="lazy" />
              <figcaption className="slab__tag">Corporate structure</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="doc doc--dark">
        <div className="container doc__grid">
          <p className="doc__rail"><b>03</b>History</p>
          <div>
            <h2 className="doc__head">A single site, continuously refined</h2>
            <div className="dep__steps" style={{ marginTop: '2rem' }}>
              {MILESTONES.map(([year, title, body]) => (
                <div className="dep__step" key={year}>
                  <b>{year}</b>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </div>
              ))}
            </div>
            <figure className="band-img" data-reveal="" style={{ marginTop: '2rem' }}>
              <img src="/assets/img/hero-refinery.jpg" alt="The electrolytic cellhouse that has run at Mbombela since 1974" loading="lazy" />
              <figcaption>The cellhouse</figcaption>
            </figure>
            <p className="assay__foot" style={{ color: 'var(--steel-600)' }}>
              Milestone years beyond 1974 are indicative and pending confirmation by the company.
            </p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid doc__grid--wide">
          <p className="doc__rail"><b>04</b>Purpose</p>
          <div>
            <h2 className="doc__head">Why a refinery in Mpumalanga matters</h2>
            <p className="doc__lead">
              The world does not lack manganese. It lacks manganese pure enough, consistent enough and
              free enough of selenium to be used where contamination is not an option — produced
              somewhere other than a single concentrated region.
            </p>
            <hr className="hair" data-reveal="" />
            <div className="doc__body">
              <p>That gap is what we exist to fill. Every process decision at Mbombela is measured against it.</p>
            </div>
          </div>
          <div>
            <figure className="band-img" data-reveal="" style={{ margin: '0 0 1.75rem', aspectRatio: '4 / 3' }}>
              <img src="/assets/img/market-batteries.jpg" alt="Lithium-ion cells, one of the energy-transition uses MMC manganese supports" loading="lazy" />
              <figcaption>Why it matters</figcaption>
            </figure>
            <div className="assay">
              {STANDARDS.map(([t, d], i) => (
                <div className="assay__row" data-reveal="" data-reveal-delay={String(i)} key={t}
                     style={{ gridTemplateColumns: '1fr', gap: '.35rem' }}>
                  <span className="assay__sym" style={{ fontSize: '1rem' }}>{t}</span>
                  <span className="assay__name">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>05</b>ESG</p>
          <div className="slab slab--flip">
            <div>
              <h2 className="doc__head">Responsible refining is a licence to operate</h2>
              <div className="doc__body">
                <p>
                  Manganese goes into the batteries, lightweight alloys and steel that decarbonisation
                  runs on. Producing it responsibly is part of the same job — water stewardship and
                  energy intensity at Mbombela, the safety and development of our people, and the
                  governance that holds both to account.
                </p>
              </div>
              <hr className="hair" data-reveal="" />
              <div className="btn-row" style={{ marginTop: 0 }}>
                <Link to="/contact-us" className="btn btn--ghost">
                  Request our ESG summary
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <figure className="slab__img" data-reveal="" style={{ margin: 0 }}>
              <img src="/assets/img/site-aerial.jpg" alt="Aerial view of the MMC refinery site and the surrounding land" loading="lazy" />
              <figcaption className="slab__tag">Site &amp; surrounds</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
