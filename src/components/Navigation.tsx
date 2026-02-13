"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Navigation() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
      style={{ top: scrolled ? 0 : 36 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-5 h-[1.5px] bg-brand transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-brand transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-brand transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>

          {/* Left nav - desktop */}
          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-xs tracking-[0.15em] uppercase text-muted hover:text-brand transition-colors duration-200"
            >
              Boutique
            </Link>
            <Link
              href="/about"
              className="text-xs tracking-[0.15em] uppercase text-muted hover:text-brand transition-colors duration-200"
            >
              Notre histoire
            </Link>
          </div>

          {/* Logo - centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-center"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase">
              Santina
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-muted -mt-0.5">
              Paris
            </span>
          </Link>

          {/* Right nav */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative p-2 text-xs tracking-[0.15em] uppercase text-muted hover:text-brand transition-colors duration-200"
              aria-label="Panier"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`sm:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl tracking-[0.2em] uppercase font-light"
          >
            Boutique
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl tracking-[0.2em] uppercase font-light"
          >
            Notre histoire
          </Link>
        </div>
      </div>
    </header>
  );
}
