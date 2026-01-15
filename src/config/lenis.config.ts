import type { LenisOptions } from "@studio-freight/lenis";

export const lenisConfig: LenisOptions = {
  duration: 1.1,
  easing: (t: number) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
};

