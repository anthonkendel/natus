<template>
  <v-card color="white" class="black--text pa-2">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs8>
          <div>
            <div class="headline">{{ event.name }}</div>
            <div class="left">
              <span class="date">{{ event.startDate | formatDate }}</span>
              <span class="date-text">Start</span>
            </div>
            <div class="right">
              <span class="date">{{ event.endDate | formatDate }}</span>
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
          />
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-btn flat color="deep-orange lighten-2" @click="routeToNEventView">View</v-btn>
      <v-btn flat color="deep-orange lighten-2" @click="routeToNAdminEventEdit">Admin</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import DateFilters from '@/shared/date/DateFilters';

  export default {
    name: 'NEventList',
    props: { event: Object },
    mixins: [DateFilters],
    methods: {
      routeToNEventView() {
        this.$router.push({ name: 'n-event-view', params: { id: this.event.id } });
      },
      routeToNAdminEventEdit() {
        this.$router.push({ name: 'n-admin-event-edit', params: { id: this.event.id, adminKey: this.event.adminKey } });
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
