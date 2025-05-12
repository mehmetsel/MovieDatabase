import axios from 'axios';

const API_KEY = '348088421ad3fb3a9d6e56bb6a9a8f80';
const BASE_URL = 'https://api.themoviedb.org/3';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export function fetchPopularMovies() {
  return apiClient.get('/movie/popular');
}

export function fetchUpcomingMovies() {
  return apiClient.get('/movie/upcoming');
}

export function fetchTopRatedMovies() {
  return apiClient.get('/movie/top_rated');
}

export function fetchPopularTVShows() {
  return apiClient.get('/tv/popular');
}

export function fetchUpcomingTVShows() {
  return apiClient.get('/tv/on_the_air');
}

export function fetchTopRatedTVShows() {
  return apiClient.get('/tv/top_rated');
}

export function searchMovies(query) {
  return apiClient.get('/search/movie', {
    params: { query },
  });
}

export function getMovieDetails(id) {
  return apiClient.get(`/movie/${id}`, {
    params: { append_to_response: 'credits' },
  });
}

export function getTVDetails(id) {
  return apiClient.get(`/tv/${id}`, {
    params: { append_to_response: 'credits' },
  });
}
