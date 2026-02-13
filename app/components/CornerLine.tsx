"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInViewOnce } from "../scripts/useInViewOnce";

export function CornerLine() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });

  const rightRef = useRef<HTMLSpanElement | null>(null);

  const [topOn, setTopOn] = useState(false);
  const [rightOn, setRightOn] = useState(false);

  // px per second (increase = faster)
  const SPEED_PX_PER_SEC = 900;

  const [rightDurationMs, setRightDurationMs] = useState(500);

  useLayoutEffect(() => {
    const el = rightRef.current;
    if (!el) return;

    const compute = () => {
      // offsetHeight is NOT affected by transform scale()
      const h = el.offsetHeight; // px
      const ms = Math.max(200, Math.round((h / SPEED_PX_PER_SEC) * 1000));
      setRightDurationMs(ms);
    };

    compute();

    // observe size changes (responsive / content changes)
    const ro = new ResizeObserver(compute);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    requestAnimationFrame(() => setTopOn(true));
  }, [inView]);

  return (
    <div ref={ref} className="relative w-[10%] sm:w-[44%] self-stretch">
      <span
        onTransitionEnd={() => setRightOn(true)}
        className={[
          "absolute left-0 top-0 h-2 w-full bg-[#0095FF]",
          "origin-left transition-transform duration-500 ease-linear",
          topOn ? "scale-x-100" : "scale-x-0",
        ].join(" ")}
      />

      <span
        ref={rightRef}
        style={{ transitionDuration: `${rightDurationMs}ms` }}
        className={[
          "absolute right-0 top-0 w-2 h-full bg-[#0095FF]",
          "origin-top transition-transform ease-linear",
          rightOn ? "scale-y-100" : "scale-y-0",
        ].join(" ")}
      />
    </div>
  );
}
