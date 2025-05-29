import { useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export function useInfiniteScroll(
  callback: () => void,
  options: UseInfiniteScrollOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '100px',
    enabled = true
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && enabled) {
        callback();
      }
    },
    [callback, enabled]
  );

  useEffect(() => {
    if (!enabled) return;

    const observerOptions = {
      root: null,
      rootMargin,
      threshold,
    };

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observerRef.current.observe(currentTarget);
    }

    return () => {
      if (observerRef.current && currentTarget) {
        observerRef.current.unobserve(currentTarget);
      }
    };
  }, [handleIntersection, rootMargin, threshold, enabled]);

  return targetRef;
} 