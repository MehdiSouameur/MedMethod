// HeroLine.tsx
"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "../scripts/useInViewOnce";

type HeroLineProps = {
  /** Tailwind / CSS color for the line (default matches your blue) */
  colorClassName?: string;
  /** Tailwind duration class or arbitrary duration like "duration-[650ms]" */
  durationClassName?: string;
  /** Optional extra classes for the animated span */
  className?: string;
};

export function HeroLine({
  colorClassName = "bg-[#0095FF]",
  durationClassName = "duration-1500",
  className = "",
}: HeroLineProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!inView) return;
    requestAnimationFrame(() => setOn(true));
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <span
        className={[
          "absolute inset-0",
          colorClassName,
          "origin-left transition-transform ease-out",
          durationClassName,
          on ? "scale-x-100" : "scale-x-0",
          className,
        ].join(" ")}
      />
    </div>
  );
}
