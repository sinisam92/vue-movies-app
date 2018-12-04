<template>
  <div class="container">
    <ul v-for="movie in filteredMovies" :key="movie.id">
      <movies-row :movie="movie"/>
    </ul>
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
        console.log(vm.movies);
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
</style>
