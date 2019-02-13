import { filterCollection } from "@vue/helpers";

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
  setSettings(state, payload) {
    state.settings = { ...JSON.parse(payload), ...window.theme.cart }
    return state
  },
  setCollection(state, payload) {
    state.collection = JSON.parse(payload)
    return state
  }
}
