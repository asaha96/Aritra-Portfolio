import { useEffect, useRef } from "react";

type MagneticOptions = {
  strength?: number;
  scale?: number;
};

const useMagnetic = <T extends HTMLElement>(options: MagneticOptions = {}) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;

    const strength = options.strength ?? 0.22;
    const scale = options.scale ?? 1.03;

    const handleMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      node.style.setProperty("--mag-x", `${x * strength}px`);
      node.style.setProperty("--mag-y", `${y * strength}px`);
      node.style.setProperty("--mag-scale", `${scale}`);
    };

    const handleEnter = () => {
      node.classList.add("is-active");
      node.style.setProperty("--mag-scale", `${scale}`);
    };

    const handleLeave = () => {
      node.classList.remove("is-active");
      node.style.setProperty("--mag-x", "0px");
      node.style.setProperty("--mag-y", "0px");
      node.style.setProperty("--mag-scale", "1");
    };

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseenter", handleEnter);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseenter", handleEnter);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [options.scale, options.strength]);

  return ref;
};

export default useMagnetic;
