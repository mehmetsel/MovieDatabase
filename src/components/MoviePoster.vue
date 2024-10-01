<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie poster" class="w-full" />
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ movie.title }}</h3>
      <Rating :rating="movie.vote_average" />
    </div>
  </div>
</template>

<script>
import Rating from './Rating.vue';

export default {
  props: {
    movie: Object,
  },
  components: {
    Rating,
  },
};
</script>
