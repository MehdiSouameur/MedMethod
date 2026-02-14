"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "../scripts/useInViewOnce";

type MethodStepProps = {
  n: number;
  title: string;
  text: string;
  delayMs?: number;
  showRightBorder?: boolean; // desktop right border
  leftPadding?: boolean;     // desktop left padding
  className?: string;
};

export function MethodStep({
  n,
  title,
  text,
  delayMs = 0,
  showRightBorder = true,
  leftPadding = false,
  className = "",
}: MethodStepProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.25 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const t = window.setTimeout(() => {
      requestAnimationFrame(() => setOn(true));
    }, delayMs);

    return () => window.clearTimeout(t);
  }, [inView, delayMs]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        // Mobile: bottom divider. Desktop: remove bottom divider.
        "border-b-2 border-brand-main pb-6 mb-6 md:pb-0 md:mb-0 md:border-b-0",

        // Desktop padding/border rules
        leftPadding ? "md:pl-3" : "",
        showRightBorder ? "md:pr-3 md:border-r-2 md:border-brand-main" : "",

        // Layout: mobile stack, desktop stack (same), but we change the header row
        "flex flex-col gap-3",

        // Fade in
        "opacity-0 transition-opacity duration-700 ease-out",
        on ? "opacity-100" : "",

        className,
      ].join(" ")}
    >
      {/* Header row: mobile side-by-side, desktop back to vertical */}
      <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-3">
        <h1 className="text-2xl text-blue-800 font-paragraph bg-blue-300 w-7 h-7 flex items-center justify-center shrink-0">
          {n}
        </h1>

        <h1 className="text-blackink type-h3 font-header font-medium">{title}</h1>
      </div>

      <p className="text-blackink-soft text-sm font-medium">{text}</p>
    </div>
  );
}
