<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl mb-6">Welcome to the Movie and TV Shows Platform</h1>
      
      <div class="space-x-4">
        <NuxtLink to="/movies">
          <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Go to Movies
          </button>
        </NuxtLink>
  
        <NuxtLink to="/tvshows">
          <button class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">
            Go to TV Shows
          </button>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  // JavaScript koduna gerek yok
  </script>
  
  <style scoped>
  /* TailwindCSS stillerini kullanıyoruz */
  </style>
  