import Vue from 'vue';
import VueRouter from 'vue-router';
import { Message as elMessages } from 'element-ui';
import store from '../store';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import PersonalCenter from '../views/PersonalCenter.vue';
import Student from '../views/personnel/Student.vue';
import Teacher from '../views/personnel/Teacher.vue';
import Coach from '../views/personnel/Coach.vue';
import Message from '../views/Message.vue';
import QRCode from '../views/QRCode.vue';

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
    meta: {
      navMeta: {
        navGroupTitle: '人员管理',
        navTitle: '学情督查员管理',
      },
      role: ['admin'],
    },
  },
  {
    path: '/personnel/coach',
    name: 'Coach',
    component: Coach,
    meta: {
      navMeta: {
        navGroupTitle: '人员管理',
        navTitle: '教练管理',
      },
      role: ['admin'],
    },
  },
  {
    path: '/personnel/student',
    name: 'Student',
    component: Student,
    meta: {
      navMeta: {
        navGroupTitle: '人员管理',
        navTitle: '学员管理',
      },
      role: ['admin', 'teacher'],
    },
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/qrcode',
    name: 'QRCode',
    component: QRCode,
    meta: {
      navMeta: {
        navGroupTitle: '教学工具',
        navTitle: '我的二维码',
      },
      role: ['coach'],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: './',
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || '';
  const role = store.state.userInfo.role;
  if (to.name === 'Login') {
    next();
  } else {
    if (!token) {
      next({ name: 'Login', params: { from: from?.name || '' } });
    } else {
      if (to.meta && to.meta.role) {
        if (to.meta.role.includes(role)) {
          next();
        } else {
          elMessages.error('无权限查看该页面');
          // next(from);
          next();
        }
      } else {
        next();
      }
    }
  }
});

export default router;
