import Vue from 'vue';
import VueAxios from 'vue-axios'
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import router from './router'
import store from './store'
import common from '../../common/index';
import '../../common/styles/index.css';
import PageTitle from '@/components/PageTitle'

Vue.config.productionTip = false
Vue.use(VueAxios, common.axios);
Vue.prototype.$utils = common.utils;
Vue.prototype.$dao = common.dao;
Vue.prototype.$globalData = common.globalData;
Vue.component('PageTitle', PageTitle);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
