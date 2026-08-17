"use client";

import { giftProduct } from "@/data/products";
import { Locale } from "@/lib/i18n";
import { useStore } from "../layout/StoreProvider";

export function GiftAddButton({ locale }: { locale: Locale }) {
  const { addToCart } = useStore();
  return <button className="button button--primary" onClick={() => addToCart(giftProduct, "gift")}>{locale === "ru" ? "ДОБАВИТЬ НАБОР" : "ADD GIFT SET"}</button>;
}
