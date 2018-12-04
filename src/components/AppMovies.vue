<template>
    <div class="container">
        <div >
        <div class="row" v-for="movie in movies" :key="movie.id">
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
import Movies from '../service/Movies'

export default {
    data() {
        return {
            movies: [],
        }
    },
    beforeRouteEnter(to, from, next) {
        Movies.getAll()
        .then((response) => {
            next(vm => {
                vm.movies = response.data
                console.log(v<hr>m.movies);
                
            })
        })
    }
}
</script>

<style scoped>
.row { 
    margin-bottom: 5px;
}

</style>
