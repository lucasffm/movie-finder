<template>
  <search-movie></search-movie>
</template>

<script>
import DashboardLayout from '../layouts/DashboardLayout.vue';
import SearchMovie from '../components/SearchMovie.vue';

export default {
  created() {
    this.$emit('update:layout', DashboardLayout);
  },
  components: {
    SearchMovie,
  },
};
</script>

<style></style>
