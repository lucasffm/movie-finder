<template>
  <v-card
    class="mx-auto my-2"
    max-width="300"
    d-flex
    direction="column"
    align-center
    justify-end
  >
    <v-img class="white--text align-end" height="200px" :src="image">
      <v-card-title>{{ movie.original_title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Por Christian Bale</v-card-subtitle>

    <v-card-text class="text--primary" v-if="movie.overview">
      {{ movie.overview | truncate(100) }}
    </v-card-text>
    <v-card-actions d-flex align-end>
      <v-btn color="orange" text :to="`movies/${movie.id}`">
        Mais Informações
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['movie'],
  computed: {
    image() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    },
  },
};
</script>

<style></style>
