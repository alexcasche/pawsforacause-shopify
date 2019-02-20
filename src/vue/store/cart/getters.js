export default {
  isOpen: state => state.isOpen,
  isFetching: state => state.isFetching,
  showAdd: state => state.showAdd,
  shoppingCart: state => state.shoppingCart,
  cartIds: (state, getters) => {
    const { items } = getters.shoppingCart
    let ids = [];
    Object.keys(items).forEach(key => ids.push(items[key].product_id))
    return ids;
  },
  cartTotal: state => state.shoppingCart.total,
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
    const { upsell_text, upsell_free_text, currency } = state.settings
    const untilFreeShipping = getters.untilFreeShipping
    if(untilFreeShipping > 0) {
      return upsell_text.replace("{{ untilFreeShipping }}", `${currency.symbol}${untilFreeShipping}`)
    } else {
      return upsell_free_text
    }
  }
};
      