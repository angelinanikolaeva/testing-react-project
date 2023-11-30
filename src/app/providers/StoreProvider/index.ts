import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type {
  StoreState,
  ThunkConfig,
  StoreStateKey,
  ReduxStoreWithManager,
} from "./config/StoreState";

export { StoreProvider, createReduxStore };

export type {
  StoreState,
  AppDispatch,
  ThunkConfig,
  ReduxStoreWithManager,
  StoreStateKey,
};
