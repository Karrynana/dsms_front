import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import Axios from './utils/axios.config.js'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueAxios,Axios);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
