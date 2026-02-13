"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import Link from "next/link";

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-light tracking-wide mb-4">
          Votre panier est vide
        </h1>
        <p className="text-sm text-muted mb-8">
          Découvrez notre collection Essential et trouvez votre essentiel.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-brand text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-light transition-colors"
        >
          Voir la boutique
        </Link>
      </div>
    );
  }

  const shipping = total >= 100 ? 0 : 5.9;

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xs tracking-[0.3em] uppercase text-muted mb-10 text-center">
          Panier ({items.length})
        </h1>

        {/* Items */}
        <div className="space-y-6 mb-10">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.color}-${item.size}`}
              className="flex gap-4 sm:gap-6 pb-6 border-b border-border"
            >
              <div className="w-24 h-32 sm:w-32 sm:h-40 bg-surface flex-shrink-0 flex items-center justify-center">
                <span className="text-xs text-muted uppercase tracking-wider">
                  {item.color}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link
                    href={`/product/${item.product.slug}`}
                    className="text-sm sm:text-base font-medium hover:underline"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-xs text-muted mt-1">
                    {item.color} — Taille {item.size}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
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
                      className="px-3 py-2 text-xs hover:bg-surface transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-xs border-x border-border">
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
                      className="px-3 py-2 text-xs hover:bg-surface transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-sm font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <button
                      onClick={() =>
                        removeItem(item.productId, item.color, item.size)
                      }
                      className="text-xs text-muted underline underline-offset-4 hover:text-brand transition-colors"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="max-w-sm ml-auto space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Sous-total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Livraison</span>
            <span>
              {shipping === 0 ? "Offerte" : formatPrice(shipping)}
            </span>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-muted">
              Plus que {formatPrice(100 - total)} pour la livraison offerte
            </p>
          )}
          <div className="flex justify-between text-base font-medium pt-3 border-t border-border">
            <span>Total</span>
            <span>{formatPrice(total + shipping)}</span>
          </div>
          <Link
            href="/checkout"
            className="block w-full bg-brand text-white text-center py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-light transition-colors duration-200 mt-6"
          >
            Passer la commande
          </Link>
          <Link
            href="/shop"
            className="block text-center text-xs text-muted underline underline-offset-4 hover:text-brand transition-colors mt-3"
          >
            Continuer le shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
