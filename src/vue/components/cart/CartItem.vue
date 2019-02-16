<template>
  <div class="c-cartItem">
    <img class="c-cartItem__image" 
      :src="item.image"
      :alt="imageAlt" 
    />
    <div class="c-cartItem__info">
      <span class="c-cartItem__variant">
        {{ item.variant_title }}
      </span>
      <span class="c-cartItem__title">
        {{ item.product_title }}
      </span>
      <span v-html="pricesHtml"
        class="c-cartItem__prices o-flexRow" 
      >
      </span>
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
import { mapActions, mapGetters } from "vuex";
import { pricesVariant } from "@vue/helpers";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters('cart', ['settings', 'products']),
    imageAlt() {
      const { image, title } = this.item
      const { name } = window.theme.shop
      return image.alt ? image.alt : `${name} ${title}`
    },
    pricesHtml() {
      const { product_id, id } = this.item
      const variant = this.$store.getters["cart/product"](product_id).variants[id]
      const { symbol }  = this.settings.currency
      return pricesVariant(variant, symbol, "c-cartItem__")
    }
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
          this.changeCart({ id, quantity: quantity -= 1 })
          break
        case "clear":
          this.changeCart({ id, quantity: 0 })
      }
    }
  },
  mounted() {
    console.log(Object.keys(this.products).length)
  }
}
</script>