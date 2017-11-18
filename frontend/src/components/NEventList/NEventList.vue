<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
      <v-subheader v-text="'Events'"></v-subheader>
      <template v-for="event in events">
        <n-event-list-item
          :event="event"
          class="mb-1"
        ></n-event-list-item>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex';
  import NEventListItem from './NEventListItem';

  export default {
    name: 'NEventList',
    computed: {
      ...mapState([
        'events',
      ]),
    },
    components: { NEventListItem },
  };
</script>

<style lang="scss" scoped>
</style>
