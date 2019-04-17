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
      case "new-arrivals":
        parameter += "created-descending"
        mutation = "setNewest"
        break;
      case "most-popular":
        parameter += "best-selling"
        mutation = "setPopular"
        break;
      default:
        parameter += "manual"
        mutation = "setFeatured"
    }
    const action = await axios.get(`/collections/${state.collection}-json${parameter}`)
      .then(response => {
        const { data } = response
        const collectionJSON = data.split("<json-data>")[1].split("</json-data>")[0]
        commit(mutation, JSON.parse(collectionJSON))
      })
    dispatch("actionWrapper", { action })
  },
  setOtherCollections: async ({ state, commit, dispatch }) => {
    let parameter = "?sort_by="
    let parameters = []
    let mutations = []
    switch(state.sortBy) {
      case "new-arrivals":
        parameters.push(`${parameter}manual`, `${parameter}best-selling`)
        mutations.push('setFeatured', 'setPopular')
        break;
      case "most-popular":
        parameters.push(`${parameter}manual`, `${parameter}created-descending`)
        mutations.push('setFeatured', 'setNewest')
        break;
      default:
        parameters.push(`${parameter}created-descending`, `${parameter}best-selling`)
        mutations.push('setNewest', 'setPopular')
    }
    mutations.forEach(async(mutation, index) => {
      const action = await axios.get(`/collections/${state.collection}-json${parameters[index]}`)
        .then(response => {
          const { data } = response
          const collectionJSON = data.split("<json-data>")[1].split("</json-data>")[0]
          commit(mutation, JSON.parse(collectionJSON))
        })
      dispatch("actionWrapper", { action })
    })
  }
}