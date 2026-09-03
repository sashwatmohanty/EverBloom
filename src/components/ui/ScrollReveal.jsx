import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(el);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}

export default function ScrollReveal({
  children,
  variant = "up", // "up", "left", "right", "scale"
  delay = 0,
  className = "",
  style = {},
  threshold = 0.12,
  once = true,
}) {
  const [ref, isVisible] = useScrollReveal({ threshold, once });

  let initClass = "reveal-init";
  if (variant === "left") initClass = "reveal-left-init";
  if (variant === "right") initClass = "reveal-right-init";
  if (variant === "scale") initClass = "reveal-scale-init";

  const delayClass = delay ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${initClass} ${delayClass} ${isVisible ? "reveal-active" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
