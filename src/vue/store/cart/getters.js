export default {
  isOpen: state => state.isOpen,
  isFetching: state => state.isFetching,
  shoppingCart: state => state.shoppingCart,
  cartCount: state => state.shoppingCart.count,
  cartSubtotal: state => state.shoppingCart.total,
  errorMessage: state => state.errorMessage,
  settings: state => state.settings,
  collection: state => state.collection
};
