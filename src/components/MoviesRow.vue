<template>
     <div class="container">
        <div >
        <div class="row">
            <div class="col-md-7">
            <a href="#">
                <img class="img-fluid rounded mb-3 mb-md-0" :src="movie.imageUrl">
            </a>
            </div>
                <div class="col-md-5">
                <h2>{{ movie.title }}</h2>
                <h6>{{ movie.director }}</h6>
                <h6>{{ movie.releaseDate }}</h6>
                <h6>{{ movie.genre }}</h6>
                <h6>{{ movie.duration }}</h6>
           
            </div>
        </div>
        <hr>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    props: ['movie']
}
</script>

<style>

</style>
