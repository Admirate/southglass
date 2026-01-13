"use client";

import { useEffect } from "react";

export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion (accessibility)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let rafId: number | null = null;
    let elements: HTMLElement[] = [];
    let scrollHandlerAttached = false;

    const collectElements = () => {
      elements = Array.from(
        document.querySelectorAll<HTMLElement>(selector)
      );
      return elements.length > 0;
    };

    const onScroll = () => {
      const scrollY = window.scrollY;

      elements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed);

        if (Number.isNaN(speed)) return;

        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    const init = () => {
      if (!collectElements()) {
        rafId = requestAnimationFrame(init);
        return;
      }

      onScroll();

      if (!scrollHandlerAttached) {
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", collectElements);
        scrollHandlerAttached = true;
      }
    };

    rafId = requestAnimationFrame(init);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);

      if (scrollHandlerAttached) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", collectElements);
      }

      elements.forEach((el) => {
        el.style.transform = "";
      });

      elements = [];
    };
  }, [selector]);
}
