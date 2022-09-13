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
import { enumActions } from '@/store/productBanner-type'
export default Vue.extend({
  name: 'IndexPage',
  mixins: [attCart],
  async asyncData({ store }: Context) {
    try {
      await store.dispatch(`productBanner/${enumActions.SET_PROD_BANNER}`)
      await store.dispatch('products/setProducts')
    } catch (error) {
      return error
    }
  },
})
</script>
