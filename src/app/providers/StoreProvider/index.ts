import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type { StoreState, StoreStateKey } from "./config/StoreState";

export { StoreProvider, createReduxStore };

export type {
  StoreState as StoreState,
  AppDispatch,
  StoreStateKey as StoreStateKey,
};
