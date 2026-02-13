"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
          Newsletter
        </h2>
        <p className="text-2xl sm:text-3xl font-light tracking-wide mb-3">
          Rejoignez le cercle Santina
        </p>
        <p className="text-sm text-muted max-w-md mx-auto mb-8">
          Recevez en avant-première nos nouvelles collections, éditions
          limitées et offres exclusives.
        </p>

        {submitted ? (
          <div className="text-sm text-brand font-medium tracking-wide">
            Merci pour votre inscription. Bienvenue chez Santina.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-4 py-3.5 border border-border text-sm bg-white placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
            />
            <button
              type="submit"
              className="bg-brand text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-light transition-colors duration-200"
            >
              S&apos;inscrire
            </button>
          </form>
        )}

        <p className="text-[11px] text-muted/60 mt-4">
          -10% sur votre première commande en vous inscrivant
        </p>
      </div>
    </section>
  );
}
