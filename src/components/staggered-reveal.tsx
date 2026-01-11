"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface StaggeredRevealProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: boolean;
}

export default function StaggeredReveal({
  children,
  delay = 0,
  staggerChildren = false,
}: StaggeredRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = staggerChildren
      ? Array.from(container.children)
      : [container];

    items.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(32px)";
      element.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        items.forEach((el, index) => {
          const element = el as HTMLElement;

          setTimeout(() => {
            element.style.transition =
              "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.willChange = "auto";
          }, delay + index * 80); 
        });

        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [delay, staggerChildren]);

  return <div ref={containerRef}>{children}</div>;
}
