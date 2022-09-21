<template>
  <div class="header-main">
    <div class="container header-main__box">
      <nuxt-link :to="localePath('/')" class="header-main__logo" />
      <div class="header-main__box-two">
        <LanguageBox />
        <Cart />
        <Menu />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderMainComponent',
})
</script>

<style lang="scss" scoped>
.header-main {
  padding: 15px 0;
  border-bottom: 1px solid rgb(199, 198, 198);
  position: relative;
  z-index: 21;
  background: white;
  &__logo {
    background: url('@/assets/img/logos/pokemon-logo.png') no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 1s ease-in-out;
    &:hover {
      transition: all 1s ease-in-out;
      transform: rotate(1080deg);
    }
  }
  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__box-two {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
  }
}
@media (min-width: 1024px) {
  .header-main {
    &__logo {
      width: 60px;
      height: 60px;
    }
    &__box-two {
      width: 80%;
      flex-direction: row-reverse;
    }
  }
}
</style>
