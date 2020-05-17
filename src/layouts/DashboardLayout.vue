<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title to="/" dense class="">Movie Finder</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="doLogout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Sidenav></Sidenav>
      <v-container>
        <slot />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Sidenav from '../components/Sidenav.vue';

export default {
  components: {
    Sidenav,
  },
  methods: {
    doLogout() {
      this.$store.dispatch('auth/doLogout');
    },
  },
};
</script>

<style></style>
