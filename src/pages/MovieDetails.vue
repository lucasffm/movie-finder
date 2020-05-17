<template>
  <v-container :fill-height="isLoading" align-start>
    <v-btn icon color="grey" to="/movies">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row v-if="movie">
      <v-col cols="12" d-flex direction="row" align="start" justify="start">
        <v-row>
          <v-col cols="3">
            <v-img
              class="white--text align-end mr-4"
              max-width="100%"
              :src="image"
            />
          </v-col>
          <v-col cols="9" d-flex direction="column">
            <h1>{{ movie.title }} ({{ releaseDate }})</h1>
            <p>Gêneros: {{ genres }}</p>
            <p>{{ movie.overview }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row fill-height v-if="isLoading">
      <v-col cols="12" d-flex align="center" justify="center">
        <v-progress-circular
          :size="100"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { getYear } from 'date-fns';

export default {
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch('searchMovieById', id);
  },
  beforeDestroy() {
    this.$store.commit('CLEAR_MOVIE');
  },
  computed: {
    image() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    },
    releaseDate() {
      return getYear(new Date(this.movie.release_date));
    },
    genres() {
      return this.movie.genres.map((genre) => genre.name).join(', ');
    },
    ...mapState(['movie', 'isLoading']),
  },
};
</script>

<style></style>
