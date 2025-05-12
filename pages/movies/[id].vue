<template>
    <div class="p-6 text-white" v-if="details">
      <div class="flex flex-col md:flex-row gap-6">
        <img :src="getImage(details.poster_path)" alt="Poster" class="w-64 rounded shadow" />

        <div class="flex-1">
          <h1 class="text-3xl font-bold mb-2">
            {{ details.title || details.name }} <span class="text-gray-400">({{ releaseYear }})</span>
          </h1>
  
          <p class="mb-4 text-sm text-gray-300">
            {{ details.release_date || details.first_air_date }} •
            {{ details.genres.map(g => g.name).join(', ') }} •
            {{ runtime }}
          </p>
  
          <div class="flex items-center gap-4 mb-4">
            <div class="text-green-400 text-xl font-bold border border-green-400 rounded-full w-12 h-12 flex items-center justify-center">
              {{ Math.round(details.vote_average * 10) }}<span class="text-sm">%</span>
            </div>
            <span>User Score</span>
  
            <button @click="toggle(details)" class="ml-auto text-red-400 hover:text-red-600">
              <span v-if="isFavourite(details.id)">💔 Remove Favourite</span>
              <span v-else>❤️ Add to Favourite</span>
            </button>
          </div>
  
          <h2 class="text-xl font-semibold mb-2">Overview</h2>
          <p class="mb-4 text-gray-300">{{ details.overview }}</p>
  
          <div class="text-sm space-y-1">
            <p><strong>Status:</strong> {{ details.status }}</p>
            <p><strong>Original Language:</strong> {{ details.original_language }}</p>
            <p v-if="details.budget"><strong>Budget:</strong> ${{ details.budget.toLocaleString() }}</p>
            <p v-if="details.revenue"><strong>Revenue:</strong> ${{ details.revenue.toLocaleString() }}</p>
          </div>
        </div>
      </div>
  
      <div v-if="details.credits && details.credits.cast" class="mt-10">
        <h2 class="text-2xl font-semibold mb-4">Top Billed Cast</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div v-for="actor in details.credits.cast.slice(0, 10)" :key="actor.id" class="bg-zinc-800 rounded p-2 text-center">
            <img :src="getImage(actor.profile_path)" alt="Actor" class="rounded mb-2 mx-auto h-36 object-cover" />
            <p class="text-sm font-semibold">{{ actor.name }}</p>
            <p class="text-xs text-gray-400">as {{ actor.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useFavouritesStore } from '@/stores/favourites'
  import { getMovieDetails } from '@/services/api'
  
  const route = useRoute()
  const details = ref(null)
  const favourites = useFavouritesStore()
  
  const toggle = (item) => favourites.toggle(item)
  const isFavourite = (id) => favourites.isFavourite(id)
  
  const getImage = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : ''
  const releaseYear = computed(() => (details.value.release_date || details.value.first_air_date || '').split('-')[0])
  const runtime = computed(() => {
    const mins = details.value.runtime || (details.value.episode_run_time?.[0] || 0)
    return mins ? `${Math.floor(mins / 60)}h ${mins % 60}m` : ''
  })
  
  onMounted(async () => {
    const res = await getMovieDetails(route.params.id)
    details.value = res.data
  })
  </script>
  
  <style scoped>
  img {
    max-width: 100%;
  }
  </style>
  