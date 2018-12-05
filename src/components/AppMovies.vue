<template>
  <div class="container">
    <template v-if="filteredMovies.length">
      <template v-if="numberOfSelectedMovies">
        <p class="num-of-selected-movies">Selected Movies: {{numberOfSelectedMovies}}</p>
      </template>
      <ul v-for="movie in filteredMovies" :key="movie.id">
        <movies-row :movie="movie" @selected="movieSelected" :selected="selected"/>
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
      term: "",
      numberOfSelectedMovies: 0,
      selected: false
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
  },
  methods: {
    movieSelected(movie) {
      this.numberOfSelectedMovies++;
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
.num-of-selected-movies {
  font-size: 15px;
  color: tomato;
}
</style>
