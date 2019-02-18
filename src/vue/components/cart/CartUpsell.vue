<template>
  <div class="c-cartUpsell u-bg-gray">
    <span class='c-cartUpsell__message'>
      {{ upsellText }}
    </span>
    <div class="c-cartUpsell__grid o-flexRow">
      <div v-for="(item, index) in activeCollection"
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
import { pricesProduct, upsellFilter, upsellTrim } from "@vue/helpers";

export default {
  data() {
    return {
      upsellCollection: {}
    }
  },
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings', 'collection', 'upsellText']),
    activeCollection() {
      return upsellTrim(this.upsellCollection)
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
    addClick(item) {
      const { variants } = item
      const variantKeys = Object.keys(variants)
      if(variantKeys.length > 1) {
      } else {
        this.addCart({ id: variantKeys[0], quantity: 1 })
      }
    },
  },
  mounted() {
    this.upsellCollection = upsellFilter(this.collection, this.shoppingCart, 12)
  }
}
</script>