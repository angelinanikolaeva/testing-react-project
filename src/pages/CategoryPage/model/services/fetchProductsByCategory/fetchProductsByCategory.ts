import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Product } from "@/entities/Product";

export const fetchProductsByCategory = createAsyncThunk<
  Product[],
  string | undefined,
  ThunkConfig<string>
>("categoryPage/fetchProductsByCategory", async (productType, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!productType) {
    return rejectWithValue("error");
  }

  try {
    const response = await extra.api.getProductsByCategory(productType);

    if (!response) {
      throw new Error();
    }

    return response;
  } catch (e) {
    return rejectWithValue("error");
  }
});
