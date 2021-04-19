import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAxios from 'vue-axios'
import Axios from './utils/axios.config.js'
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueAxios,Axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
