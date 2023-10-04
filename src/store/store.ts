import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import cartReducer from '@slices/cart';
import productsReducer from '@slices/products';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
