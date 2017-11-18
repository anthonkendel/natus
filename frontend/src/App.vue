<template>
  <v-app dark id="app">
    <n-navigation></n-navigation>
    <v-content>
      <v-container fluid><router-view/></v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NNavigation from './components/NNavigation/NNavigation';

  export default {
    name: 'app',
    components: {
      NNavigation,
    },
  };
</script>

<style>
</style>
