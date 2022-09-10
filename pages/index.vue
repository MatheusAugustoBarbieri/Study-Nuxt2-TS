<template>
  <div>
    <BannerMain />
    <Carousel />
    <FormMain />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import attCart from '~/mixins/attCart'
export default Vue.extend({
  name: 'IndexPage',
  mixins: [attCart],
  async asyncData({ store }: Context) {
    try {
      await store.dispatch('productBanner/setProdBanner')
      await store.dispatch('products/setProducts')
    } catch (error) {
      return error
    }
  },
})
</script>
