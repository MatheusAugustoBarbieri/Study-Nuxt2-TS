<template>
  <div class="group-cart">
    <client-only>
      <div class="group-cart__box container">
        <template v-if="cart_product && cart_product.length">
          <CartProducts
            v-for="(item, index) in cart_product"
            :key="index"
            class="group-cart__cart-position"
            :prod="item"
          />
        </template>
        <ItensNull v-else />
      </div>
      <div
        v-if="cart_product && cart_product.length"
        class="group-cart__box-button container"
      >
        <button class="group-cart__button" @click="CLEAR_ALL()">
          Concluir compra
        </button>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { EnumActionsCart } from '~/store/cart/cart.type'
export default Vue.extend({
  name: 'GroupCart',
  computed: {
    ...mapState({
      cart_product: (state: any) => state.cart.cart_product,
    }),
  },
  methods: {
    ...mapActions({
      CLEAR_ALL: `cart/${EnumActionsCart.CLEAR_ALL}`,
    }),
  },
})
</script>

<style lang="scss" scoped>
.group-cart {
  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__cart-position {
    margin: 15px 0;
  }
  &__box-button {
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-bottom: 50px;
    justify-content: center;
  }
  &__button {
    width: 80%;
    height: 50px;
    max-width: 300px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #f78600;
    box-shadow: 3px 3px #c26c03;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
}
@media (min-width: 768px) {
  .group-cart {
    &__box {
      justify-content: space-between;
    }
    &__box-button {
      justify-content: flex-end;
      // margin-bottom: 0;
      margin-top: 80px;
    }
  }
}
</style>
