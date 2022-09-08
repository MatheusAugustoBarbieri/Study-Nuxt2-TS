<template>
  <button class="form-button">Enviar</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FormButton',
})
</script>

<style lang="scss" scoped>
.form-button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #f78600;
  box-shadow: 4px 5px #c26c03;

  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.02);
  }
}
@media (min-width: 768px) {
  .form-button {
    width: 250px;
  }
}
@media (min-width: 1024px) {
  .form-button {
    cursor: pointer;
  }
}
</style>
