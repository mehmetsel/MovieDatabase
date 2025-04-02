<template>
    <PageWithFilter
      title="Upcoming TV Shows"
      :fetchFunction="fetchUpcomingTVShows"
    />
  </template>
  
  <script setup>
  import PageWithFilter from '@/components/PageWithFilter.vue'
  import { fetchUpcomingTVShows } from '@/services/api'
  </script>
  