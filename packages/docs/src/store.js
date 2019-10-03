import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'zh-CN'
  },
  mutations: {
    'CHANGE_LANG' (state, lang) {
      localStorage.setItem('locale', lang)
      state.locale = lang
    }
  },
  actions: {
    changeLang ({ commit }, lang) {
      commit('CHANGE_LANG', lang)
    }
  }
})
