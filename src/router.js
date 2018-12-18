import Vue from 'vue';
import VueRouter from 'vue-router';

import AppMovies from './components/AppMovies';
import AddMovie from './components/AddMovie';
import Login from './components/Auth/Login';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/movies' },
  { path: '/movies', component: AppMovies, name: 'home' },
  { path: '/add', component: AddMovie, name: 'add' },
  {
    path: '/login',
    component: Login,
    name: 'login',
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
    return next({ name: 'home' });
  }
  if (!isAuthenticated && !to.meta.guest) {
    return next({ name: 'login' });
  }
  return next();
});
export default router;
