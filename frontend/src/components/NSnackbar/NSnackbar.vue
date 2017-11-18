<template>
  <v-snackbar
    :timeout="timeout"
    :bottom="true"
    v-model="snackbar">
    {{ message }}
    <v-btn flat color="deep-orange lighten-2" @click="emitClose()">Close</v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    name: 'NSnackbar',
    props: {
      visible: {
        type: Boolean,
        required: true,
      },
      message: String,
      timeout: {
        type: Number,
        default: 3000,
      },
    },
    computed: {
      snackbar: {
        get() {
          return this.visible;
        },
        set() {
          this.emitClose();
        },
      },
    },
    methods: {
      emitClose() {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
