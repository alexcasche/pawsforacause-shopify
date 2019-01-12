<template>
  <button class="c-trigger" @click="$emit('toggleMenu')">
    <span class="c-trigger__icon"></span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
@import 'settings/index.css';
@import 'tools/index.css';

.c-trigger {
  @mixin button;
  @mixin flex row, center, center;
  @mixin transition-opacity;
  height: 38px;
  width: 38px;
  padding: 0;
}
.c-trigger__icon {
  @mixin icon-hamburger;
}
</style>

