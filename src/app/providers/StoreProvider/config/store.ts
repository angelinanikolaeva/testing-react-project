import { CombinedState, Reducer, ReducersMapObject } from "redux";
import { StoreState, ThunkExtraArg } from "./StoreState";
import { configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";

export function createReduxStore(
  initialState?: StoreState,
  asyncReducers?: ReducersMapObject<StoreState>
) {
  const rootReducers: ReducersMapObject<StoreState> = {
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreState>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
