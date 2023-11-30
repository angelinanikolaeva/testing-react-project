import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import { StoreState, StoreStateKey } from "@/app/providers/StoreProvider";
import { ReduxStoreWithManager } from "@/app/providers/StoreProvider/config/StoreState";

export type ReducersList = {
  [name in StoreStateKey]?: Reducer<NonNullable<StoreState[name]>>;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StoreStateKey];
      if (!mounted) {
        store.reducerManager.add(name as StoreStateKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StoreStateKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
