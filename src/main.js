import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vue-toast-notification/dist/theme-default.css';

import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueToast from 'vue-toast-notification';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './plugins/vue-router';
import axios from './api/api';
import store from './store';
import truncate from './shared/filters/truncate';

Vue.config.productionTip = false;

Vue.filter('truncate', truncate);

Vue.use(VueAxios, axios);
Vue.use(VueToast, {
  position: 'top-right'
});

store.axios = axios;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
