import { FC, lazy } from "react";
import { CategoryTableProps } from "./CategoryTable";

export const CategoryTableAsync = lazy<FC<CategoryTableProps>>(
  () => import("./CategoryTable")
);
