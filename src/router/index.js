import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import Gallery from '@/components/Gallery';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
  ],
});
