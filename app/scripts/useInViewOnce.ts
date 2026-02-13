"use client";

import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & {
  once?: boolean;
};

export function useInViewOnce<T extends HTMLElement>(options?: Options) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const once = options?.once ?? true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      {
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? "0px",
        threshold: options?.threshold ?? 0.3,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
