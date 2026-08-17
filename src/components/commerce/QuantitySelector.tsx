"use client";

import { Icon } from "../ui/Icon";
import { Locale } from "@/lib/i18n";

export function QuantitySelector({ value, onChange, locale = "en" }: { value: number; onChange: (value: number) => void; locale?: Locale }) {
  return <div className="quantity-selector" aria-label={locale === "ru" ? "Количество" : "Quantity selector"}><button onClick={() => onChange(Math.max(1, value - 1))} aria-label={locale === "ru" ? "Уменьшить количество" : "Decrease quantity"}><Icon name="minus" size={16}/></button><span aria-live="polite">{value}</span><button onClick={() => onChange(value + 1)} aria-label={locale === "ru" ? "Увеличить количество" : "Increase quantity"}><Icon name="plus" size={16}/></button></div>;
}
