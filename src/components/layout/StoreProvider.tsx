"use client";

import { giftProduct, Product, products } from "@/data/products";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type CartLine = { product: Product; variantId: string; quantity: number };
type StoreContextValue = {
  cart: CartLine[];
  count: number;
  cartOpen: boolean;
  mobileOpen: boolean;
  setCartOpen: (value: boolean) => void;
  setMobileOpen: (value: boolean) => void;
  addToCart: (product: Product, variantId?: string, quantity?: number) => void;
  updateQuantity: (slug: string, variantId: string, quantity: number) => void;
  removeLine: (slug: string, variantId: string) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const catalog = [...products, giftProduct];

type StoredCartLine = { slug?: string; product?: { slug?: string }; variantId?: string; quantity?: number };

function restoreCart(value: string): CartLine[] {
  const stored = JSON.parse(value) as unknown;
  if (!Array.isArray(stored)) return [];

  return stored.flatMap((line: StoredCartLine) => {
    const product = catalog.find((item) => item.slug === (line.slug ?? line.product?.slug));
    if (!product || !Number.isInteger(line.quantity) || (line.quantity ?? 0) < 1) return [];
    const variantId = product.variants.some((variant) => variant.id === line.variantId) ? line.variantId! : product.variants[0].id;
    return [{ product, variantId, quantity: line.quantity! }];
  });
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("fedorov-cart");
    if (saved) try { setCart(restoreCart(saved)); } catch { localStorage.removeItem("fedorov-cart"); }
    setCartLoaded(true);
  }, []);
  useEffect(() => {
    if (!cartLoaded) return;
    localStorage.setItem("fedorov-cart", JSON.stringify(cart.map(({ product, variantId, quantity }) => ({ slug: product.slug, variantId, quantity }))));
  }, [cart, cartLoaded]);

  const addToCart = (product: Product, variantId = product.variants[0].id, quantity = 1) => {
    setCart((current) => {
      const match = current.find((line) => line.product.slug === product.slug && line.variantId === variantId);
      if (match) return current.map((line) => line === match ? { ...line, quantity: line.quantity + quantity } : line);
      return [...current, { product, variantId, quantity }];
    });
    setCartOpen(true);
  };
  const updateQuantity = (slug: string, variantId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((current) => current.map((line) => line.product.slug === slug && line.variantId === variantId ? { ...line, quantity } : line));
  };
  const removeLine = (slug: string, variantId: string) => setCart((current) => current.filter((line) => line.product.slug !== slug || line.variantId !== variantId));
  const value = useMemo(() => ({ cart, count: cart.reduce((sum, line) => sum + line.quantity, 0), cartOpen, mobileOpen, setCartOpen, setMobileOpen, addToCart, updateQuantity, removeLine }), [cart, cartOpen, mobileOpen]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used inside StoreProvider");
  return value;
}
