<template>
  <Layout>
    <div class="container mx-auto py-6">
      <h2 class="text-3xl mb-4">Popular Movies</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <MoviePoster v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
      <div class="mt-6 flex justify-center">
        <button @click="fetchMovies('popular')" class="mx-2 bg-blue-500 text-white px-4 py-2">Popular</button>
        <button @click="fetchMovies('top_rated')" class="mx-2 bg-blue-500 text-white px-4 py-2">Top Rated</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import MoviePoster from '@/components/MoviePoster.vue';
import api from '@/services/api';

export default {
  data() {
    return {
      movies: [],
    };
  },
  components: {
    Layout,
    MoviePoster,
  },
  mounted() {
    this.fetchMovies('popular');
  },
  methods: {
    async fetchMovies(type) {
      let response;
      if (type === 'popular') {
        response = await api.getPopularMovies();
      } else {
        response = await api.getTopRatedMovies();
      }
      this.movies = response.data.results;
    },
  },
};
</script>

<style scoped>
</style>
