<template>
  <div class="itens-null">
    <div class="itens-null__text">{{ $t('itensNull[0]') }}</div>
    <a href="/" class="itens-null__button">{{ $t('itensNull[1]') }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ItensNull',
})
</script>

<style lang="scss" scoped>
.itens-null {
  width: 100%;
  border: 3px solid black;
  border-radius: 5px;
  padding: 150px 10px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__text {
    font-size: 50px;
    font-weight: 600;
    color: #fdd71c;
    text-align: center;
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
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
}
</style>
