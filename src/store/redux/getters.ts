import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { ReduxState } from './types'

export const getters: GetterTree<ReduxState, RootState> = {
  getModalInfo: (state) => {
    return state.modalInfo
  }
}