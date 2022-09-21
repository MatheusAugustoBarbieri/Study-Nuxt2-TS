<template>
  <div
    v-if="prod"
    class="banner-product"
    :style="`border-color: ${bordercolor}`"
  >
    <div v-if="featured" class="banner-product__featured">
      <p>{{ $t('banner[1]') }}</p>
      <div class="banner-product__featured-custom"></div>
    </div>
    <img
      v-if="prod.sprites && prod.sprites.front_default"
      class="banner-product__img"
      :src="prod.sprites.front_default"
      :alt="prod.name"
    />
    <div class="banner-product__name">{{ prod.name }}</div>
    <div class="banner-product__type-box">
      <div
        v-for="(item, index) in prod.types"
        :key="index"
        class="banner-product__type"
        :style="`background-color: ${bgType(item.type.name)}`"
      >
        {{ item.type.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import colorCard from '@/mixins/colorCard'
export default Vue.extend({
  name: 'ProductCard',
  mixins: [colorCard],
  props: {
    prod: {
      type: Object as PropType<object>,
      required: true,
    },
    featured: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    bordercolor: {
      type: String as PropType<string>,
      default: 'white',
    },
  },

  methods: {
    bgType(type: string): string {
      return type === 'grass'
        ? '#4DB85F'
        : type === 'poison'
        ? '#AA4FC7'
        : type === 'fire'
        ? '#FF8039'
        : type === 'flying'
        ? '#5eb0bc'
        : type === 'water'
        ? '#2E8CD5'
        : 'purple'
    },
  },
})
</script>

<style lang="scss" scoped>
.banner-product {
  min-width: 160px;
  height: auto;
  border-radius: 34px;
  border: solid 4px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.8s ease-in-out;
  &:hover {
    transition: all 0.8s ease-in-out;
    transform: scale(1.02) rotateY(360deg);
  }
  &__img {
    width: 120px;
    height: auto;
  }
  &__name {
    color: white;
    font-size: 22px;
    font-weight: bold;
  }
  &__featured {
    position: absolute;
    width: 106%;
    height: 40px;
    top: -50px;
    background: black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    p {
      z-index: 3;
    }
  }
  &__featured-custom {
    width: 20px;
    height: 20px;
    background: black;
    position: absolute;
    left: auto;
    right: auto;
    bottom: -10px;
    transform: rotate(45deg);
    z-index: 2;
  }
  &__type-box {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
  }
  &__type {
    border-radius: 5px;
    width: 40px;
    height: 20px;
    font-size: 11px;
    font-weight: bold;
    background: transparent;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
