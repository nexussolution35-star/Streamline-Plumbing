import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
  useRouterState,
} from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { SITE_NAME } from '../site'

/* ---------------------------------------------------------------- nav model */
type Kid = { label: string; to: string; blurb: string }
type NavItem = { label: string; to?: string; kids?: Kid[] }

export const NAV: NavItem[] = [
  {
    label: 'About us',
    to: '/',
    kids: [
      { label: 'Ownership', to: '/home/ownership', blurb: 'Shareholding and corporate structure' },
      { label: 'History', to: '/home/history', blurb: 'Five decades of manganese refining' },
      { label: 'Our Purpose', to: '/home/our-purpose', blurb: 'Why we exist' },
      { label: 'Our Behaviours', to: '/home/our-behaviours', blurb: 'How we work' },
    ],
  },
  {
    label: 'What we do',
    kids: [
      { label: 'EMM Refinery', to: '/what-we-do/electrolytic-manganese-metal-emm-refinery', blurb: 'Selenium-free electrolytic refining' },
      { label: 'HP MSM Plant', to: '/what-we-do/hpmsm-project', blurb: 'High-purity sulphate for batteries' },
      { label: 'Combined Operations', to: '/what-we-do/mmc-combined-operations', blurb: 'One integrated manganese flowsheet' },
    ],
  },
  {
    label: 'Products',
    kids: [
      { label: 'Electrolytic Manganese Metal (EMM)', to: '/products/electrolytic-manganese-metal-emm', blurb: 'Five grades, 99.9% purity' },
      { label: 'High Purity Manganese Sulphate (HP MSM)', to: '/products/high-purity-manganese-sulphate-monohydrate-hp-msm', blurb: 'Battery-grade precursor feedstock' },
    ],
  },
  {
    label: 'Markets',
    kids: [
      { label: 'Lithium-ion Batteries', to: '/markets/lithium-ion-batteries', blurb: 'Cathode active material' },
      { label: 'Steel Industry', to: '/markets/steel-industry', blurb: 'Alloying and deoxidation' },
      { label: 'Aluminium Industry', to: '/markets/aluminium-industry', blurb: 'Beverage can body stock' },
      { label: 'Welding Rod & Cored-wire', to: '/markets/welding-rod-cored-wire-industry', blurb: 'Consumable manufacture' },
      { label: 'Speciality Alloys', to: '/markets/speciality-alloys', blurb: 'Vacuum-melted and superalloys' },
    ],
  },
  {
    label: 'Sustainability',
    kids: [
      { label: 'Our ESG Vision', to: '/sustainability/our-esg-vision', blurb: 'Framework and commitments' },
      { label: 'Environmental', to: '/sustainability/our-esg-vision/environmental', blurb: 'Water, energy, emissions, land' },
      { label: 'Social', to: '/sustainability/our-esg-vision/social', blurb: 'People, safety, community' },
      { label: 'Governance & Ethics', to: '/sustainability/our-esg-vision/governance-and-ethics', blurb: 'Oversight and conduct' },
    ],
  },
  { label: 'Global reach', to: '/global-reach' },
  { label: 'Contact', to: '/contact-us' },
]

export const TEL_MAIN = '+27 (0)13 759 4600'
export const TEL_HREF = '+27137594600'
export const ADDRESS = 'Fairbairn Street, Rocky Drift, Mbombela 1200, Mpumalanga, South Africa'

export const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M2 8h11M9 4l4 4-4 4" />
  </svg>
)
const IconCaret = () => (
  <svg className="nav__caret" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M2 4.5 6 8.5l4-4" />
  </svg>
)
const IconChev = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M2 4.5 6 8.5l4-4" />
  </svg>
)

/* ------------------------------------------------- ported from assets/js/site.js */
function useSiteBehaviours(pathname: string) {
  // header transparent-over-hero -> solid on scroll
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const apply = () => setSolid(window.scrollY > 40)
    apply()
    window.addEventListener('scroll', apply, { passive: true })
    return () => window.removeEventListener('scroll', apply)
  }, [])

  // reveal-on-scroll, parallax, count-up, accordions, demo forms, year stamp
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups: Array<() => void> = []

    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window) || reduced) {
      targets.forEach((t) => t.classList.add('is-in'))
    } else {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('is-in')
              io.unobserve(en.target)
            }
          }),
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )
      targets.forEach((t) => io.observe(t))
      cleanups.push(() => io.disconnect())
    }

    const layers = document.querySelectorAll<HTMLElement>('.hero__media, .band__media')
    if (layers.length && !reduced) {
      let ticking = false
      const frame = () => {
        layers.forEach((el) => {
          const host = el.parentElement
          if (!host) return
          const r = host.getBoundingClientRect()
          if (r.bottom < -200 || r.top > window.innerHeight + 200) return
          const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
          el.style.transform = `translate3d(0,${(progress * -52).toFixed(2)}px,0)`
        })
        ticking = false
      }
      const onScroll = () => {
        if (!ticking) {
          ticking = true
          window.requestAnimationFrame(frame)
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      frame()
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
    }

    const nums = document.querySelectorAll<HTMLElement>('[data-count]')
    if (nums.length && 'IntersectionObserver' in window && !reduced) {
      const cio = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (!en.isIntersecting) return
            const el = en.target as HTMLElement
            const end = parseFloat(el.dataset.count || '0')
            const pre = el.dataset.prefix || ''
            const suf = el.dataset.suffix || ''
            const dec = parseInt(el.dataset.decimals || '0', 10)
            let t0: number | null = null
            const step = (ts: number) => {
              if (!t0) t0 = ts
              const p = Math.min((ts - t0) / 1600, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              el.textContent =
                pre + (end * eased).toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + suf
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
            cio.unobserve(el)
          }),
        { threshold: 0.5 },
      )
      nums.forEach((n) => cio.observe(n))
      cleanups.push(() => cio.disconnect())
    } else {
      nums.forEach((el) => {
        const end = parseFloat(el.dataset.count || '0')
        const dec = parseInt(el.dataset.decimals || '0', 10)
        el.textContent =
          (el.dataset.prefix || '') +
          end.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
          (el.dataset.suffix || '')
      })
    }

    const onAcc = (e: Event) => {
      const head = (e.target as HTMLElement).closest<HTMLElement>('.acc__head')
      if (!head) return
      const panel = head.nextElementSibling as HTMLElement | null
      if (!panel) return
      const open = head.getAttribute('aria-expanded') === 'true'
      head.setAttribute('aria-expanded', String(!open))
      panel.style.maxHeight = open ? '' : `${panel.scrollHeight}px`
    }
    document.addEventListener('click', onAcc)
    cleanups.push(() => document.removeEventListener('click', onAcc))

    const onSubmit = (e: Event) => {
      const form = (e.target as HTMLElement).closest<HTMLFormElement>('form[data-demo]')
      if (!form) return
      e.preventDefault()
      const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')
      if (!btn || btn.dataset.busy) return
      const label = btn.innerHTML
      btn.dataset.busy = '1'
      btn.innerHTML = 'Demo form — not connected'
      btn.style.background = 'var(--ok)'
      btn.style.borderColor = 'var(--ok)'
      setTimeout(() => {
        btn.innerHTML = label
        btn.style.background = ''
        btn.style.borderColor = ''
        delete btn.dataset.busy
      }, 2600)
    }
    document.addEventListener('submit', onSubmit)
    cleanups.push(() => document.removeEventListener('submit', onSubmit))

    document.querySelectorAll('[data-year]').forEach((el) => {
      el.textContent = String(new Date().getFullYear())
    })

    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  return solid
}

/* ---------------------------------------------------------------- chrome */
function Header({ solid, pathname }: { solid: boolean; pathname: string }) {
  const [open, setOpen] = useState<string | null>(null)
  const [drawer, setDrawer] = useState(false)
  const [acc, setAcc] = useState<string | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    setDrawer(false)
    setOpen(null)
  }, [pathname])
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])
  useEffect(() => {
    const away = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('click', away)
    return () => document.removeEventListener('click', away)
  }, [])

  return (
    <>
      <header
        ref={ref}
        className={`header ${solid ? 'is-solid' : 'is-transparent'}`}
        data-overlay="true"
      >
        <div className="header__inner">
          <Link className="header__logo" to="/" aria-label={`${SITE_NAME} — home`}>
            <img src="/assets/img/logo.png" alt={SITE_NAME} width="200" height="85" />
          </Link>
          <nav className="nav" aria-label="Main">
            {NAV.map((item) =>
              item.kids ? (
                <div
                  key={item.label}
                  className={`nav__item nav__item--has-panel ${open === item.label ? 'is-open' : ''}`}
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setOpen(null)
                  }}
                >
                  <a
                    className="nav__link"
                    href={item.to || '#'}
                    aria-expanded={open === item.label}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(open === item.label ? null : item.label)
                    }}
                  >
                    {item.label}
                    <IconCaret />
                  </a>
                  <div className="nav__panel">
                    {item.kids.map((k) => (
                      <Link key={k.to} to={k.to}>
                        {k.label}
                        <small>{k.blurb}</small>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={item.label} className="nav__item">
                  <Link
                    className="nav__link"
                    to={item.to!}
                    aria-current={pathname === item.to ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </nav>
          <Link className="btn btn--primary header__cta" to="/contact-us">
            Enquire
            <IconArrow />
          </Link>
          <button
            className="nav__toggle"
            aria-expanded={drawer}
            aria-label="Menu"
            aria-controls="drawer"
            onClick={() => setDrawer((d) => !d)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`drawer ${drawer ? 'is-open' : ''}`} id="drawer">
        {NAV.map((item) =>
          item.kids ? (
            <div className="drawer__group" key={item.label}>
              <button
                className="drawer__head"
                aria-expanded={acc === item.label}
                onClick={() => setAcc(acc === item.label ? null : item.label)}
              >
                {item.label}
                <IconChev />
              </button>
              <div
                className="drawer__panel"
                style={{ maxHeight: acc === item.label ? '600px' : 0 }}
              >
                {item.to && <Link to={item.to}>{item.label} overview</Link>}
                {item.kids.map((k) => (
                  <Link key={k.to} to={k.to}>
                    {k.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link className="drawer__link" key={item.label} to={item.to!}>
              {item.label}
            </Link>
          ),
        )}
        <div className="drawer__foot">
          <Link className="btn btn--primary" to="/contact-us" style={{ width: '100%', justifyContent: 'center' }}>
            Enquire
            <IconArrow />
          </Link>
          <p style={{ margin: '1.25rem 0 0' }}>
            <a href={`tel:${TEL_HREF}`} style={{ fontFamily: 'var(--font-mono)' }}>
              {TEL_MAIN}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

function Footer() {
  const col = (title: string, links: [string, string][]) => (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map(([t, h]) => (
          <li key={h}>
            <Link to={h}>{t}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
  return (
    <>
      <section className="cta">
        <div className="container cta__inner">
          <div data-reveal="">
            <h2>Discuss your manganese specification</h2>
            <p>
              Tell us the grade, volume and delivery window you need. Our commercial team will come
              back to you with availability and technical data.
            </p>
          </div>
          <div className="btn-row" data-reveal="" data-reveal-delay="1">
            <Link className="btn btn--light" to="/contact-us">
              Start an enquiry
              <IconArrow />
            </Link>
            <a className="btn btn--outline-light" href={`tel:${TEL_HREF}`}>
              {TEL_MAIN}
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__brand">
            <img src="/assets/img/logo.png" alt={SITE_NAME} width="200" height="85" />
            <p>
              A world-class refiner of 99.9% selenium-free electrolytic manganese metal, operating
              from Mbombela, South Africa since 1974.
            </p>
          </div>
          {col('Company', [
            ['About us', '/'],
            ['Ownership', '/home/ownership'],
            ['History', '/home/history'],
            ['Our Purpose', '/home/our-purpose'],
            ['Our Behaviours', '/home/our-behaviours'],
          ])}
          {col('Products & Markets', [
            ['EMM', '/products/electrolytic-manganese-metal-emm'],
            ['HP MSM', '/products/high-purity-manganese-sulphate-monohydrate-hp-msm'],
            ['Lithium-ion Batteries', '/markets/lithium-ion-batteries'],
            ['Steel', '/markets/steel-industry'],
            ['Global reach', '/global-reach'],
          ])}
          <div>
            <h4>Contact</h4>
            <address className="footer__addr">
              {ADDRESS}
              <br />
              <br />
              <a href={`tel:${TEL_HREF}`}>{TEL_MAIN}</a>
            </address>
            <ul style={{ marginTop: '1.25rem' }}>
              <li>
                <Link to="/contact-us">Enquiry form</Link>
              </li>
              <li>
                <Link to="/downloads">Downloads</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="footer__bottom">
            <p style={{ margin: 0 }}>
              &copy; <span data-year="">2026</span> {SITE_NAME} (Pty) Ltd. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/sitemap">Sitemap</Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

/* ---------------------------------------------------------------- root */
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      // Google SERP fetches /favicon.ico by convention - keep it first.
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: '/assets/css/fonts.css' },
      { rel: 'stylesheet', href: '/assets/css/site.css' },
    ],
  }),
  component: RootDocument,
})

function RootDocument() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const solid = useSiteBehaviours(pathname)
  return (
    <html lang="en-ZA">
      <head>
        <HeadContent />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header solid={solid} pathname={pathname} />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
