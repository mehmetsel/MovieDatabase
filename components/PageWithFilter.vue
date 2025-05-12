<template>
  <div class="flex">
    <aside class="w-64 p-4 bg-gray-100 dark:bg-zinc-900 border-r border-zinc-700 space-y-4">
      <h2 class="text-lg font-semibold mb-2">Sort</h2>
      <select v-model="selectedSort" class="w-full border px-2 py-1 bg-black text-white">
        <option value="vote_average">Rating</option>
        <option value="title">Title</option>
        <option value="release_date">Release Date</option>
      </select>

      <h2 class="text-lg font-semibold mt-4">Genre</h2>
      <select v-model="selectedGenre" class="w-full border px-2 py-1 bg-black text-white">
        <option value="">All Genres</option>
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>

      <h2 class="text-lg font-semibold mt-4">Search Title</h2>
      <input v-model="searchTitle" placeholder="e.g. Batman" class="w-full border px-2 py-1 bg-black text-white" />

      <h2 class="text-lg font-semibold mt-4">Minimum Rating</h2>
      <input type="number" v-model.number="minRating" min="0" max="10" step="0.1" class="w-full border px-2 py-1 bg-black text-white" />

      <h2 class="text-lg font-semibold mt-4">Release Year</h2>
      <div class="flex gap-2">
        <input type="number" v-model.number="startYear" placeholder="From" class="w-full border px-2 py-1 bg-black text-white" />
        <input type="number" v-model.number="endYear" placeholder="To" class="w-full border px-2 py-1 bg-black text-white" />
      </div>
    </aside>

    <main class="flex-1 p-6">
      <h1 class="text-3xl font-bold mb-6">{{ title }}</h1>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <NuxtLink v-for="item in filteredAndSortedItems" :key="item.id" :to="`/${mediaType}/${item.id}`" class="block hover:opacity-90 transition">
          <div class="bg-white dark:bg-zinc-800 shadow rounded-xl p-3">
            <img :src="getImage(item.poster_path)" alt="Poster" class="rounded-xl mb-3">
            <h2 class="text-lg font-semibold line-clamp-1">{{ item.title || item.name }}</h2>
            <p class="text-sm text-gray-600 dark:text-gray-300">Rating: {{ item.vote_average.toFixed(1) }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">Release: {{ item.release_date || item.first_air_date }}</p>
            <button @click.stop="toggle(item)" class="mt-2 text-red-500 hover:text-red-700 text-sm">
              <span v-if="isFavourite(item.id)">💔 Remove</span>
              <span v-else>❤️ Favourite</span>
            </button>
          </div>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFavouritesStore } from '@/stores/favourites'
import axios from 'axios'

const route = useRoute()
const favourites = useFavouritesStore()

const props = defineProps({
  title: String,
  fetchFunction: Function
})

const items = ref([])
const genres = ref([])

const selectedSort = ref('vote_average')
const selectedGenre = ref('')
const searchTitle = ref('')
const minRating = ref(0)
const startYear = ref('')
const endYear = ref('')

const getImage = (path) => `https://image.tmdb.org/t/p/w500${path}`

const fetchData = async () => {
  const res = await props.fetchFunction()
  items.value = res.data.results
}

onMounted(async () => {
  await fetchData()

  const mediaType = props.title.includes('TV') ? 'tv' : 'movie'
  const genreRes = await axios.get(`https://api.themoviedb.org/3/genre/${mediaType}/list`, {
    params: { api_key: '348088421ad3fb3a9d6e56bb6a9a8f80' }
  })
  genres.value = genreRes.data.genres
})

watch(() => route.fullPath, async () => {
  await fetchData()
})

const toggle = (item) => favourites.toggle(item)
const isFavourite = (id) => favourites.isFavourite(id)

const mediaType = computed(() => props.title.includes('TV') ? 'tvshows' : 'movies')

const filteredAndSortedItems = computed(() => {
  let list = [...items.value]

  if (selectedGenre.value) {
    list = list.filter(item => item.genre_ids.includes(parseInt(selectedGenre.value)))
  }

  if (searchTitle.value) {
    list = list.filter(item => (item.title || item.name).toLowerCase().includes(searchTitle.value.toLowerCase()))
  }

  if (minRating.value) {
    list = list.filter(item => item.vote_average >= minRating.value)
  }

  if (startYear.value || endYear.value) {
    list = list.filter(item => {
      const year = parseInt((item.release_date || item.first_air_date || '').substring(0, 4))
      return (!startYear.value || year >= startYear.value) && (!endYear.value || year <= endYear.value)
    })
  }

  if (selectedSort.value === 'vote_average') {
    list.sort((a, b) => b.vote_average - a.vote_average)
  } else if (selectedSort.value === 'title') {
    list.sort((a, b) => (a.title || a.name).localeCompare(b.title || b.name))
  } else if (selectedSort.value === 'release_date') {
    list.sort((a, b) => new Date(b.release_date || b.first_air_date) - new Date(a.release_date || a.first_air_date))
  }

  return list
})
</script>

<style scoped>
select, input {
  @apply rounded text-sm;
}
</style>