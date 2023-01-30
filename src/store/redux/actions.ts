import { ActionTree } from 'vuex'
import { RootState } from '../types'
// import axios from 'axios'
import { ReduxState, ModalInfo, } from './types'

export const actions: ActionTree<ReduxState, RootState> = {
  setModalInfo({ commit }, params: boolean | ModalInfo) {
    if(typeof params === 'boolean') {
      commit('closeModal')
    } else {
      commit('setModalInfo', params)
    }
  }
}