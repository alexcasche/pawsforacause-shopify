<template>
  <transition name="fade-slide">
    <div v-if="isOpen" class="v-overlay" @click="$emit('toggleMenu')"></div>
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

.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
.fade-slide-leave,
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.v-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 300px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;
  z-index: $z-index-overlay;
}
</style>

