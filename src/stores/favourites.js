import { defineStore } from 'pinia';

export const useFavouritesStore = defineStore('favourites', {
  state: () => ({
    favouriteMovies: [],
    favouriteShows: [],
  }),
  actions: {
    // Filmler için favori işlemleri
    addFavouriteMovie(movie) {
      if (!this.favouriteMovies.find((fav) => fav.id === movie.id)) {
        this.favouriteMovies.push(movie);
      }
    },
    removeFavouriteMovie(movieId) {
      this.favouriteMovies = this.favouriteMovies.filter((fav) => fav.id !== movieId);
    },
    isFavouriteMovie(movieId) {
      return this.favouriteMovies.some((fav) => fav.id === movieId);
    },
    toggleFavouriteMovie(movie) {
      if (this.isFavouriteMovie(movie.id)) {
        this.removeFavouriteMovie(movie.id);
      } else {
        this.addFavouriteMovie(movie);
      }
    },

    addFavouriteShow(show) {
      if (!this.favouriteShows.find((fav) => fav.id === show.id)) {
        this.favouriteShows.push(show);
      }
    },
    removeFavouriteShow(showId) {
      this.favouriteShows = this.favouriteShows.filter((fav) => fav.id !== showId);
    },
    isFavouriteShow(showId) {
      return this.favouriteShows.some((fav) => fav.id === showId);
    },
    toggleFavouriteShow(show) {
      if (this.isFavouriteShow(show.id)) {
        this.removeFavouriteShow(show.id);
      } else {
        this.addFavouriteShow(show);
      }
    },
  },
});
