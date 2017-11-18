<template>
  <v-card color="white" class="black--text pa-2">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs8>
          <div>
            <div class="headline">{{ event.name }}</div>
            <div class="left">
              <span class="date">{{ event.startDate | dateToString }}</span>
              <span class="date-text">Start</span>
            </div>
            <div class="right">
              <span class="date">{{ event.endDate | dateToString }}</span>
              <span class="date-text">End</span>
            </div><br /><br />
            <div class="description">{{ event.description }}</div>
          </div>
        </v-flex>
        <v-flex xs4>
          <v-card-media
            :src="event.imageUrl"
            height="125px"
            contain
          ></v-card-media>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-btn flat color="deep-orange lighten-2" @click="routeTo">View</v-btn>
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
    filters: {
      dateToString(dateISO) {
        const date = new Date(dateISO);
        return `${date.getDate()}-${date.getMonth()}1-${date.getFullYear()}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  span {
    display: block;
  }

  .date {
    font-weight: 600;
    font-size: 10pt;
  }

  .date-text {
    font-size: 8pt;
  }

  .left {
    float: left;
    text-align: left;
  }

  .right {
    float: right;
    text-align: right;
  }

  .description {
    width: 100%
  }

</style>
