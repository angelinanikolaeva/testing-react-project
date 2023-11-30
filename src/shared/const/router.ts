export enum AppRoutes {
  MAIN = "main",
  CATEGORY = "category",
  // IMPORTANT: has to be last
  NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteCategory = (id: string) => `/category/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteCategory(":id")]: AppRoutes.CATEGORY,
};
