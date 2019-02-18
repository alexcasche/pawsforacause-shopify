export default {
  isOpen: state => state.isOpen,
  isFetching: state => state.isFetching,
  showAdd: state => state.showAdd,
  shoppingCart: state => state.shoppingCart,
  errorMessage: state => state.errorMessage,
  settings: state => state.settings,
  collection: state => state.collection,
  product: state => productId => state.products[productId],
  untillFreeShipping: state => {
    const { shipping_threshold } = state.settings
    if(shipping_threshold) {
      return (shipping_threshold - state.shoppingCart.total).toFixed(2)
    }
  },
  upsellText: (state, getters) => {
    const { upsell_text, upsell_free_text, currency } = state.settings
    const untilFreeShipping = getters.untilFreeShipping
    if(this.untilFreeShipping > 0) {
      return upsell_text.replace("{{ untilFreeShipping }}", `${currency.symbol}${this.untilFreeShipping}`)
    } else {
      return upsell_free_text
    }
  }
};
      