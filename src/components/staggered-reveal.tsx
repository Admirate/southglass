'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface StaggeredRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function StaggeredReveal({ 
  children, 
  delay = 0 
}: StaggeredRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize with hidden state
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add small delay for stagger effect
            setTimeout(() => {
              container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
              container.style.opacity = '1';
              container.style.transform = 'translateY(0)';
            }, delay);
            
            // Once animated, no need to observe anymore
            observer.unobserve(container);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element comes into view
      }
    );

    // Start observing
    observer.observe(container);

    // Cleanup
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={containerRef} className="opacity-0">
      {children}
    </div>
  );
} 