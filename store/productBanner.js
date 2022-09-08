export const state = () => ({
  prod_banner: {},
})

export const mutations = {
  setProdBanner(state, payload) {
    state.prod_banner = payload
  },
}

export const actions = {
  async setProdBanner({ commit }) {
    try {
      const { data } = await this.$axios('/pokemon/1')
      commit('setProdBanner', data)
    } catch (error) {
      return error
    }
  },
}

export const getters = {
  getProdBanner(state) {
    return state.prod_banner
  },
}
