<template>
  <div v-if="!inCart"
    class="c-cartUpsellItem o-flexColumn"
  >
    <img class="c-cartUpsellItem__image"
        :src="item.featured_image" 
        :alt="imageAlt(item)"
      />
    <span 
      v-html="pricesHtml(item, 'product', 'c-cartUpsellItem__')"
      class="c-cartUpsellItem__prices o-flexColumn"
    />
    <button 
      class="c-cartUpsellItem__add c-button-small c-button--submit"
      @click="addClick(item)"
    >
      {{ settings.upsell_add_button }}
      <i class="c-cartUpsellItem__addIcon fas fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</template>


<script>
import { mapGetters, mapMutations, mapActions } from "vuex"

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters('cart', ['cartIds', 'settings']),
    inCart() {
      return this.cartIds.indexOf(this.item.id) >= 0
    }
  },
  methods: {
    ...mapMutations('cart', ['showAdd']),
    ...mapActions('cart', ['addCart']),
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
