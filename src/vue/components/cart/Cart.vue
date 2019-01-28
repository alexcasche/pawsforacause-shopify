<template lang="html">
  <div class="v-cart" id="cart">
    <Overlay @overlayClick="toggleCart" v-if="isOpen" :isOpen="isOpen" />
    <Drawer @closeClick="toggleCart" v-if="isOpen" :isOpen="isOpen" :cartCount="cartCount"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Overlay from '../shared/Overlay.vue'
import Drawer from './Drawer.vue'

export default {
  components: {
    Overlay,
    Drawer,
  },
  computed: {
    ...mapState({ modalOpen: state => state.modal.isOpen }),
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