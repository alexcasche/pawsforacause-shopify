<template>
  <div v-if="activeVariant" 
    class="c-cartItem"
  >
    <img class="c-cartItem__image" 
      :src="item.image"
      :alt="imageAlt(item)"
    />
    <div class="c-cartItem__info">
      <span class="c-cartItem__variant">
        {{ item.variant_title }}
      </span>
      <span class="c-cartItem__title">
        {{ item.product_title }}
      </span>
      <span 
        v-html="pricesHtml(activeVariant, 'variant', 'c-cartUpsell__')"
        class="c-cartItem__prices o-flexRow" 
      />
    </div>
    <div class="c-cartItem__actions">
      <button class="c-cartItem__remove" @click="editItem('clear')">
        <i class="c-cartItem__removeIcon fa fa-times" aria-hidden="true"></i>
      </button>
      <div class="c-cartItem__quantity o-flexRow">
        <button class="c-cartItem__quantityButton o-flexColumn" @click="editItem('remove')">
          <i class="c-cartItem__quantityIcon fas fa-minus" aria-hidden="true"></i>
        </button>
        <span class="c-cartItem__quantityText">
          {{ item.quantity }}
        </span>
        <button class="c-cartItem__quantityButton o-flexColumn" @click="editItem('add')">
          <i class="c-cartItem__quantityIcon fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    activeVariant() {
      const activeProduct = this.$store.getters["cart/product"](this.item.product_id)
      if(activeProduct) return activeProduct.variants[this.item.id]
    },
  },
  methods: {
    ...mapActions('cart', ['changeCart']),
    editItem(action) {
      let { id, quantity } = this.item;
      quantity = action === "add"
        ? quantity + 1
        : action === "remove"
          ? quantity - 1
          : 0
      this.changeCart({ id, quantity })
    }
  }
}
</script>