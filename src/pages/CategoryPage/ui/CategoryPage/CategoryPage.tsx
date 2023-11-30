import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Page } from "@/widgets/Page";
import cls from "./CategoryPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { CategoryTable } from "@/features/CategoryTable";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProductsByCategory } from "../../model/services/fetchProductsByCategory/fetchProductsByCategory";
import { useSelector } from "react-redux";
import { getCategoryProducts } from "../../model/slices/categoryPageProductsSlice";
import { categoryPageReducer } from "../../model/slices";

const reducers: ReducersList = {
  categoryPage: categoryPageReducer,
};

interface CategoryPageProps {
  className?: string;
}

const CategoryPage = memo((props: CategoryPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsByCategory(id));

    // eslint-disable-next-line
  }, [id]);

  const allProducts = useSelector(getCategoryProducts.selectAll);

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.CategoryPage, {}, [className])}>
        <CategoryTable data={allProducts}></CategoryTable>
      </Page>
    </DynamicModuleLoader>
  );
});

export default CategoryPage;
