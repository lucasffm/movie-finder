<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Bem vindo ao Movie Finder</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="doLogin">
            <v-text-field
              label="E-mail"
              name="email"
              prepend-icon="mail"
              type="email"
              v-model="email"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="doLogin" type="submit">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AuthLayout from '../../layouts/AuthLayout.vue';

export default {
  created() {
    this.$emit('update:layout', AuthLayout);
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    doLogin() {
      this.$store.dispatch('auth/doLogin', this.email);
    },
  },
};
</script>

<style></style>
