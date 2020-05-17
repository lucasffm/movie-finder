import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './styles/global.css';

import Vue from 'vue';
import VueAxios from 'vue-axios';
import Toasted from 'vue-toasted';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './plugins/vue-router';
import axios from './api/api';
import store from './store';
import truncate from './shared/filters/truncate';

Vue.config.productionTip = false;

Vue.filter('truncate', truncate);

Vue.use(VueAxios, axios);
Vue.use(Toasted, {
  duration: 3000,
  className: ['toast-text'],
  iconPack: 'material',
  action: {
    icon: 'close',
    class: ['toast-close'],
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    },
  },
});

store.$axios = axios;
store.$toast = Vue.toasted;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
