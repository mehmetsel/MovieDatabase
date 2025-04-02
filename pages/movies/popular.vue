<template>
    <PageWithFilter
      title="Popular Movies"
      :fetchFunction="fetchPopularMovies"
    />
  </template>
  
  <script setup>
  import PageWithFilter from '@/components/PageWithFilter.vue'
  import { fetchPopularMovies } from '@/services/api'
  </script>
  