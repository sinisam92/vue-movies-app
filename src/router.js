import Vue from 'vue';
import VueRouter from 'vue-router';

import AppMovies from './components/AppMovies';
import AddMovie from './components/AddMovie';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: AppMovies, name: 'movies' },
  { path: '/add', component: AddMovie, name: 'add' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
