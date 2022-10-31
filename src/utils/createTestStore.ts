import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../store/newsSlice";

export const createTestStore = () => {
  return configureStore({
    reducer: {
      news: newsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};
