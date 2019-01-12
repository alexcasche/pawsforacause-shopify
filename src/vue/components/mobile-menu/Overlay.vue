<template>
  <transition name="fade-slide">
    <div v-if="isOpen" class="c-overlay" @click="$emit('toggleMenu')"></div>
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
.c-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 300px;
  width: 100vw;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.35s ease;
}
</style>

