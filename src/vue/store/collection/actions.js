import axios from "axios";

export default {
  actionWrapper: async ({ state, commit, dispatch }, payload) => {
    if (state.isFetching) return
    const { action } = payload
    commit("toggleFetching");
    await dispatch(action);
    commit("toggleFetching");
  },
  setActiveCollection: async ({ state, commit, dispatch }) => {
    let parameter = "?sort_by="
    let mutation
    switch(state.sortBy) {
      case "newest":
        parameter += "created-descending"
        mutation = "setNewest"
        break;
      case "popular":
        parameter += "best-selling"
        mutation = "setPopular"
        break;
      default:
        parameter += "manual"
        mutation = "setFeatured"
    }
    const action = axios.get(`/collections/${state.collection}-json${parameter}`)
      .then(response => {
        const { data } = response
        const collectionJSON = data.split("<json-data>")[1].split("</json-data>")[0]
        commit(mutation, JSON.parse(collectionJSON))
      })
    dispatch("actionWrapper", { action })
  }
}