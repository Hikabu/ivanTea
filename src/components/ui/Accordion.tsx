"use client";

import { ReactNode, useState } from "react";
import { Icon } from "./Icon";

export function Accordion({ title, children, defaultOpen = false }: { title: string; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return <div className={`accordion ${open ? "is-open" : ""}`}>
    <button aria-expanded={open} onClick={() => setOpen(!open)}>{title}<Icon name="chevron" /></button>
    <div className="accordion-content" hidden={!open}>{children}</div>
  </div>;
}
