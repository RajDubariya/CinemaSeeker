import { createSlice } from "@reduxjs/toolkit";

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShowsData: [],
    tvShowsImages: [],
  },
  reducers: {
    getTvShows: (state, action) => {
      state.tvShowsData = action.payload;
    },
    getTvShowsImages: (state, action) => {
      state.tvShowsImages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTvShows, getTvShowsImages } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
