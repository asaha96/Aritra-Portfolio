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
        // Trigger a bit earlier to avoid "never revealed" edge cases on small screens.
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    const fallbackTimer = window.setTimeout(() => {
      if (didReveal) return;
      node.classList.add("is-visible");
      observer.disconnect();
    }, 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return ref;
};

export default useReveal;
