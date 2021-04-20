import Vue from 'vue';
import Vuex from 'vuex';
import Axios from '../utils/axios.config.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    name:'Hi'
  },
  mutations: {
    changeUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
  },
  actions: {
    getUserInfo({ commit }) {
      Axios.get('/t-user/my/').then((res) => {
        if (res.data?.code === 0) {
          commit('changeUserInfo', res.data?.data);
        }
      });
    },
  },
  modules: {},
});
