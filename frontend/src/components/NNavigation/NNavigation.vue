<template>
  <v-navigation-drawer
    app
    :dark="true"
    fixed
    class="teal lighten-1"
    :mini-variant="miniVariant"
    value="true">

    <v-toolbar flat class="teal lighten-1">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Natus
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile v-for="path in paths" :key="path.title" @click="routeTo(path.name)">
        <v-list-tile-action>
          <v-icon>{{ path.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
              {{ path.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-btn
      small
      block
      flat
      v-show="!miniVariant"
      @click="toggleMiniVariant">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-btn
      small
      block
      flat
      v-show="miniVariant"
      @click="toggleMiniVariant">
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NNavigation',
    data() {
      return {
        miniVariant: false,
        paths: [
          { title: 'Events', name: 'n-event-list', icon: 'list' },
          { title: 'Create', name: 'n-event-create', icon: 'add' },
        ],
      };
    },
    methods: {
      routeTo(name) {
        this.$router.push({name});
      },
      toggleMiniVariant() {
        this.miniVariant = !this.miniVariant;
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
