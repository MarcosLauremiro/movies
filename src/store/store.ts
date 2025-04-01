import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./movieReducer";
import { themeReducer } from "./themeReducer";

export const store = configureStore({
  reducer: {
    movieReducer,
    themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
