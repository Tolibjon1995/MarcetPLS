import { configureStore } from "@reduxjs/toolkit";
import cards from "./cardProduct/card";
import favouritesSlice from "./favourites";

export const store = configureStore({
  reducer: {
    cards,
    favourites: favouritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
