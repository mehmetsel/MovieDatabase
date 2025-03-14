<template>
  <div class="relative">
    <div class="bg-cover bg-center h-64 flex items-center justify-center" style="background-image: url('https://example.com/your-background-image.jpg');">
      <input
        v-model="searchQuery"
        @keyup.enter="search"
        class="w-3/4 p-4 text-lg rounded-md shadow-md"
        type="text"
        placeholder="Search for a movie, TV show, person..."
      />
      <button @click="search" class="bg-blue-600 text-white px-4 py-2 ml-2 rounded-md">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      this.$router.push({ path: '/search', query: { q: this.searchQuery } });
    },
  },
};
</script>

<style scoped>
</style>
