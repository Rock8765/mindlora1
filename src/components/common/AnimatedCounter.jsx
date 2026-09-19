import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export const AnimatedCounter = ({
  value,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reducedMotion, value, duration]);

  const format = (number) =>
    number.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  return (
    <span ref={ref} className="tabular-nums" aria-label={`${prefix}${format(value)}${suffix}`}>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  );
};
