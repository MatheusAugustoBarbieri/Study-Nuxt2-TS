import {
  StateProducts,
  EnumMutationsProducts,
  MutationsProducts,
  EnumActionsProducts,
  ActionsProducts,
  GettersProducts,
} from './products.type'

export const state = (): StateProducts => ({
  products: [],
})

export const mutations: MutationsProducts = {
  [EnumMutationsProducts.SET_PRODUCTS](state, payload) {
    state.products = payload
  },
}

export const actions: ActionsProducts = {
  async [EnumActionsProducts.SET_PRODUCTS]({ commit }) {
    try {
      const {
        data: { results },
      } = await this.$axios('/pokemon')

      const allURL = results.map((x: { url: string }) => x.url)

      const reqAll = async (url: string) => {
        const { data } = await this.$axios(url)
        return data
      }

      const pokemons = await Promise.all(
        await allURL.map(async (url: string) => await reqAll(url)),
      )

      commit(EnumMutationsProducts.SET_PRODUCTS, pokemons)
    } catch (error) {
      return error
    }
  },
}

export const getters: GettersProducts = {
  getProducts(state) {
    return state.products
  },
}
