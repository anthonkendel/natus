<template>
  <v-layout v-if="event">
    <v-flex xs12 sm8 offset-sm2>
      <v-subheader v-text="'Administrate event'"/>
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
          <v-btn flat color="deep-orange lighten-2" @click="createEvent(event)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';
  import NDatePicker from '@/components/NDatePicker/NDatePicker';

  export default {
    name: 'NAdminEvent',
    props: {
      id: String,
      adminKey: String,
    },
    data() {
      return {
        isEventValid: false,
        event: null,
      };
    },
    methods: {
      ...mapGetters([
        'getEvent',
        'validateAdmin',
      ]),
    },
    components: { NDatePicker },
    mounted() {
      this.event = this.getEvent(this.id);
      console.log(this.event);
    },
  };
</script>

<style lang="scss" scoped>
</style>
