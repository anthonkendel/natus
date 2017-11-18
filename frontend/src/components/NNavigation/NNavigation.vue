<template>
  <v-navigation-drawer
    app
    :dark="true"
    fixed
    class="deep-orange lighten-2"
    :mini-variant="mini"
    v-model="drawer"
    value="true"
    disable-resize-watcher>
    <v-toolbar flat class="deep-orange lighten-2">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Natus</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile
        v-for="path in paths"
        :key="path.title"
        @click="routeTo(path.name)">

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
      routeTo(name) {
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
