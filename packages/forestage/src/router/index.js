import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Study from '../views/Study.vue'
import Evaluate from '../views/Evaluate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/study',
    name: 'Study',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Study
  },
  {
    path: '/evaluate',
    name: 'Evaluate',
    component: Evaluate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// #全局前置守卫，设置没登陆时点击非首页页面，返回Home首页面
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('token');
  if (to.name !== 'Home' && !isLogin) {
    next({ name: 'Home' });
    alert("未登录，无法访问！")
  }
  // console.log(to);
  // console.log(from);
  else { 
    // 确保 next 函数在任何给定的导航守卫中都被严格调用一次，所以此时要加else
    next(); 
  }
})

export default router
