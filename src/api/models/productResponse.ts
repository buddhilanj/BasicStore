import { Product, isProduct } from '@models/Product';

export interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

export function isProductResponse(object: unknown): object is ProductResponse {
  if (
    typeof object === 'object' &&
    object !== null &&
    'limit' in object &&
    'products' in object &&
    'skip' in object &&
    'total' in object
  ) {
    return (
      typeof object.limit === 'number' &&
      typeof object.skip === 'number' &&
      typeof object.total === 'number' &&
      Array.isArray(object.products) &&
      object.products.every((product: unknown) => isProduct(product))
    );
  }
  return false;
}
