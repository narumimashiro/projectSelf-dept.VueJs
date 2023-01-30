import { MutationTree } from 'vuex'
import { ReduxState, ModalInfo, } from './types'

export const mutations: MutationTree<ReduxState> = {
  setModalInfo: (state, params: ModalInfo) => {
    state.isOpenModal = true
    state.modalInfo = params
  },
  closeModal: (state) => {
    state.isOpenModal = false
  }
}