import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "tshirt-essential-01",
    name: "Tee-shirt Essential",
    slug: "tee-shirt-essential",
    price: 79,
    description:
      "Le tee-shirt Essential incarne l'essence de Santina Paris. Graphique Art Nouveau imprimé au dos, coupe contemporaine, coton premium 240g, confectionné au Portugal. Un basique élevé au rang d'essentiel.",
    details: [
      "100% coton peigné 240g",
      "Coupe regular contemporaine",
      "Confectionné au Portugal",
      "Graphique Art Nouveau imprimé au dos",
      "Petit logo Santina sur la poitrine",
      "Lavage 30°C recommandé",
    ],
    colors: [
      {
        name: "Noir",
        value: "#0A0A0A",
        slug: "noir",
        images: [
          "/tshirt-noir-front.jpg",
          "/tshirt-noir-back.jpg",
          "/tshirt-noir-detail.jpg",
        ],
      },
      {
        name: "Blanc",
        value: "#FAFAFA",
        slug: "blanc",
        images: [
          "/tshirt-blanc-front.jpg",
          "/tshirt-blanc-back.jpg",
          "/tshirt-blanc-detail.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    category: "T-shirts",
    badge: "New",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `${price}\u00A0€`;
}

export function getCartItemImage(product: Product, colorName: string): string {
  const color = product.colors.find((c) => c.name === colorName);
  return color?.images[0] ?? product.colors[0].images[0];
}
