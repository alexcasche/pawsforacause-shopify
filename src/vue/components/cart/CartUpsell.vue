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
          v-html="pricesHtml(item, 'product', 'c-cartUpsell__')"
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
import { upsellFilter, upsellTrim } from "@vue/helpers";

export default {
  data() {
    return {
      upsellCollection: {}
    }
  },
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings', 'collection', 'upsellText']),
    activeCollection() {
      return upsellFilter(this.upsellCollection, this.shoppingCart)
    }
  },
  methods: {
    ...mapMutations('cart', ['showAdd']),
    ...mapActions('cart', ['addCart', 'clearCart']),
    addClick(item) {
      const variantKeys = Object.keys(item.variants)
      if(variantKeys.length > 1) {
      } else {
        this.addCart({ id: variantKeys[0], quantity: 1 })
      }
    },
  },
  mounted() {
    this.upsellCollection = upsellTrim(this.collection, 12)
  }
}
</script>