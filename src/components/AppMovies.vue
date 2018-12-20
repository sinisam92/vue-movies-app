<template>
  <div class="container">
    <template v-if="filteredMovies.length">
      <button @click="sortNameAsc" class="btn btn-light">Name Asc</button>
      <button @click="sortNameDesc" class="btn btn-light">Name Desc</button>
      <button @click="sortDurAsc" class="btn btn-light">Duration Asc</button>
      <button @click="sortDurDesc" class="btn btn-light">Duration Desc</button>
      <template v-if="numberOfSelectedMovies">
        <p class="num-of-selected-movies">Selected Movies: {{numberOfSelectedMovies}}</p>
      </template>
      <ul v-for="movie in filteredMovies" :key="movie.id">
        <movies-row
          :movie="movie"
          @selected="movieSelected"
          :selected="selected"
          :class="{ 'selectedMovieBackgroundColor' : selected }"
        />
      </ul>
      <button @click="deselectAllMovies" class="btn btn-danger">Deselect All</button>
      <button @click="selectAllMovies" class="btn btn-primary">Select All</button>
      <pagination
        v-if="total >= take"
        @previous="previousPage"
        @next="nextPage"
        :isFirst="firstPage"
        :isLast="lastPage"
      ></pagination>
    </template>
    <template v-else>
      <h1 class="failed-search">We dont have the movie with that title in our archive</h1>
    </template>
  </div>
</template>

<script>
import Movies from "./../services/movies-service";
import MoviesRow from "./MoviesRow.vue";
import Pagination from "./partials/Pagination.vue";

export default {
  data() {
    return {
      movies: [],
      term: "",
      take: 10,
      skip: 0,
      total: 0,
      page: 1,
      numberOfSelectedMovies: 0,
      selected: false
    };
  },
  components: {
    MoviesRow,
    Pagination
  },
  created() {
    window.EventBus.$on("search", term => {
      Movies.getAll(term).then(response => {
        this.term = term;
        this.movies = response.data;
        this.total = response.total;
      });
    });
  },
  beforeRouteEnter(to, from, next) {
    Movies.getAll().then(response => {
      next(vm => {
        vm.movies = response.data;
        vm.total = response.total;
      });
    });
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.term.toLowerCase())
      );
    },
    firstPage() {
      return this.page == 1;
    },
    lastPage() {
      return this.page == this.numberOfPages;
    },
    numberOfPages() {
      return Math.ceil(this.total / this.take);
    }
  },
  methods: {
    movieSelected() {
      this.numberOfSelectedMovies++;
    },
    selectAllMovies() {
      this.selected = true;
      this.numberOfSelectedMovies = this.movies.length;
    },
    deselectAllMovies() {
      this.selected = false;
      this.numberOfSelectedMovies = 0;
    },
    sortNameAsc() {
      this.movies.sort(function(a, b) {
        var movieA = a.title.toLowerCase();
        var movieB = b.title.toLowerCase();
        return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
      });
    },
    sortNameDesc() {
      this.movies.sort(function(a, b) {
        var movieA = a.title.toLowerCase();
        var movieB = b.title.toLowerCase();
        return movieA > movieB ? -1 : movieA < movieB ? 1 : 0;
      });
    },
    sortDurAsc() {
      this.movies.sort(function(a, b) {
        var x = a.duration;
        var y = b.duration;
        return x - y;
      });
    },
    sortDurDesc() {
      this.movies.sort(function(a, b) {
        var x = a.duration;
        var y = b.duration;
        return y - x;
      });
    },
    nextPage() {
      this.page++;
      this.skip += this.take;
      Movies.getAll(this.term, this.take, this.skip).then(response => {
        this.movies = response.data;
      });
    },
    previousPage() {
      this.page--;
      this.skip -= this.take;
      Movies.getAll(this.term, this.take, this.skip).then(response => {
        this.movies = response.data;
      });
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
.btn-danger,
.btn-primary {
  float: right;
  margin-bottom: 10px;
  margin-left: 5px;
}
</style>
