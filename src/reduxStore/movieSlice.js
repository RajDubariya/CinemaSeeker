import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieData: [],
    
  },
  reducers: {
    getApiConfig: (state, action) => {
      state.movieData = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfig } = movieSlice.actions;

export default movieSlice.reducer;
