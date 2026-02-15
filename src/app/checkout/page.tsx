"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice, getCartItemImage } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "success">("form");

  const shipping = total >= 100 ? 0 : 5.9;
  const grandTotal = total + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stripe integration would go here
    setStep("success");
    clearCart();
  };

  if (step === "success") {
    return (
      <div className="pt-20 sm:pt-24 pb-20 text-center max-w-lg mx-auto px-4">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-16 h-16 mx-auto text-green-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-light tracking-wide mb-4">
          Merci pour votre commande
        </h1>
        <p className="text-sm text-muted mb-8">
          Vous recevrez un email de confirmation avec les détails de votre
          commande et le suivi de livraison.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-brand text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-light transition-colors"
        >
          Continuer le shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 sm:pt-24 pb-20 text-center">
        <p className="text-muted mb-4">Votre panier est vide</p>
        <Link
          href="/shop"
          className="inline-block text-xs tracking-[0.15em] uppercase underline underline-offset-4"
        >
          Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xs tracking-[0.3em] uppercase text-muted mb-10 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-sm font-medium tracking-[0.1em] uppercase mb-4">
                Contact
              </h2>
              <input
                type="email"
                placeholder="Adresse email"
                required
                className="w-full px-4 py-3.5 border border-border text-sm placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
              />
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-sm font-medium tracking-[0.1em] uppercase mb-4">
                Adresse de livraison
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Prénom"
                    required
                    className="w-full px-4 py-3.5 border border-border text-sm placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    required
                    className="w-full px-4 py-3.5 border border-border text-sm placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Adresse"
                  required
                  className="w-full px-4 py-3.5 border border-border text-sm placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Code postal"
                    required
                    className="w-full px-4 py-3.5 border border-border text-sm placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Ville"
                    required
                    className="col-span-2 w-full px-4 py-3.5 border border-border text-sm placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Téléphone (optionnel)"
                  className="w-full px-4 py-3.5 border border-border text-sm placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                />
              </div>
            </div>

            {/* Payment placeholder */}
            <div>
              <h2 className="text-sm font-medium tracking-[0.1em] uppercase mb-4">
                Paiement
              </h2>
              <div className="border border-border p-6 text-center">
                <p className="text-sm text-muted">
                  L&apos;intégration Stripe sera connectée ici.
                </p>
                <p className="text-xs text-muted/60 mt-2">
                  Paiement sécurisé par carte bancaire
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand text-white py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-brand-light transition-colors duration-200"
            >
              Confirmer la commande — {formatPrice(grandTotal)}
            </button>
          </form>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-surface p-6 sm:p-8 sticky top-32">
              <h2 className="text-sm font-medium tracking-[0.1em] uppercase mb-6">
                Récapitulatif
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.color}-${item.size}`}
                    className="flex gap-4"
                  >
                    <div className="w-16 h-20 bg-white flex-shrink-0 relative overflow-hidden">
                      <Image
                        src={getCartItemImage(item.product, item.color)}
                        alt={`${item.product.name} — ${item.color}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.product.name}</p>
                      <p className="text-xs text-muted mt-0.5">
                        {item.color} — {item.size} — x{item.quantity}
                      </p>
                      <p className="text-sm mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
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
                <div className="flex justify-between text-sm font-medium pt-2 border-t border-border">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-muted mt-4">
                  Plus que {formatPrice(100 - total)} pour la livraison offerte
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
