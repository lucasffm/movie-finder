import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#009688',
        secondary: '#ff9800',
        accent: '#2196f3',
        error: '#f44336',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#8bc34a',
      },
    },
  },
});
