import Vue from 'vue';
import ElementUI from 'element-ui';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import common from '../../common/index';
import './styles/theme/index.css';

Vue.config.productionTip = false
Vue.use(VueAxios, common.axios);
Vue.use(ElementUI);
Vue.prototype.$utils = common.utils;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
