export default {
  toggleMenu(state, payload) {
    state.isOpen = !state.isOpen
    return state
  },
}
