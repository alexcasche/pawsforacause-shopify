<template>
  <div class="c-cart__drawer">
    <button class="c-cart__close" 
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
export default {
  props: {
    settings: {
      type: Object,
      default: () => {}
    },
    collection: {
      type: Object,
      default: () => {}
    },
    shippingThreshold: {
      type: [Number, Boolean],
      default: false
    }
  }
}
</script>




