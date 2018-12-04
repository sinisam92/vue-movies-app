import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AppMovies from './components/AppMovies.vue';
import MoviesRow from './components/MoviesRow.vue';
import MovieSearch from './components/MovieSearch.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

 window.EventBus = new Vue();


const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: AppMovies, name: 'movies' }
  
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
