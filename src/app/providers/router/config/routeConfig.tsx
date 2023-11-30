import { CategoryPage } from "@/pages/CategoryPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import {
  AppRoutes,
  getRouteCategory,
  getRouteMain,
} from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.CATEGORY]: {
    path: getRouteCategory(":id"),
    element: <CategoryPage />,
  },
  // IMPORTANT: has to be last
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
