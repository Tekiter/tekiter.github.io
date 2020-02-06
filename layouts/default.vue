<template>
  <v-app>
    <v-app-bar app clipped-left flat color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="isMobile()" />
      <v-btn text large @click="$router.push('/')">
        <v-toolbar-title>Tekiter</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text large to="/blog" dark>
        블로그
      </v-btn>
      <v-btn text href="https://github.com/Tekiter" target="_blank">
        github
      </v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" app clipped></v-navigation-drawer> -->
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style></style>

<script>
export default {
  data: () => ({
    drawer: true
  }),
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  }
};
</script>
