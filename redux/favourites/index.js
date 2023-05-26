import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourites: (_, { payload }) => payload,
    clearFavourites: _ => [],
  },
});

export const { setFavourites, clearFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
