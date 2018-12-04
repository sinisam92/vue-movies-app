<template>
  <div class="container">
    <template v-if="filteredMovies.length">
      <ul v-for="movie in filteredMovies" :key="movie.id">
        <movies-row :movie="movie"/>
      </ul>
    </template>
    <template v-else>
      <h1 class="failed-search">We dont have the movie with that title in our archive</h1>
    </template>
  </div>
</template>

<script>
import Movies from "../service/Movies";
import MoviesRow from "./MoviesRow.vue";

export default {
  data() {
    return {
      movies: [],
      term: ""
    };
  },
  components: {
    MoviesRow
  },
  created() {
    window.EventBus.$on("search", term => {
      this.term = term;
    });
  },
  beforeRouteEnter(to, from, next) {
    Movies.getAll().then(response => {
      next(vm => {
        vm.movies = response.data;
      });
    });
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.term.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.row {
  margin-bottom: 5px;
}
.failed-search {
  font-size: 60px;
  color: firebrick;
}
</style>
