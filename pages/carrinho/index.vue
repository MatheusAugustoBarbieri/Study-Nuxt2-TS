<template>
  <GroupCart />
</template>

<script>
import attCart from '~/mixins/attCart'
import { EnumActionsProducts } from '~/store/products/products.type'
export default {
  name: 'CarrinhoPage',
  mixins: [attCart],
  async asyncData({ store }) {
    try {
      await store.dispatch(`products/${EnumActionsProducts.SET_PRODUCTS}`)
    } catch (error) {
      return error
    }
  },
}
</script>
