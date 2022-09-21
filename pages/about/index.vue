<template>
  <div class="about">
    <div class="container">
      {{ $t('about[0]') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style lang="scss" scoped>
.about {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    line-height: 1.2;
  }
}
</style>
