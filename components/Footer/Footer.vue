<template>
  <div class="footer">
    <div class="container">
      <a href="/" class="footer__logo" />
      <div class="footer__copy">
        © {{ year }} - Lorem Ipsum - Direitos Reservados.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FooterComponent',
  computed: {
    year(): number {
      return new Date().getFullYear()
    },
  },
})
</script>

<style lang="scss" scoped>
.footer {
  background: #fdd71c;
  width: 100%;
  height: 100px;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
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
  &__copy {
    font-size: 11px;
    font-weight: bold;
  }
}
@media (min-width: 768px) {
  .footer {
    .container {
      flex-direction: row;
      justify-content: space-between;
    }
    &__logo {
      width: 40px;
      height: 40px;
    }
    &__copy {
      font-size: 13px;
    }
  }
}
@media (min-width: 1024px) {
  .footer {
    &__logo {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
