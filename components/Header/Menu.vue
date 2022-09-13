<template>
  <div class="menu">
    <div
      v-if="device_width <= 768"
      class="menu__hamburguer"
      :class="{ 'menu__hamburguer--active': menu_header_open }"
      @click="openHeaderMenu()"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="animation-menu">
      <div v-if="menu_header_open || device_width > 768" class="menu__links">
        <div class="menu__link-container">
          <NuxtLink class="menu__link" to="/">Home</NuxtLink>
          <NuxtLink class="menu__link" to="/about">Sobre</NuxtLink>
          <div class="menu__link" @click="navigate()">Fale conosco</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { Enumutations } from '@/store/modals-type'
import device from '@/mixins/device'
export default Vue.extend({
  name: 'MenuHeaderComponent',
  mixins: [device],
  data() {
    return {
      menu_open: false as boolean,
    }
  },
  computed: {
    ...mapState({
      menu_header_open: (state: any) => state.modals.menu_header_open,
    }),
  },
  methods: {
    ...mapMutations({
      openHeaderMenu: `modals/${Enumutations.OPEN_HEADER_MENU}`,
    }),
    navigate(): void {
      this.$route.path === '/'
        ? this.scrollTo('contact')
        : window.location.replace('/#contact')
    },
    scrollTo(elementId: string): void {
      const scrollTip = document.querySelector(`#${elementId}`) as HTMLElement
      scroll({
        top: scrollTip.offsetTop,
        behavior: 'smooth',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.menu {
  z-index: 10;
  &__hamburguer {
    display: flex;
    flex-direction: column;
    min-width: 25px;
    position: relative;
    z-index: 6;
    span {
      background-color: #000000;
      height: 2px;
      margin: 2px 0;
      transition: all 0.2s ease-in;
      &:nth-child(1) {
        width: 15px;
      }
      &:nth-child(2) {
        width: 25px;
      }
      &:nth-child(3) {
        width: 10px;
      }
    }
  }
  &__hamburguer--active {
    span {
      transition: all 0.2s ease-in;
      &:nth-child(1) {
        width: 25px;
        transform: rotate(-45deg) translate(-2px, 2px);
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        width: 25px;
        transform: rotate(45deg) translate(-2px, -2px);
      }
    }
  }
  &__links {
    height: 140px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 71px;
    background: white;
    border-bottom: 1px solid rgb(199, 198, 198);
    padding: 15px 0;
  }
  &__link {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  &__link-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 0 20px;
  }
  .animation-menu-enter-active,
  .animation-menu-leave-active {
    transition: all 0.2s ease-in;
  }
  .animation-menu-enter,
  .animation-menu-leave-to {
    transform: translateY(-7px);
  }
}
@media (min-width: 1024px) {
  .menu {
    &__hamburguer {
      display: none;
    }
    &__links {
      position: static;
      flex-direction: row;
      border: none;
      height: auto;
      padding: 0;
    }
    &__link {
      font-size: 18px;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        transition: all 0.1s ease-in-out;
        transform: scale(1.02);
      }
    }
    &__link-container {
      flex-direction: row;
      width: 400px;
    }
    .animation-menu-enter,
    .animation-menu-leave-to {
      transform: none;
    }
  }
}
</style>
