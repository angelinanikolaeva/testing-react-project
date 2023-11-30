import { ProductType } from "@/entities/Product/model/consts/productConsts";
import _products from "./fakeProducts";

const TIMEOUT = 100;

// Fake Api
export const $api = {
  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(_products), TIMEOUT);
    });
  },

  getProductsByCategory(productType: ProductType) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = _products.filter(
          (product) => product.type === productType
        );
        resolve(products);
      }, TIMEOUT);
    });
  },
};
