'use client';

import { useEffect } from 'react';

export default function CriticalPreload() {
  useEffect(() => {
    // Images to preload
    const criticalImages = [
      '/optimized/glass-hero-bg.webp',
      '/optimized/about page .webp',
      '/optimized/hero-background.webp',
      '/SG-LOGO-01.png'
    ];

    // Preload images
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

  }, []);

  return null;
} 