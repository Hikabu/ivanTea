"use client";

import { ReactNode, useEffect, useRef } from "react";
import { Icon } from "./Icon";

export function Modal({ open, onClose, title, side = "center", children }: { open: boolean; onClose: () => void; title: string; side?: "center" | "right" | "left"; children: ReactNode }) {
  const panel = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => panel.current?.querySelector<HTMLElement>("button, input, a")?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && panel.current) {
        const items = Array.from(panel.current.querySelectorAll<HTMLElement>("button, input, a, select, [tabindex]:not([tabindex='-1'])"));
        if (!items.length) return;
        const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); lastFocus.current?.focus(); };
  }, [open, onClose]);
  if (!open) return null;
  return <div className={`modal modal--${side}`} role="dialog" aria-modal="true" aria-label={title}>
    <button className="modal-backdrop" aria-label="Close" onClick={onClose}/>
    <div className="modal-panel" ref={panel}>
      <div className="modal-heading"><h2>{title}</h2><button className="icon-button" onClick={onClose} aria-label={`Close ${title}`}><Icon name="close" /></button></div>
      {children}
    </div>
  </div>;
}
