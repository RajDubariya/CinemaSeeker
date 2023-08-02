import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieData: [],
    movieimages: [],
    similarMovies: [],
    cast: [],
  },
  reducers: {
    getApiConfig: (state, action) => {
      state.movieData = action.payload;
    },
    getMovieImages: (state, action) => {
      state.movieimages = action.payload;
    },
    getSimilarMovie: (state, action) => {
      state.similarMovies = action.payload;
    },
    getCast: (state, action) => {
      state.cast = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfig, getMovieImages, getSimilarMovie, getCast } =
  movieSlice.actions;

export default movieSlice.reducer;
