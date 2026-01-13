"use client";

import { useEffect } from "react";

export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );

    if (elements.length === 0) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      elements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.25);
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    // Try document instead of window
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial position

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [selector]);
}
