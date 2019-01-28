export default {
  toggleCart(state) {
    state.isOpen = !state.isOpen
    state.cartError = false
    return state
  },
  toggleFetching(state) {
    state.isFetching = !state.isFetching
    return state
  },
  setCart(state, payload) {
    state.errorMessage = false
    state.shoppingCart = payload
    return state
  },
  setError(state, payload) {
    state.errorMessage = payload
    return state
  },
}
