<template>
  <div v-if="activeVariant" 
    class="c-cartMainItem"
  >
    <a class="c-cartMainItem__link" :href="item.url">
      <img class="c-cartMainItem__image lazyload" 
        :src="imageUrl(item.image, '.jpg', '50x50')"
        :data-src="imageUrl(item.image, '.jpg', '200x200')"
        :alt="imageAlt(item)"
      />
    </a>
    <div class="c-cartMainItem__info">
      <span class="c-cartMainItem__variant">
        {{ item.variant_title }}
      </span>
      <span class="c-cartMainItem__title">
        {{ item.product_title }}
      </span>
      <ProductPrices 
        class_name="c-cartMainItem"
        :product="item"
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
import ProductPrices from "../product/ProductPrices.vue"

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ProductPrices
  },
  computed: {
    activeVariant() {
      const activeProduct = this.$store.getters["cart/product"](this.item.product_id)
      if(activeProduct) return activeProduct.variants[this.item.id]
    },
  },
  methods: {
    ...mapActions('cart', ['addCart', 'changeCart']),
    editItem(action) {
      let { id, quantity } = this.item;
      switch(action) {
        case "add":
          this.addCart({ id, quantity: 1 })
          break;
        case "remove":
          this.changeCart({ id, quantity: quantity - 1 })
          break
        case "clear":
          this.changeCart({ id, quantity: 0 })
      }
    }
  }
}
</script>