import { useEffect, useRef } from 'react';

/**
 * Hook to automatically observe elements with class `.reveal-init`
 * and add `.reveal-visible` when they enter the viewport.
 */
export function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-init').forEach((el) => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const targetScope = containerRef.current || document;
    const elements = targetScope.querySelectorAll('.reveal-init:not(.reveal-visible)');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  });

  return containerRef;
}

export default useScrollReveal;

