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
    return {
      activeQuantity: '1',
    }
  },
  computed: {
    availableQuantity() {
      const cartVariant = this.$store.getters['cart/cartVariant'](this.activeVariant.id)
      const quantityInCart = cartVariant ? cartVariant.quantity : 0
      const { inventory_management, inventory_quantity } = this.activeVariant
      let available = 10;
      if(inventory_management === "shopify") {
        available = inventory_quantity - quantityInCart
      }
      return available > 10 ? 10 : available
  }
  },
  watch: {
    activeQuantity: {
      handler(val) {
        this.$emit('quantityChange', val)
      }
    }
  }
}
</script>
