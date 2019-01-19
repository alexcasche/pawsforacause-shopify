<template lang="html">
  <div class="v-cart" id="cart">
    <Overlay @toggleCart="toggleCart" :isOpen="isOpen" />
    <Drawer @toggleCart="toggleCart" :isOpen="isOpen" :cartCount="cartCount"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Overlay from './Overlay.vue'
import Drawer from './Drawer.vue'

export default {
  components: {
    Overlay,
    Drawer,
  },
  computed: {
    ...mapGetters('cart', ['isOpen', 'cartCount']),
  },
  methods: {
    ...mapMutations('cart', ['toggleCart']),
    ...mapActions('cart', ['setCart']),
  },
  watch: {
    isOpen(val) {
      document.body.classList.toggle("cart-open");
      if (val === true) {
        this.setCart()
      }
    },
    cartCount(val) {
      const cartCountEls = document.querySelectorAll(".vue-cart-count");
      cartCountEls.forEach(el => el.textContent = val);
      const cartText = val === 1 ? "Item" : "Items"
      const cartTextEls = document.querySelectorAll(".vue-cart-text");
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