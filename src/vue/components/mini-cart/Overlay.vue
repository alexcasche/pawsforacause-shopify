<template>
  <transition name="fade">
    <div v-if="isOpen" class="c-overlay" @click="$emit('toggleCart')"></div>
  </transition>
</template>

<script>
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.c-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.35s ease;
  z-index: $z-index-overlay;
}
</style>

