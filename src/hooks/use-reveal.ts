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

    let didReveal = false;
    let rafId = 0;

    const revealNow = () => {
      if (didReveal) return;
      didReveal = true;
      node.classList.add("is-visible");
    };

    // Manual visibility check fallback (reliable on mobile). This prevents the "never reveals"
    // failure mode even if IntersectionObserver is flaky.
    const checkAndReveal = () => {
      if (didReveal) return;
      const rect = node.getBoundingClientRect();
      const nearViewport = rect.top < window.innerHeight * 0.92;
      if (nearViewport) revealNow();
    };

    const onScrollOrResize = () => {
      if (didReveal) return;
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(checkAndReveal);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    // Run once on mount.
    checkAndReveal();

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            revealNow();
            observer?.disconnect();
        }
      },
      {
          // Slightly earlier than the manual threshold, but not "way too early".
          threshold: 0.12,
          rootMargin: "0px 0px -15% 0px",
      },
    );

    observer.observe(node);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      observer?.disconnect();
    };
  }, []);

  return ref;
};

export default useReveal;
