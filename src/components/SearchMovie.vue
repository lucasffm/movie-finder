<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col lg="6" :md="12" class="text-center">
        <h1>Procure por filmes...</h1>
        <v-text-field
          label="Nome do filme"
          v-model="searchTerm"
          :color="isLoading ? 'primary' : 'grey'"
          :loading="isLoading"
          @keyup.enter="searchMovie"
        >
          <v-icon slot="append" color="grey">search</v-icon>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="!movies && searched" align="center" justify="center">
      <p>Sorry, 0 movies found!</p>
    </v-row>
    <v-row v-if="movies && !isLoading">
      <movie-card
        v-for="(item, index) in movies"
        :key="index"
        :movie="item"
      ></movie-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import MovieCard from './MovieCard';

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      searchTerm: '',
      search: null,
    };
  },
  computed: mapState('movies', {
    movies: (state) => state.movies,
    isLoading: (state) => state.isLoading,
    searched: (state) => state.searched,
  }),
  methods: {
    searchMovie() {
      if (this.isLoading || this.searchTerm.length < 4) return;
      this.$store.dispatch('movies/searchMovie', this.searchTerm);
      this.searchTerm = '';
    },
  },
};
</script>

<style></style>
