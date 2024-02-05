import ProductColor from './ProductColor';
import { ProductSize } from './ProductSize';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  variations?: ProductVariations;
}

export interface ProductVariations {
  size: ProductSize[];
  color: ProductColor[];
}

export function isProduct(object: unknown): object is Product {
  if (
    typeof object === 'object' &&
    object !== null &&
    'id' in object &&
    'title' in object &&
    'price' in object &&
    'description' in object &&
    'thumbnail' in object
  ) {
    return (
      typeof object.id === 'number' &&
      typeof object.title === 'string' &&
      typeof object.price === 'number' &&
      typeof object.description === 'string' &&
      typeof object.thumbnail === 'string'
    );
  }
  return false;
}
