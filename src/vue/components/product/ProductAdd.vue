<template>
  <form 
    v-if="activeVariant"
    :class="`${class_name}__form o-flexColumn`"
  >
    <ProductPrices
      :class_name="class_name"
      :product="activeVariant"
      :show_range="true"
    />
    <ProductOptions
      v-if="typeObject(product)"
      :class_name="class_name"
      :product="product"
      :initial_variant="initialVariant"
      @variantChange="updateVariant"
    />
    <ProductQuantity
      v-if="activeVariant"
      :class_name="class_name"
      :active_variant="activeVariant"
      :quantity_label="quantity_label"
      @quantityChange="updateQuantities"
    />
    
    <button 
      v-if="activeQuantity > 0"
      :class="`${class_name}__button c-button-small c-button--submit`"
      @click="addToCart"
      type="button"
    >
      {{ button_active_text }}
    </button>
    <button 
      v-else
      :class="`${class_name}__button c-button-large c-button--cancel`"
      disabled="disabled"
    >
      {{ button_disabled_text }}
    </button>
  </form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { formatProduct } from "@vue/helpers";
import ProductPrices from "./ProductPrices.vue"
import ProductOptions from "./ProductOptions.vue"
import ProductQuantity from "./ProductQuantity.vue"

export default {
  data() {
    return {
      initialVariant: false,
      activeVariant: false,
      activeQuantity: false,
      availableQuantity: false
    }
  },
  components: {
    ProductPrices,
    ProductOptions,
    ProductQuantity
  },
  props: {
    product: {
      type: [String, Object],
      default: () => {}
    },
    class_name: {
      type: [String, Boolean],
      default: false
    },
    quantity_label: {
      type: String,
      default: 'Quantity'
    },
    button_active_text: {
      type: String,
      default: 'Add to Cart'
    },
    button_disabled_text: {
      type: String,
      default: 'Sold Out'
    }
  },
  methods: {
    ...mapMutations('cart', ['setAdd']),
    ...mapActions('cart', ['addCart']),
    addToCart() {
      this.addCart({ id: this.activeVariant.id, quantity: this.form.quantity })
      this.setAdd(false);
    },
    firstAvailable() {
      const { variants } = { ...this.product }
      const variantKeys = Object.keys(variants)
      const firstAvailable = variantKeys.find(key => variants[key].available)
      return firstAvailable ? variants[firstAvailable] : variants[variantKeys[0]]
    },
    updateVariant(variant) {
      this.activeVariant = variant
    }
  },
  mounted() {
    if(typeof this.product == 'string') {
      const formattedProduct = formatProduct(JSON.parse(this.product))
      this.product = formattedProduct[Object.keys(formattedProduct)[0]]
    }
    this.initialVariant = this.firstAvailable()
    this.activeVariant = this.firstAvailable()
  }
}
</script>