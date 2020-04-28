import Vue from 'vue'
import Vuex from 'vuex'
import utils from '@/public/utils'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token:sessionStorage.getItem("vuex") || "",
    userData:sessionStorage.getItem('userData') || ""
  },
  mutations: {
    set_token(state,token){
      state.token = token
    },
    setUserData(state,userData){
      state.userData = userData
    }
  },
  actions: {
  },
  modules: {
  }
})
 export default store

