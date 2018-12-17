<template>
  <div>
    <h1 style="text-align:center">Add Movie</h1>
    <form class="formWrapp" @submit.prevent="onSubmit">
      <div class="form-group">
        <input
          autofocus
          name="title"
          type="text"
          class="form-control"
          placeholder="Title"
          v-model="newMovie.title"
        >
        <span class="alert alert-danger" v-if="errors.title">{{ errors.title[0] }}</span>
      </div>
      <div class="form-group">
        <input
          name="director"
          type="text"
          class="form-control"
          placeholder="Director"
          v-model="newMovie.director"
        >
        <span class="alert alert-danger" v-if="errors.director">{{ errors.director[0] }}</span>
      </div>
      <div class="form-group">
        <input
          name="imageUrl"
          type="url"
          class="form-control"
          placeholder="Image Url"
          v-model="newMovie.imageUrl"
        >
        <span class="alert alert-danger" v-if="errors.imageUrl">{{ errors.imageUrl[0] }}</span>
      </div>
      <div class="form-group">
        <input
          name="duration"
          type="number"
          class="form-control"
          placeholder="Duration"
          v-model="newMovie.duration"
        >
        <span class="alert alert-danger" v-if="errors.duration">{{ errors.duration[0] }}</span>
      </div>
      <div class="form-group">
        <input
          name="releaseDate"
          type="date"
          class="form-control"
          placeholder="Release Date"
          v-model="newMovie.releaseDate"
        >
        <span class="alert alert-danger" v-if="errors.releaseDate">{{ errors.releaseDate[0] }}</span>
      </div>
      <div class="form-group">
        <input
          name="genre"
          type="text"
          class="form-control"
          placeholder="Genre"
          v-model="newMovie.genre"
        >
        <span class="alert alert-danger" v-if="errors.genre">{{ errors.genre[0] }}</span>
      </div>
      <button type="submit" class="btn btn-danger">Submit</button>
    </form>
  </div>
</template>

<script>
import Movies from "./../services/movies-service";
export default {
  data() {
    return {
      newMovie: {},
      errors: []
    };
  },
  methods: {
    onSubmit() {
      Movies.add(this.newMovie)
        .then(() => {
          this.$router.push("/movies");
        })
        .catch(error => (this.errors = error.response.data.errors));
    }
  }
};
</script>

<style scoped>
form {
  margin: 0 auto;
  width: 40%;
}
input {
  border-radius: 10px;
}
</style>
