import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <span className="text-xl font-bold tracking-[0.15em] uppercase">
                Santina
              </span>
              <span className="block text-[9px] tracking-[0.4em] uppercase text-white/60 -mt-0.5">
                Paris
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Streetwear premium confectionné avec exigence. Chaque pièce
              incarne l&apos;alliance du style urbain et du savoir-faire
              européen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/40">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/shop", label: "Boutique" },
                { href: "/about", label: "Notre histoire" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/40">
              Informations
            </h3>
            <ul className="space-y-3">
              {[
                "Livraison & Retours",
                "Guide des tailles",
                "Conditions générales",
                "Politique de confidentialité",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/40">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@santinaparis.com"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  contact@santinaparis.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/santinaparis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Santina Paris. Tous droits
            réservés.
          </p>
          <p className="text-xs text-white/40">Made in Paris with love</p>
        </div>
      </div>
    </footer>
  );
}
