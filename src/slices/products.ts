import { ProductResponse } from '@api/models/productResponse';
import getProducts from '@api/services/getProducts';
import { Product } from '@models/Product';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk<ProductResponse, number | undefined>(
  'products/fetchProducts',
  async (skip: number = 0) => {
    const limit = 10;
    const response = await getProducts(limit, skip);
    return response;
  },
);

export interface ProductsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  products: Product[];
  length: number;
  total: number;
}

const initialState: ProductsState = {
  status: 'idle',
  error: null,
  products: [],
  length: 0,
  total: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = state.products.concat(action.payload.products);
      state.length = action.payload.limit + action.payload.skip;
      state.total = action.payload.total;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error?.message ?? 'Something went wrong';
    });
  },
});

export default productsSlice.reducer;
