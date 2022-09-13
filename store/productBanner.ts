import {
  State,
  enumMutations,
  Mutations,
  enumActions,
  Actions,
  Getters,
} from './productBanner-type'

export const state = (): State => ({
  prod_banner: {},
})

export const mutations: Mutations = {
  [enumMutations.SET_PROD_BANNER](state, payload) {
    state.prod_banner = payload
  },
}

export const actions: Actions = {
  $axios(): { data: any } | PromiseLike<{ data: any }> {
    throw new Error('Function not implemented.')
  },

  async [enumActions.SET_PROD_BANNER]({ commit }) {
    try {
      const { data } = await this.$axios('/pokemon/1')
      commit(enumMutations.SET_PROD_BANNER, data)
    } catch (error) {
      return error
    }
  },
}

export const getters: Getters = {
  getProdBanner(state) {
    return state.prod_banner
  },
}
