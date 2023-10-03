export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export function isProduct(object: unknown): object is Product {
  if (
    typeof object === 'object' &&
    object !== null &&
    'id' in object &&
    'title' in object &&
    'price' in object &&
    'description' in object &&
    'images' in object
  ) {
    return (
      typeof object.id === 'number' &&
      typeof object.title === 'string' &&
      typeof object.price === 'number' &&
      typeof object.description === 'string' &&
      Array.isArray(object.images) &&
      object.images.every(image => typeof image === 'string')
    );
  }
  return false;
}
