<template>
  <div class="v-menu">
    <div class="v-menu__header">
      <button class="v-menu__close" @click="$emit('toggleMenu')">
        <span class="v-menu__closeIcon"></span>
      </button>
    </div>
    <div class="v-menu__inner">
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

.v-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: $bg-gray-light;
  overflow-y: scroll;
  z-index: $z-index-behind;
}
.v-menu__header {
  padding: 8px 15px;
  background-color: $color-blue-dark;
  box-shadow: $box-shadow-drawer;
}
.v-menu__close {
  @mixin button;
  @mixin flex row, center, center;
  @mixin transition-opacity;
  height: 38px;
  width: 38px;
  padding: 0;
}
.v-menu__closeIcon {
  @mixin icon-close $color-blue;
}
.v-menu__inner {
  padding: 40px 40px 60px;
}
</style>