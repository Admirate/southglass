"use client";

import { useEffect } from "react";

export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Accessibility: reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let elements: HTMLElement[] = [];
    let initialized = false;

    // Collect elements lazily (production-safe)
    const collectElements = () => {
      elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
      return elements.length > 0;
    };

    const applyParallax = (scrollY: number) => {
      if (!initialized) {
        if (!collectElements()) return;
        initialized = true;
      }

      elements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.15);
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    // HYBRID SCROLL SOURCE
    const onScroll = () => {
      const scrollY = (window as any).__lenis?.scroll ?? window.scrollY;

      applyParallax(scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", onScroll);
      elements.forEach((el) => {
        el.style.transform = "";
      });
      elements = [];
    };
  }, [selector]);
}


