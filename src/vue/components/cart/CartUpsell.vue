<template>
  <div v-if="upsellCollection" 
    class="c-cartUpsell u-bg-gray"
  >
    <span class='c-cartUpsell__message'>
      {{ upsellText }}
    </span>
    <div class="c-cartUpsell__grid o-flexRow">
      <div v-for="(item, index) in upsellCollection"
        :key="index"
        class="c-cartUpsell__item o-flexColumn"
      >
        <img class="c-cartUpsell__image"
          :src="item.featured_image" 
          :alt="imageAlt(item)"
        />
        <span 
          v-html="pricesHtml(item)"
          class="c-cartUpsell__prices o-flexColumn"
        />
        <button 
          class="c-cartUpsell__add c-button-small c-button--submit"
          @click="addClick(item)"
        >
          {{ settings.upsell_add_button }}
          <i class="c-cartUpsell__addIcon fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { filterCollection, pricesProduct } from "@vue/helpers";

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
    ...mapMutations('cart', ['showAdd']),
    ...mapActions('cart', ['addCart', 'clearCart']),
    imageAlt(item) {
      const { name } = window.theme.shop
      return `${name} ${item.title}`
    },
    pricesHtml(item) {
      const { symbol }  = this.settings.currency
      return pricesProduct(item, symbol, "c-cartUpsell__")
    },
    variantsLength(item) {
      return Object.keys(item.variants).length
    },
    addClick(item) {
      const { variants } = item
      const variantKeys = Object.keys(variants)
      if(variantKeys.length > 1) {
      } else {
        this.addCart({ id: variantKeys[0], quantity: 1 })
      }
    }
  }
}
</script>