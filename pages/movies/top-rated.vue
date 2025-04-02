<template>
    <PageWithFilter
      title="Top Rated Movies"
      :fetchFunction="fetchTopRatedMovies"
    />
  </template>
  
  <script setup>
  import PageWithFilter from '@/components/PageWithFilter.vue'
  import { fetchTopRatedMovies } from '@/services/api'
  </script>
  