import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import tvShowsSlice from "./tvShowsSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    tvShows: tvShowsSlice,
  },
});
