import {
  StateCart,
  MutationsCart,
  EnumMutationsCart,
  EnumActionsCart,
  ActionsCart,
} from './cart.type'

export const state = (): StateCart => ({
  cart_product: [],
})

export const mutations: MutationsCart = {
  [EnumMutationsCart.SET_ITEM_CART](state, product) {
    state.cart_product = product
  },
}

export const actions: ActionsCart = {
  [EnumActionsCart.SET_ITEM_CART]({ commit }, item) {
    try {
      const obj = JSON.parse(localStorage.getItem('itens') as string)

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

      commit(EnumMutationsCart.SET_ITEM_CART, x)
      if (item) {
        localStorage.setItem('itens', JSON.stringify(x))
        this.$router.push({ path: '/carrinho' })
      }
    } catch (error) {
      return error
    }
  },

  [EnumActionsCart.REMOVE_ITEM_CART]({ commit }, item) {
    try {
      const obj = JSON.parse(localStorage.getItem('itens') as string)
      const positionItem = obj.findIndex((a: { id: any }) => a.id === item.id)

      if (obj && obj.length > 0) {
        obj.splice(positionItem, 1)
      }
      commit(EnumMutationsCart.SET_ITEM_CART, obj)
      localStorage.setItem('itens', JSON.stringify(obj))
    } catch (error) {
      return error
    }
  },
  [EnumActionsCart.CLEAR_ALL]({ commit }) {
    commit(EnumMutationsCart.SET_ITEM_CART, {})
    localStorage.removeItem('itens')
    window.alert('Carrinho limpo.')
  },
}
