<template>
  <span :class="`${class_name}__prices c-prices`">
    <span v-if="onSale && price"
      :class="`${class_name}__comparePrice c-prices__comparePrice`"
    >
      {{ price }}
    </span>
    <span v-if="onSale && compare"
      :class="`${class_name}__salePrice c-prices__salePrice`"
    >
      {{ compare }}
    </span>
    <span v-if="!onSale && price"
      :class="`${class_name}__basePrice c-prices__basePrice`"
    >
      {{ price }}
    </span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      symbol: window.theme.cart.currency.symbol
    }
  },
  props: {
    product: {
      type: [Object, Boolean],
      default: false
    },
    class_name: {
      type: [String, Boolean],
      default: false
    },
    show_range: {
      type: [Boolean],
      default: true
    }
  },
  computed: {
    onSale() {
      const { compare_at_price, price } = this.product
      return compare_at_price && compare_at_price > price;
    },
    price() {
      const { price_varies, price, price_min, price_max } = this.product
      return this.showRange && price_varies
        ? `${this.symbol}${price_min} - ${this.symbol}${price_max}`
        : `${this.symbol}${price}`
    },
    compare() {
      const { compare_at_price_varies, compare_at_price, compare_at_price_min, compare_at_price_max } = this.product
      return this.onSale
        ? this.showRange && compare_at_price_varies
          ? `${this.symbol}${compare_at_price_min} - ${this.symbol}${compare_at_price_max}`
          : `${this.symbol}${compare_at_price}`
        : false
    },
  }
}
</script>


