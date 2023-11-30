import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { Product } from "@/entities/Product";
import { StoreState } from "@/app/providers/StoreProvider";
import { CategoryPageProductsSchema } from "../types/CategoryPageProductsSchema";
import { fetchProductsByCategory } from "../services/fetchProductsByCategory/fetchProductsByCategory";

const productsAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});

export const getCategoryProducts = productsAdapter.getSelectors<StoreState>(
  (state) => state.categoryPage?.products || productsAdapter.getInitialState()
);

const categoryPageProductsSlice = createSlice({
  name: "categoryPageProductsSlice",
  initialState: productsAdapter.getInitialState<CategoryPageProductsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProductsByCategory.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          productsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: categoryPageProductsReducer } =
  categoryPageProductsSlice;
