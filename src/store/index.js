import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// test
// this.$store.commit('increment', 2)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, n) {
      state.count += n
    }
  },
  actions: {
  },
  modules: {
  }
})
