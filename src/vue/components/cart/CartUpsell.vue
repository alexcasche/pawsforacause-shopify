<template>
  <div class="c-cartUpsell">
    <span class='c-cartUpsell__message'>
      {{ upsellText }}
    </span>
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
    ...mapGetters('cart', ['collection', 'cartIds', 'upsellText'])
  },
  mounted() {
    this.upsellCollection = filterUpsell(this.collection, this.cartIds, 12)
  }
}
</script>