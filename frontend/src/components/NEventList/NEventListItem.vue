<template>
  <v-card color="white" class="black--text pa-2">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs8>
          <div>
            <div class="headline">{{event.name}}</div>
            <div>{{event.desc}}</div>
          </div>
        </v-flex>
        <v-flex xs4>
          <v-card-media
            :src="event.imageURL"
            height="125px"
            contain
          ></v-card-media>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-btn flat color="teal" @click="routeTo">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'NEventList',
    props: { event: Object },
    methods: {
      routeTo() {
        this.$router.push({ name: 'n-event-view', params: { id: this.event.id } });
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
