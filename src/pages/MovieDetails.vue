<template>
  <v-container :fill-height="isLoading" align-start>
    <v-btn icon color="grey" to="/movies">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row v-if="movie">
      <v-col cols="12" d-flex direction="row" align="start" justify="start">
        <v-row>
          <v-col cols="3" v-if="image">
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
import releaseDate from '../shared/mixins/releaseDate';
import DashboardLayout from '../layouts/DashboardLayout.vue';

export default {
  mixins: [releaseDate],

  created() {
    this.$emit('update:layout', DashboardLayout);
    const { id } = this.$route.params;
    this.$store.dispatch('movies/searchMovieById', id);
  },
  beforeDestroy() {
    this.$store.commit('CLEAR_MOVIE');
  },
  computed: {
    image() {
      if (this.movie.poster_path)
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      else return null;
    },
    genres() {
      if (this.movie.genres)
        return this.movie.genres.map((genre) => genre.name).join(', ');
      else return '';
    },
    ...mapState(['movie', 'isLoading']),
  },
};
</script>

<style></style>
