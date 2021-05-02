import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import PersonalCenter from '../views/PersonalCenter.vue';
import Student from '../views/personnel/Student.vue';
import Teacher from '../views/personnel/Teacher.vue';
import Coach from '../views/personnel/Coach.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/personal-center',
    name: 'PersonalCenter',
    component: PersonalCenter,
  },
  {
    path: '/personnel/teacher',
    name: 'Teacher',
    component: Teacher,
  },
  {
    path: '/personnel/coach',
    name: 'Coach',
    component: Coach,
  },
  {
    path: '/personnel/student',
    name: 'Student',
    component: Student,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: './',
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || '';
  if (to.name === 'Login' || token) {
    next();
  } else {
    next({ name: 'Login', params: { from: from?.name || '' } });
  }
});

export default router;
