<!--suppress CheckEmptyScriptTag -->
<template>
  <v-menu
    lazy
    :close-on-content-click="true"
    v-model="menu"
    transition="scale-transition"
    offset-y
    full-width
    :nudge-right="40"
    max-width="290px"
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      :label="label"
      v-model="date"
      prepend-icon="event"
      color="deep-orange lighten-2"
      light
      required
      readonly
    />

    <v-date-picker
      color="deep-orange lighten-2"
      v-model="date"
      no-title scrollable actions>
    </v-date-picker>
  </v-menu>
</template>

<script>
  export default {
    name: 'NDatePicker',
    props: {
      label: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        menu: false,
        date: '',
      };
    },
    watch: {
      date() {
        this.$emit('input', this.date);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
