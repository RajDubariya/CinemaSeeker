import { createSlice } from "@reduxjs/toolkit";

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShowsData: [],
    tvShowsImages: [],
    similarTvShows: [],
    cast: [],
  },
  reducers: {
    getTvShows: (state, action) => {
      state.tvShowsData = action.payload;
    },
    getTvShowsImages: (state, action) => {
      state.tvShowsImages = action.payload;
    },
    getSimilarTvShows: (state, action) => {
      state.similarTvShows = action.payload;
    },
    getCast: (state, action) => {
      state.cast = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTvShows, getTvShowsImages, getSimilarTvShows, getCast } =
  tvShowsSlice.actions;

export default tvShowsSlice.reducer;
