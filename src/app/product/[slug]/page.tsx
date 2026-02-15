"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { getProductBySlug, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="pt-20 sm:pt-24 pb-20 text-center">
        <p className="text-muted">Produit introuvable</p>
        <Link
          href="/shop"
          className="inline-block mt-4 text-xs tracking-[0.15em] uppercase underline underline-offset-4"
        >
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const currentColor = product.colors[selectedColor];
  const imageLabels = ["Face", "Dos", "Détail"];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, currentColor.name, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="pt-20 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted">
          <Link href="/" className="hover:text-brand transition-colors">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-brand transition-colors">
            Boutique
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brand">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <AnimatedSection>
            <div>
              {/* Main image */}
              <div className="aspect-[3/4] bg-surface mb-3 relative overflow-hidden group">
                <Image
                  src={currentColor.images[selectedImage] ?? currentColor.images[0]}
                  alt={`${product.name} — ${currentColor.name} — ${imageLabels[selectedImage] ?? ""}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {product.badge && (
                  <div className="absolute top-4 left-4 bg-brand text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium z-10">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {currentColor.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square bg-surface relative overflow-hidden transition-all duration-200 ${
                      selectedImage === i
                        ? "ring-2 ring-brand"
                        : "hover:ring-1 ring-border"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} — ${imageLabels[i] ?? `Vue ${i + 1}`}`}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Product info */}
          <div className="lg:pt-4">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
                    {product.category}
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-3">
                    {product.name}
                  </h1>
                  <p className="text-xl font-light">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {product.description}
                </p>

                {/* Color selector */}
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted mb-3">
                    Couleur — {currentColor.name}
                  </p>
                  <div className="flex gap-3">
                    {product.colors.map((color, i) => (
                      <button
                        key={color.slug}
                        onClick={() => {
                          setSelectedColor(i);
                          setSelectedImage(0);
                        }}
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                          selectedColor === i
                            ? "border-brand scale-110"
                            : "border-border hover:border-muted"
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size selector */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs tracking-[0.15em] uppercase text-muted">
                      Taille {selectedSize ? `— ${selectedSize}` : ""}
                    </p>
                    <button className="text-xs text-muted underline underline-offset-4 hover:text-brand transition-colors">
                      Guide des tailles
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 text-sm tracking-wider border transition-all duration-200 ${
                          selectedSize === size
                            ? "border-brand bg-brand text-white"
                            : "border-border hover:border-brand"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to cart */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`w-full py-4 text-xs tracking-[0.25em] uppercase font-medium transition-all duration-200 ${
                    !selectedSize
                      ? "bg-border text-muted cursor-not-allowed"
                      : addedToCart
                        ? "bg-green-800 text-white"
                        : "bg-brand text-white hover:bg-brand-light"
                  }`}
                >
                  {!selectedSize
                    ? "Sélectionnez une taille"
                    : addedToCart
                      ? "Ajouté au panier ✓"
                      : "Ajouter au panier"}
                </motion.button>

                {/* Shipping info */}
                <div className="space-y-3 pt-4 border-t border-border">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                      ),
                      text: "Livraison offerte dès 100€",
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                        </svg>
                      ),
                      text: "Retours gratuits sous 14 jours",
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      ),
                      text: "Paiement sécurisé",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 text-xs text-muted"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Accordion details */}
                <details className="group border-t border-border pt-4">
                  <summary className="flex items-center justify-between cursor-pointer text-xs tracking-[0.15em] uppercase font-medium py-2">
                    Détails du produit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {product.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm text-muted flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-muted" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
