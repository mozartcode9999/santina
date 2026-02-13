"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-surface overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 40px)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.08em] uppercase mb-2">
              Santina
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.5em] uppercase text-muted mb-8">
              Paris
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-lg sm:text-xl font-light text-muted max-w-lg mx-auto mb-12 leading-relaxed"
          >
            Streetwear premium. L&apos;essentiel, élevé au rang d&apos;exception.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/shop"
              className="inline-block bg-brand text-white px-10 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-brand-light transition-colors duration-200"
            >
              Découvrir la collection
            </Link>
            <Link
              href="/about"
              className="inline-block border border-brand text-brand px-10 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-brand hover:text-white transition-all duration-200"
            >
              Notre histoire
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-transparent via-muted to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
              Collection Essential
            </h2>
            <p className="text-3xl sm:text-4xl font-light tracking-wide">
              L&apos;essentiel réinventé
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) =>
              product.colors.map((color, colorIndex) => (
                <ProductCard key={`${product.id}-${color.slug}`} product={product} colorIndex={colorIndex} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="bg-brand text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              Notre exigence
            </h2>
            <p className="text-3xl sm:text-4xl font-light tracking-wide">
              Chaque détail compte
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            {[
              {
                title: "Matière premium",
                description:
                  "Coton peigné 240g sourcé avec soin. Toucher incomparable, durabilité exceptionnelle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                ),
              },
              {
                title: "Confection européenne",
                description:
                  "Fabriqué au Portugal dans un atelier familial. Savoir-faire artisanal, finitions irréprochables.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
              },
              {
                title: "Design parisien",
                description:
                  "Conçu à Paris avec une approche minimaliste. Des coupes contemporaines qui traversent les saisons.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="flex justify-center mb-6 text-white/60">
                    {value.icon}
                  </div>
                  <h3 className="text-sm tracking-[0.15em] uppercase font-medium mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook / Lifestyle Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
              Lookbook
            </h2>
            <p className="text-3xl sm:text-4xl font-light tracking-wide">
              Portez l&apos;essentiel
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: "/images/tshirt-noir-back.jpg", aspect: "aspect-[3/4]" },
              { src: "/images/tshirt-blanc-front.jpg", aspect: "aspect-square" },
              { src: "/images/tshirt-noir-detail.jpg", aspect: "aspect-[3/4]" },
              { src: "/images/tshirt-blanc-back.jpg", aspect: "aspect-[3/4]" },
              { src: "/images/tshirt-noir-front.jpg", aspect: "aspect-square" },
              { src: "/images/tshirt-blanc-detail.jpg", aspect: "aspect-[3/4]" },
            ].map((img, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
              >
                <div
                  className={`bg-surface overflow-hidden ${img.aspect} group cursor-pointer relative`}
                >
                  <Image
                    src={img.src}
                    alt={`Lookbook Santina Paris ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
            {[
              { value: "240g", label: "Coton premium" },
              { value: "100%", label: "Coton peigné" },
              { value: "Portugal", label: "Confection" },
              { value: "Paris", label: "Design" },
            ].map((stat) => (
              <AnimatedSection key={stat.label}>
                <div>
                  <p className="text-2xl sm:text-3xl font-light tracking-wider">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted tracking-[0.15em] uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
