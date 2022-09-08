<template>
  <div v-if="menu_header_open" class="overlay" />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'OverlayComponent',
  computed: {
    ...mapState({
      menu_header_open: (state: any) => state.modals.menu_header_open,
    }),
  },
})
</script>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.87);
  z-index: 20;
}
</style>
