<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="6" class="text-center">
        <h1>Search some movie...</h1>
        <v-text-field
          label="Movie name"
          v-model="searchTerm"
          :color="isLoading ? 'primary' : 'grey'"
          :loading="isLoading"
          @keyup.enter="searchMovie"
        >
          <v-icon slot="append" color="grey">search</v-icon>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row align="center" justify="center"> </v-row>
    <v-row v-if="movies.length && !isLoading">
      <movie-card
        v-for="(item, index) in movies"
        :key="index"
        :movie="item"
      ></movie-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

import MovieCard from "../components/MovieCard";
export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      searchTerm: "",
      search: null,
    };
  },
  computed: mapState(["movies", "isLoading"]),
  methods: {
    searchMovie() {
      if (this.isLoading || this.searchTerm.length < 4) return;
      this.$store.dispatch("searchMovie", this.searchTerm);
      this.searchTerm = "";
    },
  },
};
</script>

<style></style>
