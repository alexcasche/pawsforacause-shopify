export default {
  toggleModal(state) {
    state.isOpen = !state.isOpen
  },
  setModalContent(state, id) {
    state.contentId = id;
  }
}