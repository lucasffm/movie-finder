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
      <Sidenav :drawer="drawer"></Sidenav>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <slot />
          </v-col>
        </v-row>
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
  data() {
    return {
      drawer: false,
    };
  },

  methods: {
    doLogout() {
      this.$store.dispatch('auth/doLogout');
    },
  },
};
</script>

<style></style>
