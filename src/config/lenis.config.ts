import Lenis from "@studio-freight/lenis";

export const lenisConfig: Lenis.Options = {
  duration: 1.1, 
  easing: (t: number) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 0.85,
  touchMultiplier: 1,
  infinite: false,
  normalizeWheel: false,
};
