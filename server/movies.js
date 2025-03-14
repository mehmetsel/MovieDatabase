// server/api/movies.js
import axios from 'axios';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const apiKey = 'YOUR_TMDB_API_KEY';

  if (query.search) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query.search}`);
    return response.data;
  } else {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    return response.data;
  }
});
