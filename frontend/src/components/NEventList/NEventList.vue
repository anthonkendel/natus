<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8>
      <v-subheader v-text="'Events'"/>
      <template v-for="event in events">
        <n-event-list-item
          :event="event"
          class="mb-1"
        />
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
