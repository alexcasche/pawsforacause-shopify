<template>
  <transition name="slide">
    <div v-if="isOpen" class="c-drawer">
      <button class="c-drawer__close" @click="$emit('toggleCart')">Close Cart</button>
      <h1 class="c-drawer__heading">Shopping Cart</h1>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
@import 'settings/index.css';
@import 'tools/index.css';

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-leave,
.slide-enter-to {
  transform: translateX(0);
}
.c-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 400px;
  max-width: 100%;
  background-color: white;
  text-align: center;
  overflow-y: scroll;
  @mixin drawer-slide;
}
</style>


