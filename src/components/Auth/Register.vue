<template>
  <div class="container">
    <form @submit.prevent="registerOnSubmit">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          v-model="newUser.name"
        >
        <div v-if="errors">
          <form-error v-if="errors">{{ errors.name[0] }}</form-error>
        </div>
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="newUser.email"
        >
        <div v-if="errors">
          <form-error v-if="errors.email">{{ errors.email[0] }}</form-error>
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="newUser.password"
        >
        <div v-if="errors">
          <form-error v-if="errors.password">{{ errors.password[0] }}</form-error>
        </div>
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your password with anyone else.</small>
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          v-model="newUser.password_confirmation"
        >
        <div v-if="errors">
          <form-error v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</form-error>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FormErrors from "./../partials/FormErrors";
export default {
  components: {
    FormErrors
  },
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerOnSubmit() {
      this.register(this.newUser);
    }
  },
  computed: {
    ...mapGetters({
      errors: "getErrors"
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
  color: red;
}
</style>
