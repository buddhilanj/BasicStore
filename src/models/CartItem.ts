import { Product } from './Product';

export interface CartItem extends Product {
  recordId: number;
  quantity: number;
}

interface WrapperProps {
  new?: { recordID: number; product: Product; quantity: number };
  cartItem?: CartItem;
}

export class CartItemWrapper {
  recordId: number;

  id: number;

  title: string;

  price: number;

  description: string;

  thumbnail: string;

  quantity: number;

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
  }

  isSameProduct(product: Product): boolean {
    return this.id === product.id;
  }

  getCartItem = (): CartItem => {
    const { recordId, id, title, price, description, thumbnail, quantity } = this;
    return {
      recordId,
      id,
      title,
      price,
      description,
      thumbnail,
      quantity,
    } satisfies CartItem;
  };
}
