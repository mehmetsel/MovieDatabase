<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img :src="`https://image.tmdb.org/t/p/w500${show.poster_path}`" alt="TV Show poster" class="w-full" />
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ show.name }}</h3>
      <Rating :rating="show.vote_average" />
    </div>
  </div>
</template>

<script>
import Rating from './Rating.vue';

export default {
  props: {
    show: Object,
  },
  components: {
    Rating,
  },
};
</script>

<style scoped>
</style>
