"use client";

import { useEffect } from "react";

export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (elements.length === 0) {
      console.log("[Parallax] No elements found with selector:", selector);
      return;
    }

    console.log(`[Parallax] Found ${elements.length} elements`);

    // This is the most reliable way in Next.js production
    const getScrollY = () =>
      window.pageYOffset ||        // Standard
      document.documentElement.scrollTop ||  // Most common in prod
      document.body.scrollTop ||   // Fallback
      0;

    const onScroll = () => {
      const scrollY = getScrollY();

      // Debug: remove after confirming it works
      // console.log("[Parallax] ScrollY:", scrollY);

      elements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.25);
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    // Attach to window (works in most cases)
    window.addEventListener("scroll", onScroll, { passive: true });

    // Also attach to documentElement as fallback (covers the production quirk)
    document.documentElement.addEventListener("scroll", onScroll, { passive: true });

    onScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("scroll", onScroll);
    };
  }, [selector]);
}
