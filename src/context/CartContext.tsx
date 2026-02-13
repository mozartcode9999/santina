"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { CartItem, Product } from "@/types";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  total: number;
  addItem: (product: Product, color: string, size: string) => void;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQuantity: (
    productId: string,
    color: string,
    size: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "santina-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hydrated]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const addItem = useCallback(
    (product: Product, color: string, size: string) => {
      setItems((prev) => {
        const existing = prev.find(
          (item) =>
            item.productId === product.id &&
            item.color === color &&
            item.size === size
        );
        if (existing) {
          return prev.map((item) =>
            item.productId === product.id &&
            item.color === color &&
            item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prev, { productId: product.id, color, size, quantity: 1, product }];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, color: string, size: string) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(
              item.productId === productId &&
              item.color === color &&
              item.size === size
            )
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, color: string, size: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, color, size);
        return;
      }
      setItems((prev) =>
        prev.map((item) =>
          item.productId === productId &&
          item.color === color &&
          item.size === size
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        itemCount,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
