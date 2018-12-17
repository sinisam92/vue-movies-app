<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link to="/movies" class="navbar-brand">Movies</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <router-link class="nav-link active" to="/add">Add Movie</router-link>
            <!-- <li class="nav-item active">
              <a class="nav-link" href="#">About</a>
            </li>-->
            <movie-search v-if="['movies'].indexOf($route.name) > -1"></movie-search>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MovieSearch from "./MovieSearch.vue";

export default {
  components: {
    MovieSearch
  }
};
</script>

<style scoped>
</style>
