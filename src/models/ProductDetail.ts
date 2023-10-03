import { Product, isProduct } from '@models/Product';

export interface ProductDetail extends Product {
  stock: number;
  images: string[];
}

export function isProductDetails(object: unknown): object is ProductDetail {
  if (isProduct(object) && 'stock' in object && 'images' in object) {
    return (
      typeof object.stock === 'number' &&
      Array.isArray(object.images) &&
      object.images.every((image: unknown) => typeof image === 'string')
    );
  }
  return false;
}
