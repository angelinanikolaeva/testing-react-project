import { ReducersMapObject, combineReducers } from "redux";
import { StoreState } from "./StoreState";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";

export function createReduxStore(
  initialState?: StoreState,
  asyncReducers?: ReducersMapObject<StoreState>
) {
  const rootReducers: ReducersMapObject<StoreState> = {
    ...asyncReducers,
  };

  const combinedReducers = combineReducers(rootReducers);

  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: combinedReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
