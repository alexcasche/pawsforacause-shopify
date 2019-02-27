<template>
  <div v-if="!inCart"
    class="c-cartUpsellItem o-flexColumn"
  >
    <img class="c-cartUpsellItem__image"
        :src="imageUrl(item.featured_image, '.jpg', '120x120')" 
        :alt="imageAlt(item)"
      />
    <span 
      v-html="pricesHtml(item, 'product', 'c-cartUpsellItem')"
      class="c-cartUpsellItem__prices o-flexColumn"
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
import CartUpsellAdd from "./CartUpsellAdd.vue";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CartUpsellAdd
  },
  computed: {
    ...mapGetters('cart', ['cartProductIds', 'settings', 'showAdd']),
    inCart() {
      return this.cartProductIds.indexOf(this.item.id) >= 0
    }
  },
  methods: {
    ...mapMutations('cart', ['setAdd']),
    ...mapActions('cart', ['addCart']),
    addClick() {
      const { variants, id } = this.item
      const variantKeys = Object.keys(variants)
      if(variantKeys.length > 1) {
        this.setAdd(id)
      } else {
        this.addCart({ id: variantKeys[0], quantity: 1 })
      }
    },
  }
}
</script>
