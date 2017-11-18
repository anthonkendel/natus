<template>
  <v-navigation-drawer
    app
    :dark="true"
    fixed
    class="teal lighten-1"
    :mini-variant="miniVariant"
    value="true">

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
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NNavigation',
    data() {
      return {
        miniVariant: false,
        paths: [
          { title: 'Events', name: 'n-event-list', icon: 'dashboard' },
          { title: 'Create', name: 'n-event-create', icon: 'question_answer' },
        ],
      };
    },
    methods: {
      routeTo(name) {
        this.$router.push({name});
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
