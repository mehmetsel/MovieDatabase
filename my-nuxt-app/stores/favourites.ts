// stores/favourites.ts
import { defineStore } from 'pinia';

export const useFavouritesStore = defineStore('favourites', {
  state: () => ({
    favouriteMovies: [] as Array<{ id: number, title: string }>, // Tip belirleme
    favouriteShows: [] as Array<{ id: number, title: string }>, // Tip belirleme
  }),
  actions: {
    // Filmler için favori işlemleri
    addFavouriteMovie(movie: { id: number, title: string }) {
      if (!this.favouriteMovies.find((fav) => fav.id === movie.id)) {
        this.favouriteMovies.push(movie);
      }
    },
    removeFavouriteMovie(movieId: number) {
      this.favouriteMovies = this.favouriteMovies.filter((fav) => fav.id !== movieId);
    },
    isFavouriteMovie(movieId: number) {
      return this.favouriteMovies.some((fav) => fav.id === movieId);
    },
    toggleFavouriteMovie(movie: { id: number, title: string }) {
      if (this.isFavouriteMovie(movie.id)) {
        this.removeFavouriteMovie(movie.id);
      } else {
        this.addFavouriteMovie(movie);
      }
    },

    addFavouriteShow(show: { id: number, title: string }) {
      if (!this.favouriteShows.find((fav) => fav.id === show.id)) {
        this.favouriteShows.push(show);
      }
    },
    removeFavouriteShow(showId: number) {
      this.favouriteShows = this.favouriteShows.filter((fav) => fav.id !== showId);
    },
    isFavouriteShow(showId: number) {
      return this.favouriteShows.some((fav) => fav.id === showId);
    },
    toggleFavouriteShow(show: { id: number, title: string }) {
      if (this.isFavouriteShow(show.id)) {
        this.removeFavouriteShow(show.id);
      } else {
        this.addFavouriteShow(show);
      }
    },
  },
});
