import { createSlice } from "@reduxjs/toolkit";
import { Credits, Movie, MovieDetails, Videos } from "../types";

interface InitalState {
  loading: boolean;
  error: string;
  totalPages: number;
  currentMovie: MovieDetails;
  movies: Movie[];
  searchResults: Movie[];
  searchQuery: string;
  credits: Credits;
  similarMovies: Movie[];
  videos: Videos;
}

const initialState: InitalState = {
  loading: false,
  totalPages: 0,
  error: "",
  currentMovie: {} as MovieDetails,
  movies: [],
  searchResults: [],
  searchQuery: "",
  credits: {} as Credits,
  similarMovies: [],
  videos: {} as Videos,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCredits: (state, action) => {
      state.credits = action.payload;
    },
    setSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const {
  setCurrentMovie,
  setError,
  setLoading,
  setMovies,
  setTotalPages,
  setSearchResults,
  setSearchQuery,
  setCredits,
  setSimilarMovies,
  setVideos,
} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
