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
      @quantityChange="updateQuantity"
    />
    <ProductButton
      :class_name="class_name"
      :variant="activeVariant.id"
      :quantity="activeQuantity"
      :available="availableQuantity"
      :active_text="button_active_text"
      :disabled_text="button_disabled_text"
    />
  </form>
</template>

<script>
import { formatProduct } from "@vue/helpers"
import ProductPrices from "./ProductPrices.vue"
import ProductOptions from "./ProductOptions.vue"
import ProductQuantity from "./ProductQuantity.vue"
import ProductButton from "./ProductButton.vue"

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
    ProductQuantity,
    ProductButton
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
    firstAvailable() {
      const { variants } = { ...this.product }
      const variantKeys = Object.keys(variants)
      const firstAvailable = variantKeys.find(key => variants[key].available)
      return firstAvailable ? variants[firstAvailable] : variants[variantKeys[0]]
    },
    updateVariant(variant) {
      this.activeVariant = variant
    },
    updateQuantity(quantities) {
      const { activeQuantity, availableQuantity } = quantities
      this.activeQuantity = activeQuantity
      this.availableQuantity = availableQuantity
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