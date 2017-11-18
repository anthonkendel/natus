<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
  import Event from '../../shared/models/Event';

  export default {
    name: 'NEventCreate',
    data() {
      return {
        event: new Event(),
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>
