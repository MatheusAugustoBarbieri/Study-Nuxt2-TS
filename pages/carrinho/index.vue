<template>
  <GroupCart />
</template>

<script>
import attCart from '~/mixins/attCart.js'
export default {
  name: 'CarrinhoPage',
  mixins: [attCart],
  async asyncData({ store }) {
    try {
      await store.dispatch('products/setProducts')
    } catch (error) {
      return error
    }
  },
}
</script>
