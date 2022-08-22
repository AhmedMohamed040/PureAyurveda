/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  price: number;
  imageUrl?: string;
  image?: string;
  rating?: number;
  limited: number;
  sales: number;
}

export interface ProductResolved {
  product: Product;
  error?: any;
}

export interface Sale {
  id: Product['id'];
  sales: Product['limited'];
  much: number;
}
