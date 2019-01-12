export default {
  setDrawer(state, payload) {
    state.isOpen = payload === "open" ? true : false;
    return state;
  }
};
