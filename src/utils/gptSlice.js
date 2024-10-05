import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    errorMessage: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieName;
    },
    showErrorState: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovies, showErrorState } =
  gptSlice.actions;
export default gptSlice.reducer;
