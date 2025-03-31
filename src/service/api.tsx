import axios from "axios";
import {
  setCredits,
  setCurrentMovie,
  setError,
  setLoading,
  setMovies,
  setSearchResults,
  setSimilarMovies,
  setTotalPages,
  setVideos,
} from "../store/movieReducer";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "117e814343e3a6bdea03037a6e862406",
    language: "pt_BR",
  },
});

const makeRequest = async (
  endpoint: string,
  params: object,
  dispatch: any,
  beforeRequest?: () => void,
  onSuccess: (data: any) => void = () => {},
  onFinally?: () => void
) => {
  try {
    beforeRequest?.();
    const response = await api.get(endpoint, { params });
    onSuccess(response.data);
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    dispatch(setError("Erro ao carregar dados"));
  } finally {
    onFinally?.();
  }
};

export const getMoviesPopular = (page: number, dispatch: any) => {
  makeRequest(
    "/movie/popular",
    { page },
    dispatch,
    () => dispatch(setLoading(true)),
    (data) => {
      dispatch(setMovies(data.results));
      dispatch(setTotalPages(data.total_pages));
    },
    () => dispatch(setLoading(false))
  );
};

export const getDetailsMovie = (id: number, dispatch: any) => {
  makeRequest(
    `/movie/${id}`,
    {},
    dispatch,
    () => dispatch(setLoading(true)),
    (data) => {
      console.log("Movie details:", data);
      dispatch(setCurrentMovie(data));
    },
    () => dispatch(setLoading(false))
  );
};

export const searchMovies = (query: string, dispatch: any) => {
  makeRequest("/search/movie", { query }, dispatch, undefined, (data) =>
    dispatch(setSearchResults(data.results))
  );
};

export const getCredits = (id: number, dispatch: any) => {
  makeRequest(`/movie/${id}/credits`, {}, dispatch, undefined, (data) =>
    dispatch(setCredits(data))
  );
};

export const getSimilarMovies = (id: number, dispatch: any) => {
  makeRequest(`/movie/${id}/similar`, {}, dispatch, undefined, (data) =>
    dispatch(setSimilarMovies(data.results))
  );
};

export const getVideos = (id: number, dispatch: any) => {
  makeRequest(`/movie/${id}/videos`, {}, dispatch, undefined, (data) =>
    dispatch(setVideos(data))
  );
};
