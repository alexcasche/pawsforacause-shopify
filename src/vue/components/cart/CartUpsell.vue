<template>
  <div class="c-cartUpsell u-bg-gray">
    <span class='c-cartContent__emptyMessage'>
      {{ settings.upsell_text }}
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
        return shipping_threshold - this.shoppingCart.total
      }
    },
  },
    // upsellText() {
    //   const { currency, shipping_threshold, upsell_text } = settings;
    //   const untilFreeShipping = `${currency.symbol}${shipping_threshold - `
    //   return `${`
    //   text.replace("")
    // }
}
</script>