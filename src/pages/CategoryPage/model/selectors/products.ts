import { StoreState } from "@/app/providers/StoreProvider";

export const getCatedoryProductsIsLoading = (state: StoreState) => {
  return state.categoryPage?.products?.isLoading;
};

export const getCatedoryProductsError = (state: StoreState) => {
  return state.categoryPage?.products?.error;
};
