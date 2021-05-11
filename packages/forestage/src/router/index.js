import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DrivingLicense from '@/views/DrivingLicense.vue';
import PersonalCenter from '@/views/PersonalCenter.vue';

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
  {
    path: '/personal-center',
    name: 'PersonalCenter',
    component: PersonalCenter,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: './',
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || '';
  if (to.name !== 'Home' && !token) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
