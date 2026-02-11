"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  slug: string;
  title: string;
  price: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    if (cart.find((c) => c.slug === item.slug)) return;
    setCart([...cart, item]);
  };

  const removeFromCart = (slug: string) => {
    setCart(cart.filter((c) => c.slug !== slug));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
