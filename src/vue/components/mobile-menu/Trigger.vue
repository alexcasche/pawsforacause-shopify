<template>
  <button class="v-trigger" @click="$emit('toggleMenu')">
    <span class="v-trigger__icon"></span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
@import 'settings/index.css';
@import 'tools/index.css';

.v-trigger {
  @mixin button;
  @mixin flex row, center, center;
  @mixin transition-opacity;
  height: 38px;
  width: 38px;
  padding: 0;
}
.v-trigger__icon {
  @mixin icon-hamburger;
}
</style>

