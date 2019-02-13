<template lang="html">
  <div class="c-cart" id="cart">
    <transition name="overlay-fade">
      <span v-if="isOpen"  
        class="c-overlay" 
        @click="toggleCart"
      />
    </transition>
    <transition name="cart-slide">
      <div v-if="isOpen" class="c-cart__drawer">
        <CartHeader />
        <CartContent />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import CartHeader from './CartHeader.vue'
import CartContent from './CartContent.vue'
import CartUpsell from './CartUpsell.vue'

export default {
  props: {
    settings_json: {
      type: String,
      default: "{}"
    },
    collection_json: {
      type: String,
      default: "{}"
    },
    shipping_threshold: {
      type: String,
      default: ""
    }
  },
  components: {
    CartHeader,
    CartContent,
    CartUpsell
  },
  computed: {
    ...mapState({ modalOpen: state => state.modal.contentId }),
    ...mapGetters('cart', ['isOpen', 'cartCount']),
  },
  methods: {
    ...mapMutations('cart', ['toggleCart', 'setSettings', 'setCollection']),
    ...mapActions('cart', ['setCart']),
  },
  watch: {
    isOpen: {
      handler(val) {
        if(!this.modalOpen) {
          document.body.classList.toggle("u-noScroll");
        }
      }
    },
    cartCount(val) {
      const cartCountEls = document.querySelectorAll(".data-cart-count");
      cartCountEls.forEach(el => el.textContent = val);
    }
  },
  mounted() {
    const cartTriggers = document.querySelectorAll(".trigger-cart");
    cartTriggers.forEach(trigger => trigger.addEventListener("click", this.toggleCart))
    this.setCart()
    this.setSettings(this.settings_json)
    this.setCollection(this.collection_json)
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