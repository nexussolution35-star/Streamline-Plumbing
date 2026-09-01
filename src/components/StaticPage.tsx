import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Renders a ported static page's original markup verbatim (SSR-included),
 * then re-arms the original inline vanilla JS behaviours after hydration.
 */
export function StaticPage({ html }: { html: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    setIntro(true);
    const t = setTimeout(() => setIntro(false), 3400);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    // Re-init: mobile nav toggle (original inline handler is preserved in the
    // markup, this is a safety net for hydration and for closing on navigation)
    const nav = document.getElementById("nav");
    const toggle = document.querySelector<HTMLButtonElement>(".navtoggle");
    if (!nav || !toggle) return;
    const onClick = () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    };
    toggle.addEventListener("click", onClick);
    return () => toggle.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {intro && (
        <div className="logo-intro" aria-hidden="true">
          <div className="logo-intro__mark">
            <span className="logo-intro__drop" />
            <span className="logo-intro__ring" />
            <img src="/assets/logo.jpg" alt="" />
          </div>
        </div>
      )}
      <div key={pathname} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

