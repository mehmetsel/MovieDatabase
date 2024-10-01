<template>
  <Layout>
    <div class="container mx-auto py-6">
      <h2 class="text-3xl mb-4">Popular TV Shows</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <TVShowPoster v-for="show in tvShows" :key="show.id" :show="show" />
      </div>
      <div class="mt-6 flex justify-center">
        <button @click="fetchTVShows('popular')" class="mx-2 bg-blue-500 text-white px-4 py-2">Popular</button>
        <button @click="fetchTVShows('top_rated')" class="mx-2 bg-blue-500 text-white px-4 py-2">Top Rated</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import TVShowPoster from '@/components/TVShowPoster.vue';
import api from '@/services/api';

export default {
  data() {
    return {
      tvShows: [],
    };
  },
  components: {
    Layout,
    TVShowPoster,
  },
  mounted() {
    this.fetchTVShows('popular');
  },
  methods: {
    async fetchTVShows(type) {
      let response;
      if (type === 'popular') {
        response = await api.getPopularTVShows();
      } else {
        response = await api.getTopRatedTVShows();
      }
      this.tvShows = response.data.results;
    },
  },
};
</script>

