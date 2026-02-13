import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navigation from "@/components/Navigation";

import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const inter = localFont({
  src: [
    {
      path: "../fonts/inter-var.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Santina Paris — Streetwear Premium",
    template: "%s | Santina Paris",
  },
  description:
    "Santina Paris — Marque de streetwear premium. T-shirts en coton peigné 240g, confectionnés au Portugal. L'alliance du style urbain et du savoir-faire européen.",
  keywords: [
    "Santina Paris",
    "streetwear premium",
    "t-shirt premium",
    "mode homme",
    "vêtements Paris",
    "streetwear français",
    "coton premium",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Santina Paris",
    title: "Santina Paris — Streetwear Premium",
    description:
      "Streetwear premium confectionné avec exigence. Coton peigné 240g, fabriqué au Portugal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santina Paris — Streetwear Premium",
    description:
      "Streetwear premium confectionné avec exigence. Coton peigné 240g, fabriqué au Portugal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        <CartProvider>
          <Navigation />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
