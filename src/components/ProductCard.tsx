"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/lib/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  colorIndex?: number;
}

export default function ProductCard({ product, colorIndex = 0 }: ProductCardProps) {
  const color = product.colors[colorIndex];
  // Show the back image (index 1) as primary since the main graphic is on the back
  const primaryImage = color.images[1] ?? color.images[0];

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
          <Image
            src={primaryImage}
            alt={`${product.name} — ${color.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 bg-brand text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium z-10">
              {product.badge}
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-[1]" />

          {/* Quick view */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
            <div className="bg-white/95 backdrop-blur-sm text-center py-3 text-xs tracking-[0.2em] uppercase font-medium">
              Voir le produit
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium tracking-wide">
            {product.name} — {color.name}
          </h3>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted">{formatPrice(product.price)}</p>
            <div className="flex gap-1.5">
              {product.colors.map((c) => (
                <span
                  key={c.slug}
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
