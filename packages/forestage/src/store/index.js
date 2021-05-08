// export default包含的内容抛出给Vue实例.此时引入Vue即可使用App.vue中的抛出的对象userInfo
import Vue from 'vue'
import Vuex from 'vuex'
// vuex 不在页面的生命周期中，需要引入axios
import axios from '@/utils/axios.config.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // State存储所有的公用数据，组件使用数据时，调动State
  state: {
    userInfo: {}
  },
  // Mutations中放置的是一个个对State同步的修改,也可以调用Commit方法直接Mutations修改数据。
  mutations: {
    changeUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  },
  // ctions中放置异步操作和很复杂的批量的同步操作，组件通过调用Dispatch方法来操作Actions，Actions通过调用Commit方法来操作Mutations；
  actions: {
    getUserInfo({ commit }) {
      // TODO
      axios.get('/t-user/my').then(res => {
        if (res.data.code === 0) {
          console.log(res);
          this.userInfo = res.data.data;
          commit('changeUserInfo', res.data?.data)
        }
      })
    }
  },
  modules: {
  }
})
