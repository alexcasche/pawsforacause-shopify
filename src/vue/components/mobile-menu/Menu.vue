<template>
  <div class="c-menu">
    <div class="c-menu__header">
      <button class="c-menu__close" @click="$emit('toggleMenu')">
        <span class="c-menu__closeIcon"></span>
      </button>
    </div>
    <div class="c-menu__inner">
      <nav class="c-menu__nav">
        <a class="c-menu__navHeading">Our Products</a>
        <a class="c-menu__navLink">New Arrivals</a>
        <a class="c-menu__navLink">Best Sellers</a>
      </nav>
      <nav class="c-menu__nav">
        <a class="c-menu__navHeading">About Us</a>
        <a class="c-menu__navLink">Who We Are</a>
        <a class="c-menu__navLink">How We Give Back</a>
      </nav>
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
.c-menu__nav {
  @mixin flex column, space-between, flex-start;
  font-family: $font-raleway;
  margin-bottom: 30px;
}
.c-menu__navHeading {
  margin-bottom: 20px;
  color: $color-black;
  font-size: 17px;
  font-weight: 600;
}
.c-menu__navLink {
  margin-bottom: 15px;
  color: $color-blue-dark;
  font-size: 15px;
  font-weight: 500;
}
</style>