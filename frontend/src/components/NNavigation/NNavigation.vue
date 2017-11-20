<template>
  <v-navigation-drawer
    app
    dark
    fixed
    :mini-variant="mini"
    v-model="drawer"
    value="true"
    class="deep-orange lighten-2">

    <v-list>
      <v-list-tile v-if="!mini">
        <v-list-tile-title class="title"> Natus </v-list-tile-title>
      </v-list-tile>
      <v-list-tile avatar v-if="mini">
        <v-list-tile-avatar class="red lighten-2"> N </v-list-tile-avatar>
      </v-list-tile>
    </v-list>
    <v-list>
      <v-list-tile
        v-for="path in paths"
        :key="path.title"
        @click="routeToNEventView(path.name)">

        <v-list-tile-action>
          <v-icon>{{ path.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
              {{ path.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile class="red lighten-2" @click="toggleMini()">
        <template v-if="!mini">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_left</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Collapse</v-list-tile-title>
        </template>
        <template v-if="mini">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Expand</v-list-tile-title>
        </template>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NNavigation',
    data() {
      return {
        drawer: true,
        mini: true,
        paths: [
          { title: 'Events', name: 'n-event-list', icon: 'list' },
          { title: 'Create', name: 'n-event-create', icon: 'add' },
        ],
      };
    },
    methods: {
      routeToNEventView(name) {
        this.$router.push({ name });
      },
      toggleMini() {
        this.mini = !this.mini;
        this.$nextTick();
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
