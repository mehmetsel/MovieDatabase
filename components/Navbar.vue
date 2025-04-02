<template>
  <nav class="relative bg-gray-900 text-white p-4 flex items-center justify-start space-x-6">
    <div
      class="relative"
      @mouseenter="openMovies"
      @mouseleave="closeMovies"
    >
      <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Movies</button>
      <div
        v-if="moviesOpen"
        class="absolute left-0 mt-2 bg-white text-black shadow-lg rounded p-4 z-50 w-64"
      >
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/movies/popular" class="hover:underline">Popular Movies</NuxtLink>
          <NuxtLink to="/movies/upcoming" class="hover:underline">Upcoming Movies</NuxtLink>
          <NuxtLink to="/movies/top-rated" class="hover:underline">Top Rated Movies</NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="relative"
      @mouseenter="openTV"
      @mouseleave="closeTV"
    >
      <button class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">TV Shows</button>
      <div
        v-if="tvOpen"
        class="absolute left-0 mt-2 bg-white text-black shadow-lg rounded p-4 z-50 w-64"
      >
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/tvshows/popular" class="hover:underline">Popular TV Shows</NuxtLink>
          <NuxtLink to="/tvshows/upcoming" class="hover:underline">Upcoming TV Shows</NuxtLink>
          <NuxtLink to="/tvshows/top-rated" class="hover:underline">Top Rated TV Shows</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const moviesOpen = ref(false)
const tvOpen = ref(false)
let moviesTimer
let tvTimer

const openMovies = () => {
  clearTimeout(moviesTimer)
  moviesOpen.value = true
}
const closeMovies = () => {
  moviesTimer = setTimeout(() => {
    moviesOpen.value = false
  }, 100)
}

const openTV = () => {
  clearTimeout(tvTimer)
  tvOpen.value = true
}
const closeTV = () => {
  tvTimer = setTimeout(() => {
    tvOpen.value = false
  }, 100)
}
</script>

<style scoped>
nav {
  position: relative;
}
</style>
