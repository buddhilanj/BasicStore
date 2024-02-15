import { Product } from './Product';
import Color, { isRGBColor } from './ProductColor';
import { ProductSize } from './ProductSize';

export interface CartItem extends Product {
  key: string;
  quantity: number;
  row: number;
  selectedVarient: CartItemVariation[];
}

export type CartItemVariation =
  | {
      type: 'size';
      size: ProductSize;
    }
  | { type: 'color'; color: Color };

// here we are not implementing CartItem interface as we dont want devs using this class to save data in redux
export class CartItemWrapper {
  key: string;

  id: number;

  title: string;

  price: number;

  description: string;

  thumbnail: string;

  quantity: number;

  selectedVarient: CartItemVariation[];

  row: number;

  constructor(
    product: Product,
    quantity: number,
    selectedVarient: CartItemVariation[],
    exsisting: { [key: string]: CartItem },
  ) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.thumbnail = product.thumbnail;
    this.quantity = quantity;
    this.selectedVarient = selectedVarient;
    this.key = this.getKey();
    this.row = exsisting[this.key]?.row ?? Object.keys(exsisting).length;
  }

  isSameProduct(product: Product): boolean {
    return this.id === product.id;
  }

  getCartItem = (): CartItem => {
    const { key, id, title, price, description, thumbnail, quantity, selectedVarient, row } = this;
    return {
      key,
      id,
      title,
      price,
      description,
      thumbnail,
      quantity,
      selectedVarient,
      row,
    } satisfies CartItem;
  };

  getKey = (): string => {
    return `${this.id}${this.selectedVarient
      ?.map(
        variant =>
          `-${
            variant.type === 'size'
              ? `s.${variant.size}`
              : `c.${
                  isRGBColor(variant.color)
                    ? `R${variant.color.red}G${variant.color.green}B${variant.color.blue}`
                    : variant.color
                }`
          }`,
      )
      .sort((a, b) => a.localeCompare(b))
      .join('')}`;
  };
}
