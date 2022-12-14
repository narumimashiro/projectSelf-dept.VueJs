import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { ReduxState } from './types'

export const getters: GetterTree<ReduxState, RootState> = {
  getModalOpen: (state) => {
    return state.isOpenModal
  },
  getModalInfo: (state) => {
    return state.modalInfo
  }
}