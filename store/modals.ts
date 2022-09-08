export const state = () => ({
  menu_header_open: false as boolean,
})

export const mutations = {
  openHeaderMenu(state: any, payload: boolean) {
    state.menu_header_open =
      payload === undefined ? !state.menu_header_open : payload
  },
}
