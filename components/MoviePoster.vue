<template>
  <div class="rounded overflow-hidden shadow-lg relative">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie poster" class="w-full" />

    <button
      class="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
      @click="toggleFavouriteMovie(movie)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        :fill="isFavouriteMovie(movie.id) ? 'yellow' : 'none'"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.071h7.427c.969 0 1.371 1.24.588 1.81l-6.015 4.41 2.286 7.072c.3.92-.755 1.688-1.54 1.11l-6.015-4.41-6.015 4.41c-.784.578-1.838-.19-1.539-1.11l2.285-7.071-6.015-4.41c-.783-.57-.38-1.81.588-1.81h7.427l2.286-7.072z"
        />
      </svg>
    </button>

    <div class="p-4">
      <h3 class="text-xl font-bold">{{ movie.title }}</h3>
      <Rating :rating="movie.vote_average" />
    </div>
  </div>
</template>


<script>
import Rating from './Rating.vue';
import { useFavouritesStore } from '@/stores/favourites';

export default {
  props: {
    movie: Object,
  },
  components: {
    Rating,
  },
  setup() {
    const favouritesStore = useFavouritesStore();

    const toggleFavouriteMovie = (movie) => {
      favouritesStore.toggleFavouriteMovie(movie);
    };

    const isFavouriteMovie = (movieId) => {
      return favouritesStore.isFavouriteMovie(movieId);
    };

    return {
      toggleFavouriteMovie,
      isFavouriteMovie,
    };
  },
};
</script>
