import { CartItem } from '@models/CartItem';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: CartItems;
  total: number;
}

interface CartItems {
  [key: string]: CartItem;
}

type UpdateCartQuantity = {
  key: CartItem['key'];
  quantity: number;
};

const initialState: CartState = {
  items: {},
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items[item.key];
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        item.row = Object.keys(state.items).length;
        state.items[item.key] = item;
      }
      state.total += item.price * item.quantity;
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const id = action.payload.key;
      const existingItem = state.items[id];
      if (existingItem) {
        delete state.items[id];
        state.total -= existingItem.price * existingItem.quantity;
      }
    },
    changeQuantity(state, action: PayloadAction<UpdateCartQuantity>) {
      const { key, quantity } = action.payload;
      const existingItem = state.items[key];
      if (existingItem && existingItem.quantity + quantity > 0) {
        existingItem.quantity += quantity;
        state.total += existingItem.price * quantity;
      }
    },
    clearCart(state) {
      state.items = {};
      state.total = 0;
    },
  },
});

export const { addItem, clearCart, changeQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
