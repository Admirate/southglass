"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { lenisConfig } from "@/config/lenis.config";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const scrollContainer = document.querySelector(
      "#main-content"
    ) as HTMLElement | null;

    if (!scrollContainer) return;

    const lenis = new Lenis({
      ...lenisConfig,
      wrapper: scrollContainer,
      content: scrollContainer,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    console.log("LENIS ACTIVE");

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
