<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
      <v-btn flat>Normal</v-btn>
      <v-btn flat dark color="primary">Primary</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
</style>
