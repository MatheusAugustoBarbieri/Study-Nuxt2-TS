<template>
  <div class="banner">
    <div class="container">
      <div class="banner__box">
        <h1 class="banner__title">Garanta agora seu novo pokémon!</h1>
        <ProductCard :prod="prodBanner" :featured="true" />
        <button class="banner__button" @click="SET_ITEM_CART(prodBanner)">
          Compre agora
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { EnumActionsCart } from '~/store/cart/cart.type'
export default Vue.extend({
  name: 'BannerMainComponent',
  computed: {
    ...mapGetters({
      prodBanner: 'productBanner/getProdBanner',
    }),
  },
  methods: {
    ...mapActions({
      SET_ITEM_CART: `cart/${EnumActionsCart.SET_ITEM_CART}`,
    }),
  },
})
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;

  background-color: #fdd71c;

  padding: 25px 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__box {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    font-size: 30px;
    font-weight: bold;
    color: white;

    text-align: center;
    margin-bottom: 80px;
  }
  &__button {
    width: 250px;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: #f78600;
    box-shadow: 4px 5px #c26c03;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
}
@media (min-width: 768px) {
  .banner {
    background: url('@/assets/img/banners/pokemon-banner.jpg') no-repeat;
    background-size: contain;
    background-position: 70% 100%;
    background-color: #fdd71c;

    padding: 40px 0;
    .container {
      align-items: flex-start;
    }
    &__box {
      width: 350px;
    }
    &__title {
      font-size: 38px;
    }
  }
}
</style>
