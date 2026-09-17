import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../../site'

export const Route = createFileRoute('/blog/why-selenium-free-matters')({
  head: () => ({
    ...pageHead({
      path: '/blog/why-selenium-free-matters',
      title: 'Why selenium-free matters downstream | Manganese Metal Company',
      description: 'Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.',
      image: '/assets/img/selenium-free-process.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Why selenium-free matters downstream',
        description: 'Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.',
        url: `${SITE_URL}/blog/why-selenium-free-matters`,
        publisher: { '@type': 'Organization', name: 'Manganese Metal Company', url: `${SITE_URL}/` },
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Why selenium-free matters downstream', path: '/blog/why-selenium-free-matters' },
      ])),
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/selenium-free-process.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Process</p>
            <h1>Why selenium-free matters downstream</h1>
            <p className="hero__sub">Where a residual process additive shows up later — in battery chemistry, vacuum melting and precision welding.</p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>01</b>Process</p>
          <div className="doc__body">

            <p className="doc__lead">
              Selenium is the conventional shortcut in electrolytic manganese production. It is also a
              contaminant that travels with the metal into whatever the customer does next.
            </p>
            <figure className="art-fig" data-reveal="">
              <img src="/assets/img/selenium-free-process.jpg" alt="The selenium-free electrolytic route used at Mbombela." loading="lazy" />
              <figcaption>The selenium-free electrolytic route used at Mbombela.</figcaption>
            </figure>
            <hr className="hair" data-reveal="" />
            <h2>Why it is used at all</h2>
            <p>
              Electrolytic manganese is won from solution onto cathodes. Conventional practice adds
              selenium to the electrolyte because it improves current efficiency and the quality of the
              deposit. It is an effective process additive, and on those terms the choice is
              understandable.
            </p>
            <p>
              The cost is that selenium does not stay in the cellhouse. It follows the metal, and it
              arrives at the customer as a residual the customer did not ask for.
            </p>
            <h2>Removing it later is not the same thing</h2>
            <p>
              A contaminant that is never introduced requires no removal step, leaves no residual to
              declare, and creates no variability between lots depending on how well that removal step
              performed on the day. Our electrolyte chemistry and cell conditions were reworked to
              reach the same deposition performance without a selenium additive at all.
            </p>
            <p>
              That is the whole difference: not scrubbed out downstream, never put in.
            </p>
            <h2>Where it shows up downstream</h2>
            <p>
              <strong>Battery chemistry.</strong> Impurities in cathode active material do not stay
              put. Trace contaminants introduced with the manganese can seed side reactions and erode
              the thermal margin the chemistry was selected for. Since our high-purity manganese
              sulphate is produced from our own metal rather than from ore, the starting point for that
              chemistry is as clean as we can make it.
            </p>
            <p>
              <strong>Vacuum melting.</strong> Volatile and tramp elements behave unpredictably under
              vacuum, and superalloys for aerospace, energy and medical use are specified to
              trace-element limits that ordinary manganese cannot meet. A grade with no selenium to
              declare is simply easier to qualify.
            </p>
            <p>
              <strong>Precision welding.</strong> Consumables carry their impurities directly into the
              weld pool. In pipeline, pressure-vessel and structural work, that turns the purity of the
              manganese addition into a structural question rather than a metallurgical nicety.
            </p>
            <h2>Why it is a supply question too</h2>
            <p>
              High-purity manganese production is unusually concentrated in one region. For a buyer
              holding a qualified alternative source outside it, the selenium-free route is often what
              makes that alternative qualifiable in the first place &mdash; which is why the process
              decision and the supply-security decision tend to arrive together.
            </p>
            <div className="btn-row">
              <Link to="/blog" className="btn btn--ghost">
                All notes
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
