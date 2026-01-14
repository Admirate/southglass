"use client";

import { useEffect } from "react";

export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    let elements: HTMLElement[] = [];
    let rafId: number;

    const collectElements = () => {
      elements = Array.from(
        document.querySelectorAll<HTMLElement>(selector)
      );
      return elements.length > 0;
    };

    const loop = () => {
      //  keep trying until elements appear (production fix)
      if (!elements.length) {
        collectElements();
      }

      if (elements.length) {
        const scrollY =
          (window as any).__lenis?.scroll ??
          window.pageYOffset ??
          document.documentElement.scrollTop ??
          0;

        elements.forEach((el) => {
          const speed = Number(el.dataset.parallaxSpeed ?? 0.15);
          el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
      }

      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(rafId);
      elements.forEach((el) => (el.style.transform = ""));
    };
  }, [selector]);
}
