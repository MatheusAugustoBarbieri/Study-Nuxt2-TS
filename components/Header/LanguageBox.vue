<template>
  <div class="language-box">
    <nuxt-link
      :to="switchLocalePath('pt')"
      class="language-box__bandeira-BR"
      :class="{ 'language-box__bandeira-active': $i18n.locale === 'pt' }"
    />
    <nuxt-link
      :to="switchLocalePath('en')"
      class="language-box__bandeira-EUA"
      :class="{ 'language-box__bandeira-active': $i18n.locale === 'en' }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LanguageBox',
})
</script>

<style lang="scss" scoped>
.language-box {
  display: flex;
  align-items: center;
  justify-content: center;
  &__bandeira-BR {
    background: url('@/assets/img/icons/icon-bandeira-BR.png') no-repeat;
    background-size: cover;
    width: 30px;
    height: 26px;
    margin-right: 10px;
    opacity: 0.6;
  }

  &__bandeira-EUA {
    background: url('@/assets/img/icons/icon-bandeira-EUA.png') no-repeat;
    background-size: cover;
    width: 30px;
    height: 26px;
    opacity: 0.6;
  }
  &__bandeira-active {
    opacity: 1;
  }
}
</style>
