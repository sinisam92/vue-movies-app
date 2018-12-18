<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <img class="img-thumbnail rounded" :src="movie.imageUrl" :alt="movie.title">
    <h4>
      <strong>Director:</strong>
      {{ movie.director }}
    </h4>
    <h4>
      <strong>Duration:</strong>
      {{ movie.duration }}
    </h4>
    <h4>
      <strong>Release date:</strong>
      {{ movie.releaseDate }}
    </h4>
    <h4>
      <strong>Genre:</strong>
      {{ movie.genre }}
    </h4>
  </div>
</template>

<script>
import Movies from "./../services/movies-service";
export default {
  data() {
    return {
      movie: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    Movies.getMovie(Number(to.params.id))
      .then(response => {
        next(vm => {
          vm.movie = response.data;
        });
      })
      .catch(err => {
        next(from);
      });
  }
};
</script>

<style>
</style>