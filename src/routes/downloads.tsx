import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHead, ld, SITE_URL } from '../site'

export const Route = createFileRoute('/downloads')({
  head: () => ({
    ...pageHead({
      path: "/downloads",
      title: "Downloads | Manganese Metal Company",
      description: "Product specifications, safety data sheets and corporate documents from MMC.",
      image: "/assets/img/downloads.jpg",
    }),
    scripts: [...ld({"@context": "https://schema.org", "@type": "WebPage", "name": "Downloads", "description": "Product specifications, safety data sheets and corporate documents from MMC.", "url": `${SITE_URL}/downloads`, "isPartOf": {"@type": "WebSite", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}, "publisher": {"@type": "Organization", "name": "Manganese Metal Company", "url": `${SITE_URL}/`}}), ...ld({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/`}, {"@type": "ListItem", "position": 2, "name": "Downloads", "item": `${SITE_URL}/downloads`}]})],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/downloads.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              Resources
            </p>
            <h1>
              Downloads
            </h1>
            <p className="hero__sub">
              Specifications, safety data sheets and corporate documents.
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
              Downloads
            </li>
          </ol>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <p className="eyebrow">
              Document library
            </p>
            <h2>
              Technical and corporate documents
            </h2>
            <p className="lead">
              Specification sheets and safety data for every grade we produce.
            </p>
          </div>
          <div className="form__demo" style={{ maxWidth: "52rem", marginBottom: "2rem" }}>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="10" cy="10" r="8"></circle>
              <path d="M10 9v5M10 6.2v.1"></path>
            </svg>
            <span>
              <strong>
                Placeholder links.
              </strong>
              The document library is laid out and styled, but no files are
  attached — each link is inert until the final PDFs are supplied.
            </span>
          </div>
          <div className="dl" data-reveal="">
            <a className="dl__item" href="#" aria-label="Electrolytic Manganese Metal \u2014 product specification (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Electrolytic Manganese Metal — product specification
                </b>
                <span>
                  PDF · EMM
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Low Hydrogen Flake (LH) \u2014 technical data sheet (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Low Hydrogen Flake (LH) — technical data sheet
                </b>
                <span>
                  PDF · EMM
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Low Oxygen Flake (LO) \u2014 technical data sheet (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Low Oxygen Flake (LO) — technical data sheet
                </b>
                <span>
                  PDF · EMM
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Stabilised Powder (SP) \u2014 technical data sheet (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Stabilised Powder (SP) — technical data sheet
                </b>
                <span>
                  PDF · EMM
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Unstabilised Powder (UP) \u2014 technical data sheet (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Unstabilised Powder (UP) — technical data sheet
                </b>
                <span>
                  PDF · EMM
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Manganese Aluminium Briquettes \u2014 technical data sheet (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Manganese Aluminium Briquettes — technical data sheet
                </b>
                <span>
                  PDF · EMM
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="High Purity Manganese Sulphate Monohydrate \u2014 specification (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  High Purity Manganese Sulphate Monohydrate — specification
                </b>
                <span>
                  PDF · HP MSM
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Safety data sheet \u2014 Electrolytic Manganese Metal (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Safety data sheet — Electrolytic Manganese Metal
                </b>
                <span>
                  PDF · Safety
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Safety data sheet \u2014 Manganese Sulphate Monohydrate (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Safety data sheet — Manganese Sulphate Monohydrate
                </b>
                <span>
                  PDF · Safety
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Company profile (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Company profile
                </b>
                <span>
                  PDF · Corporate
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Sustainability &amp; ESG summary (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Sustainability & ESG summary
                </b>
                <span>
                  PDF · Corporate
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
            <a className="dl__item" href="#" aria-label="Quality policy (placeholder link)">
              <span className="dl__icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M11 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"></path>
                  <path d="M11 2v5h5"></path>
                </svg>
              </span>
              <span className="dl__meta">
                <b>
                  Quality policy
                </b>
                <span>
                  PDF · Corporate
                </span>
              </span>
              <span style={{ color: "var(--plum-600)" }}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="container--narrow" style={{ marginInline: "auto", textAlign: "center" }}>
            <div className="section-head section-head--center" data-reveal="">
              <p className="eyebrow">
                Need something else?
              </p>
              <h2>
                Request a document
              </h2>
              <p className="lead">
                Not everything is published. If you need a specification, analytical scope or compliance document that is not listed, ask.
              </p>
            </div>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link to="/contact-us" className="btn btn--primary">
                Request a document
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
