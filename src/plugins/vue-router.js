import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Home from '../pages/Home.vue';
import MovieFinder from '../pages/MovieFinder.vue';
import MovieDetails from '../pages/MovieDetails.vue';
import Login from '../pages/auth/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: Login },
    { path: '/home', component: Home },
    { path: '/movies', component: MovieFinder },
    { path: '/movies/:id', component: MovieDetails },
  ],
});
