<template>
  <div>
    <form class="form-signin" @submit.prevent="submitLogin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      
      <input
        type="text"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        autocomplete="email"
        autofocus
        v-model="email"
      >
      <form-error v-if="error">{{ error }}</form-error>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        autocomplete="current-password"
        v-model="password"
      >
      <form-error v-if="error">{{ error }}</form-error>
      <button class="btn btn-dark" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FormErrors from "./../partials/FormErrors";

export default {
  name: "Login",
  components: {
    FormErrors
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitLogin() {
      this.login({
        email: this.email,
        password: this.password,
        nextRouteName: "movies"
      });
    },
    ...mapActions(["login"])
  },
  computed: {
    ...mapGetters({
      error: "getErrors"
    })
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
.alertColor {
  color: firebrick;
}
.btn-dark {
  margin-top: 30px;
}
</style>
