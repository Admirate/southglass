import Lenis from "@studio-freight/lenis";

export const lenisConfig: Lenis.Options = {
  duration: 1.15,
  easing: (t: number) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  smoothTouch: false,  
  wheelMultiplier: 0.9, 
  touchMultiplier: 1,
  infinite: false,
  normalizeWheel: true,
};
