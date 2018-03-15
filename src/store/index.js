import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    locale: 'en'
  },
  mutations: {
    setLocale(state, str) {
      state.locale = str
    }
  }
})
