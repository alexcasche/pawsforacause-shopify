<template lang="html">
  <div class="c-cartAccount c-card" id="cartAccount">
    <CartHeader />
    <CartMain v-if="!isLoading"/>
    <div v-else class="c-cart__loading c-loadingDots">
      <span/><span/><span/><span/>
    </div>
    <CartUpsell />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartHeader from './CartHeader.vue'
import CartMain from './CartMain.vue'
import CartUpsell from './CartUpsell.vue'

export default {
  components: {
    CartHeader,
    CartMain,
    CartUpsell
  },
  computed: {
    ...mapGetters('cart', ['isLoading']),
  },
}
</script>