import { formatCollection } from "@vue/utils";

export default {
  openCart(state) {
    state.isOpen = true
    return state
  },
  closeCart(state) {
    state.isOpen = false
    state.errorMessage = false
    return state
  },
  toggleCart(state) {
    if(state.isOpen === true) state.errorMessage = false
    state.isOpen = !state.isOpen
    return state
  },
  toggleFetching(state) {
    state.isFetching = !state.isFetching
    return state
  },
  toggleLoading(state) {
    state.isLoading = !state.isLoading
    return state
  },
  setCart(state, payload) {
    state.shoppingCart = payload
    return state
  },
  setError(state, payload) {
    state.errorMessage = payload
    return state
  },
  setSettings(state, payload) {
    state.settings = { ...payload, ...window.theme.cart }
    return state
  },
  setCollection(state, payload) {
    state.collection = formatCollection(payload)
    return state
  },
  setProduct(state, payload) {
    state.products = { ...state.products, ...payload }
    return state
  },
  setAdd(state, payload) {
    return state.showAdd = payload
  }
}
