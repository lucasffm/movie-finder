<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Movie Finder</v-toolbar-title>
    </v-app-bar>
    <Sidenav :drawer="drawer"></Sidenav>

    <v-content>
      <router-view class="view"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Sidenav from './components/Sidenav.vue';

export default {
  name: 'App',
  components: {
    Sidenav
  },
  data() {
    return {
      drawer: true
    };
  }
};
</script>
<style lang="css" scoped>
a {
  text-decoration: none;
  color: white !important;
}
</style>
