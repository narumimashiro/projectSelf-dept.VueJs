import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { RootState } from '../types'
import { ReduxState } from './types'

export const state: ReduxState = {
  isOpenModal: false,
  modalInfo: {message: '', width: 390, height: 260},
}

const namespaced = true

export const Redux: Module<ReduxState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}