<template>
  <v-row class="fill-height" align="center" justify="center">
    <h1>Welcome to Movie Finder App</h1>
  </v-row>
</template>

<script>
import DashboardLayout from '../layouts/DashboardLayout.vue';

export default {
  created() {
    this.$emit('update:layout', DashboardLayout);
  },
};
</script>

<style></style>
