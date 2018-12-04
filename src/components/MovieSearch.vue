<template>
  <div>
    <form class="form-inline my-2 my-lg-0">
      <input @input="searchHandler" class="form-control mr-sm-2" type="search" placeholder="Search">
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    searchHandler(event) {
      window.EventBus.$emit("search", event.target.value);
    }
  }
};
</script>

<style scoped>
</style>
