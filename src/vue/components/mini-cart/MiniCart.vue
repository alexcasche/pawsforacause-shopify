<template lang="html">
  <div class="c-miniCart">
    <portal to="mini-cart-trigger-header">
      <Trigger @toggleCart="toggleCart" trigger="headerMain" :cartCount="cartCount"/>
    </portal>
    <portal to="mini-cart-trigger-header-mobile">
      <Trigger @toggleCart="toggleCart" trigger="headerMobile" :cartCount="cartCount"/>
    </portal>
    <portal to="mini-cart-trigger-footer">
      <Trigger @toggleCart="toggleCart" trigger="footer" :cartCount="cartCount" />
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
      const vue = document.getElementById('vue')
      const body = document.body
      if (val === true) {
        vue.classList.add('c-vue--miniCartOpen')
        body.style.overflowY = 'hidden'
        this.setCart()
      } else {
        vue.classList.remove('c-vue--miniCartOpen')
        body.style.overflowY = 'scroll'
      }
    },
  },
  mounted() {
    this.setCart()
  },
}
</script>