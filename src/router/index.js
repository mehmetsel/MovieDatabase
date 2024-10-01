import { createRouter, createWebHistory } from 'vue-router';
import Movies from '@/views/Movies.vue';
import TVShows from '@/views/TVShows.vue';

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: Movies },
  { path: '/tv-shows', component: TVShows },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
