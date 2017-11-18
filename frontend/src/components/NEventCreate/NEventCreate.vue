<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
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
  </v-layout>
</template>

<script>
  import { mapMutations } from 'vuex';
  import NDatePicker from '@/components/NDatePicker/NDatePicker';
  import Event from '@/shared/models/Event';

  export default {
    name: 'NEventCreate',
    data() {
      return {
        isEventValid: false,
        event: new Event(),
      };
    },
    methods: {
      ...mapMutations([
        'createEvent',
      ]),
    },
    components: { NDatePicker },
  };
</script>

<style lang="scss" scoped>
</style>
