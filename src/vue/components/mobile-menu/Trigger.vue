<template>
  <button class="c-trigger" @click="setDrawer('open')">
    <span class="c-trigger__icon"></span>
  </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('mobileMenu', ['setDrawer']),
  },
}
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

