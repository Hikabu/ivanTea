"use client";

import { useEffect } from "react";

export function StoryMotion() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const depthItems = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("story-motion-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12%", threshold: 0.08 });

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      depthItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const amount = Number(item.dataset.depth ?? 10);
        const centered = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        const offset = Math.max(-amount, Math.min(amount, centered * -amount));
        item.style.setProperty("--depth-y", `${offset.toFixed(2)}px`);
      });

      const available = document.documentElement.scrollHeight - viewport;
      const progress = available > 0 ? Math.min(1, window.scrollY / available) : 0;
      document.documentElement.style.setProperty("--story-progress", String(progress));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("story-motion-ready");
      document.documentElement.style.removeProperty("--story-progress");
    };
  }, []);

  return null;
}
