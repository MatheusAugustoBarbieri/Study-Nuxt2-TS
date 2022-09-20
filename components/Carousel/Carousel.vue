<template>
  <div v-if="products" class="carousel">
    <div class="container">
      <div class="carousel__title">{{ $t('carousel[0]') }}</div>
      <client-only>
        <swiper v-if="products" class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in products" :key="index">
            <ProductLayout :prod="item" />
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import swiperConfig from '~/mixins/swiperConfig'
export default Vue.extend({
  name: 'CarouselComponent',
  mixins: [swiperConfig],
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
    }),
  },
})
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;

  padding: 50px 0 0 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    font-size: 29px;
    font-weight: bold;
    color: black;
    text-align: center;
  }
}
@media (min-width: 768px) {
  .carousel {
    &__title {
      font-size: 36px;
    }
  }
}
</style>
