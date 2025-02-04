<template>
  <Layout>
    <div class="container mx-auto py-6">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search movies..."
        class="w-full p-2 mb-4 border rounded text-black font-bold placeholder-gray-400"
        @input="onSearch"
      />
      
      <h2 class="text-3xl mb-4">
        {{ searchQuery ? 'Search Results' : title }}
      </h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <MoviePoster
          v-for="movie in (searchQuery ? searchResults : movies)"
          :key="movie.id"
          :movie="movie"
        />
      </div>

      <div class="mt-6 flex justify-center">
        <button @click="fetchMovies('popular')" class="mx-2 bg-blue-500 text-white px-4 py-2">
          Popular
        </button>
        <button @click="fetchMovies('top_rated')" class="mx-2 bg-blue-500 text-white px-4 py-2">
          Top Rated
        </button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import MoviePoster from '@/components/MoviePoster.vue';
import api from '@/services/api';
import debounce from 'lodash/debounce';
import { ref } from 'vue';

export default {
  components: {
    Layout,
    MoviePoster,
  },
  data() {
    return {
      title: 'Popular Movies',
      movies: [],
      searchQuery: '',
      searchResults: [],
    };
  },
  mounted() {
    this.fetchMovies('popular');
  },
  methods: {
    async fetchMovies(type) {
      let response;
      if (type === 'popular') {
        this.title = 'Popular Movies';
        response = await api.getPopularMovies();
      } else if (type === 'top_rated') {
        this.title = 'Top Rated Movies';
        response = await api.getTopRatedMovies();
      }
      this.movies = response.data.results;
    },

    async performSearch() {
      if (this.searchQuery.length < 3) return;
      const response = await api.searchMovies(this.searchQuery);
      this.searchResults = response.data.results;
    },

    onSearch: debounce(function () {
      this.performSearch();
    }, 500),
  },
};
</script>

<style scoped>
</style>
