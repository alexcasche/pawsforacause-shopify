import { sortCollection, filterCollection } from "@vue/utils"

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
    const filterBy = getters.filterBy
    const collection = sortBy === "new-arrivals"
      ? getters.newest
      : sortBy === "most-popular"
        ? getters.popular
        : getters.featured
    return !collection
      ? false
      : filterCollection(sortCollection(collection, sortBy), filterBy)
  }
}