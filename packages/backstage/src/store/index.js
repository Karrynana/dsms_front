import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from '../../../common/api/axios.config';
import dao from '../../../common/api/dao';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    messageList: [],
  },
  mutations: {
    changeUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    },
    changeMessageList(state, newMessageList) {
      state.messageList = newMessageList;
    },
  },
  actions: {
    async getUserInfo({ commit }) {
      const userInfo = await dao.getUserInfo();
      userInfo && commit('changeUserInfo', userInfo);
    },
    async getMessageList({ commit }) {
      const messageList = await dao.getMessage();
      messageList && commit('changeMessageList', messageList);
    },
  },
  modules: {},
});
