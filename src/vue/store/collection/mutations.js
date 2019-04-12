export default {
  toggleFetching(state) {
    state.isFetching = !state.isFetching
    return state
  },
  toggleLoading(state) {
    state.isLoading = !state.isLoading
    return state
  },
  setCollection(state, payload) {
    state.collection = payload
    return state
  },
  setSettings(state, payload) {
    state.settings = payload
    return state
  },
  setFilterBy(state, payload) {
    const urlParams = new URLSearchParams(window.location.search);
    const sortParam = urlParams.get('filter')
    const sortBy = sortParam ? sortParam : state.collection
    state.sortBy = sortBy
    return state
  },
  setSortBy(state, payload) {
    const urlParams = new URLSearchParams(window.location.search);
    const sortParam = urlParams.get('sort')
    const sortBy = sortParam ? sortParam : "featured"
    state.sortBy = sortBy
    return state
  },
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