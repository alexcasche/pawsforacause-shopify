<template>
  <div class="v-cartDrawer">
    <button class="v-cartDrawer__close" 
      @click="$emit('closeClick')"
    >
      Close Cart
    </button>
    <h1 class="v-cartDrawer__heading">
      Shopping Cart
    </h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import 'settings/index.css';
@import 'tools/index.css';

.v-cartDrawer {
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
  z-index: $z-index-cart;
  @mixin transition-slide;
}
</style>


