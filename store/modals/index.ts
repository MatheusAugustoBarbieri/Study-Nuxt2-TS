import { State, Enumutations, Mutations } from './modals-type'

export const state = (): State => ({
  menu_header_open: false,
})

export const mutations: Mutations = {
  [Enumutations.OPEN_HEADER_MENU](state, payload) {
    state.menu_header_open =
      payload === undefined ? !state.menu_header_open : payload
  },
}
