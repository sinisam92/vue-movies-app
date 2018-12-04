<template>
    <div class="container">
       <ul v-for="movie in movies" :key="movie.id">
           <movies-row :movie="movie"/>
       </ul>
    </div>
</template>

<script>

import Movies from '../service/Movies'
import MoviesRow from './MoviesRow.vue'

export default {
    components: {
        MoviesRow
    },
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
