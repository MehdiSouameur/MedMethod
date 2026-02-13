"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useInViewOnce } from "../scripts/useInViewOnce";

type Props = {
  slides: React.ReactNode[];
  options?: Parameters<typeof useEmblaCarousel>[0];
  nudgeOnView?: boolean;
  nudgeDelayMs?: number;
};

export default function EmblaCarousel({
  slides,
  options,
  nudgeOnView = true,
  nudgeDelayMs = 300,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });

  const { ref: inViewRef, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.25 });
  const nudgedRef = React.useRef(false);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // ✅ one-time nudge when in view
  React.useEffect(() => {
    if (!nudgeOnView) return;
    if (!inView) return;
    if (!emblaApi) return;
    if (nudgedRef.current) return;

    nudgedRef.current = true;

    const t = window.setTimeout(() => {
      // If user already interacted, don't fight them
      if (emblaApi && emblaApi.selectedScrollSnap() === 0) {
        emblaApi.scrollNext();
      }
    }, nudgeDelayMs);

    return () => window.clearTimeout(t);
  }, [nudgeOnView, inView, emblaApi, nudgeDelayMs]);

  return (
    <div ref={inViewRef} className="w-full">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
        {/* Prev */}
        <button type="button" onClick={scrollPrev} disabled={!canScrollPrev} aria-label="Previous slide"
          className="rounded-full border border-brand-main bg-brand-main px-2 py-1 font-semibold text-whiteink text-xl shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)] active:shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-150 ease-out hover:scale-[1.04] active:scale-[0.98] hover:bg-brand-main-light hover:border-brand-main-light active:bg-whiteink active:text-brand-main active:border-whiteink disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          ←
        </button>

        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%]">
                <div className="px-2">{slide}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button type="button" onClick={scrollNext} disabled={!canScrollNext} aria-label="Next slide"
          className="rounded-full border border-brand-main bg-brand-main px-2 py-1 font-semibold text-whiteink text-xl shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)] active:shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-150 ease-out hover:scale-[1.04] active:scale-[0.98] hover:bg-brand-main-light hover:border-brand-main-light active:bg-whiteink active:text-brand-main active:border-whiteink disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 h-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selectedIndex}
            className={`
              rounded-full border border-black transition-all duration-150 ease-out cursor-pointer
              ${i === selectedIndex ? "h-3 w-3 bg-brand-main scale-110" : "h-2 w-2 bg-whiteink hover:scale-110"}
            `}
          />
        ))}
      </div>

    </div>
  );
}
