import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './modules/server_resource/index'
import { getters } from './modules/server_resource/getters'
import { mutations } from './modules/server_resource/mutations'
import { actions } from './modules/server_resource/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})

// import Vue from 'vue'
// import Vuex from 'vuex'

// import server from './modules/server_resource';

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     str: 'ds'
//   },
//   modules: {
//     server
//   }
// });