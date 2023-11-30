import {
  AnyAction,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import {
  MountedReducers,
  ReducerManager,
  StoreState,
  StoreStateKey,
} from "./StoreState";

export function createReducerManager(
  initialReducers: ReducersMapObject<StoreState>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StoreStateKey> = [];
  const mountedReducers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StoreState, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key: StoreStateKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      mountedReducers[key] = true;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StoreStateKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      mountedReducers[key] = false;

      combinedReducer = combineReducers(reducers);
    },
  };
}
