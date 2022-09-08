export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
}

export const actions = {
  async setProducts({ commit }) {
    try {
      const {
        data: { results },
      } = await this.$axios('/pokemon')

      const allURL = results.map(x => x.url)

      const reqAll = async url => {
        const { data } = await this.$axios(url)
        return data
      }

      const pokemons = await Promise.all(
        await allURL.map(async url => await reqAll(url)),
      )

      commit('setProducts', pokemons)
    } catch (error) {
      return error
    }
  },
}

export const getters = {
  getProducts(state) {
    return state.products
  },
}
