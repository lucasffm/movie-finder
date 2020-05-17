<template>
  <v-navigation-drawer app mini-variant expand-on-hover>
    <v-list>
      <v-list-item
        link
        v-for="(item, index) in items"
        :key="index"
        :to="item.route"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer'],
  data() {
    return {
      items: [
        { label: 'Home', icon: 'mdi-home', route: '/home' },
        { label: 'Movie Finder', icon: 'search', route: '/movies' },
      ],
    };
  },
};
</script>

<style></style>
