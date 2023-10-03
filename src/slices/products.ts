import { ProductResponse } from '@api/models/productResponse';
import getProducts from '@api/services/getProducts';
import { Product } from '@models/Product';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk<ProductResponse>(
  'products/fetchProducts',
  async () => {
    const response = await getProducts();
    return response;
  },
);

export interface ProductsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  products: Product[];
  length: number;
}

const initialState: ProductsState = {
  status: 'idle',
  error: null,
  products: [],
  length: 0,
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
      state.length = action.payload.limit;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error?.message ?? 'Something went wrong';
    });
  },
});

export default productsSlice.reducer;
