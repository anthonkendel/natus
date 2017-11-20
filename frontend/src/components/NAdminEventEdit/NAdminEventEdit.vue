<template>
  <v-layout v-if="event">
    <v-flex xs12 sm8 offset-sm2>
      <v-subheader v-text="'Edit event'"/>
      <v-card color="white" class="pa-2">
        <v-container fluid>
          <v-form>
            <v-layout row>
              <v-text-field
                label="Event name"
                v-model="event.name"
                color="deep-orange lighten-2"
                light
                required
              />
            </v-layout>
            <v-layout row>
              <v-text-field
                label="Description"
                v-model="event.description"
                color="deep-orange lighten-2"
                multi-line
                light
                required
              />
            </v-layout>
            <v-layout row>
              <v-text-field
                label="Image"
                v-model="event.imageUrl"
                color="deep-orange lighten-2"
                light
              />
            </v-layout>
            <v-layout row>
              <v-flex xs6>
                <n-date-picker :label="'Start date'" v-model="event.startDate"/>
              </v-flex>
              <v-flex xs6>
                <n-date-picker :label="'End date'" v-model="event.endDate"/>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-text-field
                label="Category"
                v-model="event.category"
                color="deep-orange lighten-2"
                light
                required
              />
            </v-layout>
            <v-layout row>
              <v-text-field
                label="Location"
                v-model="event.location"
                color="deep-orange lighten-2"
                light
                required
              />
            </v-layout>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer/>
          <v-btn flat color="deep-orange lighten-2" @click="updateEvent(event)">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <n-snackbar
      :visible="snackbar"
      :message="'Invalid event'"
      @close="snackbar = false"
    ></n-snackbar>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Event from '@/shared/models/Event';
  import NSnackbar from '@/components/NSnackbar/NSnackbar';

  export default {
    name: 'NEventList',
    props: {
      id: String,
      adminKey: String,
    },
    data() {
      return {
        snackbar: false,
        event: new Event(),
      };
    },
    components: {
      NSnackbar,
    },
    methods: {
      isEventValid(e) {
        return !!e.name &&
          !!e.description &&
          !!e.imageUrl &&
          !!e.startDate &&
          !!e.endDate &&
          !!e.category &&
          !!e.location;
      },
      updateEvent(event) {
        if (this.isEventValid(event)) {
          this.$store.commit('updateEvent', event);
          this.$router.push({ name: 'n-event-list' });
        } else {
          this.snackbar = true;
        }
      },
    },
    computed: {
      ...mapGetters([
        'getEvent',
        'validateAdmin',
      ]),
    },
    mounted() {
      if (this.validateAdmin(this.id, this.adminKey)) {
        this.event = this.getEvent(this.id);
      }
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
