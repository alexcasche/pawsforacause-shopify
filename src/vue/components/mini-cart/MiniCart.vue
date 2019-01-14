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
      const view = document.getElementById('view')
      const body = document.body
      if (val === true) {
        view.classList.add('c-view--miniCartOpen')
        body.style.overflowY = 'hidden'
        this.setCart()
      } else {
        view.classList.remove('c-view--miniCartOpen')
        body.style.overflowY = 'scroll'
      }
    },
  },
  mounted() {
    this.setCart()
  },
}
</script>