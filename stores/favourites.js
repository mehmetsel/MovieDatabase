import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', {
  state: () => ({
    items: []
  }),
  actions: {
    toggle(item) {
      const index = this.items.findIndex(i => i.id === item.id)
      if (index > -1) {
        this.items.splice(index, 1)
      } else {
        this.items.push(item)
      }
    },
    isFavourite(id) {
      return this.items.some(i => i.id === id)
    }
  },
  persist: true
})