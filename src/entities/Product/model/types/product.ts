import { ProductType } from "../consts/productConsts";

export interface Product {
  id: string;
  type: ProductType;
  product_id: string;
  name: string;
  price: string;
  rating: number;
  description: string;
}