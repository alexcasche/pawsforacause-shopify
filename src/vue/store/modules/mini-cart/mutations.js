export default {
  toggleCart(state, payload) {
    state.isOpen = !state.isOpen
    state.cartError = false
    return state
  },
  toggleFetching(state, payload) {
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
