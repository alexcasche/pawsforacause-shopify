import { formatCollection } from "@vue/utils";

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
  setFilterBy(state, payload) {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter')
    const filterBy = filterParam ? filterParam : false
    state.filterBy = filterBy
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
    state.featured = formatCollection(payload, true)
    return state
  },
  setNewest(state, payload) {
    state.newest = formatCollection(payload, true)
    return state
  },
  setPopular(state, payload) {
    state.popular = formatCollection(payload, true)
    return state
  }
}