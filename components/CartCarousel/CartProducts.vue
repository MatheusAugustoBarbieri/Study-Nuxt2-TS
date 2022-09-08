<script>
import { mapActions } from 'vuex'
import colorCard from '@/mixins/colorCard'
export default {
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
      removeItemCart: 'cart/removeItemCart',
    }),
  },
}
</script>

<template>
  <div v-if="prod" class="product">
    <ProductCard :prod="prod" :bordercolor="bgType(prod)" />
    <div class="product__box">
      <div
        v-if="prod.name"
        class="product__name"
        :style="`color:${bgType(prod)}`"
      >
        {{ prod.name }}
      </div>
      <button class="product__button-remove" @click="removeItemCart(prod)">
        Remover
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 40px 0 40px 0;
  border: 2px solid rgb(124, 124, 124);
  &__box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }
  &__name {
    font-size: 20px;
    font-weight: 600;
  }
  &__button-remove {
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: #eb1505;
    box-shadow: 3px 3px #a70000;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
}
@media (min-width: 768px) {
  .product {
    flex-direction: row;

    width: 100%;
    padding: 20px;
    &__box {
      margin: 0;
    }
    &__name {
      margin-bottom: 25px;
    }
    &__button-remove {
      max-width: 250px;
    }
  }
}
@media (min-width: 1024px) {
  .product {
    width: 48%;
  }
}
</style>
