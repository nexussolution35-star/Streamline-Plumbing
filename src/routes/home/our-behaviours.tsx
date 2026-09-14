import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../../site'

export const Route = createFileRoute('/home/our-behaviours')({
  head: () => ({
    ...pageHead({
      path: "/home/our-behaviours",
      title: "Our Behaviours | Manganese Metal Company",
      description: "The operating standards and culture behind Manganese Metal Company.",
      image: "/assets/img/operations.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Our Behaviours", "description": "The operating standards and culture behind Manganese Metal Company.", "url": `${SITE_URL}/home/our-behaviours`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "About us", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 3, "name": "Our Behaviours", "item": `${SITE_URL}/home/our-behaviours`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/operations.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              About us
            </p>
            <h1>
              Our Behaviours
            </h1>
            <p className="hero__sub">
              The standards we hold each other to — in the plant, in the laboratory and with customers.
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
            <li>
              <Link to="/">
                About us
              </Link>
            </li>
            <li aria-current="page">
              Our Behaviours
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              How we work
            </p>
            <h2>
              Five behaviours, applied daily
            </h2>
            <p className="lead">
              A refinery runs on judgement exercised consistently by people who are not being watched.
            </p>
          </div>
          <div className="grid grid--4">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Safety without exception
              </h3>
              <p>
                Nothing produced is worth an injury. Every person leaves the site as they arrived.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Precision as a habit
              </h3>
              <p>
                In high-purity refining, ‘close enough’ is a defect. Measure it, record it, act on it.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Straight answers
              </h3>
              <p>
                With customers, regulators and each other — particularly when the news is inconvenient.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="4">
              <span className="vcard__num">
                04
              </span>
              <h3>
                Ownership
              </h3>
              <p>
                People closest to the process are trusted to make the call and accountable for it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="band__media">
          <img src="/assets/img/plant-wide.jpg" alt="" loading="lazy" />
        </div>
        <div className="container">
          <div style={{ maxWidth: "42rem" }}>
            <p className="eyebrow">
              Culture
            </p>
            <h2>
              The specification is a promise
            </h2>
            <p className="lead">
              When a customer qualifies our metal, they build a process around the numbers on our
  certificate of analysis. Every behaviour we ask for traces back to keeping that promise intact.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <p className="eyebrow">
              Working with us
            </p>
            <h2>
              What you can expect
            </h2>
          </div>
          <div className="grid grid--3">
            <div className="vcard" data-reveal="" data-reveal-delay="1">
              <span className="vcard__num">
                01
              </span>
              <h3>
                Technical access
              </h3>
              <p>
                Direct contact with the people who run the process, not only a sales desk.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="2">
              <span className="vcard__num">
                02
              </span>
              <h3>
                Documented quality
              </h3>
              <p>
                Certificates of analysis and traceability with every consignment.
              </p>
            </div>
            <div className="vcard" data-reveal="" data-reveal-delay="3">
              <span className="vcard__num">
                03
              </span>
              <h3>
                Honest lead times
              </h3>
              <p>
                Realistic availability, communicated early when it changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
