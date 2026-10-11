import { useEffect } from 'react';

// Fades sections in as they scroll into view. Without JS or IntersectionObserver everything stays visible.
export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
