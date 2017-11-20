<template>
  <v-app dark id="app">
    <n-navigation></n-navigation>
    <n-navigation-toolbar></n-navigation-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NNavigation from '@/components/NNavigation/NNavigation';
  import NNavigationToolbar from '@/components/NNavigation/NNavigationToolbar';

  export default {
    name: 'app',
    components: {
      NNavigationToolbar,
      NNavigation,
    },
  };
</script>

<style>
</style>
