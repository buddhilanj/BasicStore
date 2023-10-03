import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import productsReducer from '@slices/products';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
