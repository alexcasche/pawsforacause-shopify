<template lang="html">
  <div class="c-miniCart">
    <portal to="mini-cart-trigger-header">
      <Trigger trigger="headerMain"/>
    </portal>
    <portal to="mini-cart-trigger-header-mobile">
      <Trigger trigger="headerMobile"/>
    </portal>
    <Overlay />
    <Drawer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Trigger from './Trigger.vue'
import Overlay from './Overlay.vue'
import Drawer from './Drawer.vue'

export default {
  components: {
    Trigger,
    Overlay,
    Drawer,
  },
  methods: {
    ...mapActions('miniCart', ['setCart']),
  },
  mounted() {
    this.setCart()
  },
}
</script>