<template>
  <v-app id="inspire">
    <component :is="layout">
      <router-view :layout.sync="layout"></router-view>
    </component>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      layout: `div`,
    };
  },
};
</script>
<style lang="css" scoped>
a {
  text-decoration: none;
  color: white !important;
}
</style>
