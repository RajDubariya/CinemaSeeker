import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieData: [],
    movieimages: [],
  },
  reducers: {
    getApiConfig: (state, action) => {
      state.movieData = action.payload;
    },
    getMovieImages: (state, action) => {
      state.movieimages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfig, getMovieImages } = movieSlice.actions;

export default movieSlice.reducer;
