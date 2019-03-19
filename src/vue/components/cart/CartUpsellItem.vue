<template>
  <div v-if="!inCart"
    class="c-cartUpsellItem o-flexColumn"
  >
    <img class="c-cartUpsellItem__image lazyload"
        :src="imageUrl(item.featured_image, '.jpg', '50x50')"
        :data-src="imageUrl(item.featured_image, '.jpg', '200x200')" 
        :alt="imageAlt(item)"
      />
     <ProductPrices 
        class_name="c-cartUpsellItem"
        :product="item"
      />
    <button 
      class="c-cartUpsellItem__add c-button-small c-button--submit"
      @click="addClick"
    >
      {{ settings.upsell_add_button }}
      <i class="c-cartUpsellItem__addIcon fas fa-plus" aria-hidden="true"></i>
    </button>
    <CartUpsellAdd 
      v-if="showAdd === item.id" 
      :item="item" 
    />
  </div>
</template>


<script>
import { mapGetters, mapMutations, mapActions } from "vuex"
import CartUpsellAdd from "./CartUpsellAdd.vue"
import ProductPrices from "../product/ProductPrices.vue"

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CartUpsellAdd,
    ProductPrices
  },
  computed: {
    ...mapGetters('cart', ['cartProductIds', 'settings', 'showAdd']),
    inCart() {
      return this.cartProductIds.indexOf(this.item.id) >= 0
    }
  },
  methods: {
    ...mapMutations('cart', ['setAdd']),
    addClick() {
      const { id } = this.item
      this.setAdd(id)
    }
  }
}
</script>
