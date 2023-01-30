export type ModalInfo = {
  message: string
  width: number,
  height: number,
}

export interface ReduxState {
  isOpenModal: boolean,
  modalInfo: ModalInfo,
}