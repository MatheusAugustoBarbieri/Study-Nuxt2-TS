import { mapActions } from 'vuex'
import { EnumActionsCart } from '~/store/cart/cart.type'
export default {
  mounted() {
    this.SET_ITEM_CART()
  },
  methods: {
    ...mapActions({
      SET_ITEM_CART: `cart/${EnumActionsCart.SET_ITEM_CART}`,
    }),
  },
}
