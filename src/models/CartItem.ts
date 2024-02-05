import { Product } from './Product';
import Color, { isRGBColor } from './ProductColor';
import { ProductSize } from './ProductSize';

export interface CartItem extends Product {
  recordId: number;
  quantity: number;
  selectedVarient: CartItemVariation[];
}

export type CartItemVariation =
  | {
      type: 'size';
      size: ProductSize;
    }
  | { type: 'color'; color: Color };

interface WrapperProps {
  new?: {
    recordID: number;
    product: Product;
    quantity: number;
    selectedVarient: CartItemVariation[];
  };
  cartItem?: CartItem;
}

// here we are not implementing CartItem interface as we dont want devs using this class to save data in redux
export class CartItemWrapper {
  recordId: number;

  id: number;

  title: string;

  price: number;

  description: string;

  thumbnail: string;

  quantity: number;

  selectedVarient: CartItemVariation[];

  constructor(obj: WrapperProps) {
    if (!obj.cartItem && !obj.new) {
      throw new Error('Invalid CartItemWrapper initialization');
    }
    this.recordId = obj.new?.recordID || obj.cartItem?.recordId || 0;
    this.id = obj.new?.product.id || obj.cartItem?.id || 0;
    this.title = obj.new?.product.title || obj.cartItem?.title || '';
    this.price = obj.new?.product.price || obj.cartItem?.price || 0;
    this.description = obj.new?.product.description || obj.cartItem?.description || '';
    this.thumbnail = obj.new?.product.thumbnail || obj.cartItem?.thumbnail || '';
    this.quantity = obj.new?.quantity || obj.cartItem?.quantity || 0;
    this.selectedVarient = obj.new?.selectedVarient || obj.cartItem?.selectedVarient || [];
  }

  isSameProduct(product: Product): boolean {
    return this.id === product.id;
  }

  getCartItem = (): CartItem => {
    const { recordId, id, title, price, description, thumbnail, quantity, selectedVarient } = this;
    return {
      recordId,
      id,
      title,
      price,
      description,
      thumbnail,
      quantity,
      selectedVarient,
    } satisfies CartItem;
  };

  getKey = (): string => {
    return `${this.id}${this.selectedVarient?.map(
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
    )}`;
  };
}
