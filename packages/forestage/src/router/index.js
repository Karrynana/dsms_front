import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DrivingLicense from '@/views/DrivingLicense.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/driving-license',
    name: 'DrivingLicense',
    component: DrivingLicense,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: './',
  routes,
});

router.beforeEach((to, from, next) => {
  // TODO: 登录态
  // if (to.name !== 'Home') {
  //   next({ name: 'Home' });
  // } else {
  //   next();
  // }
  next();
});

export default router;
