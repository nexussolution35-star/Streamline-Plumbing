import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { pageHead, ld, SITE_URL, breadcrumbLd } from '../site'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    ...pageHead({
      path: '/gallery',
      title: 'Gallery | Manganese Metal Company',
      description:
        'The Mbombela refinery, the five grades of electrolytic manganese metal we produce, and the industries our material ends up in.',
      image: '/assets/img/hero-refinery.jpg',
    }),
    scripts: [
      ...ld({
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'Manganese Metal Company gallery',
        url: `${SITE_URL}/gallery`,
        description: 'Refinery, product grades and end-use imagery from Manganese Metal Company.',
      }),
      ...ld(breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
      ])),
    ],
  }),
  component: Page,
})

type Shot = { src: string; alt: string; cat: string; tall?: boolean }

const SHOTS: Shot[] = [
  { src: 'hero-refinery.jpg', cat: 'Refinery', tall: true, alt: 'Electrolyte cells in the manganese refinery at Mbombela' },
  { src: 'plant-wide.jpg', cat: 'Refinery', alt: 'Wide view across the MMC refinery plant' },
  { src: 'operations.jpg', cat: 'Refinery', alt: 'Refinery operations underway on the plant floor' },
  { src: 'mtx-plant.jpg', cat: 'Refinery', tall: true, alt: 'The high purity manganese sulphate plant alongside the refinery' },
  { src: 'site-aerial.jpg', cat: 'Refinery', alt: 'Aerial view of the MMC site and surrounding land at Mbombela' },
  { src: 'selenium-free-process.jpg', cat: 'Process', alt: 'The selenium-free electrolytic refining process' },
  { src: 'process-combined.png', cat: 'Process', alt: 'Diagram of the combined manganese flowsheet at Mbombela' },
  { src: 'hpmsm-flow.png', cat: 'Process', alt: 'Process flow diagram for the HP MSM plant' },
  { src: 'cam-routes.png', cat: 'Process', alt: 'Routes for introducing manganese into cathode active material' },
  { src: 'grade-lh.jpg', cat: 'Grades', tall: true, alt: 'Low Hydrogen Flake, one of five electrolytic manganese grades' },
  { src: 'grade-lo.jpg', cat: 'Grades', alt: 'Low Oxygen Flake electrolytic manganese metal' },
  { src: 'grade-sp.jpg', cat: 'Grades', alt: 'Stabilised Powder electrolytic manganese metal' },
  { src: 'grade-up.jpg', cat: 'Grades', alt: 'Unstabilised Powder electrolytic manganese metal' },
  { src: 'grade-mnal.jpg', cat: 'Grades', tall: true, alt: 'Manganese aluminium briquettes for melt addition' },
  { src: 'market-batteries.jpg', cat: 'End use', alt: 'Lithium-ion battery cells, an end use for high purity manganese' },
  { src: 'market-steel.jpg', cat: 'End use', tall: true, alt: 'Steel production, where manganese is used for alloying and deoxidation' },
  { src: 'steel-rolls.jpg', cat: 'End use', alt: 'Rolled steel coil produced with manganese additions' },
  { src: 'market-aluminium.jpg', cat: 'End use', alt: 'Aluminium beverage cans drawn from manganese-bearing body stock' },
  { src: 'market-welding.jpg', cat: 'End use', alt: 'Welding in progress using manganese-bearing consumables' },
  { src: 'market-alloys.jpg', cat: 'End use', alt: 'Vacuum induction melting of speciality alloys' },
  { src: 'esg-diagram.png', cat: 'Company', alt: 'The MMC sustainability framework at a glance' },
  { src: 'social-csi.jpg', cat: 'Company', alt: 'Community programme supported by MMC near Mbombela' },
  { src: 'ownership.jpg', cat: 'Company', alt: 'MMC leadership at the Mbombela operation' },
  { src: 'contact.jpg', cat: 'Company', alt: 'The approach to the MMC offices at Mbombela' },
  { src: 'chart-ev-forecast.png', cat: 'Process', alt: 'Forecast chart showing rising electric-vehicle battery demand for high-purity manganese' },
  { src: 'chart-mnso4-upside.png', cat: 'Process', alt: 'Chart projecting demand growth for high-purity manganese sulphate in cathode material' },
  { src: 'use-ev.jpg', cat: 'End use', tall: false, alt: 'Cutaway of an electric vehicle showing the battery pack that high-purity manganese feeds' },
  { src: 'use-alloy.jpg', cat: 'End use', alt: 'Aircraft turbine engine, an application for vacuum-melted speciality alloys' },
  { src: 'use-aluminium.jpg', cat: 'End use', alt: 'Aluminium can bodies drawn from manganese-bearing sheet' },
  { src: 'use-welding.jpg', cat: 'End use', tall: true, alt: 'A welding arc, where low-hydrogen manganese consumables are used' },
  { src: 'co-shareholding.png', cat: 'Company', alt: 'Shareholding diagram showing MM Holdings as sole owner of Manganese Metal Company' },
  { src: 'esg-environmental.png', cat: 'Company', alt: 'Word cloud of MMC environmental themes: energy, carbon, waste and emissions' },
  { src: 'esg-governance.png', cat: 'Company', alt: 'Word cloud of MMC governance themes: ethics, transparency and accountability' },
  { src: 'esg-social.png', cat: 'Company', alt: 'Word cloud of MMC social themes: inclusion, diversity, labour rights and safety' },
  { src: 'co-csi-1.jpg', cat: 'Company', alt: 'MMC team with a pedal-powered kart built for a community engineering challenge' },
  { src: 'co-csi-2.jpg', cat: 'Company', tall: false, alt: 'Pedal-kart teams competing at a community event supported by MMC' },
  { src: 'co-csi-3.jpg', cat: 'Company', alt: 'Students and MMC staff with a pedal kart at a schools engineering challenge' },
  { src: 'co-uniform.jpg', cat: 'Company', alt: 'School pupils receiving donated items during an MMC-supported community drive' },
  { src: 'co-team.jpg', cat: 'Company', tall: true, alt: 'MMC staff volunteering at a Child Welfare anniversary event' },
]

const CATS = ['All', 'Refinery', 'Process', 'Grades', 'End use', 'Company']

function Page() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? SHOTS : SHOTS.filter((s) => s.cat === cat)
  return (
    <>
      <section className="hero hero--inner">
        <div className="hero__media">
          <img src="/assets/img/operations.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">Gallery</p>
            <h1>The refinery, the metal, the end use</h1>
            <p className="hero__sub">
              39 views of a single-site operation — from the cellhouse to the industries our
              manganese ends up in.
            </p>
          </div>
        </div>
      </section>

      <section className="doc">
        <div className="container doc__grid">
          <p className="doc__rail"><b>01</b>Index</p>
          <div>
            <div className="gal__bar" role="group" aria-label="Filter gallery by subject">
              {CATS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="gal__filter"
                  aria-pressed={cat === c}
                  onClick={() => setCat(c)}
                >
                  {c}
                  <span>{c === 'All' ? SHOTS.length : SHOTS.filter((s) => s.cat === c).length}</span>
                </button>
              ))}
            </div>
            <hr className="hair" data-reveal="" />
            <div className="gal">
              {shown.map((s, i) => (
                <figure className={`gal__item${s.tall ? ' gal__item--tall' : ''}`} key={s.src} data-reveal="" data-reveal-delay={String(i % 4)}>
                  <img src={`/assets/img/${s.src}`} alt={s.alt} loading={i < 2 ? undefined : 'lazy'} />
                  <figcaption>
                    <i>{String(i + 1).padStart(2, '0')}</i>
                    {s.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
