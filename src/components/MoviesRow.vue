<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <img class="img-fluid rounded mb-3 mb-md-0" :src="movie.imageUrl">
      </div>
      <div class="col-md-5">
        <!-- {{movie.id}} -->
        <h2>{{ movie.title }}</h2>
        <h6>Director: {{ movie.director }}</h6>
        <h6>Release Year: {{ movie.releaseDate }}</h6>
        <h6>Genre: {{ movie.genre }}</h6>
        <h6>Duration: {{ movie.duration + ' ' + 'min'}}</h6>
        <button class="btn btn-info" @click.once="selectMovie">Select</button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object
    }
  },
  methods: {
    selectMovie() {
      this.selected = true;
      this.$emit("selected", this.movie);
    }
  }
};
</script>

<style scoped>
.btn-info {
  margin-top: 60px;
}
h6 {
  margin-top: 10px;
}
.container {
  padding-top: 20px;
  border-radius: 15px;
}
.selectedMovieBackgroundColor {
  background-color: navajowhite;
}
</style>
