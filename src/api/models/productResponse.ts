import { Product, isProduct } from '@models/Product';

export interface ProductResponse {
  limit: number;
  products: Product[];
}

export function isProductResponse(object: unknown): object is ProductResponse {
  if (typeof object === 'object' && object !== null && 'limit' in object && 'products' in object) {
    return (
      typeof object.limit === 'number' &&
      Array.isArray(object.products) &&
      object.products.every((product: unknown) => isProduct(product))
    );
  }
  return false;
}
