<template>
  <div class="layout">
    <HeaderMain />
    <Nuxt />
    <Footer />
    <Overlay />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LayoutDefault',
})
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
