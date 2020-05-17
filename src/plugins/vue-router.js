import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Home from '../pages/Home.vue';
import MovieFinder from '../pages/MovieFinder.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '', component: Home },
    { path: '/movies', component: MovieFinder }
  ]
});
