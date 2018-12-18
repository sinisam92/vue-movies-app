import Vue from 'vue';
import VueRouter from 'vue-router';

import AppMovies from './components/AppMovies';
import AddMovie from './components/AddMovie';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SingleMovie from './components/SingleMovie';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: AppMovies, name: 'movies' },
  {
    path: '/movies/:id',
    component: SingleMovie,
    name: 'movie',
    meta: {
      auth: true
    }
  },
  { path: '/add', component: AddMovie, name: 'add' },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      guest: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (isAuthenticated && to.meta.guest) {
    return next({ name: 'movies' });
  }
  if (!isAuthenticated && to.meta.auth) {
    return next({ name: 'login' });
  }
  return next();
});
export default router;
