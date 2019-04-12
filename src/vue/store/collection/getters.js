import { sortCollection } from "@vue/utils"

export default {
  isFetching: state => state.isFetching,
  isLoading: state => state.isLoading,
  collection: state => state.collection,
  featured: state => state.featured,
  newest: state => state.newest,
  popular: state => state.popular,
  sortBy: state => state.sortBy,
  filterBy: state => state.filterBy,
  activeCollection: (state, getters) => {
    const sortBy = getters.sortBy
    let collection = []
    sortBy === "newest"
      ? collection = getters.newest
      : sortBy === "popular"
        ? collection = getters.popular
        : collection = getters.featured
    return collection
  }
}