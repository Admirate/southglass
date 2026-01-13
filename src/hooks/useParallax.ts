
import { useEffect } from "react";

export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );

    if (!elements.length) return;

    const onScroll = () => {
      const scrollY = window.scrollY;

      elements.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.15);
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [selector]);
}
