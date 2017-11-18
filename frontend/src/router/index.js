import Vue from 'vue';
import Router from 'vue-router';
import NEvent from '@/components/NEvent/NEvent';
import NEventCreate from '@/components/NEventCreate/NEventCreate';
import NEventList from '@/components/NEventList/NEventList';
import NEventView from '@/components/NEventView/NEventView';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'n-event-home',
      component: NEventList,
    },
    {
      path: '/events',
      component: NEvent,
      children: [
        {
          path: '',
          name: 'n-event-list',
          component: NEventList,
        },
        {
          path: 'create',
          name: 'n-event-create',
          component: NEventCreate,
        },
        {
          path: ':id',
          name: 'n-event-view',
          component: NEventView,
          props: true,
        },
      ],
    },
  ],
});
