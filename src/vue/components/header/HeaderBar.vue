<template>
  <div class="c-headerBar">
    <div class="c-headerBar__inner">
      <i class="c-headerBar__icon fas fa-heart"></i>
      100% profits to shelters
      <i class="c-headerBar__icon fas fa-heart"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import 'settings/index';
@import 'tools/index';

.c-headerBar {
  position: fixed;
  @mixin flex row, center, center;
  width: 100%;
  z-index: 1;
  background-color: $color-blue;
}

.c-headerBar__inner {
  @mixin container-large;
  height: 100%;
  overflow-y: visible;
  color: white;
  font-family: $font-raleway;
  font-size: 13px;
  line-height: 36px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}

.c-headerBar__icon {
  font-size: 11px;
  margin: 0 4px;
}
</style>

