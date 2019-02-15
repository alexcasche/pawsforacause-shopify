<template>
  <div v-if="upsellCollection" 
    class="c-cartUpsell u-bg-gray"
  >
    <span class='c-cartUpsell__message'>
      {{ upsellText }}
    </span>
    <div class="c-cartUpsell__grid">
      <div v-for="(item, index) in upsellCollection"
        :key="index"
        class="c-cartUpsell__item"
      >
        <img class="c-cartUpsell__itemImage"
          :src="item.featured_image" 
          :alt="imageAlt(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { filterCollection } from "@vue/helpers";

export default {
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings', 'collection']),
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
    },
    upsellCollection() {
      return filterCollection(this.collection)
    }
  },
  methods: {
    imageAlt(item) {
      const { name } = window.theme.shop
      return `${name} ${item.title}`
    },
  }
}
</script>