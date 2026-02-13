"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import Link from "next/link";
import { useEffect } from "react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, total, removeItem, updateQuantity } =
    useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="text-sm font-medium tracking-[0.15em] uppercase">
            Panier ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 hover:opacity-60 transition-opacity"
            aria-label="Fermer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-12 h-12 text-border mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="text-sm text-muted">Votre panier est vide</p>
              <button
                onClick={closeCart}
                className="mt-4 text-xs tracking-[0.15em] uppercase underline underline-offset-4 text-brand hover:text-muted transition-colors"
              >
                Continuer le shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.color}-${item.size}`}
                  className="flex gap-4"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-surface flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-muted uppercase tracking-wider">
                      {item.color}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">
                        {item.color} — Taille {item.size}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.color,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="px-2 py-1 text-xs hover:bg-surface transition-colors"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 text-xs border-x border-border">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.color,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="px-2 py-1 text-xs hover:bg-surface transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      removeItem(item.productId, item.color, item.size)
                    }
                    className="self-start p-1 hover:opacity-60 transition-opacity"
                    aria-label="Supprimer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Sous-total</span>
              <span className="text-sm font-medium">{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-muted">
              Livraison calculée à l&apos;étape suivante
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-brand text-white text-center py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-light transition-colors duration-200"
            >
              Passer la commande
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
