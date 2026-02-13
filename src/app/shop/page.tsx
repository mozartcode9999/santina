"use client";

import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function ShopPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            Boutique
          </h1>
          <p className="text-3xl sm:text-4xl font-light tracking-wide">
            Collection Essential
          </p>
          <p className="text-sm text-muted mt-4 max-w-lg mx-auto">
            Des basiques premium conçus pour durer. Chaque pièce est
            confectionnée avec les meilleurs matériaux et un soin
            méticuleux.
          </p>
        </AnimatedSection>

        {/* Filter bar */}
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-border">
          <p className="text-xs text-muted tracking-wide">
            {products.length} produit{products.length > 1 ? "s" : ""}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs tracking-[0.1em] uppercase text-muted">
              T-shirts
            </span>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product) =>
            product.colors.map((color, colorIndex) => (
              <ProductCard
                key={`${product.id}-${color.slug}`}
                product={product}
                colorIndex={colorIndex}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
