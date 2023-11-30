import { combineReducers } from "@reduxjs/toolkit";
import { CategoryPageSchema } from "../types";
import { categoryPageProductsReducer } from "./categoryPageProductsSlice";

export const categoryPageReducer = combineReducers<CategoryPageSchema>({
  products: categoryPageProductsReducer,
});
