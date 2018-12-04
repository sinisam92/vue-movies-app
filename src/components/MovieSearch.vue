<template>
<div>
    <form class="form-inline my-2 my-lg-0">
      <input @input="searchHandler" class="form-control mr-sm-2" type="search" placeholder="Search" name="search">
      <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
    </form>
</div>
</template>

<script>
export default {
    methods: {
        searchHandler(event) {
            console.log(event);
            
            window.EventBus.$emit('search', event.target.value)
        }
    }
}
</script>

<style>

</style>
