<template>
  <div class="c-cartUpsell u-bg-gray">
    <span class='c-cartUpsell__message'>
      {{ upsellText }}
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings']),
    untilFreeShipping() {
      const { shipping_threshold } = this.settings
      if(shipping_threshold) {
        return (shipping_threshold - this.shoppingCart.total).toFixed(2)
      }
    },
    upsellText() {
      const { upsell_text, upsell_free_text, currency } = this.settings
      if(this.untilFreeShipping > 0) {
        return upsell_text.replace("{{ untilFreeShipping }}", `${currency.symbol}${this.untilFreeShipping}`)
      } else {
        return upsell_free_text
      }
    }
  },
}
</script>