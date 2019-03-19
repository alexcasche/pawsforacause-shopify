<template>
  <div :class="`${class_name}__select o-flexRow`">
    <label :class="`${class_name}__selectLabel`"
      for="quantitySelect"
    >
      {{ quantity_label }}
    </label>
    <select v-model="activeQuantity"
      id="quantitySelect"
      :class="`${class_name}__selectInner`"
    >
      <option 
        v-for="n in availableQuantity"
        :key="n"
        :value="n"
      >
        {{ n }}
      </option>
      <option v-if="!availableQuantity"
        value="--"
      >
        --
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    class_name: {
      type: String,
      required: true
    },
    quantity_label: {
      type: String,
      default: "Quantity"
    },
    active_variant: {
      type: Object,
      required: true
    }
  },
  data() {
    return { activeQuantity: false }
  },
  computed: {
    availableQuantity() {
      const cartVariant = this.$store.getters['cart/cartVariant'](this.active_variant.id)
      const quantityInCart = cartVariant ? cartVariant.quantity : 0
      const { inventory_management, inventory_quantity } = this.active_variant
      let available = 10;
      if(inventory_management === "shopify") {
        available = inventory_quantity - quantityInCart
      }
      return available > 10 ? 10 : available
    },
  },
  watch: {
    activeQuantity: {
      immediate: true,
      handler(val) {
        this.$emit('quantityChange', { 
          activeQuantity: val, 
          availableQuantity: this.availableQuantity 
        })
      }
    },
    availableQuantity: {
      immediate: true,
      handler(val) {
        this.$emit('quantityChange', { 
          activeQuantity: this.activeQuantity, 
          availableQuantity: val
        })
      }
    }
  },
  mounted() {
    this.activeQuantity = this.availableQuantity > 0 ? 1 : '--'
  }
}
</script>
