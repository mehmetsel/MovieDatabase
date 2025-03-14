<template>
  <div>
    <header class="bg-blue-500 p-4 text-white">
      <nav class="container mx-auto flex justify-between">
        <a href="/" class="font-bold text-xl">My Movie App</a>
        <div>
          <router-link to="/movies" class="mx-2">Movies</router-link>
          <router-link to="/tvshows" class="mx-2">TV Shows</router-link>
        </div>
      </nav>
    </header>
    <main class="py-4">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style scoped>
</style>
