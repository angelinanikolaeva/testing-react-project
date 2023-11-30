import { EntityState } from "@reduxjs/toolkit";
import { Product } from "@/entities/Product";

export interface CategoryPageProductsSchema extends EntityState<Product> {
  isLoading?: boolean;
  error?: string;
}
