import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // State存储所有的公用数据，组件使用数据时，调动State
  state: {
    
  },
  // Mutations中放置的是一个个对State同步的修改,也可以调用Commit方法直接Mutations修改数据。
  mutations: {
   
  },
  // ctions中放置异步操作和很复杂的批量的同步操作，组件通过调用Dispatch方法来操作Actions，Actions通过调用Commit方法来操作Mutations；
  actions: {
  },
  modules: {
  }
})
