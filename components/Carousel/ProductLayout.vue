<template>
  <div v-if="prod" class="product" :style="`background-color: ${bgType(prod)}`">
    <ProductCard :prod="prod" />
    <button
      class="product__button product__button--comprar"
      @click="setItemCart(prod)"
    >
      Comprar
    </button>
    <a href="#contact" class="product__button product__button--falar"
      >Fale Conosco</a
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import colorCard from '@/mixins/colorCard'
export default Vue.extend({
  name: 'ProductslayoutComponent',
  mixins: [colorCard],
  props: {
    prod: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      setItemCart: 'cart/setItemCart',
    }),
  },
})
</script>

<style lang="scss" scoped>
.product {
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 40px 0 50px 0;
  &__button {
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
  &__button--comprar {
    background-color: #f78600;
    box-shadow: 3px 3px #c26c03;
  }
  &__button--falar {
    background-color: #1686f0;
    box-shadow: 3px 3px #004d95;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
}
@media (min-width: 1024px) {
  .product {
    width: 300px;
    padding: 60px 0 50px 0;
  }
}
</style>
