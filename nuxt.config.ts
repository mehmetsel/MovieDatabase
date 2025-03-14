export default defineNuxtConfig({
  css: ['~/assets/tailwind.css', '~/assets/base.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['axios']
  },
  vite: {
    optimizeDeps: {
      include: ['form-data']
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  pages: true,
});