import { MutationTree } from 'vuex'
import { ReduxState } from './types'

export const mutations: MutationTree<ReduxState> = {
  setLoading(state, payload: boolean) {
    state.loading = payload
  }
}