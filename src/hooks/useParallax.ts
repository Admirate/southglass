"use client";

import { useEffect } from "react";

export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    let elements: HTMLElement[] = [];
    let rafId: number;

    const collectElements = () => {
      elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    };

    collectElements();

    const onScroll = (scroll: number) => {
      elements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.15);
        el.style.transform = `translate3d(0, ${scroll * speed}px, 0)`;
      });
    };

    // 🔑 If Lenis exists, use it
    if ((window as any).lenis) {
      const lenis = (window as any).lenis;

      const handler = ({ scroll }: { scroll: number }) => {
        onScroll(scroll);
      };

      lenis.on("scroll", handler);

      return () => {
        lenis.off("scroll", handler);
        elements.forEach((el) => (el.style.transform = ""));
      };
    }

    //  Fallback (no Lenis)
    const loop = () => {
      const scrollY =
        window.pageYOffset || document.documentElement.scrollTop || 0;

      onScroll(scrollY);
      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(rafId);
      elements.forEach((el) => (el.style.transform = ""));
    };
  }, [selector]);
}
