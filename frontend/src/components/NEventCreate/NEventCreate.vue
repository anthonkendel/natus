<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8>
      <v-subheader v-text="'Create event'"/>
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
                <n-date-picker :label="'End date'"  v-model="event.endDate"/>
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
          <v-spacer></v-spacer>
          <v-btn flat color="deep-orange lighten-2" @click="createEvent(event)">
            Create
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
  import NDatePicker from '@/components/NDatePicker/NDatePicker';
  import NSnackbar from '@/components/NSnackbar/NSnackbar';
  import Event from '@/shared/models/Event';

  export default {
    name: 'NEventCreate',
    data() {
      return {
        event: new Event(),
        snackbar: false,
      };
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
      createEvent(event) {
        if (this.isEventValid(event)) {
          this.$store.commit('createEvent', event);
          this.$router.push({ name: 'n-event-list' });
        } else {
          this.snackbar = true;
        }
      },
    },
    components: {
      NSnackbar,
      NDatePicker },
  };
</script>

<style lang="scss" scoped>
</style>
