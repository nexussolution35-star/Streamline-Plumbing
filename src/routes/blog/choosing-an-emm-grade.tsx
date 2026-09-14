import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../../site'

export const Route = createFileRoute('/blog/choosing-an-emm-grade')({
  head: () => ({
    ...pageHead({
      path: '/blog/choosing-an-emm-grade',
      title: 'Choosing between flake, powder and briquette | Manganese Metal Company',
      description: 'Physical form is process-specific. A short guide to matching the grade to how the manganese enters your melt.',
      image: '/assets/img/selenium-free-process.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Choosing between flake, powder and briquette',
        description: 'Physical form is process-specific. A short guide to matching the grade to how the manganese enters your melt.',
        url: `${SITE_URL}/blog/choosing-an-emm-grade`,
        publisher: { '@type': 'Organization', name: 'Manganese Metal Company', url: `${SITE_URL}/` },
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'Choosing between flake, powder and briquette', path: '/blog/choosing-an-emm-grade' },
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
            <p className="eyebrow">Grades</p>
            <h1>Choosing between flake, powder and briquette</h1>
            <p className="hero__sub">Physical form is process-specific. A short guide to matching the grade to how the manganese enters your melt.</p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>01</b>Grades</p>
          <div className="doc__body">

            <p className="doc__lead">
              All five of our electrolytic manganese grades share the same assay and the same
              selenium-free origin. What separates them is physical form &mdash; and form is decided by
              your process, not by preference.
            </p>
            <hr className="hair" data-reveal="" />
            <h2>Form is a process decision</h2>
            <p>
              A vacuum-melting alloy producer and an aluminium can-stock mill both need high-purity
              manganese, and they need it delivered into the melt in completely different ways. Getting
              the form wrong shows up as poor recovery, handling difficulty or an unstable process
              window long before it shows up as a chemistry problem.
            </p>
            <h2>Flake &mdash; LH and LO</h2>
            <p>
              Flake is the general-purpose form, produced in two variants distinguished by which
              dissolved gas is the controlling variable in your process.
            </p>
            <p>
              <strong>Low Hydrogen Flake (LH)</strong> is produced for low-hydrogen practice. Hydrogen
              introduced through a consumable is a recognised contributor to cold cracking in
              high-strength welds, which is why welding consumable manufacture is the clearest case for
              this grade. High-specification steelmaking draws on it for the same reason.
            </p>
            <p>
              <strong>Low Oxygen Flake (LO)</strong> suits vacuum-melted and high-integrity alloy
              production, where the oxygen profile governs. Vacuum induction melting exists to keep
              contamination out of the melt; the manganese addition should not be the thing that puts
              it back in.
            </p>
            <h2>Powder &mdash; SP and UP</h2>
            <p>
              Powder is for processes that feed manganese as a powder rather than charging solid units.
              <strong> Stabilised Powder (SP)</strong> carries a surface treatment that makes handling
              and storage more forgiving. <strong>Unstabilised Powder (UP)</strong> is untreated, for
              processes where that surface modification would interfere downstream.
            </p>
            <p>
              The choice between them is rarely about the manganese and almost always about what
              happens to the particle surface once it enters your process.
            </p>
            <h2>Briquette &mdash; Mn/Al</h2>
            <p>
              Manganese aluminium briquettes are engineered specifically for addition into aluminium
              melts. Compaction controls the rate at which the addition dissolves, which is what makes
              recovery repeatable rather than variable. For can body stock, where alloy chemistry
              drives how stable a high-speed forming operation is, predictability is the entire point.
            </p>
            <h2>How to decide</h2>
            <p>
              Start from how the manganese physically enters your process, not from the grade list.
              Describe the application to us &mdash; the melt practice, the handling constraint, the
              element you are most worried about &mdash; and the grade usually follows from it. There
              is no charge for that conversation, and it is a faster route to the right answer than
              working backwards from a specification sheet.
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
