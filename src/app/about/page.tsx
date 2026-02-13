"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
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
        </AnimatedSection>
      </section>

      {/* Image grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedSection>
            <div className="aspect-[4/5] bg-surface flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl font-bold tracking-[0.15em] uppercase text-border">
                  S
                </span>
                <span className="block text-xs tracking-[0.3em] uppercase text-border mt-2">
                  Atelier
                </span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="aspect-[4/5] bg-brand flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl font-bold tracking-[0.15em] uppercase text-white/20">
                  S
                </span>
                <span className="block text-xs tracking-[0.3em] uppercase text-white/20 mt-2">
                  Paris
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="space-y-16 sm:space-y-20">
          {[
            {
              title: "La matière avant tout",
              text: "Nous sélectionnons un coton peigné 240g pour chaque tee-shirt. Cette densité offre un tombé parfait, une résistance exceptionnelle et un confort incomparable. Pas de compromis sur la base — la matière est le fondement de tout.",
            },
            {
              title: "Confectionné au Portugal",
              text: "Notre atelier partenaire au Portugal allie tradition et modernité. Chaque pièce est assemblée avec un savoir-faire qui se transmet depuis des générations. Les finitions sont irréprochables : coutures renforcées, col qui ne se déforme pas, coupe qui vieillit bien.",
            },
            {
              title: "Dessiné à Paris",
              text: "Le design de Santina naît à Paris, influencé par l'énergie urbaine de la ville. Notre approche est résolument minimaliste : pas de logos surdimensionnés, pas de tendances éphémères. Des coupes intemporelles pensées pour votre quotidien.",
            },
            {
              title: "L'essentiel, pas le superflu",
              text: "Nous ne cherchons pas à sortir 12 collections par an. Nous préférons perfectionner chaque pièce jusqu'à ce qu'elle atteigne notre standard. La collection Essential est le fruit de cette philosophie : un tee-shirt, deux couleurs, zéro compromis.",
            },
          ].map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.1}>
              <div>
                <h2 className="text-lg sm:text-xl font-medium tracking-wide mb-4">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {section.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
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
