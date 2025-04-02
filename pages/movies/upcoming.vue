<template>
    <PageWithFilter
      title="Upcoming Movies"
      :fetchFunction="fetchUpcomingMovies"
    />
  </template>
  
  <script setup>
  import PageWithFilter from '@/components/PageWithFilter.vue'
  import { fetchUpcomingMovies } from '@/services/api'
  </script>
  