<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <img class="img-fluid rounded mb-3 mb-md-0" :src="movie.imageUrl">
      </div>
      <div class="col-md-5">
        <h2>{{ movie.title }}</h2>
        <h6>Director: {{ movie.director }}</h6>
        <h6>Release Year: {{ movie.releaseDate }}</h6>
        <h6>Genre: {{ movie.genre }}</h6>
        <h6>Duration: {{ movie.duration }}</h6>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: ["movie"]
};
</script>

<style scoped>
</style>
