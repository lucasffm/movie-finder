import "material-design-icons-iconfont/dist/material-design-icons.css";

import Vue from "vue";
import VueAxios from "vue-axios";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/vue-router";
import axios from "./api/api";
import store from "./store";
import truncate from "./shared/filters/truncate";

Vue.config.productionTip = false;

Vue.filter("truncate", truncate);

Vue.use(VueAxios, axios);

store.axios = axios;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
