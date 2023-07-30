import { createSlice } from "@reduxjs/toolkit";

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShowsData: [],
  },
  reducers: {
    getTvShows: (state, action) => {
      state.tvShowsData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTvShows } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
