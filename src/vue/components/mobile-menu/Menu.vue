<template>
  <div class="c-menu">
    <div class="c-menu__header">
      <button class="c-menu__close" @click="$emit('toggleMenu')">
        <span class="c-menu__closeIcon"></span>
      </button>
    </div>
    <div class="c-menu__inner">
      <slot/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('mobileMenu', ['toggleMenu']),
  },
}
</script>


<style scoped>
@import 'settings/index.css';
@import 'tools/index.css';

.c-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: $bg-gray-light;
  overflow-y: scroll;
  z-index: $z-index-behind;
}
.c-menu__header {
  padding: 8px 15px;
  background-color: $color-blue-dark;
  box-shadow: $box-shadow-drawer;
}
.c-menu__close {
  @mixin button;
  @mixin flex row, center, center;
  @mixin transition-opacity;
  height: 38px;
  width: 38px;
  padding: 0;
}
.c-menu__closeIcon {
  @mixin icon-close $color-blue;
}
.c-menu__inner {
  padding: 40px 40px 60px;
}
</style>