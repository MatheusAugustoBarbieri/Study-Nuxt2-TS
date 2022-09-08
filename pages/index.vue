<template>
  <div>
    <BannerMain />
    <Carousel />
    <FormMain />
  </div>
</template>

<script>
import attCart from '~/mixins/attCart.js'
export default {
  name: 'IndexPage',
  mixins: [attCart],
  async asyncData({ store }) {
    try {
      await store.dispatch('productBanner/setProdBanner')
      await store.dispatch('products/setProducts')
    } catch (error) {
      return error
    }
  },
}
</script>
