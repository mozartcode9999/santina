"use client";

import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/product/${product.slug}`}
        className="group block"
      >
        <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
          {/* Product image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold tracking-[0.2em] uppercase text-border group-hover:text-muted transition-colors duration-500">
                S
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-border group-hover:text-muted transition-colors duration-500 mt-1">
                Paris
              </span>
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 bg-brand text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium">
              {product.badge}
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

          {/* Quick view */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <div className="bg-white/95 backdrop-blur-sm text-center py-3 text-xs tracking-[0.2em] uppercase font-medium">
              Voir le produit
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium tracking-wide">
            {product.name}
          </h3>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted">{formatPrice(product.price)}</p>
            <div className="flex gap-1.5">
              {product.colors.map((color) => (
                <span
                  key={color.slug}
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
