<template>
  <div class="c-cartUpsell">
    <span v-if="shoppingCart.count" class='c-cartUpsell__message'
      v-html="upsellText"
    />
    <span v-else class='c-cartUpsell__message'
      v-html="settings.upsell_text_empty"
    />
    <div class="c-cartUpsell__items o-lost">
      <CartUpsellItem 
        v-for="(item, index) in upsellCollection"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { filterUpsell } from "@vue/helpers";
import CartUpsellItem from "./CartUpsellItem.vue"

export default {
  data() {
    return { 
      upsellCollection: {}
    }
  },
  components: {
    CartUpsellItem
  },
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'collection', 'cartProductIds', 'upsellText', 'settings'])
  },
  mounted() {
    this.upsellCollection = filterUpsell(this.collection, this.cartProductIds, 12)
  }
}
</script>