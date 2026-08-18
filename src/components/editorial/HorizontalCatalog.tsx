"use client";

import { useEffect, useRef } from "react";

export function HorizontalCatalog({ children, label }: { children: React.ReactNode; label: string }) {
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const catalog = catalogRef.current;
    if (!catalog) return;

    const moveWheelToHorizontal = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const lastPosition = catalog.scrollWidth - catalog.clientWidth;
      const canMoveRight = event.deltaY > 0 && catalog.scrollLeft < lastPosition - 2;
      const canMoveLeft = event.deltaY < 0 && catalog.scrollLeft > 2;

      if (!canMoveRight && !canMoveLeft) return;

      event.preventDefault();
      catalog.scrollBy({ left: event.deltaY, behavior: "auto" });
    };

    catalog.addEventListener("wheel", moveWheelToHorizontal, { passive: false });
    return () => catalog.removeEventListener("wheel", moveWheelToHorizontal);
  }, []);

  return <div className="tea-catalog" ref={catalogRef} role="region" aria-label={label} tabIndex={0}>
    {children}
  </div>;
}
