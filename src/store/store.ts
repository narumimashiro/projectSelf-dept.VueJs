import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { Redux } from './redux/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = ({
  state: {
    version: '1.0'
  },
  modules: {
    Redux
  }
})

export default new Vuex.Store<RootState>(store);