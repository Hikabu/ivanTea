"use client";

import { Icon } from "../ui/Icon";

export function QuantitySelector({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <div className="quantity-selector" aria-label="Quantity selector"><button onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity"><Icon name="minus" size={16}/></button><span aria-live="polite">{value}</span><button onClick={() => onChange(value + 1)} aria-label="Increase quantity"><Icon name="plus" size={16}/></button></div>;
}
