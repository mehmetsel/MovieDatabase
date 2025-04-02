<template>
    <PageWithFilter
      title="Popular TV Shows"
      :fetchFunction="fetchPopularTVShows"
    />
  </template>
  
  <script setup>
  import PageWithFilter from '@/components/PageWithFilter.vue'
  import { fetchPopularTVShows } from '@/services/api'
  </script>
  