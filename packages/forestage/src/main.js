import Vue from 'vue';
import VueAxios from 'vue-axios'
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import router from './router'
import store from './store'
import common from '../../common/index';

Vue.config.productionTip = false
Vue.use(VueAxios, common.axios);
Vue.prototype.$utils = common.utils;
Vue.prototype.$dao = common.dao;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
