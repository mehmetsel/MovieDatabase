import axios from 'axios';

const API_KEY = '348088421ad3fb3a9d6e56bb6a9a8f80';
const BASE_URL = 'https://api.themoviedb.org/3';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default {
  getPopularMovies() {
    return apiClient.get('/movie/popular');
  },
  getTopRatedMovies() {
    return apiClient.get('/movie/top_rated');
  },
  getPopularTVShows() {
    return apiClient.get('/tv/popular');
  },
  getTopRatedTVShows() {
    return apiClient.get('/tv/top_rated');
  },
  searchMovies(query) {
    return apiClient.get('/search/movie', {
      params: {
        query,
      },
    });
  },
};
