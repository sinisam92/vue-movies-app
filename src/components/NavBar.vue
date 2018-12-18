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
            <p class="userName active nav-link" v-if="user">Welcome, {{ user.name }}</p>
            <router-link class="nav-link active" to="/login" v-if="!user">Login</router-link>
            <a class="nav-link active" @click="logoutOnClick" v-if="user">Logout</a>
            <router-link class="nav-link active" to="/add">Add Movie</router-link>
            <movie-search v-if="['movies'].indexOf($route.name) > -1"></movie-search>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MovieSearch from "./MovieSearch.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    MovieSearch
  },
  methods: {
    ...mapActions(["logout"]),
    logoutOnClick() {
      this.logout();
    }
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  }
};
</script>

<style scoped>
.navbar {
  opacity: 0.5;
}
.userName {
  color: white;
}
</style>
