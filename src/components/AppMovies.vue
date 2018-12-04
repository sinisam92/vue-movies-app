<template>
    <div class="container">
       <ul v-for="movie in filteredMovies" :key="movie.id">
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
    created(){
        window.EventBus.$on('search', (term) => {
            this.term = term
        })
    },
    data() {
        return {
            movies: [],
            term: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        Movies.getAll()
        .then((response) => {
            next(vm => {
                vm.movies = response.data            
            })
        })
    },
    computed: {
        filteredMovies() {
            return this.movies.filter((movie) => movie.title.toLowerCase().includes(term.toLowerCase()))
        }
    }
}
</script>

<style scoped>
.row { 
    margin-bottom: 5px;
}

</style>
