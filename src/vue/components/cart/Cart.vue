<template lang="html">
  <div class="c-cart" id="cart">
    <transition name="overlay-fade">
      <span v-if="isOpen"  
        class="c-overlay" 
        @click="toggleCart"
      />
    </transition>
    <transition name="cart-slide">
      <CartDrawer v-if="isOpen" 
        @closeClick="toggleCart"
        :settings="JSON.parse(settings)"
        :collection="JSON.parse(collection)"
        :shippingThreshold="parseFloat(shipping_threshold)"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import CartDrawer from './CartDrawer.vue'

export default {
  props: {
    settings: {
      type: String,
      default: "{}"
    },
    collection: {
      type: String,
      default: "{}"
    },
    shipping_threshold: {
      type: String,
      default: ""
    }
  },
  components: {
    CartDrawer,
  },
  computed: {
    ...mapState({ modalOpen: state => state.modal.contentId }),
    ...mapGetters('cart', ['isOpen', 'cartCount']),
  },
  methods: {
    ...mapMutations('cart', ['toggleCart']),
    ...mapActions('cart', ['setCart']),
  },
  watch: {
    isOpen: {
      handler(val) {
        if (val === true) {
          this.setCart();
        }
        if(!this.modalOpen) {
          document.body.classList.toggle("u-noScroll");
        }
      }
    },
    cartCount(val) {
      const cartCountEls = document.querySelectorAll(".data-cart-count");
      cartCountEls.forEach(el => el.textContent = val);
      const cartText = val === 1 ? "Item" : "Items"
      const cartTextEls = document.querySelectorAll(".data-cart-text");
      cartTextEls.forEach(el => el.textContent = cartText);
    }
  },
  mounted() {
    const cartTriggers = document.querySelectorAll(".trigger-cart");
    cartTriggers.forEach(trigger => trigger.addEventListener("click", this.toggleCart))
    this.setCart()
  },
}
</script>

<style scoped>
.cart-slide-enter,
.cart-slide-leave-to {
  transform: translateX(100%);
}
.cart-slide-leave,
.cart-slide-enter-to {
  transform: translateX(0);
}
.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-leave,
.overlay-fade-enter-to {
  opacity: 1;
}
</style>