"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-xs tracking-[0.3em] uppercase text-muted mb-6">
            Notre histoire
          </h1>
          <p className="text-3xl sm:text-5xl font-light tracking-wide leading-tight mb-8">
            Née à Paris,
            <br />
            confectionnée avec exigence
          </p>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Santina Paris naît d&apos;une conviction simple : le streetwear
            mérite la même exigence de qualité que le luxe. Chaque pièce est
            pensée pour être portée, aimée, et gardée.
          </p>
        </div>
      </section>

      {/* Lifestyle image grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatedSection>
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/lifestyle-1.png"
                alt="Santina Paris — T-shirt noir porté dans les rues de Paris"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/lifestyle-2.png"
                alt="Santina Paris — T-shirt blanc porté dans les rues de Paris"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/lifestyle-3.png"
                alt="Santina Paris — T-shirt blanc porté en ville"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Value 1 — Matière */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <AnimatedSection>
          <h2 className="text-lg sm:text-xl font-medium tracking-wide mb-4">
            La matière avant tout
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Nous sélectionnons un coton peigné 240g pour chaque tee-shirt. Cette densité offre un tombé parfait, une résistance exceptionnelle et un confort incomparable. Pas de compromis sur la base — la matière est le fondement de tout.
          </p>
        </AnimatedSection>
      </section>

      {/* Detail photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <AnimatedSection>
          <div className="aspect-[16/7] relative overflow-hidden">
            <Image
              src="/tshirt-noir-detail.jpg"
              alt="Détail du tissu coton peigné 240g"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Value 2 — Portugal */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <AnimatedSection>
          <h2 className="text-lg sm:text-xl font-medium tracking-wide mb-4">
            Confectionné au Portugal
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Notre atelier partenaire au Portugal allie tradition et modernité. Chaque pièce est assemblée avec un savoir-faire qui se transmet depuis des générations. Les finitions sont irréprochables : coutures renforcées, col qui ne se déforme pas, coupe qui vieillit bien.
          </p>
        </AnimatedSection>
      </section>

      {/* Back views */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedSection>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/tshirt-noir-back.jpg"
                alt="Tee-shirt Santina Paris noir — vue de dos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/tshirt-blanc-back.jpg"
                alt="Tee-shirt Santina Paris blanc — vue de dos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Value 3 — Paris */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <AnimatedSection>
          <h2 className="text-lg sm:text-xl font-medium tracking-wide mb-4">
            Dessiné à Paris
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Le design de Santina naît à Paris, influencé par l&apos;énergie urbaine de la ville. Notre approche est résolument minimaliste : pas de logos surdimensionnés, pas de tendances éphémères. Des coupes intemporelles pensées pour votre quotidien.
          </p>
        </AnimatedSection>
      </section>

      {/* Detail photo blanc */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <AnimatedSection>
          <div className="aspect-[16/7] relative overflow-hidden">
            <Image
              src="/tshirt-blanc-detail.jpg"
              alt="Détail des finitions du tee-shirt blanc"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Value 4 — Essentiel */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <AnimatedSection>
          <h2 className="text-lg sm:text-xl font-medium tracking-wide mb-4">
            L&apos;essentiel, pas le superflu
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Nous ne cherchons pas à sortir 12 collections par an. Nous préférons perfectionner chaque pièce jusqu&apos;à ce qu&apos;elle atteigne notre standard. La collection Essential est le fruit de cette philosophie : un tee-shirt, deux couleurs, zéro compromis.
          </p>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20 sm:py-28">
        <AnimatedSection className="text-center max-w-lg mx-auto px-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            Prêt à découvrir ?
          </p>
          <p className="text-2xl sm:text-3xl font-light tracking-wide mb-8">
            L&apos;essentiel vous attend
          </p>
          <Link
            href="/shop"
            className="inline-block bg-brand text-white px-10 py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-brand-light transition-colors duration-200"
          >
            Voir la collection
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
