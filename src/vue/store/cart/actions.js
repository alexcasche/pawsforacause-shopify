import axios from "axios";
import qs from "qs";
import { axiosHeaders, formatCart, formatFloat, formatItem, formatProduct } from "@vue/helpers";

export default {
  initCart: async ({ commit }) => { 
    await axios.get("/cart.js")
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => console.log(error.message))
  },
  actionWrapper: async ({ state, commit, dispatch }, payload) => {
    if (state.isFetching) return
    const { action, loopAgain } = payload
    commit("toggleFetching");
    await dispatch(action);
    commit("toggleFetching");
    if(!loopAgain) commit("openCart");
  },
  addCart: async ({ commit, dispatch, state }, payload) => {
    if(!Array.isArray(payload)) payload = [payload]
    for (let i = 0; i < payload.length; i++) { 
      const item = payload[i];
      const loopAgain = i < payload.length - 1 ? true : false
      const action = await axios.post("/cart/add.js", qs.stringify(item), axiosHeaders)
        .then(response => commit("setCart", { ...state.shoppingCart,
          count: state.shoppingCart.count + item.quantity,
          total: (parseFloat(state.shoppingCart.total) + formatFloat(response.data.price) * item.quantity).toFixed(2),
          items: { ...state.shoppingCart.items, ...formatItem(response.data) }
        }))
        .catch(error => commit("setError", error.response.data.description))
      dispatch("actionWrapper", { action, loopAgain })
    }
  },
  changeCart: async ({ dispatch, commit, state }, payload) => {
    const action = await axios.post("/cart/change.js", qs.stringify(payload), axiosHeaders)
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => commit("setError", error.response.data.description))
    dispatch("actionWrapper", { action })
  },
  clearCart: async ({ commit, dispatch }) => {
    const action = await axios.post("/cart/clear.js")
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => commit("setError", error.response.data.description))
    dispatch("actionWrapper", { action });
  },
  updateCart: async ({ dispatch, commit, state }, payload) => {
    const action = await axios.post("/cart/update.js", qs.stringify(payload), axiosHeaders)
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => commit("setError", error.response.data.description))
    dispatch("actionWrapper", { action })
  },
  setProduct: async ({dispatch, commit, state}, payload) => {
    await axios.get(`/products/${payload}.js`)
      .then(response => commit("setProducts", formatProduct(response.data)))
      .catch(error => console.log(error.message))
  }
};
