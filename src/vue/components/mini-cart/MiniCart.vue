<template lang="html">
  <div class="c-miniCart">
    <portal to="mini-cart-trigger-header">
      <Trigger @toggleCart="toggleCart" trigger="headerMain" :cartCount="cartCount"/>
    </portal>
    <portal to="mini-cart-trigger-header-mobile">
      <Trigger @toggleCart="toggleCart" trigger="headerMobile" :cartCount="cartCount"/>
    </portal>
    <Overlay @toggleCart="toggleCart" :isOpen="isOpen" />
    <Cart @toggleCart="toggleCart" :isOpen="isOpen" :cartCount="cartCount"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Trigger from './Trigger.vue'
import Overlay from './Overlay.vue'
import Cart from './Cart.vue'

export default {
  components: {
    Trigger,
    Overlay,
    Cart,
  },
  computed: {
    ...mapGetters('miniCart', ['isOpen', 'cartCount']),
  },
  methods: {
    ...mapMutations('miniCart', ['toggleCart']),
    ...mapActions('miniCart', ['setCart']),
  },
  watch: {
    isOpen(val) {
      const page = document.getElementById('vue')
      if (val === true) {
        page.classList.add('c-vue--miniCartOpen')
        this.setCart()
      } else {
        page.classList.remove('c-vue--miniCartOpen')
      }
    },
  },
  mounted() {
    this.setCart()
  },
}
</script>