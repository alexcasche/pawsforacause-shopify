export default {
  setFeatured(state, payload) {
    state.featured = payload
    return state
  },
  setNewest(state, payload) {
    state.newest = payload
    return state
  },
  setPopular(state, payload) {
    state.popular = payload
    return state
  }
}