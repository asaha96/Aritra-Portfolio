import { useEffect, useRef } from "react";

const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      node.classList.add("is-visible");
      return;
    }

    // Fail open on environments where IntersectionObserver is unavailable or unreliable
    // (some mobile browsers / embedded webviews). Otherwise `.reveal` stays invisible.
    if (!("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }

    let didReveal = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          didReveal = true;
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      {
        // Trigger closer to when the user is about to see the element.
        threshold: 0.2,
        rootMargin: "0px 0px -25% 0px",
      },
    );

    observer.observe(node);

    // Fail-open fallback, but only when the element is reasonably close to the viewport.
    // This avoids revealing content far below the fold (which makes animations feel "too early").
    const fallbackTimer = window.setTimeout(() => {
      if (didReveal) return;
      const rect = node.getBoundingClientRect();
      const isNearViewport = rect.top < window.innerHeight * 1.25;
      if (!isNearViewport) return;
      node.classList.add("is-visible");
      observer.disconnect();
    }, 8000);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return ref;
};

export default useReveal;
