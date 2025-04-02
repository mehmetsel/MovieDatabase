<template>
    <PageWithFilter
      title="Top Rated TV Shows"
      :fetchFunction="fetchTopRatedTVShows"
    />
  </template>
  
  <script setup>
  import PageWithFilter from '@/components/PageWithFilter.vue'
  import { fetchTopRatedTVShows } from '@/services/api'
  </script>
  