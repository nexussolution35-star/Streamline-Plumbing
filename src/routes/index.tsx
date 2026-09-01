import { createFileRoute } from "@tanstack/react-router";

import { StaticPage } from "@/components/StaticPage";

const formCard = `
<div class="formcard">
  <h2 class="h3">Schedule an appointment</h2>
  <p class="hint">Two quick details and we'll call you back. Everything else is optional.</p>
  <div class="f-grid">
    <div class="field full"><label for="fn">Your name</label><input id="fn" name="name" type="text" autocomplete="name" autocapitalize="words" enterkeyhint="next" placeholder="e.g. Thandi Mahlangu"></div>
    <div class="field full"><label for="ph">Phone number</label><input id="ph" name="phone" type="tel" inputmode="tel" autocomplete="tel" enterkeyhint="next" placeholder="082 000 0000"><span class="fieldhint">We call back on this number.</span></div>
    <div class="field full"><label for="sv">What do you need?</label><select id="sv" name="service"><option value="">Choose one</option><option>Geyser or solar &mdash; repair or replace</option><option>Blocked drain or leak</option><option>New installation</option><option>Relocation</option><option>Maintenance / service plan</option><option>Insurance claim</option><option>Emergency / something else</option></select></div>
    <div class="field full"><label for="cb">Best time to call</label><select id="cb" name="callback"><option>As soon as possible</option><option>Morning</option><option>Afternoon</option><option>After 5pm</option></select></div>
    <div class="field full"><label for="ms">Anything we should know? <span class="opt">Optional</span></label><textarea id="ms" name="message" rows="3" placeholder="Tell us what's going on…"></textarea></div>
    <details class="full moredetails"><summary>Add address &amp; email <span class="opt">Optional</span></summary>
      <div class="f-grid">
        <div class="field full"><label for="em">Email <span class="opt">Optional</span></label><input id="em" name="email" type="email" inputmode="email" autocomplete="email" placeholder="you@email.co.za"></div>
        <div class="field full"><label for="ad">Street address <span class="opt">Optional</span></label><input id="ad" name="address" type="text" autocomplete="street-address" placeholder="Street address"></div>
        <div class="field"><label for="ci">Town <span class="opt">Optional</span></label><input id="ci" name="city" type="text" autocomplete="address-level2" placeholder="Nelspruit / White River"></div>
        <div class="field"><label for="zp">Postal code <span class="opt">Optional</span></label><input id="zp" name="postal" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="1200"></div>
      </div>
    </details>
    <div class="full captcha"><span class="box"></span> CAPTCHA — verification appears here</div>
  </div>
  <button class="btn btn-lime" type="button">Request my call back</button>
  <p class="fineprint">Placeholder form — submissions are not sent from this preview.</p>
</div>`;

const html = `
<div class="topbar"><div class="wrap">
  <span>Plumbing &amp; maintenance across the Lowveld | Mon – Fri 8:00am – 6:00pm</span>
  <span><a href="tel:+27829003389">082 900 3389</a> | <a href="mailto:info@streamlineplumbing.co.za">info@streamlineplumbing.co.za</a></span>
</div></div>
<header class="hdr"><div class="wrap">
  <a class="logo" href="/"><img src="/assets/logo-696.webp" alt="Streamline Plumbing logo" srcset="/assets/logo-400.webp 400w, /assets/logo-696.webp 696w" sizes="120px" width="696" height="198" decoding="async" loading="eager" fetchpriority="high"></a>
  <button class="navtoggle" aria-expanded="false" aria-controls="nav">MENU</button>
  <nav class="nav" id="nav" aria-label="Main"><a href="/" aria-current="page">Home</a><a href="/about-us">About Us</a><a href="/services">Services</a><a href="/gallery">Gallery</a><a href="/blog">Blog</a><a href="/contact-us">Contact Us</a><a class="btn btn-lime btn-quote" href="/contact-us">Get a Quote</a></nav>
</div></header>
<main id="main">

<!-- 1 — HERO + CONTACT FORM -->
<section class="hero hero--overlay hero--form"><div class="heroshot"><div class="drop" role="img" aria-label="Streamline water drop emblem"></div></div><div class="wrap hero__wrap">
  <div class="hero__content">
    <span class="eyebrow" style="color:var(--lime)">Nelspruit &amp; White River · Mpumalanga</span>
    <h1>Nelspruit plumbing <span class="accent">&amp; maintenance</span></h1>
    <p class="lede">All geysers, solar controllers &amp; timers, heating pumps, main water lines and drains — for homes, businesses, estates and developments across the Lowveld.</p>
    <ul class="checks"><li>New Installations</li><li>Replacements</li><li>Relocations</li><li>Maintenance</li><li>Insurance Claims</li></ul>
    <div class="badgerow">
    <a class="gbadge" href="https://www.google.com/search?q=Streamline+Plumbing+Nelspruit+reviews" target="_blank" rel="noopener" aria-label="Streamline Plumbing is rated 4.9 out of 5 on Google reviews">
      <span class="gbadge__g" aria-hidden="true"><svg viewBox="0 0 48 48" width="22" height="22"><path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.1h12.1c-.2 1.8-1.6 4.6-4.5 6.4l-.1.3 6.5 5 .5.1c4.1-3.8 6.6-9.4 6.6-15z"/><path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 41.6 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.8-2.9-.8-4.4 0-1.5.3-3 .7-4.4v-.3l-6.8-5.3-.2.1A22 22 0 0 0 2 24c0 3.5.8 6.9 2.4 9.9l7.1-5.5z"/><path fill="#EA4335" d="M24 9.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 3.4 29.9 1 24 1 15.4 1 8 6 4.4 13.1l7.1 5.5C13.3 13.3 18.2 9.5 24 9.5z"/></svg></span>
      <span class="gbadge__txt"><strong>4.9</strong> <span class="stars" aria-hidden="true">★★★★★</span></span>
    </a>
    <a class="gbadge gbadge--ig" href="https://www.instagram.com/stream_line_plumbing/" target="_blank" rel="noopener" aria-label="Follow Streamline Plumbing on Instagram">
      <span class="gbadge__g" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#E1306C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="#E1306C" stroke="none"/></svg></span>
      <span class="gbadge__txt"><strong>@stream_line_plumbing</strong></span>
    </a>
    </div>

    <span class="spec">HOURS — Mon – Fri 8:00am – 6:00pm</span>
  </div>
  ${formCard}
</div></section>

<!-- 2 — TRUST BADGES -->
<section class="section section--tight trustband"><div class="wrap">
  <div class="center"><span class="eyebrow">Why Lowveld homeowners trust us</span></div>
  <div class="trust">
    <div><span class="spec">EXPERIENCE</span><strong>15+ years on site</strong></div>
    <div><span class="spec">INSURANCE</span><strong>Claims handled</strong></div>
    <div><span class="spec">ESTATES</span><strong>Preferred plumbers</strong></div>
    <div><span class="spec">WORKMANSHIP</span><strong>Guaranteed</strong></div>
  </div>
</div></section>

<!-- 3 — GOOGLE REVIEWS -->
<section class="section reviewsec"><div class="wrap">
  <div class="center">
    <span class="eyebrow">Google reviews</span>
    <h2>Rated by our Nelspruit clients</h2>
    <p class="ratingline"><span class="stars" aria-hidden="true">★★★★★</span> <strong>4.9</strong> average from Google reviews</p>
  </div>
  <div class="reviews">
    <blockquote class="review"><div class="avatar" aria-hidden="true" data-initials="TM"></div><span class="stars" aria-hidden="true">★★★★★</span><p>Our 150L geyser burst on a Saturday morning. The team talked me through shutting off the main over the phone, arrived that same day and fitted the replacement properly. Honest quote, no surprises on the invoice.</p><cite><strong>Thandi Mahlangu</strong><span>Homeowner · Nelspruit</span></cite></blockquote>
    <blockquote class="review"><div class="avatar" aria-hidden="true" data-initials="PB"></div><span class="stars" aria-hidden="true">★★★★★</span><p>They replaced a section of our main water line and sorted the whole insurance claim — photos, report and paperwork included. What could have been a stressful month took a few days.</p><cite><strong>Pieter Botha</strong><span>Insurance claim · White River</span></cite></blockquote>
    <blockquote class="review"><div class="avatar" aria-hidden="true" data-initials="LV"></div><span class="stars" aria-hidden="true">★★★★★</span><p>We have Streamline on a maintenance agreement for the estate. Blocked drains, leaking taps and gully repairs are handled quickly and the workmanship holds up season after season.</p><cite><strong>Lindiwe van Wyk</strong><span>Estate manager · Lowveld</span></cite></blockquote>
    <blockquote class="review"><div class="avatar" aria-hidden="true" data-initials="SN"></div><span class="stars" aria-hidden="true">★★★★★</span><p>Solar geyser and controller installed on a pitched roof, plus the timer set up and explained. Neat pipework and our electricity bill dropped noticeably.</p><cite><strong>Sipho Nkosi</strong><span>Solar installation · Nelspruit</span></cite></blockquote>
    <blockquote class="review"><div class="avatar" aria-hidden="true" data-initials="AD"></div><span class="stars" aria-hidden="true">★★★★★</span><p>Full bathroom renovation — they relocated the shower and basin lines, tested everything and left the site clean. Great to deal with a plumber who works properly on a building site.</p><cite><strong>Anja du Plessis</strong><span>Renovation · White River</span></cite></blockquote>
    <blockquote class="review"><div class="avatar" aria-hidden="true" data-initials="JM"></div><span class="stars" aria-hidden="true">★★★★★</span><p>A slow leak under the kitchen had lifted our tiles. Streamline traced it, repaired the pipe and restored the floor afterwards — one team instead of chasing a handyman as well.</p><cite><strong>Johan Meyer</strong><span>Leak repair · Nelspruit</span></cite></blockquote>

  </div>

  <p class="center mt"><a class="btn btn-ghost btn-ghost--dark" href="https://www.google.com/search?q=Streamline+Plumbing+Nelspruit+reviews" target="_blank" rel="noopener" aria-label="Read Streamline Plumbing reviews on Google">Read our reviews on Google</a></p>
</div></section>

<!-- 4 — EMERGENCY BAND -->
<section class="emergency"><div class="wrap">
  <p class="call">GOT A PLUMBING EMERGENCY? <a href="tel:+27829003389">082 900 3389</a></p>
  <p class="motto">Honest <em>–</em> Professional <em>–</em> Affordable</p>
</div></section>

<!-- 5 — WHO WE ARE -->
<section class="section"><div class="wrap whowe">
  <figure class="shot"><img src="/assets/img/team-800.webp" alt="The Streamline Plumbing team — professional plumbers ready to help in Nelspruit and White River" srcset="/assets/img/team-400.webp 400w, /assets/img/team-800.webp 800w, /assets/img/team-1200.webp 1200w" sizes="(max-width: 760px) 100vw, 760px" width="1200" height="686" decoding="async" loading="lazy"></figure>
  <div class="copy">
    <span class="eyebrow">Who we are</span>
    <h2>A Lowveld family team that gets the job done</h2>
    <p>At Streamline Plumbing, we know the importance of fixing every leak and keeping your plumbing systems maintained. We fix and install all types of drains, geysers and taps for homes, businesses, estates and developments.</p>
    <p>Our growing team of plumbers and assistants work on all types of maintenance, repairs and installations — and you can count on us to get the job done on time. Real experience on building sites makes us the preferred plumbers for various estates in and around Nelspruit.</p>
    <div class="cta-row">
      <a class="btn btn-lime" href="/about-us">More about us</a>
      <a class="btn btn-ghost btn-ghost--dark" href="/contact-us">Talk to our team</a>
    </div>
  </div>
</div></section>

<section class="section section--tight center"><div class="wrap">
  <span class="eyebrow">Streamline plumbers in Nelspruit</span>
  <h2>We get the job done!</h2>
  <div class="showreel">
    <video class="showreel-vid" src="/assets/video/streamline-showreel.mp4" poster="/assets/video/streamline-showreel-poster.webp" autoplay muted loop playsinline preload="metadata" aria-label="Streamline Plumbing showreel — installations, replacements, relocations, maintenance and insurance work across Nelspruit and White River"></video>
  </div>
  <div class="pillars">
      <div class="pillar"><div class="glyph"><img src="/assets/img/blocked-drain-800.webp" alt="Blocked drain being cleared during an emergency call-out" srcset="/assets/img/blocked-drain-400.webp 400w, /assets/img/blocked-drain-800.webp 800w" sizes="(max-width: 760px) 100vw, 760px" width="800" height="600" decoding="async" loading="lazy"></div><h3>Emergencies</h3><p>Burst geysers, flooding and blocked drains — call us and we'll talk you through making it safe while we're on the way.</p></div>
      <div class="pillar"><div class="glyph"><img src="/assets/img/nelspruit-plumbers-service-level-agreement-800.webp" alt="Planned plumbing maintenance work on a Nelspruit property" srcset="/assets/img/nelspruit-plumbers-service-level-agreement-400.webp 400w, /assets/img/nelspruit-plumbers-service-level-agreement-800.webp 800w, /assets/img/nelspruit-plumbers-service-level-agreement-1024.webp 1024w" sizes="(max-width: 760px) 100vw, 760px" width="1024" height="682" decoding="async" loading="lazy"></div><h3>Maintenance</h3><p>Planned servicing and SLAs for homes, estates and businesses. Small leaks fixed before they become big damage.</p></div>
      <div class="pillar"><div class="glyph"><img src="/assets/img/new-shower-800.webp" alt="Newly installed shower after a bathroom renovation" srcset="/assets/img/new-shower-400.webp 400w, /assets/img/new-shower-800.webp 800w" sizes="(max-width: 760px) 100vw, 760px" width="800" height="600" decoding="async" loading="lazy"></div><h3>Renovations</h3><p>New installations, relocations and replacements for bathrooms, kitchens and full builds — planned, routed and tested.</p></div></div>

</div></section>

<div class="pipe" role="presentation"><span></span></div>

<!-- 6 — SERVICES / WHY US -->
<section class="section"><div class="wrap">
  <div class="copy">
    <span class="eyebrow">Why the Lowveld calls us</span>
    <h2>Work with our expert plumbers in Nelspruit and White River</h2>
    <p>We offer our services throughout the Lowveld, focusing on Nelspruit and White River. Our reliable team are experts at repairing all types of plumbing for homes, businesses and estates, with real experience on building sites.</p>
    <div class="sub">
      <h3>We also do renovations and repairs</h3>
      <p style="margin-top:.6rem">Often a leak can do more damage than what you see on the surface. If your tiles are lifting, floors are water damaged or paving is pulling up, you don't need to call the handyman when you can call us. As part of our plumbing services we offer renovation work to restore your home after the flood.</p>
      <h3 style="margin-top:1.8rem">Talk to our team today</h3>
      <p style="margin-top:.6rem">Get a quote when you next need plumbing in Nelspruit or White River. We'll be there to halt the flow! Helpful emergency guidance when you need it — we'll save you from a water-wasting crisis.</p>
    </div>
  </div>
</div></section>

<!-- 7 — RECENT WORK -->
<section class="section--tight section"><div class="wrap">
  <div class="center"><span class="eyebrow">Recent work</span><h2>On site across the Lowveld</h2></div>
  <div class="g-strip">
      <a class="g-tile g-1 has-photo" href="/gallery" style="--photo:url('/assets/img/1-150l-solar-geyser-800.webp')"><span>Solar geyser install — pitched roof</span></a>
      <a class="g-tile g-2 has-photo" href="/gallery" style="--photo:url('/assets/img/replacing-section-of-main-line-800.webp')"><span>Main line replacement</span></a>
      <a class="g-tile g-3 has-photo" href="/gallery" style="--photo:url('/assets/img/new-shower-800.webp')"><span>Bathroom re-route — renovation</span></a></div>
</div></section>

<div class="pipe" role="presentation"><span></span></div>

<!-- 8 — BLOG -->
<section class="section"><div class="wrap">
  <div class="center"><span class="eyebrow">From the workshop</span><h2>Read our latest advice below</h2></div>
  <div class="cards">
      <div class="card"><div class="thumb"><img src="/assets/img/there-are-many-reasons-to-hire-plumbers-in-nelspruit-800.webp" alt="Streamline Plumbing — 5 bits of advice from our plumbers in Nelspruit" srcset="/assets/img/there-are-many-reasons-to-hire-plumbers-in-nelspruit-400.webp 400w, /assets/img/there-are-many-reasons-to-hire-plumbers-in-nelspruit-800.webp 800w, /assets/img/there-are-many-reasons-to-hire-plumbers-in-nelspruit-1024.webp 1024w" sizes="(max-width: 760px) 100vw, 760px" width="1024" height="736" decoding="async" loading="lazy"></div><div class="band"></div><div class="body">
        <span class="spec">ADVICE FROM OUR PLUMBERS</span><h3>5 bits of advice from our plumbers in Nelspruit</h3><p>Small habits — knowing your main stop tap, listening for running water at night, servicing your geyser — save Lowveld homeowners thousands. Here's what our team wishes every client knew.</p>
        <a class="more" aria-label="Read more: 5 bits of advice from our plumbers in Nelspruit" href="/blog">Read more →</a></div></div>
      <div class="card"><div class="thumb"><img src="/assets/img/home-plumber-how-we-work-2-700.webp" alt="Streamline Plumbing — General plumbing maintenance advice for Lowveld homes" srcset="/assets/img/home-plumber-how-we-work-2-400.webp 400w, /assets/img/home-plumber-how-we-work-2-700.webp 700w" sizes="(max-width: 760px) 100vw, 760px" width="700" height="252" decoding="async" loading="lazy"></div><div class="band"></div><div class="body">
        <span class="spec">MAINTENANCE</span><h3>General plumbing maintenance advice for Lowveld homes</h3><p>A network of water pipes runs in and around your house, and most of it will carry on working for a lifetime — with a little maintenance at the right times. Where to start.</p>
        <a class="more" aria-label="Read more: General plumbing maintenance advice for Lowveld homes" href="/blog">Read more →</a></div></div>
      <div class="card"><div class="thumb"><img src="/assets/img/blog-picture-800.webp" alt="Streamline Plumbing — Keeping things under control until the plumber arrives" srcset="/assets/img/blog-picture-400.webp 400w, /assets/img/blog-picture-800.webp 800w, /assets/img/blog-picture-960.webp 960w" sizes="(max-width: 760px) 100vw, 760px" width="960" height="1440" decoding="async" loading="lazy"></div><div class="band"></div><div class="body">
        <span class="spec">EMERGENCIES</span><h3>Keeping things under control until the plumber arrives</h3><p>A burst pipe at midnight doesn't have to become a flooded home. Shut off the main, kill the geyser's power, and follow these steps while our team is on the way.</p>
        <a class="more" aria-label="Read more: Keeping things under control until the plumber arrives" href="/blog">Read more →</a></div></div></div>
</div></section>

</main>
<footer class="foot"><div class="wrap">
  <div class="grid">
    <div>
      <a class="logo" href="/"><img src="/assets/logo-696.webp" alt="Streamline Plumbing logo" srcset="/assets/logo-400.webp 400w, /assets/logo-696.webp 696w" sizes="120px" width="696" height="198" decoding="async" loading="lazy"></a>
      <span class="spec">TEL 082 900 3389<br>info@streamlineplumbing.co.za<br>Mon – Fri 8:00am – 6:00pm</span>
      <p class="mt" style="font-size:.92rem">Honest, professional and affordable plumbing for homes, businesses, estates and developments across Nelspruit and White River.</p>
    </div>
    <div><h3>Services</h3><ul><li><a href="/services/new-installations">New Installations</a></li><li><a href="/services/replacements">Replacements</a></li><li><a href="/services/relocations">Relocations</a></li><li><a href="/services/maintenance">Maintenance</a></li><li><a href="/services/insurance-claims">Insurance Claims</a></li></ul></div>
    <div><h3>Our location</h3>
      <p>Serving <a href="/areas/nelspruit">Nelspruit</a> and <a href="/areas/white-river">White River</a>, Mpumalanga.</p>
      <span class="spec">EMERGENCIES — CALL 082 900 3389</span>
      <a class="footmap" href="https://maps.google.com/maps?ll=-25.49863,30.99247&z=15&t=m&hl=en&gl=ZA&mapclient=embed&cid=11333621513624779912" target="_blank" rel="noopener noreferrer" aria-label="Open Streamline Plumbing on Google Maps"><img src="/assets/img/map-gmaps-400w.webp" srcSet="/assets/img/map-gmaps-400w.webp 400w, /assets/img/map-gmaps-800w.webp 800w, /assets/img/map-gmaps-1200w.webp 1200w" sizes="(max-width: 640px) 100vw, 300px" width="400" height="260" loading="lazy" decoding="async" alt="Map showing Streamline Plumbing location in Nelspruit, Mpumalanga" /><span>Open in maps</span></a>
    </div>
  </div>
  <div class="legal"><span>© 2026 STREAMLINE PLUMBING (PTY) LTD. ALL RIGHTS RESERVED.</span><span>NELSPRUIT · WHITE RIVER</span></div>
</div></footer>
`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Streamline Plumbing | Plumbers in Nelspruit & White River" },
      { name: "description", content: "Honest, professional and affordable plumbing and maintenance in Nelspruit and White River. Geysers, drains, installations, insurance claims. Call 082 900 3389." },
      { property: "og:title", content: "Streamline Plumbing | Plumbers in Nelspruit & White River" },
      { property: "og:description", content: "Honest, professional and affordable plumbing and maintenance in Nelspruit and White River. Geysers, drains, installations, insurance claims. Call 082 900 3389." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Streamline Plumbing | Plumbers in Nelspruit & White River" },
      { name: "twitter:description", content: "Honest, professional and affordable plumbing and maintenance in Nelspruit and White River. Geysers, drains, installations, insurance claims. Call 082 900 3389." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "stylesheet", href: "/assets/fonts.css" },
      { rel: "stylesheet", href: "/assets/styles.css" },
    ],
    scripts: [
      { type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Streamline Plumbing | Plumbers in Nelspruit & White River\",\"description\":\"Honest, professional and affordable plumbing and maintenance in Nelspruit and White River. Geysers, drains, installations, insurance claims. Call 082 900 3389.\",\"url\":\"/\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Streamline Plumbing\",\"url\":\"/\"},\"about\":{\"@type\":\"Plumber\",\"name\":\"Streamline Plumbing\",\"telephone\":\"+27829003389\",\"email\":\"info@streamlineplumbing.co.za\",\"areaServed\":[\"Nelspruit\",\"White River\",\"Mpumalanga Lowveld\"],\"openingHours\":\"Mo-Fr 08:00-18:00\",\"image\":\"/assets/logo.jpg\"}}" },
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={html} />;
}
