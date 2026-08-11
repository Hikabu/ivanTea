"use client";

import { Product } from "@/data/products";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type CartLine = { product: Product; variantId: string; quantity: number };
type StoreContextValue = {
  cart: CartLine[];
  count: number;
  cartOpen: boolean;
  searchOpen: boolean;
  mobileOpen: boolean;
  setCartOpen: (value: boolean) => void;
  setSearchOpen: (value: boolean) => void;
  setMobileOpen: (value: boolean) => void;
  addToCart: (product: Product, variantId?: string, quantity?: number) => void;
  updateQuantity: (slug: string, variantId: string, quantity: number) => void;
  removeLine: (slug: string, variantId: string) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("fedorov-cart");
    if (saved) try { setCart(JSON.parse(saved)); } catch { /* ignore malformed local data */ }
  }, []);
  useEffect(() => { localStorage.setItem("fedorov-cart", JSON.stringify(cart)); }, [cart]);

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
  const value = useMemo(() => ({ cart, count: cart.reduce((sum, line) => sum + line.quantity, 0), cartOpen, searchOpen, mobileOpen, setCartOpen, setSearchOpen, setMobileOpen, addToCart, updateQuantity, removeLine }), [cart, cartOpen, searchOpen, mobileOpen]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used inside StoreProvider");
  return value;
}
