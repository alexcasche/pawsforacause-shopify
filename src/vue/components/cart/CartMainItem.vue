<template>
  <div v-if="activeVariant" 
    class="c-cartMainItem"
  >
    <img class="c-cartMainItem__image" 
      :src="item.image"
      :alt="imageAlt(item)"
    />
    <div class="c-cartMainItem__info">
      <span class="c-cartMainItem__variant">
        {{ item.variant_title }}
      </span>
      <span class="c-cartMainItem__title">
        {{ item.product_title }}
      </span>
      <span 
        v-html="pricesHtml(activeVariant, 'variant', 'c-cartMainItem__')"
        class="c-cartMainItem__prices o-flexRow" 
      />
    </div>
    <div class="c-cartMainItem__actions">
      <button @click="editItem('clear')" 
        class="c-cartMainItem__remove" 
      >
        <i class="c-cartMainItem__removeIcon fa fa-times" aria-hidden="true"></i>
      </button>
      <div class="c-cartMainItem__quantity o-flexRow">
        <button @click="editItem('remove')"
          class="c-cartMainItem__quantityButton o-flexColumn" 
        >
          <i class="c-cartMainItem__quantityIcon fas fa-minus" aria-hidden="true"></i>
        </button>
        <span class="c-cartMainItem__quantityText">
          {{ item.quantity }}
        </span>
        <button @click="editItem('add')"
          class="c-cartMainItem__quantityButton o-flexColumn"
        >
          <i class="c-cartMainItem__quantityIcon fas fa-plus" aria-hidden="true"></i>
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