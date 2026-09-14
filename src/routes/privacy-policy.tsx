import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../site'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    ...pageHead({
      path: "/privacy-policy",
      title: "Privacy Policy | Manganese Metal Company",
      description: "How Manganese Metal Company handles personal information.",
      image: "/assets/img/operations.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Privacy Policy", "description": "How Manganese Metal Company handles personal information.", "url": `${SITE_URL}/privacy-policy`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": `${SITE_URL}/privacy-policy`}]})],
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
              Legal
            </p>
            <h1>
              Privacy Policy
            </h1>
            <p className="hero__sub">
              How Manganese Metal Company handles personal information collected through this website.
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
              Privacy Policy
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="container--narrow" style={{ marginInline: "auto" }}>
            <div className="form__demo" style={{ marginBottom: "2rem" }}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="10" cy="10" r="8"></circle>
                <path d="M10 9v5M10 6.2v.1"></path>
              </svg>
              <span>
                <strong>
                  Template text.
                </strong>
                This policy is drafting scaffolding only. It must be reviewed and
  completed by MMC’s legal advisers — including POPIA compliance and Information Officer
  details — before the site goes live.
              </span>
            </div>
            <h2>
              Information we collect
            </h2>
            <p>
              This website collects personal information only when you choose to provide it, such as when you submit
  an enquiry. That typically includes your name, company, email address, telephone number and the content of
  your message.
            </p>
            <h2>
              How we use it
            </h2>
            <p>
              Information submitted through an enquiry is used to respond to that enquiry and to manage the commercial
  or technical relationship that follows. We do not sell personal information.
            </p>
            <h2>
              Cookies and analytics
            </h2>
            <p>
              This website does not use tracking cookies or third-party analytics. No behavioural profile is built
  from your visit.
            </p>
            <h2>
              Retention
            </h2>
            <p>
              Enquiry records are retained for as long as necessary for the purpose for which they were collected and
  for any period required by applicable law.
            </p>
            <h2>
              Your rights
            </h2>
            <p>
              Under the Protection of Personal Information Act (POPIA), you have rights of access, correction and
  deletion in respect of your personal information. Requests may be directed to the company via the contact
  details published on this site.
            </p>
            <h2>
              Changes
            </h2>
            <p>
              This policy may be updated from time to time. The current version is always the one published here.
            </p>
            <h2>
              Contact
            </h2>
            <p>
              Questions about this policy may be directed to the company on
              <a href="tel:+27137594600">
                +27 (0)13 759 4600
              </a>
              or through the
              <Link to="/contact-us">
                enquiry form
              </Link>
              .
            </p>
            <p className="form__note">
              Last reviewed: to be confirmed on publication.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
