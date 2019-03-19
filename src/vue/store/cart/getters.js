export default {
  isOpen: state => state.isOpen,
  isFetching: state => state.isFetching,
  isLoading: state => state.isLoading,
  showAdd: state => state.showAdd,
  shoppingCart: state => state.shoppingCart,
  cartProductIds: (state, getters) => {
    const { items } = getters.shoppingCart
    return Object.keys(items).map(key => items[key].product_id)
  },
  cartVariantIds: (state, getters) => {
    const { items } = getters.shoppingCart
    return Object.keys(items)
  },
  cartVariant: (state, getters) => variantId => {
    const { items } = getters.shoppingCart
    return items[variantId]
  },
  cartTotal: state => state.shoppingCart.total,
  subtotal: state => {
    const { currency } = state.settings
    if(currency) {
      return `${currency.symbol}${state.shoppingCart.total}`
    }
  },
  errorMessage: state => state.errorMessage,
  settings: state => state.settings,
  collection: state => state.collection,
  product: state => productId => state.products[productId],
  untilFreeShipping: (state, getters) => {
    const { shipping_threshold } = state.settings
    if(shipping_threshold) {
      return (shipping_threshold - getters.cartTotal).toFixed(2)
    }
  },
  upsellText: (state, getters) => {
    const { upsell_text, upsell_text_free, currency } = state.settings
    const untilFreeShipping = getters.untilFreeShipping
    if(untilFreeShipping > 0) {
      return upsell_text.replace("{{ untilFreeShipping }}", `<span>${currency.symbol}${untilFreeShipping}</span>`)
    } else {
      return upsell_text_free
    }
  }
};
      