export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  details: string[];
  colors: ProductColor[];
  sizes: string[];
  category: string;
  badge?: string;
}

export interface ProductColor {
  name: string;
  value: string;
  slug: string;
  images: string[];
}

export interface CartItem {
  productId: string;
  color: string;
  size: string;
  quantity: number;
  product: Product;
}
