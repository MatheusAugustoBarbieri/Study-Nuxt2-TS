export const state = () => ({
  cart_product: [],
})

export const mutations = {
  setItemCart(state, product) {
    state.cart_product = product
  },
}

export const actions = {
  setItemCart({ commit }, item) {
    try {
      const obj = JSON.parse(localStorage.getItem('itens'))

      let x = []

      if (item) {
        x = [item]
      }

      if (obj && obj.length) {
        if (item) {
          x = [item, ...obj]
        } else {
          x = obj
        }
      }

      commit('setItemCart', x)
      if (item) {
        localStorage.setItem('itens', JSON.stringify(x))
        this.$router.push({ path: '/carrinho' })
      }
    } catch (error) {
      return error
    }
  },

  removeItemCart({ commit }, item) {
    try {
      const obj = JSON.parse(localStorage.getItem('itens'))
      const positionItem = obj.findIndex(a => a.id === item.id)

      if (obj && obj.length > 0) {
        obj.splice(positionItem, 1)
      }
      commit('setItemCart', obj)
      localStorage.setItem('itens', JSON.stringify(obj))
    } catch (error) {
      return error
    }
  },
  clearAll({ commit }) {
    commit('setItemCart', {})
    localStorage.removeItem('itens')
    window.alert('Carrinho limpo.')
  },
}
