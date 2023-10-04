import { CartItem, CartItemWrapper } from '@models/CartItem';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartState {
  items: CartItem[];
  total: number;
}

export const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const item = new CartItemWrapper({ cartItem: action.payload });
      const existingItem = state.items.find(i => item.isSameProduct(i));
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item.getCartItem());
      }
      state.total += item.price * item.quantity;
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const id = action.payload.recordId;
      const existingItem = state.items.find(i => i.recordId === id);
      if (existingItem) {
        state.items = state.items.filter(i => i.recordId !== id);
        state.total -= existingItem.price * existingItem.quantity;
      }
    },
    changeQuantity(state, action: PayloadAction<{ recordId: number; quantity: number }>) {
      const { recordId, quantity } = action.payload;
      const existingItem = state.items.find(i => i.recordId === recordId);
      if (existingItem && existingItem.quantity + quantity > 0) {
        existingItem.quantity += quantity;
        state.total += existingItem.price * quantity;
      }
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, clearCart, changeQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
