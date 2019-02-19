<template>
  <div class="c-cartUpsell u-bg-gray">
    <span class='c-cartUpsell__message'>
      {{ upsellText }}
    </span>
    <div class="c-cartUpsell__items o-flexRow">
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
import { upsellFilter, upsellTrim } from "@vue/helpers";
import CartUpsellItem from "./CartUpsellItem.vue"

export default {
  components: {
    CartUpsellItem
  },
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings', 'collection', 'upsellText']),
    upsellTCollection() {
      return upsellTrim(this.collection, 12)
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
  }
}
</script>