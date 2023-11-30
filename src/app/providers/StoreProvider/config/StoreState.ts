import { CategoryPageSchema } from "@/pages/CategoryPage/model/types";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

export interface StoreState {
  // ui: UISchema;
  // Async
  categoryPage?: CategoryPageSchema;
}

export type StoreStateKey = keyof StoreState;

export interface ReduxStoreWithManager extends EnhancedStore<StoreState> {
  reducerManager: ReducerManager;
}

export type MountedReducers = OptionalRecord<StoreStateKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreState>;
  reduce: (state: StoreState, action: AnyAction) => CombinedState<StoreState>;
  add: (key: StoreStateKey, reducer: Reducer) => void;
  remove: (key: StoreStateKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ThunkExtraArg {
  api: any;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StoreState;
}
