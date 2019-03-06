<template>
  <button 
    v-if="available > 0"
    :class="`${class_name}__button c-button-small c-button--submit`"
    @click="addToCart"
    type="button"
  >
    {{ active_text }}
  </button>
  <button 
    v-else
    :class="`${class_name}__button c-button-large c-button--cancel`"
    disabled="disabled"
  >
    {{ disabled_text }}
  </button>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  props: {
    class_name: {
      type: String,
      required: true
    },
    variant: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    available: {
      type: Number,
      default: 10
    },
    active_text: {
      type: String,
      default: 'Add to Cart'
    },
    disabled_text: {
      type: String,
      default: 'Sold Out'
    }
  },
  methods: {
    ...mapMutations('cart', ['setAdd']),
    ...mapActions('cart', ['addCart']),
    addToCart() {
      this.addCart({ id: this.variant, quantity: this.quantity })
      this.setAdd(false);
    },
  }
  
}
</script>
